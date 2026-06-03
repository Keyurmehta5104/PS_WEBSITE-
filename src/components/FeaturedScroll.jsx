import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    num: '01',
    label: 'FEATURED',
    title: 'AI Agents & Copilots',
    desc: 'From RAG search to autonomous workflows. Production agents that ship real outcomes — not demos.',
    stats: ['50+ agents live', '6mo avg payback', '15 countries'],
    tag: 'AI Focus',
    visual: (
      <div className="mt-5 bg-black/40 border border-white/[0.06] rounded-xl p-4 flex flex-col gap-2">
        {['Analysing data stream…', 'Tool call: fetch_crm()', 'Action: send_report ✓'].map((l, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 2 ? 'bg-green-400' : 'bg-[#1557FF] animate-pulse'}`} />
            <span className="text-[11px] font-mono text-white/40">{l}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '02',
    label: 'INFRA',
    title: 'Cloud & DevOps',
    desc: 'Kubernetes orchestration, serverless setups on AWS/GCP, and automated CI/CD pipelines.',
    stats: ['99.99% uptime', '40% cost savings', '200+ deploys/mo'],
    tag: 'Infrastructure',
    visual: (
      <div className="mt-5 bg-black/40 border border-white/[0.06] rounded-xl p-4 font-mono text-[11px] leading-relaxed">
        <div className="text-white/40">$ aws deploy --env prod</div>
        <div className="text-green-400">→ health: 100%</div>
        <div className="text-green-400">→ latency: 12ms ✓</div>
        <div className="text-white/20">// zero downtime</div>
      </div>
    ),
  },
  {
    num: '03',
    label: 'APPS',
    title: 'Mobile Ecosystems',
    desc: 'iOS, Android, cross-platform apps built in Flutter & React Native with offline-first sync.',
    stats: ['5M+ installs', '4.8★ avg rating', 'Offline sync'],
    tag: 'Mobile',
    visual: (
      <div className="mt-5 flex gap-3 items-end">
        {['#1557FF', '#38BFFF', '#0A3DD6'].map((c, i) => (
          <div key={i} className="flex-1 rounded-t-xl border border-white/[0.06]"
            style={{ height: `${[56, 80, 44][i]}px`, background: `${c}30` }} />
        ))}
      </div>
    ),
  },
  {
    num: '04',
    label: 'DATA',
    title: 'Data & BI',
    desc: 'Predictive data modelling, real-time dashboards, and business intelligence systems.',
    stats: ['$1B+ decisions', '200+ dashboards', 'Real-time'],
    tag: 'Analytics',
    visual: (
      <div className="mt-5 bg-black/40 border border-white/[0.06] rounded-xl p-4 flex items-end gap-1 h-20">
        {[35, 55, 42, 72, 88, 60, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t"
            style={{ height: `${h}%`, background: i === 6 ? 'linear-gradient(to top,#1557FF,#38BFFF)' : `rgba(21,87,255,${0.15 + i * 0.04})` }} />
        ))}
      </div>
    ),
  },
  {
    num: '05',
    label: 'WEB',
    title: 'Web Platforms',
    desc: 'High-availability portals and corporate intranets in React, Next.js, Node.js for heavy traffic.',
    stats: ['10M+ daily hits', '98+ Lighthouse', '35+ integrations'],
    tag: 'Web Tech',
    visual: (
      <div className="mt-5 bg-black/40 border border-white/[0.06] rounded-xl p-4 font-mono text-[11px] leading-relaxed">
        <div className="text-white/40">const app = build('next');</div>
        <div className="text-white/40">app.deploy();</div>
        <div className="text-green-400">// → live ✓</div>
        <div className="text-white/20 mt-1">app.professionalsofttech.dev</div>
      </div>
    ),
  },
];

export default function FeaturedScroll() {
  return (
    <section className="py-20 bg-[#080808] border-b border-white/[0.06] overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
        <div>
          <p className="section-label mb-3" style={{ color: '#1557FF' }}>WHAT WE SHIP</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.07]">
            Five pillars of<br />
            <span className="text-gradient">engineering excellence.</span>
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1557FF] animate-pulse" />
          SCROLL TO EXPLORE →
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 pb-2">
        {cards.map((card, idx) => (
          <motion.div
            key={card.num}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            className="flex-shrink-0 w-[300px] md:w-[340px] bg-[#0f0f0f] border border-white/[0.07] rounded-2xl p-7 flex flex-col justify-between h-[450px] group cursor-pointer hover:border-[#1557FF]/30 hover:bg-[#0a0f1f] transition-all duration-300"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <span className="font-extrabold text-[52px] text-white/[0.06] leading-none tracking-tight select-none">
                  {card.num}
                </span>
                <span className="text-[9px] font-bold border border-white/[0.1] text-white/30 px-2.5 py-1 rounded-full uppercase tracking-widest mt-2">
                  {card.tag}
                </span>
              </div>
              <p className="text-[9px] font-black tracking-[0.15em] text-white/20 uppercase mb-2">{card.label}</p>
              <h3 className="text-[17px] font-bold text-white mb-3 tracking-tight group-hover:text-[#38BFFF] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-[#525252] text-sm leading-relaxed">{card.desc}</p>
              {card.visual}
            </div>

            <div>
              <div className="border-t border-white/[0.06] pt-4 mb-4 flex flex-wrap gap-2">
                {card.stats.map(s => (
                  <span key={s} className="text-[10px] font-semibold text-white/30 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-[#1557FF]/70 group-hover:text-[#38BFFF] transition-colors">
                Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
