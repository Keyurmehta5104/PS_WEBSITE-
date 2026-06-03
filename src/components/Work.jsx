import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1, category: 'ENTERPRISE · FINTECH',
    title: 'NovaPay Corporate Portal',
    sub: 'Next-Gen Cross-Border Payment Gateway',
    tags: ['React', 'Node.js', 'AWS'],
    topColor: '#1557FF',
    mockup: (
      <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col gap-4 group-hover:scale-[1.02] transition-transform duration-500 shadow-sm border border-[#f0f0f0]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1557FF] flex items-center justify-center text-[10px] font-bold">N</div>
            <span className="text-xs font-bold text-[#0a0a0a]">NovaPay</span>
          </div>
          <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200 font-bold">Active</span>
        </div>
        <div><span className="text-[10px] uppercase tracking-wider text-[#a3a3a3] font-semibold">Total Revenue</span>
          <div className="text-2xl font-extrabold text-[#0a0a0a] tracking-tight">$142,384.50</div></div>
        <div className="flex items-end gap-1 h-16">
          {[30,50,40,70,88,60,95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i===6 ? 'linear-gradient(to top,#1557FF,#38BFFF)' : `rgba(21,87,255,${0.1+i*0.04})` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2, category: 'E-COMMERCE · MOBILE',
    title: 'ShopVibe Retail Platform',
    sub: 'High-Performance Headless Storefront',
    tags: ['Flutter', 'Next.js', 'AWS'],
    topColor: '#0ea5e9',
    mockup: (
      <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col gap-3 group-hover:scale-[1.02] transition-transform duration-500 shadow-sm border border-[#f0f0f0]">
        <div className="flex justify-between items-center border-b border-[#f0f0f0] pb-2">
          <span className="text-xs font-bold text-[#0a0a0a]">ShopVibe Store</span>
          <span className="text-xs text-blue-500 font-bold">🛒 3 items</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[{e:'👟',p:'$129',c:'blue'},{e:'🎧',p:'$249',c:'cyan'}].map((p,i)=>(
            <div key={i} className="bg-[#fafafa] rounded-lg p-2 border border-[#e5e5e5]">
              <div className="w-full h-9 rounded-md bg-blue-50 flex items-center justify-center text-base mb-1.5">{p.e}</div>
              <span className={`text-[9px] font-bold text-${p.c}-600`}>{p.p}.00</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3, category: 'HEALTHCARE · AI/ML',
    title: 'PulseAI Diagnostics',
    sub: 'AI Vitals Dashboard & ML Monitor',
    tags: ['Python', 'React', 'TensorFlow'],
    topColor: '#10b981',
    mockup: (
      <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col gap-3 group-hover:scale-[1.02] transition-transform duration-500 shadow-sm border border-[#f0f0f0]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold text-[#0a0a0a]">PulseAI Vitals</span>
          </div>
          <span className="text-[9px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">Normal</span>
        </div>
        <div className="flex items-center gap-3 bg-[#fafafa] p-2.5 rounded-lg border border-[#e5e5e5]">
          <div><span className="text-[9px] text-[#a3a3a3] font-bold uppercase">Rate</span>
            <div className="text-lg font-extrabold text-[#0a0a0a]">72 BPM</div></div>
          <svg className="w-24 h-7 text-emerald-500" viewBox="0 0 100 30" fill="none">
            <path d="M0 15H20L25 5L30 25L35 15H55L60 0L65 30L70 15H100" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex justify-between text-[9px] text-[#a3a3a3] font-medium">
          <span>Patient ID: #9204</span><span>Precision: 98.4%</span>
        </div>
      </div>
    ),
  },
  {
    id: 4, category: 'LOGISTICS · AI',
    title: 'TrackFlow Logistics AI',
    sub: 'Intelligent Route Optimisation Engine',
    tags: ['Python', 'Node.js', 'GCP'],
    topColor: '#f59e0b',
    mockup: (
      <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col gap-3 group-hover:scale-[1.02] transition-transform duration-500 shadow-sm border border-[#f0f0f0]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#0a0a0a]">TrackFlow</span>
          <span className="text-[9px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold border border-amber-200">12 Active Routes</span>
        </div>
        <div className="flex flex-col gap-2">
          {['Route A → Delhi: 98% OTD','Route B → Mumbai: 94% OTD','Route C → Pune: 99% OTD'].map((r,i)=>(
            <div key={i} className="flex items-center gap-2 bg-[#fafafa] p-2 rounded-lg border border-[#e5e5e5]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-[10px] font-semibold text-[#525252]">{r}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#fafafa] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4">CASE STUDIES</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.07]">
              AI in the Wild —<br />
              <span className="text-gradient">Real Outcomes.</span>
            </h2>
          </div>
          <p className="text-[#525252] max-w-md text-base leading-relaxed">
            From automated logistics to AI-native fintech — explore how we ship production-grade solutions that move the metrics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.07 }}
              className="bg-white rounded-2xl border border-[#e5e5e5] overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
              style={{ borderTop: `3px solid ${proj.topColor}` }}
            >
              <div className="w-full aspect-[16/9] bg-[#fafafa] p-6 flex items-center justify-center border-b border-[#e5e5e5]">
                {proj.mockup}
              </div>
              <div className="p-6 flex flex-col gap-2.5">
                <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: proj.topColor }}>{proj.category}</span>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-[#0a0a0a] group-hover:text-[#1557FF] transition-colors leading-snug">{proj.title}</h3>
                    <p className="text-sm text-[#737373] mt-0.5">{proj.sub}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#fafafa] border border-[#e5e5e5] flex items-center justify-center text-[#737373] group-hover:bg-[#1557FF] group-hover:text-white group-hover:border-transparent transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {proj.tags.map(t => (
                    <span key={t} className="text-xs font-semibold bg-[#fafafa] border border-[#e5e5e5] px-3 py-1 rounded-full text-[#737373]">{t}</span>
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest mt-1" style={{ color: proj.topColor }}>CASE STUDY →</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#contact" className="text-sm font-semibold text-[#1557FF] hover:text-[#0A3DD6] transition-colors flex items-center gap-1 group">
            View all case studies <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
