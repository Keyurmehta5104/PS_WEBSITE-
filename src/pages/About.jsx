import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSEO } from '../useSEO';

/* ── Brand tokens (shared with Hero) ────────────────────────────── */
const ORANGE = '#FF8048';
const ORANGE_DARK = '#F26A2E';
const ORANGE_GRADIENT = 'linear-gradient(100deg,#FF8048 0%,#FF6A2E 55%,#EB2F5B 120%)';
const INK = '#272a33';
const BODY = '#4D4D4D';
const PAGE = '#F7F4EC';

/* ── Reusable scroll-in wrapper ─────────────────────────────────── */
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
});

const sectionLabel = {
  fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: ORANGE, margin: '0 0 14px',
};

/* ── Section 1 · Hero ───────────────────────────────────────────── */
function AboutHero() {
  return (
    <section style={{ position: 'relative', background: PAGE, padding: '140px 6% 78px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -120, right: -80, width: 420, height: 420, borderRadius: '50%', background: 'rgba(255,128,72,0.12)', filter: 'blur(90px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
        <motion.p {...rise(0)} style={{ ...sectionLabel, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 26, height: 2, background: ORANGE, borderRadius: 2 }} /> About Professional Soft-Tech
        </motion.p>

        <motion.h1 {...rise(0.08)} style={{
          fontSize: 'clamp(36px,5vw,70px)', fontWeight: 800, lineHeight: 1.05,
          letterSpacing: '-0.035em', color: INK, margin: 0, maxWidth: 940,
        }}>
          Brewing up digital goodness for{' '}
          <span style={{ background: ORANGE_GRADIENT, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
            purposeful brands.
          </span>
        </motion.h1>

        <motion.p {...rise(0.16)} style={{ fontSize: 'clamp(15px,1.4vw,18px)', color: BODY, lineHeight: 1.7, maxWidth: 640, margin: '26px 0 0' }}>
          We're a global creative team of dedicated developers and designers — a full-service web and app development company building beautiful, efficiently coded products since <strong style={{ color: INK, fontWeight: 600 }}>2010</strong>. With offices in the <strong style={{ color: INK, fontWeight: 600 }}>USA, Singapore, and India</strong>, we serve prestigious clients across <strong style={{ color: INK, fontWeight: 600 }}>17 countries</strong>.
        </motion.p>

        <motion.div {...rise(0.24)} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 34 }}>
          <a href="#about-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: ORANGE, color: '#fff', fontSize: 15, fontWeight: 600, padding: '14px 28px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 14px 28px -12px rgba(255,128,72,0.7)' }}
            onMouseEnter={e => (e.currentTarget.style.background = ORANGE_DARK)}
            onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}>
            Work with us <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 13 }} />
          </a>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: INK, fontSize: 15, fontWeight: 600, padding: '14px 24px', borderRadius: 8, textDecoration: 'none', border: '1px solid #e2e2e2', background: '#fff' }}>
            See our work <i className="fa-solid fa-arrow-right" style={{ fontSize: 13 }} />
          </Link>
        </motion.div>

        {/* Recognition strip */}
        <motion.div {...rise(0.32)} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 22px', marginTop: 40 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a0a0a0' }}>Recognised on</span>
          {['Upwork', 'Clutch', 'DesignRush'].map(n => (
            <span key={n} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13.5, fontWeight: 600, color: INK }}>
              <i className="fa-solid fa-star" style={{ fontSize: 11, color: ORANGE }} />{n}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Section 2 · Stat band ──────────────────────────────────────── */
const STATS = [
  { num: '15+', label: 'Years of work', sub: 'Mastering web & app since 2010' },
  { num: '500+', label: 'Projects delivered', sub: 'Shipped to production' },
  { num: '17', label: 'Countries served', sub: 'Clients across the globe' },
  { num: '30+', label: 'Experts on team', sub: 'Developers, designers & PMs' },
];
function StatBand() {
  return (
    <section style={{ background: PAGE, borderTop: '1px solid #efefef', borderBottom: '1px solid #efefef' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 6%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))' }}>
        {STATS.map((s, i) => (
          <motion.div key={s.label} {...rise(i * 0.08)}
            style={{ padding: '46px 28px', borderLeft: i > 0 ? '1px solid #eee' : 'none' }}>
            <p style={{ fontSize: 'clamp(34px,3.4vw,46px)', fontWeight: 800, color: INK, margin: 0, letterSpacing: '-0.03em' }}>{s.num}</p>
            <p style={{ fontSize: 14, fontWeight: 700, color: INK, margin: '8px 0 2px' }}>{s.label}</p>
            <p style={{ fontSize: 12.5, color: '#9a9a9a', margin: 0 }}>{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ── Section 3 · Origin / Story ─────────────────────────────────── */
function Origin() {
  return (
    <section style={{ background: PAGE, padding: '90px 6%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 56, alignItems: 'center' }} className="about-origin-grid">
        <motion.div {...rise(0)}>
          <p style={sectionLabel}>Who we are</p>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)', fontWeight: 800, color: INK, lineHeight: 1.12, letterSpacing: '-0.025em', margin: '0 0 22px' }}>
            A global creative team,<br />since 2010.
          </h2>
          <p style={{ fontSize: 15.5, color: BODY, lineHeight: 1.75, margin: '0 0 16px' }}>
            Professional Soft-Tech is a full-service web and app development company — a team of creative crackerjacks and innovative developers who deliver beautiful, efficiently coded solutions for some of the smartest projects around.
          </p>
          <p style={{ fontSize: 15.5, color: BODY, lineHeight: 1.75, margin: 0 }}>
            With satellite offices deep in the urban skylines of the <strong style={{ color: INK, fontWeight: 600 }}>United States, Singapore, and India</strong>, we've been mastering web and app development for over a decade — turning ideas into products people love to use.
          </p>
        </motion.div>

        {/* Visual: orbiting accent */}
        <motion.div {...rise(0.12)} style={{ position: 'relative', aspectRatio: '1', maxWidth: 380, justifySelf: 'center', width: '100%' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: 'linear-gradient(150deg,#FFF6F0,#FFEAD9)', border: '1px solid rgba(255,128,72,0.25)', overflow: 'hidden' }}>
            {[0, 1, 2].map(r => (
              <div key={r} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: `${45 + r * 28}%`, height: `${45 + r * 28}%`, borderRadius: '50%', border: '1px dashed rgba(242,106,46,0.35)' }} />
            ))}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: '50%', left: '50%', width: '73%', height: '73%', transform: 'translate(-50%,-50%)' }}>
              <span style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 14, height: 14, borderRadius: '50%', background: ORANGE, boxShadow: '0 0 14px rgba(255,128,72,0.7)' }} />
            </motion.div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
              <p style={{ fontSize: 40, fontWeight: 800, color: INK, margin: 0, letterSpacing: '-0.03em' }}>2010</p>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: ORANGE_DARK, margin: '4px 0 0' }}>Where it began</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Section 4 · What sets us apart (real values) ───────────────── */
const PILLARS = [
  { icon: 'fa-magnifying-glass-plus', title: 'Attention to detail', desc: 'The tiniest details make the biggest difference — we sweat the small stuff so your product feels effortless.' },
  { icon: 'fa-hand-holding-dollar', title: 'Honest & transparent', desc: 'No hidden charges, no fuss. We give honest rates and upfront estimates, with clear communication throughout.' },
  { icon: 'fa-clock', title: 'On time, every time', desc: 'We respect deadlines. Our commitment is to deliver on schedule — we don\'t delay your project.' },
];
function Pillars() {
  return (
    <section style={{ background: PAGE, padding: '90px 6%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...rise(0)} style={{ maxWidth: 640, marginBottom: 46 }}>
          <p style={sectionLabel}>What sets us apart</p>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, color: INK, lineHeight: 1.14, letterSpacing: '-0.025em', margin: 0 }}>
            Three things we never compromise on.
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 22 }}>
          {PILLARS.map((p, i) => (
            <motion.div key={p.title} {...rise(i * 0.1)}
              style={{ background: PAGE, border: '1px solid #ececec', borderRadius: 18, padding: '30px 28px' }}>
              <div style={{ width: 50, height: 50, borderRadius: 12, background: 'linear-gradient(145deg,#FF9A5E,#F26A2E)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, boxShadow: '0 10px 22px -10px rgba(242,106,46,0.6)' }}>
                <i className={`fa-solid ${p.icon}`} style={{ color: '#fff', fontSize: 19 }} />
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: INK, margin: '0 0 10px', letterSpacing: '-0.01em' }}>{p.title}</h3>
              <p style={{ fontSize: 14.5, color: BODY, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 5 · Philosophy quote ───────────────────────────────── */
function Philosophy() {
  return (
    <section style={{ background: 'linear-gradient(145deg,#FF9A5E 0%,#FF8048 50%,#F26A2E 100%)', padding: '90px 6%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -80, left: -60, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.14)', filter: 'blur(50px)' }} />
      <motion.div {...rise(0)} style={{ position: 'relative', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <i className="fa-solid fa-quote-left" style={{ fontSize: 38, color: 'rgba(255,255,255,0.45)', marginBottom: 18 }} />
        <p style={{ fontSize: 'clamp(22px,2.8vw,36px)', fontWeight: 700, color: '#fff', lineHeight: 1.35, letterSpacing: '-0.02em', margin: '0 0 28px' }}>
          "The tiniest details make the biggest difference. We don't just write code — we craft products purposeful brands are proud to ship."
        </p>
        <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: 0 }}>The Professional Soft-Tech Team</p>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', margin: '4px 0 0' }}>USA · Singapore · India</p>
      </motion.div>
    </section>
  );
}

/* ── Section 6 · What we build (real services) ──────────────────── */
const SERVICES = [
  { icon: 'fa-globe', title: 'Web Development', desc: 'Modern, dynamic web apps in React, Vue, Laravel, Node.js & WordPress.' },
  { icon: 'fa-mobile-screen-button', title: 'Mobile App Development', desc: 'Native & cross-platform apps — iOS, Android, React Native, Flutter.' },
  { icon: 'fa-pen-ruler', title: 'UI/UX Design', desc: 'Intuitive, user-centric interfaces that look great and convert.' },
  { icon: 'fa-layer-group', title: 'Enterprise Software', desc: 'Scalable software solutions that power real digital transformation.' },
  { icon: 'fa-cart-shopping', title: 'E-Commerce', desc: 'High-converting storefronts on Shopify, Magento & custom stacks.' },
  { icon: 'fa-envelope-open-text', title: 'Responsive Email Templates', desc: 'Pixel-perfect, responsive email templates that render everywhere.' },
];
function Services() {
  return (
    <section style={{ background: PAGE, padding: '90px 6%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...rise(0)} style={{ maxWidth: 640, marginBottom: 46 }}>
          <p style={sectionLabel}>What we build</p>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, color: INK, lineHeight: 1.14, letterSpacing: '-0.025em', margin: 0 }}>
            Full-service, end to end.
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18 }}>
          {SERVICES.map((v, i) => (
            <motion.div key={v.title} {...rise((i % 3) * 0.08)}
              style={{ display: 'flex', gap: 16, background: '#fff', border: '1px solid #ececec', borderRadius: 16, padding: '24px 22px' }}>
              <div style={{ width: 42, height: 42, flexShrink: 0, borderRadius: 10, background: 'rgba(255,128,72,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={`fa-solid ${v.icon}`} style={{ color: ORANGE_DARK, fontSize: 17 }} />
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, margin: '0 0 6px' }}>{v.title}</h3>
                <p style={{ fontSize: 13.5, color: BODY, lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 7 · Industries (real) ──────────────────────────────── */
const INDUSTRIES = [
  { icon: 'fa-graduation-cap', name: 'Education' },
  { icon: 'fa-users-gear', name: 'Human Resources' },
  { icon: 'fa-house', name: 'Real Estate' },
  { icon: 'fa-bag-shopping', name: 'E-Commerce' },
  { icon: 'fa-heart-pulse', name: 'Healthcare' },
  { icon: 'fa-share-nodes', name: 'Social Networking' },
  { icon: 'fa-plane', name: 'Travel & Hospitality' },
  { icon: 'fa-truck-fast', name: 'Logistics' },
  { icon: 'fa-rocket', name: 'Startups' },
  { icon: 'fa-car', name: 'Automobile' },
];
function Industries() {
  return (
    <section style={{ background: PAGE, padding: '90px 6%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...rise(0)} style={{ maxWidth: 640, marginBottom: 46 }}>
          <p style={sectionLabel}>Industries we serve</p>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, color: INK, lineHeight: 1.14, letterSpacing: '-0.025em', margin: 0 }}>
            Deep expertise, every vertical.
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
          {INDUSTRIES.map((ind, i) => (
            <motion.div key={ind.name} {...rise((i % 4) * 0.06)}
              style={{ display: 'flex', alignItems: 'center', gap: 14, background: PAGE, border: '1px solid #ececec', borderRadius: 14, padding: '18px 20px' }}>
              <i className={`fa-solid ${ind.icon}`} style={{ color: ORANGE, fontSize: 18, width: 22, textAlign: 'center' }} />
              <span style={{ fontSize: 14.5, fontWeight: 600, color: INK }}>{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 8 · Locations ──────────────────────────────────────── */
const OFFICES = [
  { flag: '🇺🇸', city: 'United States', country: 'Americas Office', role: 'Sales & Client Services' },
  { flag: '🇸🇬', city: 'Singapore', country: 'APAC Office', role: 'Regional Delivery' },
  { flag: '🇮🇳', city: 'India', country: 'Engineering Hub', role: 'Development & Design' },
];
function Locations() {
  return (
    <section style={{ background: PAGE, padding: '90px 6%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...rise(0)} style={{ maxWidth: 640, marginBottom: 46 }}>
          <p style={sectionLabel}>Where we are</p>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, color: INK, lineHeight: 1.14, letterSpacing: '-0.025em', margin: 0 }}>
            Three offices. One team.
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
          {OFFICES.map((o, i) => (
            <motion.div key={o.city} {...rise(i * 0.08)}
              style={{ background: '#fff', border: '1px solid #ececec', borderRadius: 18, padding: '28px 26px' }}>
              <span style={{ fontSize: 34, display: 'block', marginBottom: 14 }}>{o.flag}</span>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: INK, margin: '0 0 4px' }}>{o.city}</h3>
              <p style={{ fontSize: 13.5, color: BODY, margin: '0 0 10px' }}>{o.country}</p>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: ORANGE_DARK, background: 'rgba(255,128,72,0.12)', padding: '5px 12px', borderRadius: 999 }}>{o.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 9 · Final CTA ──────────────────────────────────────── */
function FinalCTA() {
  return (
    <section id="about-cta" style={{ background: PAGE, padding: '100px 6%' }}>
      <motion.div {...rise(0)} style={{
        maxWidth: 980, margin: '0 auto', borderRadius: 28, padding: 'clamp(40px,5vw,72px)',
        background: 'linear-gradient(145deg,#1f2127 0%,#272a33 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -100, right: -60, width: 360, height: 360, borderRadius: '50%', background: 'rgba(255,128,72,0.25)', filter: 'blur(80px)' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(28px,3.6vw,48px)', fontWeight: 800, color: '#fff', lineHeight: 1.12, letterSpacing: '-0.03em', margin: '0 0 18px' }}>
            Have a project in mind?<br />Let's talk.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 32px' }}>
            Tell us what you're building and we'll get back with honest rates and an upfront estimate — no hidden charges, no fuss.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 28 }}>
            <Link to="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: ORANGE, color: '#fff', fontSize: 15, fontWeight: 600, padding: '15px 30px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 14px 30px -12px rgba(255,128,72,0.8)' }}
              onMouseEnter={e => (e.currentTarget.style.background = ORANGE_DARK)}
              onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}>
              Get a free quote <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 13 }} />
            </Link>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: '#fff', fontSize: 15, fontWeight: 600, padding: '15px 28px', borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
              Back to home
            </Link>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 28px', justifyContent: 'center', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
            <a href="tel:+14135294901" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fa-solid fa-phone" style={{ fontSize: 12, color: ORANGE }} /> +1 (413) 529-4901
            </a>
            <a href="mailto:enquiry@professionalsofttech.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
              <i className="fa-solid fa-envelope" style={{ fontSize: 12, color: ORANGE }} /> enquiry@professionalsofttech.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function About() {
  useSEO({
    title: 'About Us | Professional Soft-Tech',
    description: "Meet the team behind Professional Soft-Tech — web and mobile app developers since 2010, serving clients across USA, Singapore and India.",
    path: '/about',
  });
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main style={{ fontFamily: 'inherit' }}>
      <AboutHero />
      <StatBand />
      <Origin />
      <Pillars />
      <Philosophy />
      <Services />
      <Industries />
      <Locations />
      <FinalCTA />
    </main>
  );
}
