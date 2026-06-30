import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, t } from '../context/ThemeContext';

/* ── Brand tokens ───────────────────────────────────────────────── */
const ORANGE      = '#FF8048';
const ORANGE_DARK = '#F26A2E';
const ORANGE_GRADIENT = 'linear-gradient(100deg,#FF8048 0%,#FF6A2E 55%,#EB2F5B 120%)';

/* ── Cycling headline word ──────────────────────────────────────── */
const CYCLE_WORDS = ['Reality.', 'Products.', 'Platforms.', 'Businesses.', 'Solutions.'];

/* ── Typewriter for the description tail ────────────────────────── */
const TYPEWRITER_PHRASES = ['web apps,', 'mobile ecosystems,', 'AI products.'];

function useCyclingTypewriter(phrases, speed = 55, pauseMs = 1600) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');
  const currentPhrase = phrases[phraseIdx];

  useEffect(() => {
    let timer;
    if (phase === 'typing') {
      if (displayed.length < currentPhrase.length) timer = setTimeout(() => setDisplayed(currentPhrase.slice(0, displayed.length + 1)), speed);
      else timer = setTimeout(() => setPhase('pause'), pauseMs);
    } else if (phase === 'pause') {
      timer = setTimeout(() => setPhase('erasing'), 200);
    } else {
      if (displayed.length > 0) timer = setTimeout(() => setDisplayed(d => d.slice(0, -1)), speed / 2);
      else { setPhraseIdx(i => (i + 1) % phrases.length); setPhase('typing'); }
    }
    return () => clearTimeout(timer);
  }, [displayed, phase, currentPhrase, speed, pauseMs, phrases]);

  return displayed;
}

