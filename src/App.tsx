import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import RoyalGallery from './components/RoyalGallery';
import './App.css';

type Tab = 'ivy-bride' | 'royal-mansion';

export default function App() {
  const [tab, setTab] = useState<Tab>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#royal-favs=')) return 'royal-mansion';
    return 'ivy-bride';
  });

  return (
    <div className="app">
      <Header />
      <nav className="tab-bar">
        <button className={tab === 'ivy-bride' ? 'tab active' : 'tab'} onClick={() => setTab('ivy-bride')}>
          Ivy Bride
        </button>
        <button className={tab === 'royal-mansion' ? 'tab active' : 'tab'} onClick={() => setTab('royal-mansion')}>
          Royal Mansion
        </button>
      </nav>
      <main>
        {tab === 'ivy-bride' ? <Gallery /> : <RoyalGallery />}
      </main>
      <Footer />
    </div>
  );
}
