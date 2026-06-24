import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero, { ImpactSection } from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Work from './components/Work';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Awards from './components/Awards';
import Contact from './components/Contact';
import GlobalPresence from './components/GlobalPresence';
import Footer from './components/Footer';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import WhatWeDo from './pages/WhatWeDo';
import IndustriesPage from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';

/* Thin gradient progress bar that tracks scroll depth */
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setPct(scrollHeight <= clientHeight ? 0 : (scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${pct}%`, transition: 'width 0.1s linear' }} />;
}

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
      <ClientLogos />
      <ImpactSection />
      <Services />
      <TechStack />
      <Process />
      <Work />
      <FAQ />
      <GlobalPresence />
      <Industries />
      <Testimonials />
      <Awards />
      <Contact />
    </>
  );
}

function AppInner() {
  const { dark } = useTheme();
  return (
    <BrowserRouter>
    <ScrollToHash />
    <ScrollProgress />
    <div style={{ background: dark ? '#111110' : '#F7F4EC', minHeight: '100vh', color: dark ? '#e8e4dc' : '#0f0f0f', transition: 'background 0.3s, color 0.3s' }}
      className="relative antialiased scroll-smooth selection:bg-[#FF8048] selection:text-white">
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
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
