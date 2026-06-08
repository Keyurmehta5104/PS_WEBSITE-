import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 500 };

/* Real projects from professionalsofttech.com/portfolio.
   Drop a screenshot in /public/work/<file>.jpg and set `image` to show it
   instead of the coloured cover — e.g. image: '/work/culture-whisper.jpg'. */
const CASES = [
  { name: 'Culture Whisper', cat: 'Media & Arts', type: 'Web Platform', icon: 'fa-masks-theater', image: '',
    desc: 'A members’ platform for discovering arts & culture events, with personalised recommendations.',
    tech: ['Yii', 'Backbone.js', 'MySQL', 'Redis'], grad: ['#8B5CF6', '#6D28D9'] },
  { name: 'MoneyAnswers', cat: 'Finance · E-Commerce', type: 'E-Commerce Platform', icon: 'fa-sack-dollar', image: '',
    desc: 'A content-driven e-commerce platform with a secure Stripe checkout experience.',
    tech: ['xCart', 'Stripe', 'MySQL'], grad: ['#10B981', '#047857'] },
  { name: 'Plasticity Brain Centers', cat: 'Healthcare', type: 'Website', icon: 'fa-brain', image: '',
    desc: 'A patient-facing website for a neurological rehabilitation clinic and its programs.',
    tech: ['WordPress', 'MySQL', 'jQuery'], grad: ['#0EA5A4', '#0F766E'] },
  { name: 'Echo', cat: 'On-Demand', type: 'Mobile App', icon: 'fa-comment-dots', image: '',
    desc: 'A cross-platform mobile app with in-app payments and real-time messaging.',
    tech: ['React Native', 'PayPal', 'Twilio'], grad: ['#FF9A5E', '#F26A2E'] },
  { name: 'Udrivers', cat: 'Logistics', type: 'Mobile App', icon: 'fa-car-side', image: '',
    desc: 'A driver & rider mobile app with live maps, tracking, and dispatch.',
    tech: ['React Native', 'Google Maps', 'Twilio'], grad: ['#3B82F6', '#1D4ED8'] },
  { name: 'KTPH', cat: 'Healthcare', type: 'Web Portal', icon: 'fa-hospital', image: '',
    desc: 'A hospital web portal with secure Google authentication for staff and patients.',
    tech: ['CodeIgniter', 'MySQL', 'Google Auth'], grad: ['#F97316', '#EA580C'] },
];

function CaseCard({ c, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div className="group h-full flex flex-col bg-white border border-[#ece7da] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(242,106,46,0.5)] transition-all duration-300 cursor-pointer">
        {/* cover */}
        <div className="relative h-44 md:h-48 overflow-hidden" style={{ background: `linear-gradient(140deg, ${c.grad[0]}, ${c.grad[1]})` }}>
          {c.image ? (
            <>
              {/* real screenshot */}
              <img src={c.image} alt={c.name} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[800ms] ease-out" />
              {/* dark gradient so text stays readable */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 35%, transparent 55%, rgba(0,0,0,0.65) 100%)' }} />
            </>
          ) : (
            <>
              {/* dotted texture */}
              <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
              {/* giant watermark icon */}
              <i className={`fa-solid ${c.icon}`} style={{ position: 'absolute', right: 14, bottom: -6, fontSize: 104, color: 'rgba(255,255,255,0.22)' }} />
            </>
          )}
          {/* shine sweep on hover */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out" style={{ background: 'linear-gradient(100deg, transparent 35%, rgba(255,255,255,0.3) 50%, transparent 65%)' }} />
          {/* badges */}
          <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{c.cat}</span>
          <span className="absolute top-4 right-4 text-[10px] font-semibold text-white/90 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">{c.type}</span>
          {/* name */}
          <h3 className="absolute left-5 bottom-4 right-5 text-white font-extrabold text-xl md:text-2xl tracking-[-0.02em] leading-tight drop-shadow-md">{c.name}</h3>
        </div>
        {/* body */}
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-[#737373] text-sm leading-relaxed flex-grow">{c.desc}</p>
          <div className="flex flex-wrap gap-1.5 my-4">
            {c.tech.map(t => (
              <span key={t} className="font-mono text-[10px] font-semibold text-[#8a8a8a] bg-[#faf7f0] border border-[#ece7da] px-2 py-0.5 rounded-md">{t}</span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF8048] group-hover:text-[#F26A2E] transition-colors">
            View case study <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" style={{ fontSize: 12 }} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#F7F4EC] border-b border-[#ece7da]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="section-label mb-4" style={{ color: '#FF8048' }}>CASE STUDIES</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-[-0.035em] leading-[1.04]">
              Real clients,<br /><span style={{ ...serif, color: '#FF8048' }}>real products.</span>
            </h2>
          </div>
          <p className="text-[#5a5a5a] max-w-md leading-relaxed">
            From healthcare portals to on-demand apps and e-commerce platforms — a look at what we've shipped for clients across 17 countries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((c, i) => <CaseCard key={c.name} c={c} i={i} />)}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link to="/#contact" className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#FF8048] transition-colors duration-300">
            Start your project <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 12 }} />
          </Link>
        </div>

      </div>
    </section>
  );
}
