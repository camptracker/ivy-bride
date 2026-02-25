import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import RoyalGallery from './components/RoyalGallery';
import PerfectGallery from './components/PerfectGallery';
import VenueTab from './components/VenueTab';
import { denwellPhotos, denwellData } from './data/denwell';
import { mov88Photos, mov88Data } from './data/mov88';
import { sheratonPhotos, sheratonData } from './data/sheraton';
import './App.css';

type Tab = 'ivy-bride' | 'royal-mansion' | 'perfect-wedding' | 'denwell' | 'mov88' | 'sheraton';

export default function App() {
  const [tab, setTab] = useState<Tab>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#royal-favs=')) return 'royal-mansion';
    if (hash.startsWith('#perfect-favs=')) return 'perfect-wedding';
    if (hash.startsWith('#denwell-favs=')) return 'denwell';
    if (hash.startsWith('#mov88-favs=')) return 'mov88';
    if (hash.startsWith('#sheraton-favs=')) return 'sheraton';
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
        <span className="tab-separator">Venues</span>
        <button className={tab === 'denwell' ? 'tab active' : 'tab'} onClick={() => setTab('denwell')}>
          Denwell 典華
        </button>
        <button className={tab === 'mov88' ? 'tab active' : 'tab'} onClick={() => setTab('mov88')}>
          88 Mov 樂章
        </button>
        <button className={tab === 'sheraton' ? 'tab active' : 'tab'} onClick={() => setTab('sheraton')}>
          Sheraton 喜來登
        </button>
      </nav>
      <main>
        {tab === 'ivy-bride' && <Gallery />}
        {tab === 'royal-mansion' && <RoyalGallery />}
        {tab === 'perfect-wedding' && <PerfectGallery />}
        {tab === 'denwell' && <VenueTab photos={denwellPhotos} data={denwellData} storageKey="denwell-favorites" hashPrefix="denwell-favs" />}
        {tab === 'mov88' && <VenueTab photos={mov88Photos} data={mov88Data} storageKey="mov88-favorites" hashPrefix="mov88-favs" />}
        {tab === 'sheraton' && <VenueTab photos={sheratonPhotos} data={sheratonData} storageKey="sheraton-favorites" hashPrefix="sheraton-favs" />}
      </main>
      <Footer />
    </div>
  );
}
