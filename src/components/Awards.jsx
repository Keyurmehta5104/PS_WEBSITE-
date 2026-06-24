import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const ORANGE = '#FF8048';

/* Verified from Clutch profile + official partner pages */
const BADGES = [
  { source: 'Clutch',      label: 'Top Mobile App Companies',    sub: 'Singapore',        color: '#e8261d' },
  { source: 'Clutch',      label: 'Top Shopify Dev Companies',   sub: 'Singapore',        color: '#e8261d' },
  { source: 'Clutch',      label: 'Top Web Dev Companies',       sub: 'Singapore',        color: '#e8261d' },
  { source: 'Clutch',      label: '5.0 ★ Rating',                sub: '4 Verified Reviews', color: '#e8261d' },
  { source: 'Google',      label: 'Google Partner',              sub: 'Certified',        color: '#4285F4' },
  { source: 'Amazon',      label: 'AWS Partner',                 sub: 'Select Tier',      color: '#FF9900' },
  { source: 'Shopify',     label: 'Shopify Partner',             sub: 'Certified',        color: '#96BF48' },
  { source: 'DesignRush',  label: 'Verified Agency',             sub: 'DesignRush',       color: '#6c5ce7' },
  { source: 'Upwork',      label: 'Top Rated Agency',            sub: 'Upwork',           color: '#14a800' },
  { source: 'NASSCOM',     label: 'NASSCOM Member',              sub: 'Certified',        color: ORANGE },
  { source: 'GoodFirms',   label: 'GoodFirms Verified',          sub: 'Top Company',      color: '#00b4d8' },
  { source: 'Since',       label: '14+ Years',                   sub: 'Est. 2010',        color: '#888' },
];

export default function Awards() {
  const { dark } = useTheme();
  const C = t(dark);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const cardBg     = dark ? '#1a1816' : '#ffffff';
  const cardBorder = dark ? '#2a2622' : '#e6e1d8';

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
        <div className="flex flex-col lg:flex-row lg:items-start gap-14 lg:gap-20">

          {/* ── Left heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 lg:w-60"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-7" style={{ background: ORANGE }} />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] m-0" style={{ color: ORANGE }}>
                Feathers in Our Cap
              </p>
            </div>

            <h2
              className="font-extrabold tracking-tight leading-[1.05] m-0"
              style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', color: C.heading }}
            >
              Recognized
            </h2>
            <p
              className="m-0"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.7rem)',
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontStyle: 'italic',
                fontWeight: 400,
                color: ORANGE,
                lineHeight: 1.15,
                marginTop: 2,
              }}
            >
              for excellence.
            </p>

            <p className="text-[13px] leading-relaxed mt-5 m-0 max-w-[220px]" style={{ color: C.muted }}>
              Trusted by global clients, verified by the world's top tech platforms.
            </p>

            {/* Clutch highlight pill */}
            <div
              className="inline-flex items-center gap-2 mt-7 px-3 py-2 rounded-xl"
              style={{
                background: dark ? '#1e1c19' : '#fff5f5',
                border: `1px solid ${dark ? '#3a2a2a' : '#ffd5d5'}`,
              }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#e8261d' }} />
              <span className="text-[11px] font-bold" style={{ color: dark ? '#ff8a8a' : '#c0392b' }}>
                5.0 / 5 on Clutch
              </span>
            </div>
          </motion.div>

          {/* ── Badge grid ── */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              {BADGES.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.08 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-xl p-4 flex flex-col gap-2 cursor-default transition-all duration-200"
                  style={{
                    background: cardBg,
                    border: `1.5px solid ${cardBorder}`,
                    boxShadow: dark ? 'none' : '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                  whileHover={{ y: -2, boxShadow: dark ? '0 6px 20px rgba(0,0,0,0.3)' : '0 6px 20px rgba(0,0,0,0.08)' }}
                >
                  {/* Colored top accent bar */}
                  <div
                    className="absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: b.color }}
                  />

                  {/* Source dot + name */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: b.color }} />
                    <span
                      className="text-[9.5px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: dark ? '#6b6460' : '#a09890' }}
                    >
                      {b.source}
                    </span>
                  </div>

                  {/* Award label */}
                  <p
                    className="text-[12px] font-bold leading-snug m-0"
                    style={{ color: C.heading }}
                  >
                    {b.label}
                  </p>

                  {/* Sub-label */}
                  <p
                    className="text-[10.5px] m-0"
                    style={{ color: C.muted }}
                  >
                    {b.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