/* ── Count-up hook (eased RAF approach) ─────────────────────────── */
function useCountUp(target, inView, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    setVal(0);
    const start = performance.now();
    const tick = (now) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setVal(Math.floor(eased * target));
      if (elapsed < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return val;
}

/* ── Per-card logo sets (real brand SVGs from /public/logos) ────── */
const L = (file) => `/logos/${file}`;

/* ── White chip holding a real brand logo ───────────────────────── */
function LogoChip({ file, alt, onOrange = false }) {
  return (
    <div title={alt} style={{
      width: 46, height: 46, borderRadius: 10, flexShrink: 0,
      background: '#fff',
      border: onOrange ? 'none' : '1px solid #ededed',
      boxShadow: onOrange ? '0 6px 16px rgba(0,0,0,0.10)' : '0 4px 12px rgba(0,0,0,0.05)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <img src={L(file)} alt={alt} style={{ width: 24, height: 24, objectFit: 'contain', display: 'block' }} loading="lazy" />
    </div>
  );
}

/* ── Reusable arrow-circle for card corners ─────────────────────── */
function ArrowCircle({ variant = 'outline', hovered = false, dark = false }) {
  const base = {
    outline: { border: `1px solid ${dark ? 'rgba(255,255,255,0.15)' : '#e3e3e3'}`, background: dark ? 'rgba(255,255,255,0.06)' : '#fff', color: dark ? '#999' : '#777' },
    ghost:   { border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.18)', color: '#fff' },
  }[variant] || {};

  let styles = base;
  if (hovered) {
    styles = variant === 'ghost'
      ? { border: 'none', background: '#fff', color: ORANGE_DARK, boxShadow: '0 6px 16px rgba(0,0,0,0.18)' }
      : { border: 'none', background: ORANGE, color: '#fff', boxShadow: '0 6px 16px rgba(255,128,72,0.5)' };
  }
  return (
    <div style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border-color 0.3s', ...styles }}>
      <i className="fa-solid fa-arrow-right" style={{ fontSize: 12, transition: 'transform 0.3s ease', transform: hovered ? 'rotate(-45deg)' : 'rotate(0deg)' }} />
    </div>
  );
}

/* ── Card 01: E-Commerce — FEATURED (orange, dark-agnostic) ─────── */
function Card01() {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.30, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%', width: '100%' }}
    >
      <Link
        to="/services/e-commerce"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          textDecoration: 'none',
          background: hovered
            ? 'linear-gradient(145deg,#FFA672 0%,#FF8B54 50%,#F47436 100%)'
            : 'linear-gradient(145deg,#FF9A5E 0%,#FF8048 50%,#F26A2E 100%)',
          borderRadius: 16, padding: '24px 26px', position: 'relative', overflow: 'hidden',
          cursor: 'pointer', height: '100%', width: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          boxShadow: hovered ? '0 26px 52px -18px rgba(242,106,46,0.7)' : '0 22px 46px -20px rgba(242,106,46,0.6)',
          transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
          transition: 'background 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease',
        }}>
        <div style={{ position: 'absolute', top: -70, right: -50, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.16)', filter: 'blur(36px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', color: '#fff', textTransform: 'uppercase', background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: 999 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />01 · Featured
            </span>
            <ArrowCircle variant="ghost" hovered={hovered} />
          </div>
          <h3 style={{ fontSize: 'clamp(22px,1.9vw,28px)', fontWeight: 700, color: '#fff', margin: '0 0 8px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>E-Commerce Platforms</h3>
          <span style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.9)', lineHeight: 1.55, maxWidth: 360, marginBottom: 16 }}>
            From Shopify to Adobe Commerce — high-conversion, scalable storefronts that ship outcomes.
          </span>
          <div style={{ display: 'flex', gap: 12 }}>
            <LogoChip file="shopify.svg" alt="Shopify" onOrange />
            <LogoChip file="woocommerce.svg" alt="WooCommerce" onOrange />
            <LogoChip file="bigcommerce.svg" alt="BigCommerce" onOrange />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 30, marginTop: 18, position: 'relative', zIndex: 1 }}>
          {[['120+', 'Stores Built'], ['Shopify', 'Partner'], ['Adobe', 'Commerce']].map(([v, l]) => (
            <div key={l}>
              <span style={{ display: 'block', fontSize: 21, fontWeight: 700, color: '#fff' }}>{v}</span>
              <span style={{ display: 'block', fontSize: 9.5, fontWeight: 600, color: 'rgba(255,255,255,0.75)', margin: '3px 0 0', letterSpacing: '0.09em', textTransform: 'uppercase' }}>{l}</span>
            </div>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Light/dark-aware card shell ────────────────────────────────── */
function LogoCard({ delay, tag, title, tech, logos, to = '/' }) {
  const [hovered, setHovered] = useState(false);
  const { dark } = useTheme();
  const C = t(dark);
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%', width: '100%' }}
    >
      <Link
        to={to}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          textDecoration: 'none',
          background: hovered
            ? (dark ? 'linear-gradient(150deg,#2a2420 0%,#241e18 100%)' : 'linear-gradient(150deg,#FFF6F0 0%,#FFEAD9 100%)')
            : C.bgCard,
          borderRadius: 16, padding: '18px 20px',
          border: `1px solid ${hovered ? 'rgba(255,128,72,0.45)' : C.border}`,
          cursor: 'pointer',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden',
          height: '100%', width: '100%',
          boxShadow: hovered
            ? '0 22px 44px -22px rgba(242,106,46,0.4)'
            : dark ? '0 4px 24px -12px rgba(0,0,0,0.5)' : '0 16px 36px -28px rgba(20,20,30,0.35)',
          transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
          transition: 'background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
        }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: '0.13em', color: hovered ? ORANGE_DARK : C.muted, textTransform: 'uppercase', transition: 'color 0.35s ease' }}>{tag}</span>
            <ArrowCircle variant="outline" hovered={hovered} dark={dark} />
          </div>
          <h4 style={{ fontSize: 20, fontWeight: 700, color: C.heading, margin: '0 0 2px', lineHeight: 1.15, letterSpacing: '-0.01em' }}>{title}</h4>
        </div>
        <div style={{ display: 'flex', gap: 10, margin: '14px 0' }}>
          {logos.map((lg) => <LogoChip key={lg.file} file={lg.file} alt={lg.alt} />)}
        </div>
        <span style={{ display: 'block', fontSize: 11, color: C.body, margin: 0, fontWeight: 500, letterSpacing: '0.01em' }}>{tech}</span>
      </Link>
    </motion.div>
  );
}

/* ── Main Hero ──────────────────────────────────────────────────── */
export default function Hero() {
  const { dark } = useTheme();
  const C = t(dark);

  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setWordIdx(i => (i + 1) % CYCLE_WORDS.length), 2800);
    return () => clearInterval(timer);
  }, []);

  const typedPhrase = useCyclingTypewriter(TYPEWRITER_PHRASES, 50, 1600);

  return (
    <>
      <section style={{
        position: 'relative', height: '100vh', minHeight: 640, width: '100%',
        background: C.bg, paddingTop: 70, overflow: 'hidden',
        display: 'flex', flexDirection: 'column', boxSizing: 'border-box',
        transition: 'background 0.3s',
      }}>

        {/* ── Animated background orbs ── */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', width: 720, height: 720, borderRadius: '50%',
            background: dark
              ? 'radial-gradient(circle at center, rgba(255,128,72,0.13) 0%, transparent 65%)'
              : 'radial-gradient(circle at center, rgba(255,128,72,0.10) 0%, transparent 65%)',
            top: '-15%', right: '-2%', animation: 'orb-float-1 22s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', width: 520, height: 520, borderRadius: '50%',
            background: dark
              ? 'radial-gradient(circle at center, rgba(235,47,91,0.10) 0%, transparent 65%)'
              : 'radial-gradient(circle at center, rgba(235,47,91,0.07) 0%, transparent 65%)',
            bottom: '2%', left: '12%', animation: 'orb-float-2 28s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', width: 380, height: 380, borderRadius: '50%',
            background: dark
              ? 'radial-gradient(circle at center, rgba(72,53,206,0.10) 0%, transparent 65%)'
              : 'radial-gradient(circle at center, rgba(72,53,206,0.055) 0%, transparent 65%)',
            top: '30%', left: '-6%', animation: 'orb-float-3 19s ease-in-out infinite',
          }} />
          {/* Subtle dot grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(${dark ? 'rgba(255,255,255,0.045)' : 'rgba(0,0,0,0.055)'} 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }} />
        </div>

        {/* Main grid */}
        <div className="hero-inner" style={{
          position: 'relative', zIndex: 1, maxWidth: 1500, margin: '0 auto', width: '100%',
          padding: '0 4%', boxSizing: 'border-box',
          display: 'grid', gridTemplateColumns: '1fr 1.22fr', gap: 48,
          alignItems: 'center', flex: 1,
        }}>

          {/* ── LEFT ── */}
          <div className="hero-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>

            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 30, height: 2, background: ORANGE, borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: C.muted, textTransform: 'uppercase' }}>
                Est. 2010 &nbsp;·&nbsp; 30+ Experts &nbsp;·&nbsp; USA · Singapore · India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <h1 style={{ fontSize: 'clamp(40px,4.9vw,76px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.035em', color: C.heading, margin: 0 }}>Turning</h1>
              <h2 style={{ fontSize: 'clamp(40px,4.9vw,76px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.035em', color: C.heading, margin: '2px 0 0' }}>Ideas into</h2>
              <div style={{ height: 'clamp(46px,5.3vw,84px)', overflow: 'hidden', marginTop: 2 }}>
                <AnimatePresence mode="wait">
                  <motion.h2 key={wordIdx}
                    initial={{ y: '105%' }} animate={{ y: '0%' }} exit={{ y: '-105%' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontSize: 'clamp(40px,4.9vw,76px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em',
                      margin: 0, paddingBottom: 4,
                      background: ORANGE_GRADIENT, WebkitBackgroundClip: 'text', backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent', color: 'transparent',
                    }}>{CYCLE_WORDS[wordIdx]}</motion.h2>
                </AnimatePresence>
                    initial={{ y: '105%' }} animate={{ y: '0%' }} exit={{ y: '-105%' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontSize: 'clamp(40px,4.9vw,76px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em',
                      margin: 0, paddingBottom: 4,
                      background: ORANGE_GRADIENT, WebkitBackgroundClip: 'text', backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent', color: 'transparent',
                    }}>{CYCLE_WORDS[wordIdx]}</motion.h1>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
              style={{ fontSize: 15.5, color: C.body, lineHeight: 1.65, maxWidth: 460, margin: '24px 0 0' }}>
              The software partner to{' '}
              <strong style={{ color: C.ink, fontWeight: 600 }}>500+ enterprises</strong>{' '}
              across <strong style={{ color: C.ink, fontWeight: 600 }}>17+ countries</strong>{' '}
              and every industry — since 2010.
              <br />
              Today we ship{' '}
              <span style={{ color: ORANGE_DARK, fontWeight: 600, whiteSpace: 'nowrap' }}>
                {typedPhrase}
                <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}
                  style={{ display: 'inline-block', width: 2, height: 15, background: ORANGE_DARK, marginLeft: 2, verticalAlign: 'middle' }} />
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 30 }}>
              <motion.a href="#contact" whileHover={{ scale: 1.03, boxShadow: '0 16px 32px -10px rgba(255,128,72,0.75)' }} whileTap={{ scale: 0.97 }}
                className="shimmer-btn"
                onMouseEnter={e => (e.currentTarget.style.background = ORANGE_DARK)}
                onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: ORANGE, color: '#fff', fontSize: 14.5, fontWeight: 600, padding: '13px 28px', borderRadius: 6, textDecoration: 'none', transition: 'background 0.2s', boxShadow: '0 12px 24px -10px rgba(255,128,72,0.65)' }}>
                Get a Free Quote <i className="fa-solid fa-arrow-right" style={{ fontSize: 13 }} />
              </motion.a>
              <motion.a href="#work" whileHover={{ x: 4 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14.5, fontWeight: 600, color: C.ink, textDecoration: 'none' }}>
                View Our Work <i className="fa-solid fa-arrow-right" style={{ fontSize: 13 }} />
              </motion.a>
            </motion.div>

            {/* Trust row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px', marginTop: 26 }}>
              {['Clutch Top Developer', 'Google Partner', 'AWS Partner'].map(b => (
                <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 600, color: C.muted, letterSpacing: '0.04em' }}>
                  <i className="fa-solid fa-circle-check" style={{ fontSize: 11, color: C.borderLight }} />{b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Bento grid ── */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-bento"
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1.1fr 1fr', gap: 13,
              height: 'min(72vh, 560px)', minHeight: 430, alignSelf: 'center',
              minWidth: 0, width: '100%',
            }}>
            <div style={{ gridColumn: '1 / 3', gridRow: '1', display: 'flex' }}><Card01 /></div>
            <div style={{ gridColumn: '3', gridRow: '1', display: 'flex' }}>
              <LogoCard delay={0.4} to="/services/mobile-app-development" tag="02 · Mobile" title="Mobile Apps" tech="iOS · Android · Flutter"
                logos={[{ file: 'apple.svg', alt: 'iOS' }, { file: 'android.svg', alt: 'Android' }, { file: 'flutter.svg', alt: 'Flutter' }]} />
            </div>
            <div style={{ gridColumn: '1', gridRow: '2', display: 'flex' }}>
              <LogoCard delay={0.48} to="/services/web-development" tag="03 · Web" title="Custom Web Dev" tech="Laravel · React · WordPress"
                logos={[{ file: 'laravel.svg', alt: 'Laravel' }, { file: 'react.svg', alt: 'React' }, { file: 'wordpress.svg', alt: 'WordPress' }]} />
            </div>
            <div style={{ gridColumn: '2', gridRow: '2', display: 'flex' }}>
              <LogoCard delay={0.56} to="/services/ui-ux-design" tag="04 · Design" title="UI/UX Design" tech="Figma · Sketch · Framer"
                logos={[{ file: 'figma.svg', alt: 'Figma' }, { file: 'sketch.svg', alt: 'Sketch' }, { file: 'framer.svg', alt: 'Framer' }]} />
            </div>
            <div style={{ gridColumn: '3', gridRow: '2', display: 'flex' }}>
              <LogoCard delay={0.64} to="/services/enterprise-software" tag="05 · Teams" title="Dedicated Teams" tech="Next.js · Node · TypeScript"
                logos={[{ file: 'nextjs.svg', alt: 'Next.js' }, { file: 'nodejs.svg', alt: 'Node.js' }, { file: 'typescript.svg', alt: 'TypeScript' }]} />
            </div>
          </motion.div>
        </div>

      </section>

    </>
  );
}

