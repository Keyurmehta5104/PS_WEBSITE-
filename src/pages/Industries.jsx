import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { INDUSTRIES } from '../data/industries';
import { useSEO } from '../useSEO';

/* ── Brand tokens ───────────────────────────────────────────────── */
const ORANGE = '#5B3FA0';
const ORANGE_DARK = '#4A3080';
const ORANGE_GRADIENT = 'linear-gradient(100deg,#5B3FA0 0%,#7C3AAD 55%,#EB2F5B 120%)';
const INK = '#272a33';
const BODY = '#4D4D4D';
const PAGE = '#F7F4EC';

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
});

const sectionLabel = {
  fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: ORANGE, margin: '0 0 14px',
};

/* ── Data ───────────────────────────────────────────────────────── */
const DEPTH = [
  { title: 'We\'ve solved it before', desc: 'Reusable patterns from real projects in your domain — we don\'t start from scratch.' },
  { title: 'Faster delivery', desc: 'Domain knowledge means fewer wrong turns and a quicker path to launch.' },
  { title: 'Compliance-aware', desc: 'We build with your industry\'s rules and security needs in mind from day one.' },
  { title: 'The right integrations', desc: 'We already know the tools, gateways, and APIs your sector relies on.' },
  { title: 'UX that fits', desc: 'Interfaces designed for how your real users actually work and think.' },
  { title: 'Built to scale', desc: 'Architecture that grows with your business — not against it.' },
];

const PROCESS = [
  { phase: 'Week 1', title: 'Discovery', desc: 'Research, scope, and a clear, costed plan.' },
  { phase: 'Week 1–2', title: 'Design', desc: 'Wireframes and UI your team signs off on.' },
  { phase: 'Week 2+', title: 'Build', desc: 'Agile sprints with a demo at every step.' },
  { phase: 'Ongoing', title: 'QA', desc: 'Automated and manual testing before each release.' },
  { phase: 'Launch', title: 'Ship & support', desc: 'Go live, then keep improving together.' },
];

const FAQS = [
  { q: 'Do you have experience in my industry?', a: 'Almost certainly. We\'ve shipped 500+ projects across 18+ industries since 2010 — from healthcare and logistics to e-commerce and education.' },
  { q: 'Can you reuse patterns from past projects?', a: 'Yes. We bring proven playbooks from similar work to move faster, while tailoring everything to your specific business.' },
  { q: 'How do you handle compliance and security?', a: 'We build with your sector\'s requirements in mind from the first sprint, and we\'re happy to sign an NDA on request.' },
  { q: 'How fast can you start?', a: 'Usually within days. We reply to every enquiry within 24 hours with honest rates and an upfront estimate.' },
  { q: 'What engagement models do you offer?', a: 'Dedicated team, fixed scope, staff augmentation, or hybrid/onsite — whatever fits your project and budget.' },
  { q: 'How do you price projects?', a: 'Transparently. Honest rates and upfront estimates, with no hidden charges and no fuss.' },
];

const HERO_STATS = [
  { num: '18+', label: 'Industries served' },
  { num: '500+', label: 'Projects delivered' },
  { num: '17', label: 'Countries' },
  { num: 'Since 2010', label: 'Domain experience' },
];

