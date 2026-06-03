import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
  { num: '500+',  label: 'Projects Completed' },
  { num: '14+',   label: 'Years Active' },
  { num: '30+',   label: 'Expert Engineers' },
  { num: '17+',   label: 'Countries Served' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white pt-20 flex flex-col border-b border-[#e5e5e5] overflow-hidden">

      {/* Subtle dot-grid */}
      <div className="absolute inset-0 bg-dot-grid-subtle opacity-50 pointer-events-none" />
      {/* Radial blue glow top-right */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#1557FF]/5 blur-[120px] pointer-events-none" />

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center flex-1 py-20">

        {/* Left — copy */}
        <motion.div
          variants={container} initial="hidden" animate="visible"
          className="lg:col-span-7 flex flex-col items-start"
        >
          <motion.span variants={item} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#737373] uppercase mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1557FF] animate-pulse" />
            EST. 2010 &nbsp;·&nbsp; 30+ EXPERTS &nbsp;·&nbsp; USA · SINGAPORE · INDIA
          </motion.span>

          <motion.h1
            variants={item}
            className="font-extrabold leading-[1.04] tracking-[-0.03em] text-[#0a0a0a] mb-7"
            style={{ fontSize: 'clamp(44px, 6vw, 82px)' }}
          >
            Ideas into<br />
            <span className="text-gradient">AI-powered</span><br />
            businesses.
          </motion.h1>

          <motion.p variants={item} className="text-[#525252] text-lg font-normal leading-relaxed max-w-xl mb-10">
            The software partner to <strong className="text-[#0a0a0a] font-semibold">500+ enterprises</strong> across
            17+ countries and every industry — since 2010. Today we ship enterprise platforms,
            mobile ecosystems, and production AI systems.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              href="#contact"
              className="bg-[#0a0a0a] hover:bg-[#1557FF] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300"
            >
              Get a Free AI Consultation →
            </motion.a>
            <a href="#work" className="group flex items-center gap-1.5 text-sm font-semibold text-[#525252] hover:text-[#0a0a0a] transition-colors">
              View our work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div variants={item} className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
            {['✓ Clutch Top Developer', '✓ Google Partner', '✓ AWS Partner', '✓ Shopify Plus Partner', '✓ ISO 9001:2015'].map(b => (
              <span key={b} className="text-[10px] font-bold text-[#a3a3a3] uppercase tracking-widest">{b}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — floating project cards */}
        <div className="lg:col-span-5 relative h-[400px] lg:h-[460px] w-full hidden md:block">
          {[
            { delay: 0.2,  top: '4%',  left: '2%',  tag: 'AI Platform',   tagColor: 'bg-blue-500/15 text-blue-400 border-blue-500/20',  title: 'NovaPay AI Agent',       sub: 'Autonomous Cross-Border Payments',   indicator: '4,210 tx/sec' },
            { delay: 0.38, top: '38%', right: '0%', tag: 'Mobile App',     tagColor: 'bg-sky-500/15 text-sky-400 border-sky-500/20',      title: 'ShopVibe Commerce',      sub: 'Headless Global Storefront',         indicator: null },
            { delay: 0.56, top: '72%', left: '2%',  tag: 'Healthcare AI',  tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20', title: 'PulseAI Diagnostics', sub: 'ML Vitals Monitor — 98.4% precision', indicator: null },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: c.delay }}
              style={{
                position: 'absolute',
                top: c.top,
                left: c.left,
                right: c.right,
                animationDelay: `${i * 1.2}s`,
              }}
              className="w-[290px] sm:w-[310px] p-5 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/[0.07] shadow-2xl animate-float-y"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${c.tagColor}`}>
                  {c.tag}
                </span>
                <span className="text-white/25 text-xs">↗</span>
              </div>
              <h4 className="text-sm font-bold text-white tracking-tight">{c.title}</h4>
              <p className="text-[10px] text-white/40 mt-1 leading-relaxed">{c.sub}</p>
              {c.indicator && (
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-[9px] font-semibold text-white/30">{c.indicator}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Stats banner ── */}
      <div className="relative z-10 border-t border-[#e5e5e5] bg-white py-7">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col text-center md:text-left ${i > 0 ? 'md:border-l border-[#e5e5e5] md:pl-8' : ''} ${i >= 2 ? 'border-l border-[#e5e5e5] pl-6' : ''}`}>
              <span className="font-extrabold text-3xl md:text-4xl text-[#0a0a0a] tracking-tight">{s.num}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3] mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
