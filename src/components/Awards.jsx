import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const ORANGE = '#FF8048';

const ISO_CERTS = [
  {
    code: 'ISO 9001:2015',
    title: 'Quality Management System',
    desc: 'Certified for delivering consistent, high-quality software solutions that meet customer expectations and regulatory requirements through a structured, process-driven approach.',
    color: '#0057a8',
    tag: 'Quality',
  },
  {
    code: 'ISO/IEC 27001:2022',
    title: 'Information Security Management',
    desc: 'Certified for implementing rigorous information security controls that safeguard client data — ensuring confidentiality, integrity, and availability across all operations.',
    color: '#1a7a4a',
    tag: 'Security',
  },
];

const PARTNERS = [
  { label: 'Google Partner',   sub: 'Certified',     color: '#4285F4' },
  { label: 'AWS Partner',      sub: 'Select Tier',   color: '#FF9900' },
  { label: 'Shopify Partner',  sub: 'Certified',     color: '#96BF48' },
  { label: 'NASSCOM Member',   sub: 'Certified',     color: ORANGE },
];

const RECOGNITION = [
  { label: 'Top Mobile App Companies',   source: 'Clutch',      sub: 'Singapore',          color: '#e8261d' },
  { label: 'Top Web Dev Companies',      source: 'Clutch',      sub: 'Singapore',          color: '#e8261d' },
  { label: 'Top Shopify Dev Companies',  source: 'Clutch',      sub: 'Singapore',          color: '#e8261d' },
  { label: '5.0 ★ Rating',              source: 'Clutch',      sub: '4 Verified Reviews', color: '#e8261d' },
  { label: 'Top Rated Agency',           source: 'Upwork',      sub: 'Verified',           color: '#14a800' },
  { label: 'Verified Agency',            source: 'DesignRush',  sub: 'Top Company',        color: '#6c5ce7' },
  { label: 'GoodFirms Verified',         source: 'GoodFirms',   sub: 'Top Company',        color: '#00b4d8' },
  { label: '14+ Years',                  source: 'Since',       sub: 'Est. 2010',          color: '#888888' },
];

function ShieldIcon({ color }) {
  return (
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none">
      <path
        d="M18 2L3 8v12c0 9.9 6.4 19.1 15 21.9C26.6 39.1 33 29.9 33 20V8L18 2z"
        fill={color}
        fillOpacity="0.12"
        stroke={color}
        strokeWidth="1.8"
      />
      <path
        d="M13 20l3.5 3.5 7-7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="h-px w-5 flex-shrink-0" style={{ background: ORANGE }} />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: ORANGE }}>
        {text}
      </span>
    </div>
  );
}

export default function Awards() {
  const { dark } = useTheme();
  const C = t(dark);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const cardBg     = dark ? '#1a1816' : '#ffffff';
  const cardBorder = dark ? '#2a2622' : '#e6e1d8';
  const dimBg      = dark ? '#141210' : '#f9f7f4';

  return (
    <section
      id="awards"
      ref={ref}
      style={{
        background: C.bg,
        borderBottom: `1px solid ${dark ? '#2a2622' : '#e6e1d8'}`,
        transition: 'background 0.3s',
      }}
      className="py-20 md:py-28 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-7" style={{ background: ORANGE }} />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] m-0" style={{ color: ORANGE }}>
              Feathers in Our Cap
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2
                className="font-extrabold tracking-tight leading-[1.05] m-0"
                style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', color: C.heading }}
              >
                Recognized{' '}
                <span
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: ORANGE,
                  }}
                >
                  for excellence.
                </span>
              </h2>
            </div>
            <p className="text-[13px] leading-relaxed max-w-xs m-0 sm:text-right" style={{ color: C.muted }}>
              Trusted by global clients, verified by the world's top tech platforms and certification bodies.
            </p>
          </div>
        </motion.div>

        {/* ══ TIER 1: ISO Certifications ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <SectionLabel text="International Certifications" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ISO_CERTS.map((cert, i) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.18 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl p-6 flex gap-5 transition-all duration-200"
                style={{
                  background: cardBg,
                  border: `1.5px solid ${cardBorder}`,
                  boxShadow: dark ? 'none' : '0 2px 12px rgba(0,0,0,0.05)',
                }}
                whileHover={{
                  y: -3,
                  boxShadow: dark
                    ? `0 8px 28px rgba(0,0,0,0.35)`
                    : `0 8px 28px rgba(0,0,0,0.09)`,
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full"
                  style={{ background: cert.color }}
                />

                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <ShieldIcon color={cert.color} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full"
                      style={{
                        background: cert.color + '18',
                        color: cert.color,
                      }}
                    >
                      {cert.tag}
                    </span>
                  </div>
                  <p
                    className="text-[17px] font-extrabold tracking-tight m-0 mb-0.5"
                    style={{ color: cert.color }}
                  >
                    {cert.code}
                  </p>
                  <p className="text-[13px] font-semibold m-0 mb-2" style={{ color: C.heading }}>
                    {cert.title}
                  </p>
                  <p className="text-[12px] leading-relaxed m-0" style={{ color: C.muted }}>
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ══ TIER 2: Technology Partners ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <SectionLabel text="Technology Partners" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PARTNERS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-xl p-4 flex flex-col items-center text-center gap-2 transition-all duration-200 cursor-default"
                style={{
                  background: dimBg,
                  border: `1.5px solid ${cardBorder}`,
                }}
                whileHover={{ y: -2, background: cardBg, boxShadow: dark ? '0 6px 20px rgba(0,0,0,0.3)' : '0 6px 20px rgba(0,0,0,0.07)' }}
              >
                {/* Color dot */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: p.color + '18' }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
                </div>
                <p className="text-[12px] font-bold m-0 leading-snug" style={{ color: C.heading }}>
                  {p.label}
                </p>
                <p className="text-[10.5px] m-0" style={{ color: C.muted }}>
                  {p.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ══ TIER 3: Industry Recognition ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel text="Industry Recognition" />
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
            {RECOGNITION.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.44 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-xl p-4 flex flex-col gap-2 cursor-default transition-all duration-200"
                style={{
                  background: cardBg,
                  border: `1.5px solid ${cardBorder}`,
                  boxShadow: dark ? 'none' : '0 1px 4px rgba(0,0,0,0.04)',
                }}
                whileHover={{ y: -2, boxShadow: dark ? '0 6px 20px rgba(0,0,0,0.3)' : '0 6px 20px rgba(0,0,0,0.08)' }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: r.color }}
                />
                {/* Source */}
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: r.color }} />
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.14em]" style={{ color: dark ? '#6b6460' : '#a09890' }}>
                    {r.source}
                  </span>
                </div>
                <p className="text-[12px] font-bold leading-snug m-0" style={{ color: C.heading }}>
                  {r.label}
                </p>
                <p className="text-[10.5px] m-0" style={{ color: C.muted }}>
                  {r.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