/* ── Section 1 · Hero ───────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ position: 'relative', background: '#ffffff', padding: '130px 6% 70px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -120, right: -80, width: 460, height: 460, borderRadius: '50%', background: 'rgba(91,63,160,0.12)', filter: 'blur(95px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
        <motion.p {...rise(0)} style={{ ...sectionLabel, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 26, height: 2, background: ORANGE, borderRadius: 2 }} /> Industries
        </motion.p>
        <motion.h1 {...rise(0.08)} style={{ fontSize: 'clamp(36px,5vw,72px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.035em', color: INK, margin: 0, maxWidth: 920 }}>
          Every industry,{' '}
          <span style={{ background: ORANGE_GRADIENT, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
            built to fit.
          </span>
        </motion.h1>
        <motion.p {...rise(0.16)} style={{ fontSize: 'clamp(15px,1.4vw,18px)', color: BODY, lineHeight: 1.7, maxWidth: 640, margin: '26px 0 0' }}>
          Fifteen years of building web and mobile products across 18+ industries — so we arrive with proven patterns, not a blank page. Whatever your vertical, we’ve probably shipped something close.
        </motion.p>
        <motion.div {...rise(0.24)} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 32 }}>
          <Link to="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: ORANGE, color: '#fff', fontSize: 15, fontWeight: 600, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 14px 28px -12px rgba(91,63,160,0.7)' }}
            onMouseEnter={e => (e.currentTarget.style.background = ORANGE_DARK)} onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}>
            Bring us your industry <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 13 }} />
          </Link>
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: INK, fontSize: 15, fontWeight: 600, padding: '14px 24px', borderRadius: 8, textDecoration: 'none', border: '1px solid #e2e2e2', background: '#fff' }}>
            What we do <i className="fa-solid fa-arrow-right" style={{ fontSize: 13 }} />
          </Link>
        </motion.div>
        <motion.div {...rise(0.32)} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 1, marginTop: 48, background: '#ececec', border: '1px solid #ececec', borderRadius: 16, overflow: 'hidden' }}>
          {HERO_STATS.map(s => (
            <div key={s.label} style={{ background: '#fff', padding: '22px 24px' }}>
              <p style={{ fontSize: 'clamp(20px,2.2vw,28px)', fontWeight: 800, color: INK, margin: 0, letterSpacing: '-0.02em' }}>{s.num}</p>
              <p style={{ fontSize: 12.5, color: '#9a9a9a', margin: '4px 0 0' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Section 2 · Industries grid ────────────────────────────────── */
