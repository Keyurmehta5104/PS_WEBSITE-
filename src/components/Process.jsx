import { motion } from 'framer-motion';

const steps = [
  {
    num: '01', title: 'Discover',
    desc: 'Requirement deep-dives, data audits, and use-case discovery — we challenge assumptions before writing a single line of code.',
    chips: ['Stakeholder workshops', 'KPI definition', 'Feasibility analysis'],
  },
  {
    num: '02', title: 'Strategize',
    desc: 'AI strategy and feasibility mapping — identifying the right model, dataset, and ROI signal aligned to your business goals.',
    chips: ['Architecture design', 'Tech stack selection', 'Roadmap planning'],
  },
  {
    num: '03', title: 'Build',
    desc: 'Model design, fine-tuning, and application integration — production-grade software engineered to scale in rapid sprints.',
    chips: ['Agile sprints', 'Continuous QA', 'CI/CD pipelines'],
  },
  {
    num: '04', title: 'Deliver & Learn',
    desc: 'Zero-downtime deployment, evaluation harnesses, feedback loops, and continuous iteration — your product never stops improving.',
    chips: ['Production launch', 'Performance tracking', 'Ongoing updates'],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">HOW WE BUILD</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.07]">
              How we build <span className="text-gradient">AI-powered applications.</span>
            </h2>
            <p className="text-[#525252] mt-5 text-base md:text-lg leading-relaxed">
              A scalable, future-ready process refined across 1,000+ software and AI projects.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connector */}
          <div className="hidden lg:block absolute top-[76px] left-[12.5%] right-[12.5%] h-px border-t border-dashed border-[#e5e5e5] z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col p-8 group"
            >
              {/* Number */}
              <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#e5e5e5] flex items-center justify-center mb-8 group-hover:border-[#FF8048] group-hover:bg-[#FF8048] transition-all duration-300 shadow-sm">
                <span className="font-extrabold text-lg text-[#FF8048] group-hover:text-white transition-colors">
                  {step.num}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-[#0a0a0a] mb-3 tracking-tight group-hover:text-[#FF8048] transition-colors">
                {step.title}
              </h3>

              <p className="text-[#737373] text-sm leading-relaxed mb-5 flex-grow">{step.desc}</p>

              <div className="flex flex-col gap-1.5">
                {step.chips.map(c => (
                  <div key={c} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8048]/40 flex-shrink-0" />
                    <span className="text-[11px] font-semibold text-[#a3a3a3] uppercase tracking-wide">{c}</span>
                  </div>
                ))}
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-px bg-[#e5e5e5]" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
