import { motion } from 'framer-motion';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 500 };

const CASES = [
  { name: 'Culture Whisper', cat: 'Media & Arts', type: 'Web Platform', icon: 'fa-masks-theater', image: '',
    desc: "A members' platform for discovering arts & culture events, with personalised recommendations and editorial content.",
    tech: ['Yii', 'Backbone.js', 'MySQL', 'Redis'], grad: ['#8B5CF6', '#6D28D9'], stat: '3× engagement', num: '01' },
  { name: 'MoneyAnswers', cat: 'Finance', type: 'E-Commerce Platform', icon: 'fa-sack-dollar', image: '',
    desc: 'Content-driven e-commerce platform with secure Stripe checkout and personalised financial product pages.',
    tech: ['xCart', 'Stripe', 'MySQL'], grad: ['#10B981', '#047857'], stat: '40% more conversions', num: '02' },
  { name: 'Plasticity Brain Centers', cat: 'Healthcare', type: 'Website', icon: 'fa-brain', image: '',
    desc: 'Patient-facing website for a neurological rehabilitation clinic with online appointment booking.',
    tech: ['WordPress', 'MySQL', 'jQuery'], grad: ['#0EA5A4', '#0F766E'], stat: '2× organic traffic', num: '03' },
  { name: 'Echo', cat: 'On-Demand', type: 'Mobile App', icon: 'fa-comment-dots', image: '',
    desc: 'Cross-platform mobile app with in-app payments and real-time messaging across iOS & Android.',
    tech: ['React Native', 'PayPal', 'Twilio'], grad: ['#FF9A5E', '#F26A2E'], stat: '50k+ downloads', num: '04' },
  { name: 'Udrivers', cat: 'Logistics', type: 'Mobile App', icon: 'fa-car-side', image: '',
    desc: 'Driver & rider mobile app with live maps, real-time tracking, and intelligent dispatch routing.',
    tech: ['React Native', 'Google Maps', 'Twilio'], grad: ['#3B82F6', '#1D4ED8'], stat: '99.9% uptime', num: '05' },
  { name: 'KTPH', cat: 'Healthcare', type: 'Web Portal', icon: 'fa-hospital', image: '',
    desc: 'Hospital web portal with secure Google authentication for staff and patient record management.',
    tech: ['CodeIgniter', 'MySQL', 'Google Auth'], grad: ['#F97316', '#EA580C'], stat: '10k+ daily users', num: '06' },
];

function FeaturedCard({ c }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-2"
    >
      <div className="group relative h-full min-h-[360px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-1">
        {/* gradient bg */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(140deg, ${c.grad[0]}, ${c.grad[1]})` }} />
        {/* dot texture */}
        <div className="absolute inset-0 opacity-15 group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
        {/* big icon */}
        <i className={`fa-solid ${c.icon}`} style={{ position: 'absolute', right: 32, bottom: -10, fontSize: 200, color: 'rgba(255,255,255,0.12)', pointerEvents: 'none' }} />
        {/* shine sweep */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1000ms] ease-out"
          style={{ background: 'linear-gradient(100deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%)' }} />

        {/* content */}
        <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">{c.cat}</span>
              <span className="text-[10px] font-semibold text-white/80 bg-black/15 backdrop-blur-sm px-3 py-1.5 rounded-full">{c.type}</span>
            </div>
            <span className="font-extrabold text-white/20 text-5xl leading-none select-none">{c.num}</span>
          </div>

          <div className="mt-12">
            {/* stat pill */}
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">{c.stat}</span>
            </div>
            <h3 className="text-white font-extrabold text-3xl md:text-4xl tracking-[-0.03em] leading-tight mb-3 drop-shadow-sm">{c.name}</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-lg mb-6">{c.desc}</p>
            <div className="flex flex-wrap gap-2 mb-7">
              {c.tech.map(t => (
                <span key={t} className="font-mono text-[10px] font-semibold text-white bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-lg">{t}</span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all duration-300">
              View case study
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <i className="fa-solid fa-arrow-right text-white" style={{ fontSize: 11 }} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SmallCard({ c, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div className="group h-full flex flex-col bg-white border border-[#ece7da] rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/8 hover:border-transparent transition-all duration-400 cursor-pointer">
        {/* cover */}
        <div className="relative h-40 overflow-hidden flex-shrink-0" style={{ background: `linear-gradient(140deg, ${c.grad[0]}, ${c.grad[1]})` }}>
          <div className="absolute inset-0 opacity-15 group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
          <i className={`fa-solid ${c.icon}`} style={{ position: 'absolute', right: 12, bottom: -4, fontSize: 88, color: 'rgba(255,255,255,0.2)' }} />
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-out"
            style={{ background: 'linear-gradient(100deg, transparent 35%, rgba(255,255,255,0.28) 50%, transparent 65%)' }} />
          {/* top bar */}
          <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 pt-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">{c.cat}</span>
            <span className="font-extrabold text-white/20 text-3xl leading-none select-none">{c.num}</span>
          </div>
          {/* name */}
          <h3 className="absolute left-4 right-4 bottom-4 text-white font-extrabold text-lg tracking-[-0.02em] leading-tight drop-shadow-sm">{c.name}</h3>
        </div>

        {/* body */}
        <div className="p-5 flex flex-col flex-grow">
          {/* stat */}
          <div className="inline-flex items-center gap-1.5 bg-[#faf7f0] border border-[#ece7da] rounded-full px-2.5 py-1 mb-3 w-fit">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.grad[0] }} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b6b6b]">{c.stat}</span>
          </div>

          <p className="text-[#737373] text-sm leading-relaxed flex-grow">{c.desc}</p>

          <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
            {c.tech.map(t => (
              <span key={t} className="font-mono text-[10px] font-semibold text-[#8a8a8a] bg-[#faf7f0] border border-[#ece7da] px-2 py-0.5 rounded-md">{t}</span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-[#f0ece2]">
            <span className="text-[10px] font-semibold text-[#b0a898] uppercase tracking-wider">{c.type}</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8048] group-hover:gap-2.5 transition-all duration-300">
              View study <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [featured, ...rest] = CASES;

  return (
    <section id="work" className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#ece7da] relative overflow-hidden">

      {/* subtle background grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(#e8e3d8 1px, transparent 1px), linear-gradient(90deg, #e8e3d8 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.35 }} />

      <div className="relative w-full px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="section-label mb-4" style={{ color: '#FF8048' }}>CASE STUDIES</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-[-0.035em] leading-[1.04]">
              Real clients,<br /><span style={{ ...serif, color: '#FF8048' }}>real products.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 max-w-md">
            <p className="text-[#5a5a5a] leading-relaxed">
              From healthcare portals to on-demand apps — a look at what we've shipped for clients across 17 countries.
            </p>
            {/* stat chips */}
            <div className="flex gap-3 flex-wrap">
              {[['50+', 'Projects'], ['17+', 'Countries'], ['18+', 'Industries']].map(([n, l]) => (
                <div key={l} className="flex items-center gap-2 bg-white border border-[#ece7da] rounded-xl px-4 py-2 shadow-sm">
                  <span className="font-extrabold text-[#FF8048] text-base">{n}</span>
                  <span className="text-xs text-[#9a9a9a] font-medium">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured card (2/3) + one small card (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <FeaturedCard c={featured} />
          <SmallCard c={rest[0]} i={0} />
        </div>

      </div>
    </section>
  );
}
