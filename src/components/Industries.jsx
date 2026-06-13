import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const ORANGE = '#FF8048';

const industries = [
  {
    name: 'Healthcare',
    icon: 'fa-solid fa-heart-pulse',
    accent: '#EF4444',
    desc: 'We build patient-first digital experiences — from telemedicine platforms and AI diagnostics to EHR systems and patient engagement apps that improve outcomes at scale.',
    solutions: ['Telemedicine & EHR systems', 'AI-powered diagnostics', 'Patient engagement portals'],
    stat: '40+', statLabel: 'Projects delivered', badge: 'HIPAA Compliant',
  },
  {
    name: 'Finance & Fintech',
    icon: 'fa-solid fa-chart-line',
    accent: '#10B981',
    desc: 'Secure, scalable fintech solutions — payment gateways, trading platforms, digital banking apps, and regulatory-compliant financial tools built for modern institutions.',
    solutions: ['Payment gateways & wallets', 'Trading & investment platforms', 'Regulatory compliance tools'],
    stat: '35+', statLabel: 'Projects delivered', badge: 'PCI DSS Ready',
  },
  {
    name: 'Retail & eCommerce',
    icon: 'fa-solid fa-bag-shopping',
    accent: '#F59E0B',
    desc: 'End-to-end commerce solutions — Shopify storefronts, custom marketplaces, inventory management, and omnichannel experiences that convert browsers into buyers.',
    solutions: ['Custom Shopify & Magento stores', 'Omnichannel commerce platforms', 'Inventory & loyalty systems'],
    stat: '120+', statLabel: 'Stores built', badge: 'Shopify Partner',
  },
  {
    name: 'Education & EdTech',
    icon: 'fa-solid fa-graduation-cap',
    accent: '#8B5CF6',
    desc: 'Transforming learning through technology — LMS platforms, adaptive learning engines, virtual classrooms, and AI-powered assessment tools for institutions and startups.',
    solutions: ['LMS & virtual classrooms', 'Adaptive learning engines', 'AI assessment & analytics'],
    stat: '30+', statLabel: 'EdTech platforms', badge: 'FERPA Compliant',
  },
  {
    name: 'Logistics & Supply Chain',
    icon: 'fa-solid fa-truck-fast',
    accent: '#0EA5E9',
    desc: 'Real-time fleet tracking, route optimization, warehouse management, and supply chain visibility platforms that keep operations running efficiently.',
    solutions: ['Fleet tracking & route optimization', 'Warehouse management systems', 'Supply chain visibility tools'],
    stat: '25+', statLabel: 'Projects delivered', badge: 'Real-time GPS',
  },
  {
    name: 'Travel & Hospitality',
    icon: 'fa-solid fa-plane',
    accent: '#06B6D4',
    desc: 'Seamless travel experiences — booking engines, itinerary management tools, hotel PMS integrations, and travel tech platforms for agencies and operators.',
    solutions: ['Booking engines & OTAs', 'Hotel PMS integrations', 'Travel itinerary apps'],
    stat: '20+', statLabel: 'Projects delivered', badge: 'GDS Integrated',
  },
  {
    name: 'Manufacturing & IoT',
    icon: 'fa-solid fa-gear',
    accent: '#64748B',
    desc: 'Smart factory solutions — IoT device management, predictive maintenance platforms, production analytics, and Industry 4.0 automation for modern manufacturers.',
    solutions: ['IoT device management', 'Predictive maintenance platforms', 'Production analytics dashboards'],
    stat: '18+', statLabel: 'Projects delivered', badge: 'Industry 4.0',
  },
  {
    name: 'Media & Entertainment',
    icon: 'fa-solid fa-play',
    accent: '#EC4899',
    desc: 'High-performance OTT platforms, content delivery networks, video streaming infrastructure, and monetization tools that scale to millions of viewers.',
    solutions: ['OTT & streaming platforms', 'Content delivery networks', 'Ad tech & monetization'],
    stat: '22+', statLabel: 'Projects delivered', badge: 'CDN Optimized',
  },
  {
    name: 'Insurance & InsurTech',
    icon: 'fa-solid fa-shield-halved',
    accent: '#3B82F6',
    desc: 'Modern insurance technology — claims automation, underwriting tools, policy management systems, and customer portals that reduce friction and accelerate processing.',
    solutions: ['Claims automation systems', 'Underwriting & policy tools', 'Customer self-service portals'],
    stat: '15+', statLabel: 'Projects delivered', badge: 'SOC 2 Ready',
  },
  {
    name: 'Legal & LegalTech',
    icon: 'fa-solid fa-scale-balanced',
    accent: '#78716C',
    desc: 'Intelligent legal technology — document automation, contract analysis, case management tools, and AI-powered legal research platforms for firms and corporates.',
    solutions: ['Document & contract automation', 'Case management systems', 'AI-powered legal research'],
    stat: '12+', statLabel: 'Projects delivered', badge: 'Data Encrypted',
  },
  {
    name: 'On Demand & Marketplace',
    icon: 'fa-solid fa-bolt',
    accent: '#F97316',
    desc: 'Multi-vendor marketplaces and on-demand service apps — real-time booking, live tracking, dynamic pricing, and smart matching engines built for rapid scale.',
    solutions: ['Multi-vendor marketplace platforms', 'Real-time booking & tracking', 'Dynamic pricing engines'],
    stat: '28+', statLabel: 'Projects delivered', badge: 'Real-time Ready',
  },
  {
    name: 'IT & Telecom',
    icon: 'fa-solid fa-tower-broadcast',
    accent: '#6366F1',
    desc: 'Network management platforms, OSS/BSS systems, telecom automation tools, and enterprise IT infrastructure solutions for carriers and technology companies.',
    solutions: ['OSS/BSS systems', 'Network management platforms', 'Telecom automation tools'],
    stat: '20+', statLabel: 'Projects delivered', badge: 'Enterprise Grade',
  },
];

