import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const ORBIT_R = 290;

const industries = [
  { name: 'Healthcare',         angle: 90,  desc: 'Patient engagement, diagnostics, and telemedicine platforms.' },
  { name: 'Logistics',          angle: 69,  desc: 'Fleet tracking, route optimization, and supply chain apps.' },
  { name: 'Finance',            angle: 48,  desc: 'Fintech apps, payment platforms, and trading tools.' },
  { name: 'Legal',              angle: 27,  desc: 'Document automation, contract analysis, and legal tech.' },
  { name: 'IT & Telecom',       angle: 6,   desc: 'Network management, OSS/BSS, and telecom automation.' },
  { name: 'Insurance',          angle: 345, desc: 'Claims automation, underwriting tools, and InsurTech.' },
  { name: 'Media & OTT',        angle: 324, desc: 'Streaming platforms, content delivery, and monetization.' },
  { name: 'Travel',             angle: 303, desc: 'Booking engines, itinerary tools, and travel tech.' },
  { name: 'Manufacturing',      angle: 282, desc: 'IoT, predictive maintenance, and smart factory solutions.' },
  { name: 'Retail',             angle: 261, desc: 'Omnichannel commerce, inventory, and loyalty platforms.' },
  { name: 'Construction',       angle: 240, desc: 'Project management, BIM integration, and field ops.' },
  { name: 'Social Media',       angle: 219, desc: 'Community platforms, content moderation, and engagement.' },
  { name: 'On Demand',          angle: 198, desc: 'Real-time service delivery apps with live tracking.' },
  { name: 'Sports',             angle: 177, desc: 'Fan engagement, analytics, and performance platforms.' },
  { name: 'Education',          angle: 156, desc: 'LMS, adaptive learning, and EdTech platforms.' },
  { name: 'Beauty & Lifestyle', angle: 135, desc: 'Booking, ecommerce, and personalization for beauty brands.' },
  { name: 'Marketplace',        angle: 114, desc: 'Multi-vendor platforms with smart matching and payments.' },
];

function pillPos(angle) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: ORBIT_R * Math.cos(rad),
    y: -ORBIT_R * Math.sin(rad),
  };
}

export default function Industries() {
  const [hovered, setHovered] = useState(null);
  const { dark } = useTheme();
  const C = t(dark);
  const active = industries.find(i => i.name === hovered);

  return (
    <section
      id="industries"
      style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, transition: 'background 0.3s' }}
      className="py-24 md:py-32 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: C.muted }}>
              — Industries We Serve
            </p>
            <h2 className="leading-[1.05]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: C.heading }}>
              <span className="font-extrabold tracking-[-0.03em]">AI solutions for</span><br />
              <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 400 }}>
                modern businesses.
              </span>
            </h2>
          </div>
          <div className="max-w-sm md:pt-6">
            <p style={{ color: C.body }} className="text-sm md:text-base leading-relaxed">
              AI-powered applications across 17 verticals — business automation, customer experience, data intelligence, and smart SaaS platforms. Hover any industry to explore the practice.
            </p>
          </div>
        </div>

        {/* ── Orbit diagram (desktop) ── */}
        <div className="hidden lg:flex items-center justify-center" style={{ height: 800 }}>
          <div className="relative" style={{ width: 800, height: 800 }}>

            {/* Center circle */}
            <div
              className="absolute rounded-full flex flex-col items-center justify-center text-center select-none"
              style={{
                width: 460,
                height: 460,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: dark ? '#1e1d1a' : '#e4e0d5',
                zIndex: 1,
              }}
            >
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center px-14"
                  >
                    <p className="text-[9px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: C.muted }}>
                      Vertical
                    </p>
                    <h3
                      className="font-extrabold tracking-tight mb-3"
                      style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: C.heading, lineHeight: 1.05 }}
                    >
                      {active.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.body }}>
                      {active.desc}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center px-14"
                  >
                    <p className="text-[9px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: C.muted }}>
                      Select an industry
                    </p>
                    <h3
                      className="font-extrabold tracking-tight mb-3"
                      style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: C.heading }}
                    >
                      17 verticals
                    </h3>
                    <p className="text-sm text-center" style={{ color: C.body }}>
                      Hover a label to explore the practice.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industry pills */}
            {industries.map((ind, idx) => {
              const pos = pillPos(ind.angle);
              const isActive = hovered === ind.name;
              return (
                <motion.div
                  key={ind.name}
                  className="absolute cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                    zIndex: 2,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.1 + idx * 0.04 }}
                  whileHover={{ scale: 1.06 }}
                  onMouseEnter={() => setHovered(ind.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200"
                    style={{
                      background: isActive ? '#FF8048' : (dark ? '#28271f' : '#ffffff'),
                      color: isActive ? '#fff' : C.bodyMid,
                      border: `1px solid ${isActive ? '#FF8048' : C.border}`,
                      boxShadow: isActive
                        ? '0 6px 20px -4px rgba(255,128,72,0.45)'
                        : '0 2px 10px -2px rgba(0,0,0,0.07)',
                    }}
                  >
                    {ind.name}
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Mobile fallback — simple grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
          {industries.map(ind => (
            <div
              key={ind.name}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-center transition-all duration-200"
              style={{
                background: dark ? '#1d1c1a' : '#fff',
                color: C.bodyMid,
                border: `1px solid ${C.border}`,
              }}
            >
              {ind.name}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
