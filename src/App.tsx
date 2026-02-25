import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import RoyalGallery from './components/RoyalGallery';
import PerfectGallery from './components/PerfectGallery';
import './App.css';

type Tab = 'ivy-bride' | 'royal-mansion' | 'perfect-wedding';

export default function App() {
  const [tab, setTab] = useState<Tab>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#royal-favs=')) return 'royal-mansion';
    if (hash.startsWith('#perfect-favs=')) return 'perfect-wedding';
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
        <button className={tab === 'perfect-wedding' ? 'tab active' : 'tab'} onClick={() => setTab('perfect-wedding')}>
          Perfect Wedding
        </button>
      </nav>
      <main>
        {tab === 'ivy-bride' && <Gallery />}
        {tab === 'royal-mansion' && <RoyalGallery />}
        {tab === 'perfect-wedding' && <PerfectGallery />}
      </main>
      <Footer />
    </div>
  );
}