export default function Industries() {
  const [active, setActive] = useState(industries[0]);
  const { dark } = useTheme();
  const C = t(dark);

  return (
    <section
      id="industries"
      style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, transition: 'background 0.3s' }}
      className="py-24 md:py-32 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: C.muted }}>
              — Industries We Serve
            </p>
            <h2 className="leading-[1.05]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: C.heading }}>
              <span className="font-extrabold tracking-[-0.03em]">Built for your</span><br />
              <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 400 }}>
                industry.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed md:pb-2" style={{ color: C.body }}>
            Deep vertical expertise across <strong style={{ color: C.ink }}>12+ industries</strong> — we don't just build software, we understand the problems unique to your sector.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4 lg:gap-6 items-start">

          {/* ── Left: industry list ── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${C.border}`, background: dark ? '#161513' : '#fff' }}
          >
            {industries.map((ind, i) => {
              const isActive = active.name === ind.name;
              return (
                <button
                  key={ind.name}
                  onClick={() => setActive(ind)}
                  className="w-full text-left flex items-center gap-3 px-5 py-3.5 transition-all duration-200 relative group"
                  style={{
                    background: isActive ? (dark ? '#1f1e1b' : '#FFF6F0') : 'transparent',
                    borderBottom: i < industries.length - 1 ? `1px solid ${C.border}` : 'none',
                  }}
                >
                  {/* Active bar */}
                  <span
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-200"
                    style={{ background: isActive ? ORANGE : 'transparent' }}
                  />

                  {/* Icon */}
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: isActive ? `${ind.accent}18` : (dark ? '#252320' : '#f5f4f1'),
                    }}
                  >
                    <i
                      className={ind.icon}
                      style={{
                        fontSize: 13,
                        color: isActive ? ind.accent : C.muted,
                        transition: 'color 0.2s',
                      }}
                    />
                  </span>

                  {/* Name */}
                  <span
                    className="text-[13px] font-semibold flex-1 transition-colors duration-200"
                    style={{ color: isActive ? C.heading : C.body }}
                  >
                    {ind.name}
                  </span>

                  {/* Arrow */}
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{
                      fontSize: 10,
                      color: isActive ? ORANGE : C.borderLight,
                      transition: 'color 0.2s, transform 0.2s',
                      transform: isActive ? 'translateX(2px)' : 'translateX(0)',
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* ── Right: detail panel ── */}
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              border: `1px solid ${C.border}`,
              background: dark ? '#161513' : '#fff',
              minHeight: 480,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-10 h-full flex flex-col"
              >
                {/* Top accent bar */}
                <div
                  className="w-12 h-1 rounded-full mb-8"
                  style={{ background: active.accent }}
                />

                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${active.accent}15` }}
                  >
                    <i className={active.icon} style={{ fontSize: 28, color: active.accent }} />
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full"
                    style={{
                      background: dark ? '#252320' : '#f5f4f1',
                      color: active.accent,
                      border: `1px solid ${active.accent}30`,
                    }}
                  >
                    {active.badge}
                  </span>
                </div>

                {/* Industry name */}
                <h3
                  className="font-extrabold tracking-tight mb-3"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: C.heading, lineHeight: 1.1 }}
                >
                  {active.name}
                </h3>

                {/* Description */}
                <p className="text-[15px] leading-[1.7] mb-8" style={{ color: C.body, maxWidth: 560 }}>
                  {active.desc}
                </p>

                {/* Solutions */}
                <div className="mb-8">
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: C.muted }}>
                    Key Solutions
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {active.solutions.map((sol) => (
                      <div key={sol} className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${active.accent}18` }}
                        >
                          <i className="fa-solid fa-check" style={{ fontSize: 9, color: active.accent }} />
                        </span>
                        <span className="text-[14px] font-medium" style={{ color: C.bodyMid }}>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stat + CTA row */}
                <div className="flex items-center gap-6 mt-auto pt-6" style={{ borderTop: `1px solid ${C.border}` }}>
                  <div>
                    <span className="block text-3xl font-extrabold tracking-tight" style={{ color: active.accent }}>
                      {active.stat}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-widest" style={{ color: C.muted }}>
                      {active.statLabel}
                    </span>
                  </div>
                  <div style={{ width: 1, height: 36, background: C.border }} />
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 group"
                    style={{ color: ORANGE }}
                    onMouseEnter={e => e.currentTarget.style.gap = '12px'}
                    onMouseLeave={e => e.currentTarget.style.gap = '8px'}
                  >
                    Discuss your project
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile: pill grid (shown below lg) — kept as fallback */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-2 mt-8">
          {industries.map(ind => (
            <button
              key={ind.name}
              onClick={() => setActive(ind)}
              className="px-4 py-2.5 rounded-xl text-[13px] font-medium text-left flex items-center gap-2 transition-all duration-200"
              style={{
                background: active.name === ind.name ? '#FFF6F0' : (dark ? '#1d1c1a' : '#fafafa'),
                color: active.name === ind.name ? ORANGE : C.bodyMid,
                border: `1px solid ${active.name === ind.name ? `${ORANGE}40` : C.border}`,
              }}
            >
              <i className={ind.icon} style={{ fontSize: 11, color: active.name === ind.name ? ORANGE : C.muted }} />
              {ind.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
