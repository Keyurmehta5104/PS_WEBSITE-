import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { INDUSTRIES, getIndustry } from '../data/industries';
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

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = getIndustry(slug);

  useSEO({
    title: industry ? `${industry.name} Software Development | Professional Soft-Tech` : 'Industry | Professional Soft-Tech',
    description: industry?.intro || `Custom software solutions for the ${industry?.name || ''} industry by Professional Soft-Tech.`,
    path: `/industries/${slug}`,
  });

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!industry) return <Navigate to="/industries" replace />;

  const others = INDUSTRIES.filter((i) => i.slug !== slug).slice(0, 4);

  return (
    <main style={{ fontFamily: 'inherit' }}>
      {/* ── Hero ── */}
      <section style={{ position: 'relative', background: '#ffffff', padding: '130px 6% 70px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, right: -80, width: 420, height: 420, borderRadius: '50%', background: 'rgba(91,63,160,0.12)', filter: 'blur(90px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <motion.div {...rise(0)} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9a9a9a', marginBottom: 26 }}>
            <Link to="/" style={{ color: '#9a9a9a', textDecoration: 'none' }}>Home</Link>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 9 }} />
            <Link to="/industries" style={{ color: '#9a9a9a', textDecoration: 'none' }}>Industries</Link>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 9 }} />
            <span style={{ color: ORANGE_DARK, fontWeight: 600 }}>{industry.name}</span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,0.7fr)', gap: 48, alignItems: 'center' }} className="about-origin-grid">
            <div>
              <motion.div {...rise(0.05)} style={{ width: 60, height: 60, borderRadius: 16, background: ORANGE_GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 14px 30px -12px rgba(74,48,128,0.7)' }}>
                <i className={`fa-solid ${industry.icon}`} style={{ color: '#fff', fontSize: 24 }} />
              </motion.div>
              <motion.h1 {...rise(0.1)} style={{ fontSize: 'clamp(34px,4.6vw,62px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em', color: INK, margin: 0 }}>
                {industry.name}
              </motion.h1>
              <motion.p {...rise(0.16)} style={{ fontSize: 'clamp(16px,1.6vw,20px)', fontWeight: 600, color: ORANGE_DARK, margin: '16px 0 0' }}>
                {industry.tagline}
              </motion.p>
              <motion.p {...rise(0.22)} style={{ fontSize: 16, color: BODY, lineHeight: 1.7, maxWidth: 560, margin: '18px 0 0' }}>
                {industry.intro}
              </motion.p>
              <motion.div {...rise(0.28)} style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
                <Link to="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: ORANGE, color: '#fff', fontSize: 15, fontWeight: 600, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 14px 28px -12px rgba(91,63,160,0.7)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = ORANGE_DARK)}
                  onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}>
                  Get a free quote <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 13 }} />
                </Link>
                <Link to="/industries" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: INK, fontSize: 15, fontWeight: 600, padding: '14px 24px', borderRadius: 8, textDecoration: 'none', border: '1px solid #e2e2e2', background: '#fff' }}>
                  All industries
                </Link>
              </motion.div>
            </div>

            {/* Stat card */}
            <motion.div {...rise(0.18)} style={{ background: '#fff', border: '1px solid #ececec', borderRadius: 22, padding: '38px 32px', boxShadow: '0 24px 50px -30px rgba(20,20,30,0.4)', justifySelf: 'stretch' }}>
              <p style={{ fontSize: 'clamp(30px,3.4vw,46px)', fontWeight: 800, color: INK, margin: 0, letterSpacing: '-0.03em', lineHeight: 1 }}>{industry.stat.num}</p>
              <p style={{ fontSize: 14, color: BODY, lineHeight: 1.55, margin: '14px 0 0' }}>{industry.stat.label}</p>
              <div style={{ height: 1, background: '#eee', margin: '24px 0' }} />
              <p style={{ ...sectionLabel, margin: '0 0 12px' }}>Solutions we deliver</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {industry.solutions.map(t => (
                  <span key={t} style={{ fontSize: 12, fontWeight: 600, color: ORANGE_DARK, background: 'rgba(91,63,160,0.1)', padding: '6px 12px', borderRadius: 999 }}>{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What we build ── */}
      <section style={{ background: '#ffffff', padding: '90px 6%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div {...rise(0)} style={{ maxWidth: 640, marginBottom: 46 }}>
            <p style={sectionLabel}>What we build</p>
            <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, color: INK, lineHeight: 1.14, letterSpacing: '-0.025em', margin: 0 }}>
              Solutions tailored for {industry.name.toLowerCase()}.
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {industry.features.map((f, i) => (
              <motion.div key={f.title} {...rise((i % 2) * 0.08)}
                style={{ background: PAGE, border: '1px solid #ececec', borderRadius: 18, padding: '28px 26px' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(91,63,160,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <i className={`fa-solid ${f.icon}`} style={{ color: ORANGE_DARK, fontSize: 18 }} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: INK, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ fontSize: 14.5, color: BODY, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other industries ── */}
      <section style={{ background: '#ffffff', padding: '80px 6%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div {...rise(0)} style={{ marginBottom: 34 }}>
            <p style={sectionLabel}>Explore more</p>
            <h2 style={{ fontSize: 'clamp(24px,2.6vw,34px)', fontWeight: 800, color: INK, letterSpacing: '-0.025em', margin: 0 }}>
              Other industries we serve.
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 16 }}>
            {others.map((s, i) => (
              <motion.div key={s.slug} {...rise(i * 0.06)}>
                <Link to={`/industries/${s.slug}`}
                  style={{ display: 'flex', flexDirection: 'column', gap: 12, background: '#fff', border: '1px solid #ececec', borderRadius: 16, padding: '24px 22px', textDecoration: 'none', height: '100%' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(91,63,160,0.4)'; e.currentTarget.style.boxShadow = '0 16px 34px -22px rgba(74,48,128,0.45)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#ececec'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: 'rgba(91,63,160,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${s.icon}`} style={{ color: ORANGE_DARK, fontSize: 17 }} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, margin: 0 }}>{s.name}</h3>
                  <p style={{ fontSize: 13, color: BODY, lineHeight: 1.55, margin: 0, flexGrow: 1 }}>{s.short}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: ORANGE_DARK }}>
                    Explore <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#ffffff', padding: '90px 6%' }}>
        <motion.div {...rise(0)} style={{
          maxWidth: 980, margin: '0 auto', borderRadius: 28, padding: 'clamp(40px,5vw,68px)',
          background: 'linear-gradient(145deg,#1f2127 0%,#272a33 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -100, right: -60, width: 360, height: 360, borderRadius: '50%', background: 'rgba(91,63,160,0.25)', filter: 'blur(80px)' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontSize: 'clamp(26px,3.4vw,44px)', fontWeight: 800, color: '#fff', lineHeight: 1.14, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
              Building for {industry.name.toLowerCase()}? Let's talk.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 30px' }}>
              Tell us about your project — we'll reply with honest rates and an upfront estimate. No hidden charges, no fuss.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
              <Link to="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: ORANGE, color: '#fff', fontSize: 15, fontWeight: 600, padding: '15px 30px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 14px 30px -12px rgba(91,63,160,0.8)' }}
                onMouseEnter={e => (e.currentTarget.style.background = ORANGE_DARK)}
                onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}>
                Get a free quote <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 13 }} />
              </Link>
              <a href="tel:+14135294901" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: '#fff', fontSize: 15, fontWeight: 600, padding: '15px 28px', borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
                <i className="fa-solid fa-phone" style={{ fontSize: 12, color: ORANGE }} /> +1 (413) 529-4901
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}