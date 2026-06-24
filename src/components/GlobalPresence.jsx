import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* Real offices from professionalsofttech.com */
const OFFICES = [
  { code: 'US', city: 'Massachusetts', country: 'USA', role: 'Americas Office', detail: 'Enterprise Sales & Client Services', tz: 'America/New_York', x: '27%', y: '34%' },
  { code: 'SG', city: 'Singapore', country: 'Singapore', role: 'APAC Office', detail: 'Regional Delivery & Partnerships', tz: 'Asia/Singapore', x: '77%', y: '58%' },
  { code: 'IN', city: 'India', country: 'India', role: 'Engineering Hub', detail: 'Development & Design', tz: 'Asia/Kolkata', x: '70.5%', y: '47%' },
];

const serif = { fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 500 };

function useClock(tz) {
  const [t, setT] = useState('');
  useEffect(() => {
    const fmt = () => new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: true });
    setT(fmt());
    const id = setInterval(() => setT(fmt()), 30000);
    return () => clearInterval(id);
  }, [tz]);
  return t;
}

function OfficeCard({ o, last }) {
  const time = useClock(o.tz);
  return (
    <div style={{ padding: 'clamp(20px,2vw,28px)', borderRight: last ? 'none' : '1px solid #ece7da', borderTop: '1px solid #ece7da' }} className="gp-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, fontWeight: 700, color: '#fff', background: '#FF8048', padding: '3px 9px', borderRadius: 6 }}>{o.code}</span>
        <i className="fa-solid fa-location-dot" style={{ fontSize: 13, color: '#FF8048' }} />
      </div>
      <p style={{ fontSize: 18, fontWeight: 700, color: '#272a33', margin: '0 0 2px' }}>{o.city}</p>
      <p style={{ fontSize: 12.5, color: '#9a9a9a', margin: 0 }}>{o.country}</p>
      <div style={{ height: 1, background: '#eee', margin: '16px 0' }} />
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F26A2E', margin: '0 0 6px' }}>{o.role}</p>
      <p style={{ fontSize: 13, color: '#4D4D4D', lineHeight: 1.5, margin: '0 0 16px' }}>{o.detail}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3ecf8e', boxShadow: '0 0 0 3px rgba(62,207,142,0.2)' }} />
        <span style={{ fontSize: 18, fontWeight: 800, color: '#272a33', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{time}</span>
      </div>
    </div>
  );
}

export default function GlobalPresence() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4EC] border-b border-[#ece7da]">
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="section-label mb-4" style={{ color: '#FF8048' }}>GLOBAL PRESENCE</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-[-0.035em] leading-[1.04]">
            Follow the sun. <span style={serif}>Never lose a day.</span>
          </h2>
          <p className="text-[#5a5a5a] text-base md:text-lg leading-relaxed mt-6">
            Offices in the USA, Singapore, and India — so there's always someone awake and building.
          </p>
        </div>

        {/* Map + clocks panel */}
        <motion.div
          initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: '#fff', border: '1px solid #ece7da', borderRadius: 24, overflow: 'hidden' }}
        >
          {/* dotted world map (dots masked to continent shapes) + pins on top */}
          <div style={{ position: 'relative', height: 'clamp(230px,32vw,380px)', margin: '8px 0' }}>
            {/* masked dot layer */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(110,110,110,0.5) 1.25px, transparent 1.45px)',
              backgroundSize: '13px 13px',
              WebkitMaskImage: 'url(/worldmap.svg)', maskImage: 'url(/worldmap.svg)',
              WebkitMaskSize: '100% 100%', maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center', maskPosition: 'center',
            }} />
            {/* "follow the sun" warm light sweeping across the continents */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'linear-gradient(100deg, transparent 42%, rgba(255,138,72,0.55) 50%, transparent 58%)',
              backgroundSize: '230% 100%', backgroundRepeat: 'no-repeat',
              WebkitMaskImage: 'url(/worldmap.svg)', maskImage: 'url(/worldmap.svg)',
              WebkitMaskSize: '100% 100%', maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center', maskPosition: 'center',
              mixBlendMode: 'multiply', animation: 'gp-sun 9s linear infinite',
            }} />
            {/* animated connection arcs */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}>
              {[['M27,34 Q50,12 70.5,47'], ['M27,34 Q54,14 77,58'], ['M70.5,47 Q72,42 77,58']].map(([d], i) => (
                <path key={i} d={d} fill="none" stroke="#FF8048" strokeWidth="1.4" strokeDasharray="4 4" strokeLinecap="round"
                  vectorEffect="non-scaling-stroke" opacity="0.6" style={{ animation: `gp-dash 1s linear infinite` }} />
              ))}
            </svg>
            {/* pins (not masked) */}
            {OFFICES.map(o => (
              <span key={o.code} style={{ position: 'absolute', left: o.x, top: o.y, transform: 'translate(-50%,-50%)', width: 14, height: 14 }}>
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#FF8048', boxShadow: '0 0 0 5px rgba(255,128,72,0.18)' }} />
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(255,128,72,0.5)', animation: 'gp-ping 2s ease-out infinite' }} />
              </span>
            ))}
          </div>

          {/* office cards */}
          <div className="gp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
            {OFFICES.map((o, i) => <OfficeCard key={o.code} o={o} last={i === OFFICES.length - 1} />)}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
