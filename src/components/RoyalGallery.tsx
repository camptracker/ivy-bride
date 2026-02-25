import { useState, useEffect, useCallback, useRef } from 'react';
import { royalPhotos } from '../data/royalMansion';
import Lightbox from './Lightbox';
import PricingSection, { royalMansionPricing } from './PricingSection';
import './Gallery.css';

function encodeFavs(indices: number[]): string {
  return btoa(JSON.stringify(indices));
}

function decodeFavs(hash: string): number[] {
  try { return JSON.parse(atob(hash)); } catch { return []; }
}

function useFavorites() {
  const [favs, setFavs] = useState<Set<string>>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#royal-favs=')) {
      const indices = decodeFavs(hash.slice(12));
      if (indices.length > 0) {
        const shared = new Set(indices.filter(i => i < royalPhotos.length).map(i => royalPhotos[i].src));
        localStorage.setItem('royal-mansion-favorites', JSON.stringify([...shared]));
        return shared;
      }
    }
    try {
      const stored = localStorage.getItem('royal-mansion-favorites');
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch { return new Set(); }
  });

  const toggle = useCallback((src: string) => {
    setFavs(prev => {
      const next = new Set(prev);
      next.has(src) ? next.delete(src) : next.add(src);
      localStorage.setItem('royal-mansion-favorites', JSON.stringify([...next]));
      return next;
    });
  }, []);

  const shareUrl = useCallback(() => {
    const indices = royalPhotos.map((p, i) => favs.has(p.src) ? i : -1).filter(i => i >= 0);
    if (indices.length === 0) return null;
    const base = window.location.origin + window.location.pathname;
    return `${base}#royal-favs=${encodeFavs(indices)}`;
  }, [favs]);

  return { favs, toggle, shareUrl };
}

function PhotoCard({ src, isFav, onToggleFav, onClick }: {
  src: string; isFav: boolean; onToggleFav: () => void; onClick: () => void;
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
        <img src={src} alt="Royal Mansion" loading="lazy" />
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

export default function RoyalGallery() {
  const { favs, toggle, shareUrl } = useFavorites();
  const [filter, setFilter] = useState<string>(() => {
    return window.location.hash.startsWith('#royal-favs=') ? 'favorites' : 'all';
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const filtered = filter === 'favorites'
    ? royalPhotos.filter(p => favs.has(p.src))
    : royalPhotos;

  return (
    <div className="gallery">
      <div className="filter-bar">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Photos</button>
        <button className={filter === 'favorites' ? 'active' : ''} onClick={() => setFilter('favorites')}>♥ Favorites ({favs.size})</button>
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
            isFav={favs.has(photo.src)}
            onToggleFav={() => toggle(photo.src)}
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="empty-msg">No photos to show.</p>
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

      <PricingSection data={royalMansionPricing} />
    </div>
  );
}