function IndustryCard({ ind, i }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div {...rise((i % 4) * 0.05)}>
      <Link to={`/industries/${ind.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex', flexDirection: 'column', textDecoration: 'none', height: '100%',
          background: '#fff', border: `1px solid ${hovered ? 'rgba(91,63,160,0.45)' : '#ececec'}`, borderRadius: 16,
          padding: 'clamp(26px,2.2vw,32px) clamp(22px,1.8vw,28px)',
          boxShadow: hovered ? '0 26px 52px -28px rgba(74,48,128,0.45)' : '0 14px 32px -28px rgba(20,20,30,0.3)',
          transform: hovered ? 'translateY(-5px)' : 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
        }}>
        <h3 style={{ fontSize: 'clamp(20px,1.6vw,23px)', fontWeight: 700, color: INK, margin: '0 0 12px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>{ind.name}</h3>
        <p style={{ fontSize: 14.5, color: BODY, lineHeight: 1.6, margin: '0 0 18px', flexGrow: 1 }}>{ind.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
          {(ind.solutions || []).map(t => (
            <span key={t} style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', fontSize: 11, fontWeight: 600, color: '#8a8a8a', background: '#fff', border: '1px solid #e5e5e5', padding: '5px 11px', borderRadius: 7 }}>{t}</span>
          ))}
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: ORANGE }}>
          Explore <i className="fa-solid fa-arrow-right" style={{ fontSize: 12, transform: hovered ? 'translateX(3px)' : 'none', transition: 'transform 0.3s' }} />
        </span>
      </Link>
    </motion.div>
  );
}

function Grid() {
  return (
    <section style={{ background: '#ffffff', padding: '90px 6%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...rise(0)} style={{ maxWidth: 640, marginBottom: 46 }}>
          <p style={sectionLabel}>Where we work</p>
          <h2 style={{ fontSize: 'clamp(28px,3.2vw,44px)', fontWeight: 800, color: INK, lineHeight: 1.12, letterSpacing: '-0.025em', margin: 0 }}>
            Deep expertise, every vertical.
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
          {INDUSTRIES.map((ind, i) => <IndustryCard key={ind.name} ind={ind} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Section 3 · Why vertical depth ─────────────────────────────── */
function Depth() {
  return (
    <section style={{ background: '#ffffff', padding: '90px 6%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...rise(0)} style={{ maxWidth: 660, marginBottom: 46 }}>
          <p style={sectionLabel}>Why it matters</p>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, color: INK, lineHeight: 1.14, letterSpacing: '-0.025em', margin: 0 }}>
            Generic builds break. Industry-tuned builds ship.
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {DEPTH.map((d, i) => (
            <motion.div key={d.title} {...rise((i % 3) * 0.08)}
              style={{ background: PAGE, border: '1px solid #ececec', borderRadius: 18, padding: '28px 26px' }}>
              <span style={{ fontSize: 26, fontWeight: 800, color: 'rgba(91,63,160,0.3)', letterSpacing: '-0.03em' }}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: INK, margin: '10px 0 8px', letterSpacing: '-0.01em' }}>{d.title}</h3>
              <p style={{ fontSize: 14.5, color: BODY, lineHeight: 1.65, margin: 0 }}>{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 4 · Process timeline ───────────────────────────────── */
function Process() {
  return (
    <section style={{ background: '#ffffff', padding: '90px 6%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...rise(0)} style={{ maxWidth: 640, marginBottom: 46 }}>
          <p style={sectionLabel}>How we start</p>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, color: INK, lineHeight: 1.14, letterSpacing: '-0.025em', margin: 0 }}>
            From idea to working build, fast.
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 18 }}>
          {PROCESS.map((p, i) => (
            <motion.div key={p.title} {...rise(i * 0.07)}
              style={{ background: '#fff', border: '1px solid #ececec', borderRadius: 16, padding: '26px 22px', position: 'relative' }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: ORANGE_GRADIENT, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, marginBottom: 16, boxShadow: '0 10px 20px -10px rgba(74,48,128,0.6)' }}>{i + 1}</div>
              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ORANGE }}>{p.phase}</span>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: INK, margin: '6px 0 8px' }}>{p.title}</h3>
              <p style={{ fontSize: 13.5, color: BODY, lineHeight: 1.55, margin: 0 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 5 · FAQ accordion ──────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: '#ffffff', padding: '90px 6%' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <motion.div {...rise(0)} style={{ marginBottom: 40, textAlign: 'center' }}>
          <p style={sectionLabel}>FAQs</p>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, color: INK, lineHeight: 1.14, letterSpacing: '-0.025em', margin: 0 }}>
            Questions, answered.
          </h2>
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} {...rise(i * 0.04)}
                style={{ background: PAGE, border: `1px solid ${isOpen ? 'rgba(91,63,160,0.35)' : '#ececec'}`, borderRadius: 14, overflow: 'hidden', transition: 'border-color 0.3s' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: INK }}>{f.q}</span>
                  <i className="fa-solid fa-chevron-down" style={{ fontSize: 13, color: ORANGE_DARK, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: 'hidden' }}>
                      <p style={{ fontSize: 14.5, color: BODY, lineHeight: 1.7, margin: 0, padding: '0 24px 22px' }}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Section 6 · CTA ────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ background: '#ffffff', padding: '90px 6% 100px' }}>
      <motion.div {...rise(0)} style={{
        maxWidth: 980, margin: '0 auto', borderRadius: 28, padding: 'clamp(40px,5vw,72px)',
        background: 'linear-gradient(145deg,#1f2127 0%,#272a33 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -100, right: -60, width: 360, height: 360, borderRadius: '50%', background: 'rgba(91,63,160,0.25)', filter: 'blur(80px)' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(28px,3.6vw,46px)', fontWeight: 800, color: '#fff', lineHeight: 1.12, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            Bring us your industry.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 540, margin: '0 auto 30px' }}>
            Tell us about your business and what you want to build. We’ll reply with honest rates and an upfront estimate — no hidden charges, no fuss.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 32 }}>
            <Link to="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: ORANGE, color: '#fff', fontSize: 15, fontWeight: 600, padding: '15px 30px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 14px 30px -12px rgba(91,63,160,0.8)' }}
              onMouseEnter={e => (e.currentTarget.style.background = ORANGE_DARK)} onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}>
              Get a free quote <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 13 }} />
            </Link>
            <a href="tel:+14135294901" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: '#fff', fontSize: 15, fontWeight: 600, padding: '15px 28px', borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
              <i className="fa-solid fa-phone" style={{ fontSize: 12, color: ORANGE }} /> +1 (413) 529-4901
            </a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px', justifyContent: 'center' }}>
            {['Response within 24 hrs', 'NDA on request', 'Free project estimate'].map(t => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                <i className="fa-solid fa-circle-check" style={{ fontSize: 13, color: ORANGE }} />{t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function Industries() {
  useSEO({
    title: 'Industries We Serve | Professional Soft-Tech',
    description: 'We build software for education, healthcare, real estate, e-commerce, HR, logistics, travel, automobile, startups and more — 18+ industries since 2010.',
    path: '/industries',
  });
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main style={{ fontFamily: 'inherit' }}>
      <Hero />
      <Grid />
      <Depth />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}
