import { motion } from 'framer-motion';

const cards = [
  {
    num: '01',
    label: 'FEATURED',
    title: 'AI Agents & Copilots',
    desc: 'From RAG search to autonomous workflows. Production agents that ship real outcomes — not demos.',
    stats: ['50+ agents live', '6mo avg payback', '15 countries'],
    tag: 'AI Focus',
    visual: (
      <div className="mt-5 bg-[#F7F8FA] border border-[#ececec] rounded-xl p-4 flex flex-col gap-2">
        {['Analysing data stream…', 'Tool call: fetch_crm()', 'Action: send_report ✓'].map((l, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 2 ? 'bg-green-500' : 'bg-[#FF8048] animate-pulse'}`} />
            <span className="text-[11px] font-mono text-[#8a8a8a]">{l}</span>
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
      <div className="mt-5 bg-[#F7F8FA] border border-[#ececec] rounded-xl p-4 font-mono text-[11px] leading-relaxed">
        <div className="text-[#4D4D4D]">$ aws deploy --env prod</div>
        <div className="text-green-600">→ health: 100%</div>
        <div className="text-green-600">→ latency: 12ms ✓</div>
        <div className="text-[#8a8a8a]">// zero downtime</div>
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
        {['#FF8048', '#FFB066', '#F26A2E'].map((c, i) => (
          <div key={i} className="flex-1 rounded-t-xl border border-[#ececec]"
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
      <div className="mt-5 bg-[#F7F8FA] border border-[#ececec] rounded-xl p-4 flex items-end gap-1 h-20">
        {[35, 55, 42, 72, 88, 60, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t"
            style={{ height: `${h}%`, background: i === 6 ? 'linear-gradient(to top,#FF8048,#FFB066)' : `rgba(255,128,72,${0.15 + i * 0.04})` }} />
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
      <div className="mt-5 bg-[#F7F8FA] border border-[#ececec] rounded-xl p-4 font-mono text-[11px] leading-relaxed">
        <div className="text-[#4D4D4D]">const app = build('next');</div>
        <div className="text-[#4D4D4D]">app.deploy();</div>
        <div className="text-green-600">// → live ✓</div>
        <div className="text-[#8a8a8a] mt-1">app.professionalsofttech.dev</div>
      </div>
    ),
  },
];

export default function FeaturedScroll() {
  return (
    <section className="py-20 bg-[#F7F8FA] border-b border-[#ececec] overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
        <div>
          <p className="section-label mb-3" style={{ color: '#FF8048' }}>WHAT WE SHIP</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2b2b2b] tracking-[-0.03em] leading-[1.07]">
            Five pillars of<br />
            <span className="text-gradient">engineering excellence.</span>
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a8a8a]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8048] animate-pulse" />
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
            className="flex-shrink-0 w-[300px] md:w-[340px] bg-white border border-[#ececec] rounded-2xl p-7 flex flex-col justify-between h-[450px] group cursor-pointer hover:border-[#FF8048]/40 transition-all duration-300 shadow-[0_16px_40px_-28px_rgba(20,20,30,0.25)]"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <span className="font-extrabold text-[52px] text-[#FF8048]/15 leading-none tracking-tight select-none">
                  {card.num}
                </span>
                <span className="text-[9px] font-bold border border-[#ececec] text-[#8a8a8a] px-2.5 py-1 rounded-full uppercase tracking-widest mt-2">
                  {card.tag}
                </span>
              </div>
              <p className="text-[9px] font-black tracking-[0.15em] text-[#8a8a8a] uppercase mb-2">{card.label}</p>
              <h3 className="text-[17px] font-bold text-[#2b2b2b] mb-3 tracking-tight group-hover:text-[#F26A2E] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-[#4D4D4D] text-sm leading-relaxed">{card.desc}</p>
              {card.visual}
            </div>

            <div>
              <div className="border-t border-[#ececec] pt-4 mb-4 flex flex-wrap gap-2">
                {card.stats.map(s => (
                  <span key={s} className="text-[10px] font-semibold text-[#4D4D4D] bg-[#F7F8FA] border border-[#ececec] px-2.5 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-[#FF8048] group-hover:text-[#F26A2E] transition-colors">
                Learn More <i className="fa-solid fa-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
