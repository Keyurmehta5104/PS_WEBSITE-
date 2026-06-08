import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Work from './components/Work';
import Industries from './components/Industries';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import GlobalPresence from './components/GlobalPresence';
import Footer from './components/Footer';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import WhatWeDo from './pages/WhatWeDo';
import IndustriesPage from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';

/* Scrolls to #hash targets after route/hash changes (e.g. /#services).
   Re-snaps for a short window because the home page mounts heavy sections
   that reflow after navigation and would otherwise cancel a smooth scroll. */
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto'; // bypass CSS smooth so snaps are instant
    let tries = 0;
    let timer;
    const step = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (Math.abs(top) > 4) window.scrollTo(0, window.scrollY + top);
      }
      if (tries++ < 24) {
        timer = setTimeout(step, 50);
      } else {
        html.style.scrollBehavior = prevBehavior; // restore
      }
    };
    timer = setTimeout(step, 50);
    return () => { clearTimeout(timer); html.style.scrollBehavior = prevBehavior; };
  }, [pathname, hash]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ClientLogos />
      <TechStack />
      <Process />
      <Work />
      <FAQ />
      <GlobalPresence />
      <Industries />
      <Awards />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <ScrollToHash />
    <div className="bg-[#F7F4EC] min-h-screen text-[#0f0f0f] relative antialiased scroll-smooth selection:bg-[#FF8048] selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<WhatWeDo />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}
