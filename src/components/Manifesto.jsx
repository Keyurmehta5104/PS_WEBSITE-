import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section
      className="border-b border-white/20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#5B3FA0 0%,#4A3080 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center px-8 md:px-16 py-20"
          >
            <p className="section-label mb-6 text-white/80">PST / MANIFESTO</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.05] mb-6">
              Innovation,<br />
              <span className="text-white/90">Bottoms Up.</span>
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4 max-w-md">
              When we mix organised creativity with structured engineering and deep domain expertise, it delivers value that compounds over time.
            </p>
            <p className="text-white/75 text-sm leading-relaxed mb-10 max-w-md">
              We believe scrappy problem-solving should complement structured software delivery — not replace it. Like bread and butter, they work best together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white text-[#4A3080] font-semibold text-sm px-7 py-3.5 rounded-full w-fit hover:bg-[#f5f5f5] transition-all duration-300"
            >
              Let's work together <i className="fa-solid fa-arrow-right w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden flex items-center justify-center min-h-[360px] lg:min-h-full"
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.12]" style={{
              backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }} />
            <div className="absolute top-1/4 left-1/4 w-56 h-56 rounded-full blur-[80px]" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full blur-[60px]" style={{ background: 'rgba(255,255,255,0.15)' }} />

            <div className="relative z-10 text-center px-12 py-16">
              <div className="text-[100px] md:text-[140px] font-extrabold text-white/20 leading-none select-none tracking-tight">PST</div>
              <div className="flex flex-col gap-3 mt-2">
                {['Engineering · Design · Scale', '500+ Projects Shipped', 'EST. 2010 · INDIA · USA · SINGAPORE'].map((l, i) => (
                  <span key={i} className={`text-[10px] font-bold tracking-[0.14em] uppercase ${i===0 ? 'text-white' : 'text-white/60'}`}>{l}</span>
                ))}
              </div>
            </div>

            {/* Record badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/[0.12] border border-white/20 rounded-xl px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-semibold text-white/70 uppercase tracking-widest">PST / MANIFESTO · 01:28</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
