import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SERVICES } from '../data/services';
import { useTheme, t } from '../context/ThemeContext';

const ORANGE = '#FF8048';

/* ── Single service card — icon-less, editorial style ───────────── */
function ServiceCard({ svc, i }) {
  const [h, setH] = useState(false);
  const { dark } = useTheme();
  const C = t(dark);
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: (i % 4) * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%' }}
    >
      <Link
        to={`/services/${svc.slug}`}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none',
          background: h
            ? (dark ? 'linear-gradient(160deg, #242220 0%, #1e1b18 100%)' : 'linear-gradient(160deg, #FFFCFA 0%, #FFF6F0 100%)')
            : C.bgCard,
          borderRadius: 16,
          border: `1px solid ${h ? 'rgba(255,128,72,0.4)' : C.border}`,
          boxShadow: h
            ? '0 28px 56px -28px rgba(242,106,46,0.5), 0 0 0 1.5px rgba(255,128,72,0.25)'
            : dark ? '0 4px 24px -12px rgba(0,0,0,0.4)' : '0 14px 32px -28px rgba(20,20,30,0.3)',
          padding: 'clamp(26px,2.4vw,34px) clamp(22px,2vw,30px)', minHeight: 300,
          transform: h ? 'translateY(-6px)' : 'none',
          transition: 'border-color .3s, box-shadow .3s, transform .3s, background .3s',
        }}
      >
        <h3 style={{ fontSize: 'clamp(20px,1.6vw,23px)', fontWeight: 700, color: C.ink, margin: '0 0 14px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
          {svc.name}
        </h3>
        <p style={{ fontSize: 15, color: C.body, lineHeight: 1.6, margin: '0 0 22px', flexGrow: 1 }}>
          {svc.short}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {svc.tech.map(tech => (
            <span key={tech} style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
              fontSize: 11, fontWeight: 600, color: C.muted,
              background: C.bgCardSubtle, border: `1px solid ${C.borderLight}`, padding: '5px 11px', borderRadius: 7,
            }}>{tech}</span>
          ))}
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: ORANGE }}>
          View More
          <i className="fa-solid fa-arrow-right" style={{ fontSize: 12, transform: h ? 'translateX(3px)' : 'none', transition: 'transform .3s' }} />
        </span>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const { dark } = useTheme();
  const C = t(dark);
  return (
    <section id="services" style={{ background: C.bg, padding: 'clamp(70px,8vw,120px) 6%', transition: 'background 0.3s' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header — editorial heading + supporting copy */}
        <div className="services-head" style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr', gap: 48, alignItems: 'end', marginBottom: 'clamp(40px,5vw,66px)' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ORANGE, margin: '0 0 18px' }}>What We Ship</p>
            <h2 style={{ fontSize: 'clamp(34px,5vw,68px)', fontWeight: 800, color: C.ink, lineHeight: 1.0, letterSpacing: '-0.035em', margin: 0 }}>
              Web &amp; Mobile{' '}
              <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.01em' }}>Development</span>{' '}
              Services.
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 16, color: C.body, lineHeight: 1.7, margin: 0 }}>
            A <strong style={{ color: C.ink, fontWeight: 600 }}>full-service web and app development</strong> team building beautiful, efficiently coded products since 2010 — for clients across 17 countries.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {SERVICES.map((svc, i) => <ServiceCard key={svc.slug} svc={svc} i={i} />)}
        </div>

      </div>
    </section>
  );
}
