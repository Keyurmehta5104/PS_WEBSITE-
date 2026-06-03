import { motion } from 'framer-motion';
import { Globe, Smartphone, Cpu, Palette, Cloud, FileCheck2, Wifi, ArrowRight } from 'lucide-react';

const services = [
  { name: 'AI Web Application Development', desc: 'Scalable, intelligent web platforms that automate workflows and surface real-time insights.', tech: ['React', 'Next.js', 'LangChain'], icon: Globe },
  { name: 'AI Mobile App Development',      desc: 'iOS, Android, and cross-platform apps that adapt to user behaviour with on-device intelligence.', tech: ['Flutter', 'React Native', 'Swift'], icon: Smartphone },
  { name: 'AI Agents at Work',              desc: 'Autonomous agents that act like digital teammates — handling tasks, analysing data, making decisions.', tech: ['Agents', 'RAG', 'LangGraph'], icon: Cpu },
  { name: 'Custom AI Development',          desc: 'Bespoke ML models for predictive analytics, NLP, and computer vision tuned to your KPIs.', tech: ['PyTorch', 'TensorFlow', 'MLOps'], icon: Cpu },
  { name: 'UI/UX Consultancy',              desc: 'Human-centred design for AI-powered applications that users understand and trust instantly.', tech: ['Figma', 'Prototyping', 'Research'], icon: Palette },
  { name: 'DevOps & Cloud',                 desc: 'CI/CD, Kubernetes, and AWS/GCP/Azure engineering for production AI workloads at any scale.', tech: ['K8s', 'Terraform', 'AWS'], icon: Cloud },
  { name: 'QA & Automation',                desc: 'Automated and manual QA — including evaluation harnesses for AI models and production agents.', tech: ['Selenium', 'Appium', 'Cypress'], icon: FileCheck2 },
  { name: 'IoT & Edge AI',                  desc: 'Connected device ecosystems with on-device inference, edge computing, and intelligent automation.', tech: ['MQTT', 'Edge', 'Embedded'], icon: Wifi },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="section-label mb-4">OUR SERVICES</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.07]">
              Full-cycle software<br />engineering services.
            </h2>
          </div>
          <p className="text-[#525252] text-base leading-relaxed max-w-md">
            From tech consulting and architecture to agile development,
            DevOps, and production audits — we do it all under one roof.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map(svc => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.name}
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
                className="group bg-white border border-[#e5e5e5] rounded-2xl p-6 flex flex-col gap-4 cursor-pointer hover:border-[#1557FF]/30 hover:shadow-lg hover:shadow-[#1557FF]/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF3FF] text-[#1557FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1557FF] group-hover:text-white transition-all duration-300">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col flex-grow gap-2">
                  <h3 className="font-bold text-[#0a0a0a] text-[14px] leading-snug group-hover:text-[#1557FF] transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-[#737373] text-xs leading-relaxed flex-grow">{svc.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {svc.tech.map(t => (
                    <span key={t} className="text-[10px] font-semibold text-[#a3a3a3] bg-[#fafafa] border border-[#e5e5e5] px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#a3a3a3] group-hover:text-[#1557FF] transition-colors">
                  View More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1557FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
