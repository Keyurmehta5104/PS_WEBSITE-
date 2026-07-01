import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const ORANGE = '#5B3FA0';
const AI_BG   = '#edeaff';   // lavender
const AI_FG   = '#6c5ce7';   // purple
const HU_BG   = '#ffe9f0';   // pink
const HU_FG   = '#EB2F5B';   // pink

const STAGES = [
  {
    stage: '01',
    title: 'Inquiry & Scoping',
    ai:    'Instant requirement breakdown, effort & timeline estimates.',
    human: 'Whether the idea is worth building at all.',
  },
  {
    stage: '02',
    title: 'Discovery & Architecture',
    ai:    'Research synthesis, pattern matching from 500+ past builds.',
    human: 'The architecture you\'ll live with for years.',
  },
  {
    stage: '03',
    title: 'Design',
    ai:    'Rapid UI exploration, variants and accessibility checks.',
    human: 'Whether it actually feels right to a real user.',
  },
  {
    stage: '04',
    title: 'Build',
    ai:    'Codegen, scaffolding, test generation, refactors.',
    human: 'Production-grade code review, security & scale.',
  },
  {
    stage: '05',
    title: 'QA & Testing',
    ai:    'Automated test coverage and edge-case generation.',
    human: 'Sign-off that it\'s genuinely done.',
  },
  {
    stage: '06',
    title: 'Delivery & Growth',
    ai:    'Monitoring, anomaly detection, iteration speed.',
    human: 'The roadmap that keeps you ahead.',
  },
];

export default function AIApproach() {
  const { dark } = useTheme();
  const C = t(dark);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="ai-approach"
      style={{ background: C.bg, transition: 'background 0.3s' }}
      className="py-20 md:py-28 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: ORANGE }} />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: ORANGE }}>
              End-to-End AI-Powered Delivery
            </p>
          </div>

          {/* Heading */}
          <h2
            className="font-extrabold tracking-tight leading-[1.04] mb-2"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: C.heading }}
          >
            AI runs through every step.
          </h2>
          <p
            className="leading-tight mb-6"
            style={{
              fontSize: 'clamp(1.9rem, 4.2vw, 3.2rem)',
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: ORANGE,
            }}
          >
            A senior human owns every one.
          </p>

          {/* Body */}
          <p className="text-[15px] leading-relaxed max-w-lg" style={{ color: C.body }}>
            From your first inquiry to final delivery, AI compresses the busywork at
            each stage. Here's where it speeds us up — and where judgment still
            calls the shots.
          </p>
        </motion.div>

        {/* ── Timeline bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-8 px-1"
        >
          {/* Line */}
          <div
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2"
            style={{ height: 2, background: `linear-gradient(90deg, ${ORANGE} 30%, ${dark ? '#3a3530' : '#e5e0d8'} 30%)` }}
          />
          {/* Dots */}
          <div className="relative grid gap-0" style={{ gridTemplateColumns: `repeat(${STAGES.length}, 1fr)` }}>
            {STAGES.map((s, i) => (
              <div key={s.stage} className="flex justify-center">
                <div
                  className="w-4 h-4 rounded-full relative z-10 flex items-center justify-center"
                  style={{
                    background: i < 2 ? ORANGE : (dark ? '#2a2520' : '#f5f2ed'),
                    border: `2px solid ${i < 2 ? ORANGE : (dark ? '#4a4540' : '#c8c0b4')}`,
                  }}
                >
                  {i < 2 && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Stage cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {STAGES.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2.5 rounded-2xl p-4"
              style={{
                background: dark ? '#1e1c19' : '#ffffff',
                border: `1px solid ${dark ? '#2e2a26' : '#e8e3db'}`,
                boxShadow: dark ? 'none' : '0 1px 4px rgba(0,0,0,0.05)',
              }}
            >
              {/* Stage label */}
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em] m-0"
                style={{ color: C.muted }}
              >
                Stage {s.stage}
              </p>

              {/* Stage title */}
              <p
                className="text-[13px] font-bold leading-snug m-0"
                style={{ color: C.heading }}
              >
                {s.title}
              </p>

              {/* AI card */}
              <div
                className="rounded-xl p-3 flex flex-col gap-2"
                style={{ background: dark ? '#1a1730' : AI_BG }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: AI_FG }}
                >
                  <i className="fa-solid fa-sparkles" style={{ fontSize: 10, color: '#fff' }} />
                </div>
                <p className="text-[11px] leading-relaxed m-0" style={{ color: dark ? '#a89ee8' : '#4a3f8a' }}>
                  {s.ai}
                </p>
              </div>

              {/* Human card */}
              <div
                className="rounded-xl p-3 flex flex-col gap-2"
                style={{ background: dark ? '#2a1420' : HU_BG }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: HU_FG }}
                >
                  <i className="fa-solid fa-user" style={{ fontSize: 10, color: '#fff' }} />
                </div>
                <p className="text-[11px] leading-relaxed m-0" style={{ color: dark ? '#e8a070' : '#a05020' }}>
                  {s.human}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
