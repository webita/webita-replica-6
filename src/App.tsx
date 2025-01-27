import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import Home from './pages/Home';
    import WebitaSite from './pages/WebitaSite';
    import WebitaSocial from './pages/WebitaSocial';
    import WebitaBusiness from './pages/WebitaBusiness';
    import Contact from './pages/Contact';
    import Video from './pages/Video';
    import AICourse from './pages/AICourse';
    import SEOAnalysis from './pages/SEOAnalysis';
    import WebitaAI from './pages/WebitaAI';
    import WebitaApp from './pages/WebitaApp';
    import WebitaSEO from './pages/WebitaSEO';
    import PrivacyPolicy from './pages/PrivacyPolicy';

    function App() {
      return (
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/webita-site" element={<WebitaSite />} />
                <Route path="/webita-social" element={<WebitaSocial />} />
                <Route path="/webita-business" element={<WebitaBusiness />} />
                <Route path="/video" element={<Video />} />
                <Route path="/contatti" element={<Contact />} />
                <Route path="/corso-ai" element={<AICourse />} />
                <Route path="/analisi-seo" element={<SEOAnalysis />} />
                <Route path="/webita-ai" element={<WebitaAI />} />
                <Route path="/webita-app" element={<WebitaApp />} />
                <Route path="/webita-seo" element={<WebitaSEO />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      );
    }

    export default App;
