import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SERVICES } from '../data/services';
import { useTheme, t } from '../context/ThemeContext';

const ORANGE = '#FF8048';

/* AI-focused card content per slug */
const AI_CARDS = {
  'web-development': {
    title: 'AI-Powered Web Development',
    badge: 'AI-Native Web Stack',
    short: 'Websites that learn, adapt, and convert — with GPT content engines, predictive e-commerce, and real-time personalization built in.',
    caps: ['GPT Content Engine', 'Predictive AI', 'Personalization', 'AI SEO'],
  },
  'mobile-app-development': {
    title: 'AI-Powered Mobile Apps',
    badge: 'AI Mobile Native',
    short: 'Intelligent apps with on-device ML, voice & NLP, behavior prediction, and AI-driven push notifications that keep users coming back.',
    caps: ['On-Device ML', 'Voice & NLP', 'Behavior AI', 'Smart Push'],
  },
  'ui-ux-design': {
    title: 'AI-Enhanced UI/UX Design',
    badge: 'Data-Driven Design',
    short: 'Every pixel proven by AI behavioral analysis — heatmaps, generative design systems, and continuous A/B testing baked into the process.',
    caps: ['Behavioral AI', 'Generative Design', 'Conversion AI', 'Auto A/B'],
  },
  'email-template-development': {
    title: 'AI-Personalized Email Templates',
    badge: 'AI Email Intelligence',
    short: 'Dynamic templates with AI-generated subject lines, predictive send-time optimization, and deliverability intelligence that keeps you out of spam.',
    caps: ['AI Copywriting', 'Send-Time ML', 'Smart Segments', 'Deliverability AI'],
  },
  'e-commerce': {
    title: 'AI-Powered E-Commerce',
    badge: 'AI Commerce Engine',
    short: 'Storefronts with AI product recommendations, semantic search, dynamic pricing intelligence, and predictive cart-recovery — on autopilot.',
    caps: ['Recommendation AI', 'Semantic Search', 'Dynamic Pricing', 'Churn Prediction'],
  },
  'enterprise-software': {
    title: 'AI-Driven Enterprise Software',
    badge: 'Enterprise AI Platform',
    short: 'Business systems with intelligent workflow automation, predictive BI dashboards, and AI-enhanced integrations that eliminate manual bottlenecks.',
    caps: ['Workflow AI', 'Predictive BI', 'NLP Processing', 'Anomaly Detection'],
  },
  'qa-testing': {
    title: 'AI-Powered QA & Testing',
    badge: 'AI Quality Engineering',
    short: 'AI-generated test suites, visual regression testing via computer vision, and automated security scanning — 10× faster than manual QA.',
    caps: ['AI Test Gen', 'Visual Regression', 'Predictive Load', 'AI Security Scan'],
  },
  'devops-cloud': {
    title: 'AI-Driven DevOps & Cloud',
    badge: 'AI Cloud Native',
    short: 'Self-healing infrastructure with AIOps monitoring, AI cost optimization, and intelligent CI/CD pipelines that ship faster with fewer incidents.',
    caps: ['AIOps Monitoring', 'AI Cost Optimizer', 'Self-Healing Infra', 'Smart Pipelines'],
  },
};

/* ── Single service card ─────────────────────────────────────────── */
function ServiceCard({ svc, i }) {
  const [h, setH] = useState(false);
  const { dark } = useTheme();
  const C = t(dark);
  const ai = AI_CARDS[svc.slug] ?? { title: svc.name, badge: 'AI-Powered', short: svc.short, caps: svc.tech };

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: (i % 4) * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%' }}
    >
      <Link
        to={`/services/${svc.slug}`}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none',
          background: h
            ? (dark ? 'linear-gradient(160deg,#242220 0%,#1e1b18 100%)' : 'linear-gradient(160deg,#FFFCFA 0%,#FFF6F0 100%)')
            : C.bgCard,
          borderRadius: 18,
          border: `1px solid ${h ? 'rgba(255,128,72,0.4)' : C.border}`,
          boxShadow: h
            ? '0 28px 56px -28px rgba(242,106,46,0.5), 0 0 0 1.5px rgba(255,128,72,0.25)'
            : dark ? '0 4px 24px -12px rgba(0,0,0,0.4)' : '0 14px 32px -28px rgba(20,20,30,0.3)',
          padding: 'clamp(24px,2.4vw,32px) clamp(20px,2vw,28px)',
          transform: h ? 'translateY(-6px)' : 'none',
          transition: 'border-color .3s, box-shadow .3s, transform .3s, background .3s',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${ORANGE},transparent)`, opacity: h ? 0.7 : 0.35, borderRadius: '18px 18px 0 0', transition: 'opacity 0.3s' }} />

        {/* AI badge */}
        <div style={{ marginBottom: 14 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#6366F1', background: 'rgba(99,102,241,0.09)',
            border: '1px solid rgba(99,102,241,0.2)', padding: '4px 10px', borderRadius: 999,
          }}>
            <i className="fa-solid fa-microchip" style={{ fontSize: 8 }} /> {ai.badge}
          </span>
        </div>

        {/* Service icon */}
        <div style={{ width: 42, height: 42, borderRadius: 11, background: 'rgba(255,128,72,0.1)', border: '1px solid rgba(255,128,72,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <i className={`fa-solid ${svc.icon}`} style={{ color: ORANGE, fontSize: 16 }} />
        </div>

        <h3 style={{ fontSize: 'clamp(17px,1.4vw,20px)', fontWeight: 800, color: C.ink, margin: '0 0 10px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
          {ai.title}
        </h3>
        <p style={{ fontSize: 13.5, color: C.body, lineHeight: 1.65, margin: '0 0 20px', flexGrow: 1 }}>
          {ai.short}
        </p>

        {/* AI capability pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
          {ai.caps.map(cap => (
            <span key={cap} style={{
              fontSize: 10, fontWeight: 700, color: C.muted,
              background: C.bgCardSubtle, border: `1px solid ${C.borderLight}`,
              padding: '4px 10px', borderRadius: 999,
            }}>{cap}</span>
          ))}
        </div>

        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: ORANGE }}>
          View More
          <i className="fa-solid fa-arrow-right" style={{ fontSize: 11, transform: h ? 'translateX(4px)' : 'none', transition: 'transform .3s' }} />
        </span>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const { dark } = useTheme();
  const C = t(dark);
  return (
    <section id="services" style={{ background: C.bg, padding: 'clamp(70px,8vw,120px) 6%', transition: 'background 0.3s' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div className="services-head" style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr', gap: 48, alignItems: 'end', marginBottom: 'clamp(40px,5vw,66px)' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ORANGE, margin: '0 0 18px' }}>What We Build</p>
            <h2 style={{ fontSize: 'clamp(34px,5vw,68px)', fontWeight: 800, color: C.ink, lineHeight: 1.0, letterSpacing: '-0.035em', margin: 0 }}>
              AI-Powered{' '}
              <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.01em' }}>Development</span>{' '}
              Services.
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 16, color: C.body, lineHeight: 1.7, margin: 0 }}>
            A <strong style={{ color: C.ink, fontWeight: 600 }}>full-service AI development team</strong> building intelligent, high-performing digital products since 2010 — for clients across 92+ countries.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {SERVICES.map((svc, i) => <ServiceCard key={svc.slug} svc={svc} i={i} />)}
        </div>

      </div>
    </section>
  );
}
