import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { albums } from '../data/albums';
import './HomePage.css';

export default function HomePage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = gridRef.current?.querySelectorAll('.album-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home">
      <p className="home-subtitle">Our Portfolio</p>
      <div className="album-grid" ref={gridRef}>
        {albums.map((album) => (
          <Link to={`/album/${album.slug}`} key={album.slug} className="album-card">
            <div className="album-cover" style={{ backgroundImage: `url(${album.cover})` }}>
              <div className="album-overlay">
                <h2 className="album-name">{album.name}</h2>
                <span className="album-count">{album.photos.length} photos</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