export { ImpactSection };

/* ── Impact: editorial headline + big-number list ───────────────── */
const IMPACT_STATS = [
  { raw: '500+', num: 500, suffix: '+', label: 'Projects Delivered',    note: 'Shipped to production',          accent: false },
  { raw: '15+',  num: 15,  suffix: '+', label: 'Years of Work',         note: 'Crafting software since 2010',   accent: true  },
  { raw: '30+',  num: 30,  suffix: '+', label: 'Experts Under One Roof', note: 'Developers, designers & PMs',   accent: false },
  { raw: '17',   num: 17,  suffix: '',  label: 'Countries Served',       note: 'Clients across the globe',      accent: true  },
  { raw: '18+',  num: 18,  suffix: '+', label: 'Industries',             note: 'Deep vertical expertise',       accent: false },
  { raw: '100%', num: 100, suffix: '%', label: 'Honest Pricing',         note: 'No hidden charges, ever',       accent: true  },
];

function AnimatedStat({ stat }) {
  const { dark } = useTheme();
  const C = t(dark);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const val = useCountUp(stat.num, inView);
  return (
    <span ref={ref} style={{ fontSize: 'clamp(44px,5.2vw,76px)', fontWeight: 800, color: C.heading, margin: 0, lineHeight: 0.92, letterSpacing: '-0.04em', display: 'block' }}>
      {val}{stat.suffix}
    </span>
  );
}

