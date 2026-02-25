import { useState, useEffect, useCallback, useRef } from 'react';
import { albums } from '../data/albums';
import Lightbox from './Lightbox';
import PricingSection, { ivyBridePricing } from './PricingSection';
import './Gallery.css';

function encodeFavs(indices: number[]): string {
  return btoa(JSON.stringify(indices));
}

function decodeFavs(hash: string): number[] {
  try { return JSON.parse(atob(hash)); } catch { return []; }
}

interface PhotoItem {
  src: string;
  albumName: string;
}

const allPhotos: PhotoItem[] = albums.flatMap(a =>
  a.photos.map(p => ({ src: p, albumName: a.name }))
);

function useFavorites() {
  const [favs, setFavs] = useState<Set<string>>(() => {
    // Check URL hash for shared favorites first
    const hash = window.location.hash;
    if (hash.startsWith('#favs=')) {
      const indices = decodeFavs(hash.slice(6));
      if (indices.length > 0) {
        const shared = new Set(indices.filter(i => i < allPhotos.length).map(i => allPhotos[i].src));
        // Save to localStorage too
        localStorage.setItem('ivy-bride-favorites', JSON.stringify([...shared]));
        return shared;
      }
    }
    try {
      const stored = localStorage.getItem('ivy-bride-favorites');
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch { return new Set(); }
  });

  const toggle = useCallback((src: string) => {
    setFavs(prev => {
      const next = new Set(prev);
      next.has(src) ? next.delete(src) : next.add(src);
      localStorage.setItem('ivy-bride-favorites', JSON.stringify([...next]));
      return next;
    });
  }, []);

  const shareUrl = useCallback(() => {
    const indices = allPhotos.map((p, i) => favs.has(p.src) ? i : -1).filter(i => i >= 0);
    if (indices.length === 0) return null;
    const base = window.location.origin + window.location.pathname;
    return `${base}#favs=${encodeFavs(indices)}`;
  }, [favs]);

  return { favs, toggle, shareUrl };
}

function PhotoCard({ photo, isFav, onToggleFav, onClick }: {
  photo: PhotoItem; isFav: boolean; onToggleFav: () => void; onClick: () => void;
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
        <img src={photo.src} alt={photo.albumName} loading="lazy" />
        <div className="photo-overlay">{photo.albumName}</div>
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

export default function Gallery() {
  const { favs, toggle, shareUrl } = useFavorites();
  const [filter, setFilter] = useState<string>(() => {
    return window.location.hash.startsWith('#favs=') ? 'favorites' : 'all';
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const filtered = filter === 'all' ? allPhotos
    : filter === 'favorites' ? allPhotos.filter(p => favs.has(p.src))
    : allPhotos.filter(p => p.albumName === filter);

  const albumNames = albums.map(a => a.name);

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
        <button className="pricing-scroll-btn" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>📋 Pricing</button>
        {albumNames.map(name => (
          <button key={name} className={filter === name ? 'active' : ''} onClick={() => setFilter(name)}>{name}</button>
        ))}
      </div>

      <div className="masonry">
        {filtered.map((photo, i) => (
          <PhotoCard
            key={photo.src}
            photo={photo}
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

      <div id="pricing"><PricingSection data={ivyBridePricing} /></div>
    </div>
  );
}
