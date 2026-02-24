import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AlbumPage from './components/AlbumPage';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/album/:slug" element={<AlbumPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
