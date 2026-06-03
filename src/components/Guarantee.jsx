import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: '100% Money-Back Guarantee', desc: 'Not satisfied in the first week? Full refund — zero questions asked.', col: '#1557FF' },
  { icon: Clock,       title: '7-Day Free Trial',          desc: 'Start with a risk-free week — see our team in action before committing.', col: '#38BFFF' },
  { icon: Users,       title: 'Dedicated Expert Teams',    desc: 'Hand-picked engineers vetted for your stack & domain in 3–5 days.', col: '#10b981' },
];

export default function Guarantee() {
  return (
    <section className="py-20 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#080808] rounded-3xl p-10 md:p-16 overflow-hidden relative">

          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1557FF]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label mb-6" style={{ color: '#1557FF' }}>OUR GUARANTEE</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.07] mb-6">
                Outsourcing demands trust.<br />
                <span className="text-gradient">We deliver it.</span>
              </h2>
              <p className="text-[#525252] text-base leading-relaxed mb-8 max-w-lg">
                14+ years of on-time delivery, distributed teams, and zero-surprise development. Start with our 7-day free trial — or claim a 100% refund in the first week.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm font-extrabold text-white tracking-tight">EST. 2010</span>
                <span className="text-[#3a3a3a]">·</span>
                <span className="text-[10px] font-bold text-[#1557FF] uppercase tracking-widest">14+ YEARS OF ON-TIME DELIVERY</span>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="flex flex-col gap-4"
            >
              {features.map(f => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.07] rounded-2xl hover:bg-white/[0.05] transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${f.col}20`, color: f.col }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{f.title}</h4>
                      <p className="text-[#525252] text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="mt-2 flex items-center justify-center bg-[#1557FF] hover:bg-[#0A3DD6] text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-blue-900/30"
              >
                Start Free Trial →
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
