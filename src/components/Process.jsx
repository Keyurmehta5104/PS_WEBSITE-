import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const ORANGE   = '#FF8048';
const AI_COLOR = '#6c5ce7';

const STAGES = [
  {
    n: '01', title: 'Discovery',
    ai:    'Requirement breakdown, feasibility scans, effort estimates drawn from 500+ past builds.',
    human: 'Deciding what is truly worth building — and what gets cut.',
  },
  {
    n: '02', title: 'Strategy & Architecture',
    ai:    'Technology mapping, stack benchmarking, pattern matching across similar products.',
    human: 'The architecture your business will depend on for the next 5 years.',
  },
  {
    n: '03', title: 'Design',
    ai:    'Rapid UI exploration, variant generation, automated accessibility scanning.',
    human: 'Whether it actually feels right to a real user — the taste call.',
  },
  {
    n: '04', title: 'Development',
    ai:    'Code generation, scaffolding, test writing, automated refactoring at speed.',
    human: 'Production-grade review, security hardening, every scale decision.',
  },
  {
    n: '05', title: 'QA & Testing',
    ai:    'End-to-end test coverage, edge-case generation, regression detection.',
    human: 'Final sign-off that it is genuinely ready to ship.',
  },
  {
    n: '06', title: 'Launch & Growth',
    ai:    'Performance monitoring, anomaly alerts, iteration-speed data at scale.',
    human: 'The strategic moves that keep you ahead of the market.',
  },
];

export default function Process() {
  const { dark } = useTheme();
  const C = t(dark);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(null);

  const rowBg    = dark ? '#161412' : '#ffffff';
  const rowHover = dark ? '#1e1c18' : '#faf9f7';
  const border   = dark ? '#272420' : '#ece8e0';

  return (
    <section
      id="process"
      ref={ref}
      style={{ background: C.bg, transition: 'background 0.3s' }}
      className="py-20 md:py-28 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-7" style={{ background: ORANGE }} />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] m-0" style={{ color: ORANGE }}>
              How We Build
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2
                className="font-extrabold tracking-tight leading-[1.06] m-0"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', color: C.heading }}
              >
                AI accelerates every stage of your build.
              </h2>
              <p
                className="m-0"
                style={{
                  fontSize: 'clamp(1.6rem, 3.6vw, 2.8rem)',
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: 'italic',
                  color: ORANGE,
                  lineHeight: 1.15,
                  marginTop: 4,
                }}
              >
                A senior engineer owns every outcome.
              </p>
            </div>

            <p
              className="text-[13px] leading-relaxed max-w-xs m-0 md:text-right flex-shrink-0"
              style={{ color: C.muted }}
            >
              From first call to post-launch growth — here's exactly where AI
              compresses the work, and where judgment still calls the shots.
            </p>
          </div>
        </motion.div>

        {/* ── Column headers ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid gap-0 mb-2 px-4"
          style={{ gridTemplateColumns: '160px 1fr 1fr' }}
        >
          <div />
          <div className="flex items-center gap-2 pb-2 pl-5">
            <span
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ background: AI_COLOR }}
            >
              <i className="fa-solid fa-microchip" style={{ fontSize: 8, color: '#fff' }} />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: AI_COLOR }}>
              AI Handles
            </span>
          </div>
          <div className="flex items-center gap-2 pb-2 pl-5">
            <span
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ background: ORANGE }}
            >
              <i className="fa-solid fa-user" style={{ fontSize: 8, color: '#fff' }} />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: ORANGE }}>
              Human Decides
            </span>
          </div>
        </motion.div>

        {/* ── Stage rows ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${border}` }}
        >
          {STAGES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="grid"
              style={{
                gridTemplateColumns: '160px 1fr 1fr',
                background: hovered === i ? rowHover : rowBg,
                borderBottom: i < STAGES.length - 1 ? `1px solid ${border}` : 'none',
                transition: 'background 0.18s',
              }}
            >
              {/* Stage label */}
              <div
                className="flex flex-col justify-center gap-1 px-5 py-5"
                style={{ borderRight: `1px solid ${border}` }}
              >
                <span
                  className="font-black leading-none"
                  style={{
                    fontSize: 32,
                    color: hovered === i ? ORANGE : (dark ? '#2e2a26' : '#ece8e0'),
                    transition: 'color 0.18s',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </span>
                <span
                  className="font-bold text-[11.5px] leading-tight"
                  style={{ color: C.heading }}
                >
                  {s.title}
                </span>
              </div>

              {/* AI column */}
              <div
                className="flex items-start gap-3 px-5 py-5"
                style={{ borderRight: `1px solid ${border}`, borderLeft: `3px solid ${hovered === i ? AI_COLOR : 'transparent'}`, transition: 'border-color 0.18s' }}
              >
                <p className="text-[12.5px] leading-relaxed m-0" style={{ color: C.body }}>
                  {s.ai}
                </p>
              </div>

              {/* Human column */}
              <div
                className="flex items-start gap-3 px-5 py-5"
                style={{ borderLeft: `3px solid ${hovered === i ? ORANGE : 'transparent'}`, transition: 'border-color 0.18s' }}
              >
                <p className="text-[12.5px] leading-relaxed m-0" style={{ color: C.body }}>
                  {s.human}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="text-[11.5px] mt-5 m-0"
          style={{ color: C.muted }}
        >
          Every stage. Every time. No exceptions. —{' '}
          <span style={{ color: ORANGE, fontWeight: 600 }}>That's the PST standard.</span>
        </motion.p>

      </div>
    </section>
  );
}
