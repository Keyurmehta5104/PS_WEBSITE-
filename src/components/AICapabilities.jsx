import { motion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles, BrainCircuit, MessageSquare, Eye, BarChart3, Layers, Database, Settings, TrendingUp, Workflow, Lightbulb } from 'lucide-react';

const caps = [
  { icon: Bot,          name: 'AI Agents',               desc: 'Autonomous reasoning agents that plan, call tools, and ship outcomes.' },
  { icon: Sparkles,     name: 'Generative AI',            desc: 'Fine-tuned LLMs, text-to-image, and multimodal pipelines.' },
  { icon: BrainCircuit, name: 'Custom AI Services',       desc: 'Bespoke models tuned to your data and KPIs.' },
  { icon: MessageSquare,name: 'NLP Solutions',            desc: 'Classification, extraction, summarisation, semantic search.' },
  { icon: Eye,          name: 'Computer Vision',          desc: 'Object detection, OCR, quality control, real-time video.' },
  { icon: BarChart3,    name: 'Data Science & Analytics', desc: 'Forecasting models, dashboards, and decision intelligence.' },
  { icon: Layers,       name: 'Model Expertise',          desc: 'Claude, GPT-4, Gemini, Llama, Mistral — best fit for your task.' },
  { icon: Database,     name: 'AI Tech Stack',            desc: 'From OpenAI & Anthropic to LangChain and vector databases.' },
  { icon: Settings,     name: 'AI Operations',            desc: 'MLOps pipelines, evaluation harnesses, and feedback loops.' },
  { icon: TrendingUp,   name: 'Machine Learning',         desc: 'Supervised, unsupervised, and reinforcement learning at scale.' },
  { icon: Workflow,     name: 'AI & ML Overview',         desc: 'Discovery, feasibility analysis, and ROI-driven roadmapping.' },
  { icon: Lightbulb,    name: 'Business Transformation',  desc: 'AI-driven workflows, human-in-the-loop, intelligent automation.' },
];

export default function AICapabilities() {
  return (
    <section className="py-24 md:py-32 bg-[#080808] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: '#1557FF' }}>AI & MACHINE LEARNING</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.07]">
              Advanced AI capabilities,<br />
              <span className="text-gradient">productionised.</span>
            </h2>
            <p className="text-[#525252] mt-5 text-sm md:text-base leading-relaxed">
              AI agents that work like your team — interacting with users, analysing data, automating repetitive workflows. From custom LLM fine-tuning and NLP to computer vision, predictive analytics, and MLOps — every solution tailored to your use case.
            </p>
          </div>
          <a href="#contact" className="flex items-center gap-2 text-sm font-semibold text-[#1557FF] hover:text-[#38BFFF] transition-colors whitespace-nowrap">
            Explore all AI services <ArrowRight className="w-4 h-4" />
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
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.name}
                variants={{ hidden: { y: 18, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
                className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-3 cursor-pointer hover:bg-[#050f2a] hover:border-[#1557FF]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1557FF]/10 text-[#1557FF] flex items-center justify-center group-hover:bg-[#1557FF] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-[#38BFFF] transition-colors">{cap.name}</h3>
                <p className="text-[#525252] text-xs leading-relaxed flex-grow">{cap.desc}</p>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-[#525252] group-hover:text-[#1557FF] transition-colors mt-auto pt-1">
                  Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
