import { motion } from 'framer-motion';

const caps = [
  { icon: 'fa-robot',         name: 'AI Agents',               desc: 'Autonomous reasoning agents that plan, call tools, and ship outcomes.' },
  { icon: 'fa-wand-magic-sparkles', name: 'Generative AI',     desc: 'Fine-tuned LLMs, text-to-image, and multimodal pipelines.' },
  { icon: 'fa-brain',         name: 'Custom AI Services',       desc: 'Bespoke models tuned to your data and KPIs.' },
  { icon: 'fa-comment-dots',  name: 'NLP Solutions',            desc: 'Classification, extraction, summarisation, semantic search.' },
  { icon: 'fa-eye',           name: 'Computer Vision',          desc: 'Object detection, OCR, quality control, real-time video.' },
  { icon: 'fa-chart-column',  name: 'Data Science & Analytics', desc: 'Forecasting models, dashboards, and decision intelligence.' },
  { icon: 'fa-layer-group',   name: 'Model Expertise',          desc: 'Claude, GPT-4, Gemini, Llama, Mistral — best fit for your task.' },
  { icon: 'fa-database',      name: 'AI Tech Stack',            desc: 'From OpenAI & Anthropic to LangChain and vector databases.' },
  { icon: 'fa-gear',          name: 'AI Operations',            desc: 'MLOps pipelines, evaluation harnesses, and feedback loops.' },
  { icon: 'fa-arrow-trend-up', name: 'Machine Learning',        desc: 'Supervised, unsupervised, and reinforcement learning at scale.' },
  { icon: 'fa-diagram-project', name: 'AI & ML Overview',       desc: 'Discovery, feasibility analysis, and ROI-driven roadmapping.' },
  { icon: 'fa-lightbulb',     name: 'Business Transformation',  desc: 'AI-driven workflows, human-in-the-loop, intelligent automation.' },
];

export default function AICapabilities() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4EC] border-b border-[#ececec]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: '#FF8048' }}>AI & MACHINE LEARNING</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2b2b2b] tracking-[-0.03em] leading-[1.07]">
              Advanced AI capabilities,<br />
              <span className="text-gradient">productionised.</span>
            </h2>
            <p className="text-[#4D4D4D] mt-5 text-sm md:text-base leading-relaxed">
              AI agents that work like your team — interacting with users, analysing data, automating repetitive workflows. From custom LLM fine-tuning and NLP to computer vision, predictive analytics, and MLOps — every solution tailored to your use case.
            </p>
          </div>
          <a href="#contact" className="flex items-center gap-2 text-sm font-semibold text-[#FF8048] hover:text-[#F26A2E] transition-colors whitespace-nowrap">
            Explore all AI services <i className="fa-solid fa-arrow-right w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {caps.map(cap => {
            return (
              <motion.div
                key={cap.name}
                variants={{ hidden: { y: 18, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
                className="group bg-white border border-[#ececec] rounded-2xl p-6 flex flex-col gap-3 cursor-pointer shadow-[0_16px_40px_-28px_rgba(20,20,30,0.25)] hover:border-[#FF8048] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF1E9] text-[#FF8048] flex items-center justify-center group-hover:bg-[#FF8048] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <i className={`fa-solid ${cap.icon} w-4.5 h-4.5`} />
                </div>
                <h3 className="font-bold text-[#2b2b2b] text-sm group-hover:text-[#F26A2E] transition-colors">{cap.name}</h3>
                <p className="text-[#4D4D4D] text-xs leading-relaxed flex-grow">{cap.desc}</p>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-[#8a8a8a] group-hover:text-[#FF8048] transition-colors mt-auto pt-1">
                  Explore <i className="fa-solid fa-arrow-right w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
