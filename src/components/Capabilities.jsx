import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const caps = [
  {
    num: '01',
    label: 'AI & COPILOTS',
    title: 'AI Agents & Copilots',
    tag: 'AI Focus',
    stats: '50+ agents live  ·  6mo avg payback  ·  15 countries',
    desc: 'Bespoke LLM integrations, autonomous workflow agents, and predictive retrieval-augmented generation systems.',
  },
  {
    num: '02',
    label: 'CLOUD & DEVOPS',
    title: 'Cloud & DevOps',
    tag: 'Infrastructure',
    stats: '99.99% uptime  ·  40% infra savings  ·  200+ deploys',
    desc: 'Kubernetes orchestration, serverless cloud setups on AWS/GCP, and secure automated CI/CD deployment channels.',
  },
  {
    num: '03',
    label: 'ENTERPRISE WEB',
    title: 'Enterprise Web Platforms',
    tag: 'Web Tech',
    stats: '10M+ daily hits  ·  98+ Lighthouse score  ·  35+ integrations',
    desc: 'High-availability web portals and corporate intranets engineered in React, Next.js, and Node.js for heavy traffic.',
  },
  {
    num: '04',
    label: 'MOBILE ECOSYSTEMS',
    title: 'Mobile Ecosystems',
    tag: 'Mobile Tech',
    stats: '5M+ App installs  ·  4.8 Avg store rating  ·  Offline sync',
    desc: 'Responsive, highly engaging native and hybrid apps for iOS & Android built using Flutter and React Native.',
  },
];

export default function Capabilities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-white border-b border-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Capabilities Grid (No Section Heading) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {caps.map((cap) => (
            <motion.div
              key={cap.num}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              className="bg-[#0f0f0f] border border-white/5 p-8 md:p-10 rounded-2xl flex flex-col justify-between h-[360px] relative overflow-hidden group transition-all duration-300 shadow-xl hover:border-[#6c2bd9]/40 cursor-pointer"
            >
              {/* Card Top Label Row */}
              <div className="flex justify-between items-center z-10">
                <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                  {cap.num} &middot; {cap.label}
                </span>
                <span className="text-xs bg-[#6c2bd9]/10 text-[#6c2bd9] px-2.5 py-1 rounded border border-[#6c2bd9]/25 font-bold uppercase tracking-wider">
                  {cap.tag}
                </span>
              </div>

              {/* Card Middle Title */}
              <div className="z-10 mt-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight flex items-center gap-2 group-hover:text-purple-300 transition-colors">
                  {cap.title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </h3>
                <p className="text-gray-400 text-xs md:text-sm font-normal leading-relaxed max-w-md">
                  {cap.desc}
                </p>
              </div>

              {/* Card Bottom Stats */}
              <div className="border-t border-white/10 pt-6 mt-6 z-10 flex flex-col">
                <span className="text-[11px] font-bold tracking-wider text-purple-400 uppercase mb-1">Performance Metrics</span>
                <span className="text-xs text-white font-medium tracking-wide">
                  {cap.stats}
                </span>
              </div>

              {/* Glowing Background Radial */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
