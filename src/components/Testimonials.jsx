import { motion } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const testimonials = [
  {
    id: 1,
    name: 'Sam Kanakanui',
    role: 'Founder',
    company: 'Netwave Solutions',
    text: 'I have been using Professional Soft-Tech for over 6 years and I am very happy with their work. They are reliable, responsive, and deliver exactly what they promise. Highly recommended for any web or mobile project.',
    av: { bg: '#E0EAFF', text: '#4F6EF7', border: '#C7D4FF' },
    stars: 5,
  },
  {
    id: 2,
    name: 'Dan Salganik',
    role: 'Co-Founder',
    company: 'VisualFizz',
    text: 'Great developers — I have been working with one of their developers for years and he has become an invaluable member of my team. The quality of output and communication has always been outstanding.',
    av: { bg: '#E0F5FF', text: '#0EA5E9', border: '#BAE6FD' },
    stars: 5,
  },
  {
    id: 3,
    name: 'Terry Tateossian',
    role: 'Founder',
    company: 'Socialfix',
    text: 'Reliable developers who understand our business deeply and consistently deliver quality work on tight deadlines. Professional Softtech has been a trusted long-term partner for our digital transformation.',
    av: { bg: '#E0FFF5', text: '#10B981', border: '#A7F3D0' },
    stars: 5,
  },
  {
    id: 4,
    name: 'Guðmundur R Einarsson',
    role: 'CEO',
    company: 'Vefgerðin',
    text: 'I highly recommend Professional Softtech. Their development team understood our requirements perfectly and delivered a polished product well within our timeline. The ongoing support has been equally excellent.',
    av: { bg: '#F3E8FF', text: '#8B5CF6', border: '#DDD6FE' },
    stars: 5,
  },
  {
    id: 5,
    name: 'Rachel Foster',
    role: 'CTO',
    company: 'MediTrack Pro',
    text: 'The team exceeded every expectation — from technical depth to communication clarity. They treated our product like their own. I would not hesitate to recommend them to any serious business.',
    av: { bg: '#FFF3E0', text: '#F59E0B', border: '#FDE68A' },
    stars: 5,
  },
  {
    id: 6,
    name: 'Liam Obrien',
    role: 'Product Lead',
    company: 'FintechEdge',
    text: 'Fast, reliable, and deeply skilled. They built our entire fintech dashboard in record time and the code quality was exactly what we needed for long-term scalability.',
    av: { bg: '#FFE4E6', text: '#F43F5E', border: '#FECDD3' },
    stars: 5,
  },
];

/* ── Single testimonial card ─────────────────────────────────────── */
function TestimonialCard({ t: item }) {
  const { dark } = useTheme();
  const C = t(dark);
  return (
    <div
      style={{
        flexShrink: 0,
        width: 340,
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 18,
        padding: '26px 28px',
        margin: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: dark ? '0 4px 24px -12px rgba(0,0,0,0.4)' : '0 4px 24px -12px rgba(0,0,0,0.1)',
        position: 'relative',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      {/* Quote icon */}
      <i className="fa-solid fa-quote-right"
        style={{ position: 'absolute', top: 20, right: 22, fontSize: 28, color: dark ? 'rgba(255,128,72,0.12)' : '#FFF1E9' }} />

      <div>
        {/* Stars */}
        <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
          {[...Array(item.stars)].map((_, i) => (
            <i key={i} className="fa-solid fa-star" style={{ fontSize: 12, color: '#F59E0B' }} />
          ))}
        </div>
        {/* Text */}
        <p style={{ fontSize: 14, color: C.bodyMid, lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
          "{item.text}"
        </p>
      </div>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: `1px solid ${C.border}`, paddingTop: 18, marginTop: 20 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: item.av.bg, border: `1px solid ${item.av.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: 13, color: item.av.text, flexShrink: 0,
        }}>
          {item.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
        <div>
          <p style={{ fontSize: 13.5, fontWeight: 700, color: C.heading, margin: 0 }}>{item.name}</p>
          <p style={{ fontSize: 11.5, color: C.muted, margin: '2px 0 0', fontWeight: 500 }}>
            {item.role}, <span style={{ color: C.body, fontWeight: 600 }}>{item.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Marquee track (duplicated for seamless loop) ─────────────────── */
function MarqueeRow({ items, direction = 'left', speed = 30 }) {
  const animName = direction === 'left' ? 'marquee-left' : 'marquee-right';
  const combined = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', mask: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', WebkitMask: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
      <div
        className="marquee-pause"
        style={{
          display: 'flex',
          animation: `${animName} ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {combined.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { dark } = useTheme();
  const C = t(dark);
  const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <section id="testimonials" style={{ padding: 'clamp(70px,8vw,120px) 0', background: C.bg, borderBottom: `1px solid ${C.border}`, overflow: 'hidden', transition: 'background 0.3s' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', padding: '0 6%', marginBottom: 'clamp(40px,5vw,64px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>CLIENT SUCCESS</p>
          <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 800, color: C.heading, letterSpacing: '-0.03em', lineHeight: 1.07, margin: '0 0 18px' }}>
            Loved by forward-thinking{' '}
            <span className="text-gradient">tech leaders.</span>
          </h2>
          <p style={{ fontSize: 16, color: C.body, lineHeight: 1.65, margin: 0 }}>
            Don't just take our word for it. Here is what our clients say about working with us.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
      >
        <MarqueeRow items={testimonials} direction="left" speed={32} />
        <MarqueeRow items={row2} direction="right" speed={28} />
      </motion.div>

    </section>
  );
}
