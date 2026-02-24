import { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { albums } from '../data/albums';
import Lightbox from './Lightbox';
import './AlbumPage.css';

export default function AlbumPage() {
  const { slug } = useParams<{ slug: string }>();
  const album = albums.find((a) => a.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onPrev = useCallback(() => {
    if (album && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + album.photos.length) % album.photos.length);
    }
  }, [album, lightboxIndex]);

  const onNext = useCallback(() => {
    if (album && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % album.photos.length);
    }
  }, [album, lightboxIndex]);

  if (!album) {
    return (
      <div className="album-page">
        <Link to="/" className="back-link">&larr; Back</Link>
        <p>Album not found.</p>
      </div>
    );
  }

  return (
    <div className="album-page">
      <Link to="/" className="back-link">&larr; Back to Albums</Link>
      <h1 className="album-title">{album.name}</h1>
      <p className="album-photo-count">{album.photos.length} photos</p>
      <div className="gallery-grid">
        {album.photos.map((photo, i) => (
          <div key={photo} className="gallery-item" onClick={() => setLightboxIndex(i)}>
            <img src={photo} alt={`${album.name} ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          photos={album.photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </div>
  );
}
