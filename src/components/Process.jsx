import { motion } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const steps = [
  {
    num: 1,
    title: 'Discover',
    desc: 'Requirement understanding, data audits, and use-case discovery — we challenge assumptions before we write code.',
  },
  {
    num: 2,
    title: 'Strategize',
    desc: 'AI strategy and feasibility — we map the right model, dataset, and ROI signal to your business KPI.',
  },
  {
    num: 3,
    title: 'Build',
    desc: 'Model design, fine-tuning, and application integration — production-grade AI engineered to scale.',
  },
  {
    num: 4,
    title: 'Deliver & Learn',
    desc: 'Continuous learning and optimization — evaluation harnesses, feedback loops, and human-in-the-loop.',
  },
];

export default function Process() {
  const { dark } = useTheme();
  const C = t(dark);

  return (
    <section
      id="process"
      style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, transition: 'background 0.3s' }}
      className="py-24 md:py-32"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: C.muted }}>
            — Our AI Development Approach
          </p>
          <h2 className="leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
            <span className="font-extrabold tracking-[-0.03em]" style={{ color: C.heading }}>How we build </span>
            <span style={{
              color: C.heading,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}>
              AI-powered applications.
            </span>
          </h2>
          <p style={{ color: C.body, maxWidth: 500 }} className="text-base leading-relaxed">
            A scalable, future-ready AI development process refined across 8,000+ software and AI projects.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="hidden lg:block">

          {/* Circle + line row */}
          <div className="relative flex items-center mb-8">
            {/* Orange connecting line — full width behind circles */}
            <motion.div
              className="absolute h-0.5 bg-[#FF8048]"
              style={{ left: 20, right: 20, top: '50%', transform: 'translateY(-50%)' }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            />
            {/* Circles evenly distributed */}
            <div className="relative z-10 flex justify-between w-full">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#FF8048' }}
                >
                  <span className="font-bold text-white text-sm">{step.num}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text columns — aligned under each circle */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-lg font-bold mb-2 tracking-tight" style={{ color: C.heading }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.body }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile fallback — stacked */}
        <div className="lg:hidden flex flex-col gap-10">
          {steps.map((step, idx) => (
            <div key={step.num} className="flex gap-5">
              <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: '#FF8048' }}>
                <span className="font-bold text-white text-sm">{step.num}</span>
              </div>
              <div>
                <h3 className="text-base font-bold mb-1" style={{ color: C.heading }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.body }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