function ImpactSection() {
  const { dark } = useTheme();
  const C = t(dark);
  return (
    <section style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: 'clamp(64px,7vw,110px) clamp(24px,4vw,64px)', transition: 'background 0.3s' }}>
      <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(40px,6vw,90px)', alignItems: 'start' }}>

        {/* Left — editorial headline */}
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'sticky', top: 110 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.muted, margin: '0 0 22px' }}>— Impact</p>
          <h2 style={{ fontSize: 'clamp(40px,4.6vw,68px)', fontWeight: 800, color: C.heading, lineHeight: 1.02, letterSpacing: '-0.04em', margin: 0 }}>
            Built to deliver.
          </h2>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(40px,4.6vw,68px)', color: C.heading, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '2px 0 0' }}>
            Trusted to last.
          </h2>
          <p style={{ fontSize: 16, color: C.body, lineHeight: 1.7, maxWidth: 380, margin: '28px 0 0' }}>
            Since 2010 we've shipped <span style={{ color: ORANGE_DARK, fontWeight: 600 }}>500+ projects</span> for clients across 17 countries — on time, on budget, and built to scale.
          </p>
        </motion.div>

        {/* Right — big-number list with count-up */}
        <div>
          {IMPACT_STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: 'clamp(20px,2.4vw,30px) 0',
                borderTop: `1px solid ${i === 0 ? 'transparent' : s.accent ? 'rgba(242,106,46,0.55)' : C.border}`,
              }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
                <div>
                  <AnimatedStat stat={s} />
                  <p style={{ fontSize: 11, fontWeight: 600, color: C.muted, letterSpacing: '0.14em', textTransform: 'uppercase', margin: '14px 0 0' }}>{s.label}</p>
                </div>
                <p style={{ fontSize: 15, color: C.body, margin: 0, textAlign: 'right', maxWidth: 240 }}>{s.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
