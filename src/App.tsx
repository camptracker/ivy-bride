import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
