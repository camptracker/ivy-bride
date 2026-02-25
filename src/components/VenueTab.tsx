import { useState, useEffect, useCallback, useRef } from 'react';
import Lightbox from './Lightbox';
import './Gallery.css';
import './VenueTab.css';

interface VenuePhoto {
  src: string;
}

interface Package {
  name: string;
  priceTWD: string;
  priceUSD: string;
  features: string[];
  note?: string;
}

interface VenueRoom {
  name: string;
  capacity: string;
}

interface MenuCategory {
  name: string;
  chinese: string;
  items: string[];
}

interface VenueLocaleData {
  name: string;
  chineseName: string;
  website: string;
  location: string;
  phone: string;
  hours?: string;
  description: string;
  packages: Package[];
  venues?: VenueRoom[];
  menu?: {
    title: string;
    categories: MenuCategory[];
    signature: string[];
  };
  excludedDates?: string;
  footnote?: string;
}

function encodeFavs(indices: number[]): string {
  return btoa(JSON.stringify(indices));
}

function decodeFavs(hash: string): number[] {
  try { return JSON.parse(atob(hash)); } catch { return []; }
}

function PhotoCard({ src, alt, isFav, onToggleFav, onClick }: {
  src: string; alt: string; isFav: boolean; onToggleFav: () => void; onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`photo-card ${visible ? 'visible' : ''}`}>
      <div className="photo-wrapper" onClick={onClick}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
      <button
        className={`fav-btn ${isFav ? 'fav-active' : ''}`}
        onClick={(e) => { e.stopPropagation(); onToggleFav(); }}
        aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFav ? '♥' : '♡'}
      </button>
    </div>
  );
}

interface VenueTabProps {
  photos: VenuePhoto[];
  data: { en: VenueLocaleData; zh: VenueLocaleData };
  storageKey: string;
  hashPrefix: string;
}

export default function VenueTab({ photos, data, storageKey, hashPrefix }: VenueTabProps) {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const d = data[lang];

  const [favs, setFavs] = useState<Set<string>>(() => {
    const hash = window.location.hash;
    const prefix = `#${hashPrefix}=`;
    if (hash.startsWith(prefix)) {
      const indices = decodeFavs(hash.slice(prefix.length));
      if (indices.length > 0) {
        const shared = new Set(indices.filter(i => i < photos.length).map(i => photos[i].src));
        localStorage.setItem(storageKey, JSON.stringify([...shared]));
        return shared;
      }
    }
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch { return new Set(); }
  });

  const toggle = useCallback((src: string) => {
    setFavs(prev => {
      const next = new Set(prev);
      next.has(src) ? next.delete(src) : next.add(src);
      localStorage.setItem(storageKey, JSON.stringify([...next]));
      return next;
    });
  }, [storageKey]);

  const shareUrl = useCallback(() => {
    const indices = photos.map((p, i) => favs.has(p.src) ? i : -1).filter(i => i >= 0);
    if (indices.length === 0) return null;
    const base = window.location.origin + window.location.pathname;
    return `${base}#${hashPrefix}=${encodeFavs(indices)}`;
  }, [favs, photos, hashPrefix]);

  const [filter, setFilter] = useState<string>(() => {
    return window.location.hash.startsWith(`#${hashPrefix}=`) ? 'favorites' : 'all';
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const filtered = filter === 'favorites'
    ? photos.filter(p => favs.has(p.src))
    : photos;

  return (
    <div className="gallery venue-tab">
      {/* Language Toggle */}
      <div className="lang-toggle">
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>English</button>
        <button className={lang === 'zh' ? 'active' : ''} onClick={() => setLang('zh')}>中文</button>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <div className="pricing-header">
          <h2>{d.name} {lang === 'en' && d.chineseName !== d.name ? d.chineseName : ''}</h2>
          <p className="pricing-desc">{d.description}</p>
          <div className="pricing-info">
            <span>📍 {d.location}</span>
            <span>📞 {d.phone}</span>
            {d.hours && <span>🕐 {d.hours}</span>}
            <a href={d.website} target="_blank" rel="noopener noreferrer">🌐 {lang === 'en' ? 'Official Website' : '官方網站'}</a>
          </div>
        </div>

        <div className="pricing-grid">
          {d.packages.map((pkg, i) => (
            <div key={i} className={`pricing-card ${pkg.note ? 'featured' : ''}`}>
              {pkg.note && <div className="pricing-badge">{pkg.note}</div>}
              <h3>{pkg.name}</h3>
              <div className="pricing-amount">
                <div className="price-twd">{pkg.priceTWD}</div>
                <div className="price-usd">{pkg.priceUSD}</div>
              </div>
              <ul>
                {pkg.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {d.footnote && <p className="pricing-footnote">⚠️ {d.footnote}</p>}

        <div className="exchange-note">
          <small>Exchange rate: 1 TWD ≈ $0.031 USD (approximate, may vary)</small>
        </div>
      </div>

      {/* Venue Info */}
      {d.venues && d.venues.length > 0 && (
        <div className="venue-info-section">
          <h3>🏛️ {lang === 'en' ? 'Venue Rooms' : '場地空間'}</h3>
          <div className="venue-rooms">
            {d.venues.map((v, i) => (
              <div key={i} className="venue-room-card">
                <strong>{v.name}</strong>
                <span>{v.capacity}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menu Highlights */}
      {d.menu && (
        <div className="venue-menu-section">
          <h3>🍽️ {d.menu.title}</h3>
          {d.menu.categories.length > 0 && (
            <div className="menu-categories">
              {d.menu.categories.map((cat, i) => (
                <div key={i} className="menu-cat-card">
                  <strong>{cat.name}</strong>
                  {lang === 'en' && cat.chinese && <span className="menu-chinese">{cat.chinese}</span>}
                  <ul>{cat.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          )}
          {d.menu.signature.length > 0 && (
            <div className="signature-dishes">
              <h4>{lang === 'en' ? 'Signature Dishes' : '招牌菜'}</h4>
              <ul>
                {d.menu.signature.map((dish, i) => (
                  <li key={i}>{dish}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Photo Gallery */}
      <div className="filter-bar">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
          {lang === 'en' ? 'All Photos' : '所有照片'}
        </button>
        <button className={filter === 'favorites' ? 'active' : ''} onClick={() => setFilter('favorites')}>
          ♥ {lang === 'en' ? 'Favorites' : '收藏'} ({favs.size})
        </button>
        {favs.size > 0 && (
          <button className="share-btn" onClick={() => {
            const url = shareUrl();
            if (url) {
              navigator.clipboard.writeText(url).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              });
            }
          }}>{copied ? '✓ Copied!' : '🔗 Share Favorites'}</button>
        )}
      </div>

      <div className="masonry">
        {filtered.map((photo, i) => (
          <PhotoCard
            key={photo.src}
            src={photo.src}
            alt={d.name}
            isFav={favs.has(photo.src)}
            onToggleFav={() => toggle(photo.src)}
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="empty-msg">{lang === 'en' ? 'No photos to show.' : '沒有照片可顯示。'}</p>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={filtered.map(p => p.src)}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filtered.length)}
        />
      )}
    </div>
  );
}
