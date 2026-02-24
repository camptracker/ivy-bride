import { useEffect, useCallback } from 'react';
import './Lightbox.css';

interface LightboxProps {
  photos: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      {photos.length > 1 && (
        <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>&#8249;</button>
      )}
      <img
        src={photos[index]}
        alt=""
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
      {photos.length > 1 && (
        <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>&#8250;</button>
      )}
      <div className="lightbox-counter">{index + 1} / {photos.length}</div>
    </div>
  );
}
