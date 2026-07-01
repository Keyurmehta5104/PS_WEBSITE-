import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ to, prefix = '', suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const end   = parseInt(to, 10);
    const steps = Math.min(end, 60);
    const inc   = Math.ceil(end / steps);
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= end) { setVal(end); clearInterval(t); }
      else setVal(cur);
    }, 1200 / steps);
    return () => clearInterval(t);
  }, [inView, to]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

const stats = [
  { to: '500',  suffix: '+',  label: 'Satisfied Clients',     sub: 'Across 17+ countries',          col: 'text-[#5B3FA0]'  },
  { to: '1000', suffix: '+',  label: 'Projects Delivered',    sub: '100% delivery success',          col: 'text-[#2b2b2b]'  },
  { to: '30',   suffix: '+',  label: 'Expert Engineers',      sub: 'Under one roof',                 col: 'text-[#5B3FA0]' },
  { to: '17',   suffix: '+',  label: 'Countries Served',      sub: 'Across four continents',         col: 'text-[#2b2b2b]'  },
  { to: '14',   suffix: '+',  label: 'Years of Excellence',   sub: 'Engineering since 2010',         col: 'text-[#5B3FA0]'    },
  { to: '95',   suffix: '%',  label: 'Client Retention',      sub: 'Clients who always come back',   col: 'text-[#2b2b2b]'  },
  { to: '92',   suffix: '%',  label: 'On-Time Delivery',      sub: 'Sprint after sprint',            col: 'text-[#5B3FA0]'    },
  { to: '50',   prefix: '$', suffix: 'M+', label: 'Client Cost Savings', sub: 'Through smart engineering', col: 'text-[#2b2b2b]' },
];

export default function StatsImpact() {
  return (
    <section className="py-24 md:py-32 bg-[#ffffff] border-b border-[#ececec]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <p className="section-label mb-4" style={{ color: '#5B3FA0' }}>IMPACT AT SCALE</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2b2b2b] tracking-[-0.03em] leading-[1.07]">
              Built for outcomes.<br />
              <span className="text-gradient">Proven at scale.</span>
            </h2>
          </div>
          <p className="text-[#4D4D4D] text-base md:text-lg leading-relaxed max-w-lg">
            Businesses we partner with see an average{' '}
            <span className="text-[#2b2b2b] font-semibold">90% efficiency increase</span> in their
            first year working with us.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(s => (
            <motion.div
              key={s.label}
              variants={{ hidden: { y: 24, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } }}
              className="bg-white border border-[#ececec] rounded-2xl p-6 md:p-7 flex flex-col gap-2 shadow-[0_16px_40px_-28px_rgba(20,20,30,0.25)] hover:border-[#5B3FA0] transition-all duration-300"
            >
              <span className={`text-3xl md:text-4xl font-extrabold tracking-tight ${s.col}`}>
                <CountUp to={s.to} prefix={s.prefix || ''} suffix={s.suffix} />
              </span>
              <span className="text-[#2b2b2b] font-semibold text-sm">{s.label}</span>
              <span className="text-[#8a8a8a] text-xs">{s.sub}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
