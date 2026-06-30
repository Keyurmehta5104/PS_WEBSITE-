import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSEO } from '../useSEO';

/* ── Brand tokens ───────────────────────────────────────────────── */
const ORANGE = '#FF8048';
const ORANGE_DARK = '#F26A2E';
const INK = '#1a1a1a';
const BODY = '#5a5a5a';
const PAGE = '#F7F4EC';
const serif = { fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 500 };

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
});
const label = { fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9a9a9a' };
const chip = { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', fontSize: 11, fontWeight: 600, color: '#8a8a8a', background: '#fff', border: '1px solid #e5e5e5', padding: '5px 11px', borderRadius: 7 };

/* ── Disciplines (real services) ────────────────────────────────── */
const DISCIPLINES = [
  { slug: 'mobile-app-development', name: 'Mobile Apps', tags: ['iOS', 'Android', 'Cross-platform'],
    intro: 'Native and cross-platform apps that feel right at home on every device — from MVP to flagship product, with CI/CD and app-store launch included.',
    offerings: ['Native iOS & Android', 'Cross-platform (React Native, Flutter)', 'Wearables & tablet apps', 'App Store & Play deployment', 'Push, offline & sync', 'Post-launch monitoring'],
    tech: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase'] },
  { slug: 'web-development', name: 'Web Development', tags: ['Web Apps', 'CMS', 'PWA'],
    intro: 'From data-driven platforms to e-commerce and showcase sites — fast, responsive, and built to scale across every device.',
    offerings: ['Custom web applications', 'Progressive web apps (PWA)', 'CMS & headless builds', 'E-commerce stores', 'API & third-party integrations', 'Responsive, device-fluid UI'],
    tech: ['React', 'Vue.js', 'Laravel', 'Node.js', 'WordPress'] },
  { slug: 'ui-ux-design', name: 'UI/UX Design', tags: ['Research', 'UI', 'Design systems'],
    intro: 'Human-centred design that users understand and trust — from research and wireframes to polished, developer-ready interfaces.',
    offerings: ['User research & flows', 'Wireframes & prototypes', 'Visual & interaction design', 'Design systems', 'Accessibility', 'From paper to pixels'],
    tech: ['Figma', 'Sketch', 'Adobe XD', 'Photoshop'] },
  { slug: 'email-template-development', name: 'Email Templates', tags: ['HTML', 'Responsive', 'Testing'],
    intro: 'Responsive HTML email templates that render perfectly on every client and device — yes, including Outlook.',
    offerings: ['Responsive HTML emails', 'Hero & multi-section layouts', 'Graphics & flexible content', 'Cross-client testing', 'Campaign-ready builds', 'Dark-mode support'],
    tech: ['HTML', 'CSS', 'MJML', 'Litmus'] },
  { slug: 'e-commerce', name: 'E-Commerce', tags: ['Shopify', 'Magento', 'Custom'],
    intro: 'High-converting storefronts and marketplaces on Shopify, Magento, or a custom stack — designed to sell and built to scale.',
    offerings: ['Shopify & Magento builds', 'Custom storefronts', 'Payments & checkout', 'Inventory & ERP sync', 'Multi-vendor marketplaces', 'Conversion optimisation'],
    tech: ['Shopify', 'Magento', 'WooCommerce', 'Stripe'] },
  { slug: 'enterprise-software', name: 'Enterprise Software', tags: ['CRM', 'ERP', 'Automation'],
    intro: 'Scalable custom software that ties your business together — CRM, ERP, automation, and integrations tailored to how your teams work.',
    offerings: ['Custom CRM / ERP', 'Workflow automation', 'Third-party integrations', 'Legacy modernisation', 'Role-based access', 'Reporting & dashboards'],
    tech: ['Laravel', 'Node.js', '.NET', 'PostgreSQL', 'AWS'] },
  { slug: 'qa-testing', name: 'Quality Assurance', tags: ['Automation', 'Manual', 'Performance'],
    intro: 'Manual and automated quality engineering baked into every sprint, so every release is one you can stand behind.',
    offerings: ['Web & mobile automation', 'API testing', 'Performance & load', 'Security testing', 'Regression suites', 'CI-integrated QA'],
    tech: ['Selenium', 'Appium', 'Cypress', 'Postman'] },
  { slug: 'devops-cloud', name: 'DevOps & Cloud', tags: ['CI/CD', 'Cloud', 'Containers'],
    intro: 'CI/CD, containers, and cloud engineering that let your team ship fast and stay stable — at any scale.',
    offerings: ['CI/CD pipelines', 'Docker & Kubernetes', 'Cloud migration', 'Monitoring & observability', 'Infrastructure as code', 'Cost optimisation'],
    tech: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'] },
];

const ENGAGEMENT = [
  { tag: 'Dedicated Team', billing: 'Monthly', desc: 'A full embedded squad — PM, engineers, designer, and QA — that works as an extension of your team.', best: 'Evolving, long-term products' },
  { tag: 'Fixed Scope', billing: 'Per project', desc: 'A defined set of deliverables, a clear timeline, and a fixed price agreed up front.', best: 'Well-defined projects' },
  { tag: 'Staff Augmentation', billing: 'Hourly / monthly', desc: 'Add specific skills to your existing team exactly when and where you need them.', best: 'Scaling capacity fast' },
  { tag: 'Onsite / Hybrid', billing: 'Flexible', desc: 'Onsite or hybrid collaboration for sensitive, regulated, or high-touch engagements.', best: 'Security-sensitive work' },
];

/* Real stack from professionalsofttech.com.
   icon: a "/logos/x.svg" path → rendered as <img>, otherwise a Font Awesome class */
const TECH_TABS = {
  'Front End': [
    { name: 'React Js', icon: '/logos/react.svg' },
    { name: 'Redux', icon: 'fa-solid fa-layer-group' },
    { name: 'TypeScript', icon: '/logos/typescript.svg' },
    { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
    { name: 'Material UI', icon: 'fa-solid fa-cube' },
    { name: 'HTML5', icon: 'fa-brands fa-html5' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
    { name: 'jQuery', icon: 'fa-solid fa-code' },
    { name: 'SASS', icon: 'fa-brands fa-sass' },
  ],
  'Mobile': [
    { name: 'Android', icon: 'fa-brands fa-android' },
    { name: 'iOS', icon: 'fa-brands fa-apple' },
    { name: 'React Native', icon: 'fa-brands fa-react' },
    { name: 'Flutter', icon: '/logos/flutter.svg' },
    { name: 'Swift', icon: 'fa-brands fa-swift' },
    { name: 'Objective-C', icon: 'fa-solid fa-code' },
    { name: 'Kotlin', icon: 'fa-solid fa-mobile-screen-button' },
    { name: 'Java', icon: 'fa-brands fa-java' },
    { name: 'Ionic', icon: 'fa-solid fa-bolt' },
  ],
  'Backend': [
    { name: 'Laravel', icon: '/logos/laravel.svg' },
    { name: 'CodeIgniter', icon: 'fa-solid fa-fire' },
    { name: 'YII', icon: 'fa-solid fa-code' },
    { name: 'CakePHP', icon: 'fa-solid fa-cake-candles' },
    { name: 'Node.js', icon: '/logos/nodejs.svg' },
  ],
  'Database': [
    { name: 'MariaDB', icon: 'fa-solid fa-database' },
    { name: 'MySQL', icon: 'fa-solid fa-database' },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf' },
    { name: 'Firebase', icon: 'fa-solid fa-fire' },
    { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
  ],
  'CMS & E-Commerce': [
    { name: 'WordPress', icon: '/logos/wordpress.svg' },
    { name: 'WooCommerce', icon: '/logos/woocommerce.svg' },
    { name: 'Shopify', icon: '/logos/shopify.svg' },
    { name: 'Shopify Plus', icon: '/logos/shopify.svg' },
    { name: 'Magento', icon: 'fa-solid fa-cart-shopping' },
    { name: 'OpenCart', icon: 'fa-solid fa-cart-shopping' },
    { name: 'PrestaShop', icon: 'fa-solid fa-bag-shopping' },
  ],
  'Infra & DevOps': [
    { name: 'AWS', icon: 'fa-brands fa-aws' },
    { name: 'Google Cloud', icon: 'fa-brands fa-google' },
    { name: 'Jenkins', icon: 'fa-brands fa-jenkins' },
    { name: 'DigitalOcean', icon: 'fa-brands fa-digital-ocean' },
    { name: 'Heroku', icon: 'fa-solid fa-server' },
    { name: 'Docker', icon: 'fa-brands fa-docker' },
  ],
};

const HERO_STATS = [
  { num: 'Since 2010', sub: 'Crafting software' },
  { num: '500+', sub: 'Projects delivered' },
  { num: '30+', sub: 'In-house experts' },
  { num: '17', sub: 'Countries served' },
];

const MARQUEE = ['Education', 'Healthcare', 'Real Estate', 'E-Commerce', 'Logistics', 'Travel', 'Automobile', 'Startups', 'Social', 'Human Resources'];

/* ── Section 1 · Hero ───────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ position: 'relative', background: PAGE, padding: '130px 6% 60px', overflow: 'hidden' }}>
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        <motion.p {...rise(0)} style={{ ...label, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
          <span style={{ width: 26, height: 2, background: ORANGE, borderRadius: 2 }} /> Custom Software Development Services
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 0.9fr', gap: 48, alignItems: 'start' }} className="services-head">
          <motion.h1 {...rise(0.06)} style={{ fontSize: 'clamp(40px,6vw,86px)', fontWeight: 800, color: INK, lineHeight: 0.98, letterSpacing: '-0.04em', margin: 0 }}>
            Custom software<br />services. <span style={serif}>Designed.</span><br />
            <span style={serif}>Built. Shipped.</span>
          </motion.h1>

          <motion.div {...rise(0.16)} style={{ paddingTop: 8 }}>
            <p style={{ fontSize: 16, color: BODY, lineHeight: 1.7, margin: '0 0 22px' }}>
              A full-service web and app development team — building beautiful, efficiently coded products under one roof since 2010. Delivered across 17 countries.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link to="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: ORANGE, color: '#fff', fontSize: 14.5, fontWeight: 600, padding: '13px 26px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 14px 28px -12px rgba(255,128,72,0.7)' }}
                onMouseEnter={e => (e.currentTarget.style.background = ORANGE_DARK)} onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}>
                Scope a project <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 12 }} />
              </Link>
              <a href="#tech" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: INK, fontSize: 14.5, fontWeight: 600, padding: '13px 22px', borderRadius: 8, textDecoration: 'none', border: '1px solid #e2e2e2', background: '#fff' }}>
                See our stack
              </a>
            </div>
          </motion.div>
        </div>

        {/* stat chips */}
        <motion.div {...rise(0.26)} style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,5vw,64px)', marginTop: 54 }}>
          {HERO_STATS.map(s => (
            <div key={s.sub}>
              <p style={{ fontSize: 'clamp(24px,2.4vw,34px)', fontWeight: 800, color: INK, margin: 0, letterSpacing: '-0.03em' }}>{s.num}</p>
              <p style={{ ...label, fontSize: 10, marginTop: 6 }}>{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Section 2 · Trusted by (marquee) ───────────────────────────── */
function TrustedBy() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <section style={{ background: PAGE, borderTop: '1px solid #efe9dc', borderBottom: '1px solid #efe9dc', padding: '30px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 6%' }}>
        <p style={{ ...label, marginBottom: 20 }}>Trusted across 17 countries · since 2010</p>
      </div>
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex', gap: 56, animation: 'marquee-left 32s linear infinite', willChange: 'transform' }}>
          {row.map((b, i) => (
            <span key={i} style={{ fontSize: 'clamp(20px,2.2vw,30px)', fontWeight: 700, color: '#cfc8b8', letterSpacing: '-0.02em', flexShrink: 0 }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 3 · Interactive disciplines ────────────────────────── */
function Disciplines() {
  const [active, setActive] = useState(0);
  const d = DISCIPLINES[active];
  return (
    <section id="services-grid" style={{ background: PAGE, padding: 'clamp(70px,8vw,110px) 6%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* header */}
        <div className="services-head" style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr', gap: 48, alignItems: 'end', marginBottom: 'clamp(36px,4vw,56px)' }}>
          <motion.h2 {...rise(0)} style={{ fontSize: 'clamp(30px,4vw,54px)', fontWeight: 800, color: INK, lineHeight: 1.02, letterSpacing: '-0.035em', margin: 0 }}>
            Every discipline,<br /><span style={serif}>built to fit.</span>
          </motion.h2>
          <motion.p {...rise(0.1)} style={{ fontSize: 15.5, color: BODY, lineHeight: 1.7, margin: 0 }}>
            Hover or click any discipline to see what's inside. Each one is a full capability — not a line item. Or jump straight to a service page for the deep dive.
          </motion.p>
        </div>

        {/* interactive panel */}
        <div className="disc-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(24px,3vw,48px)', alignItems: 'start' }}>
          {/* LEFT list */}
          <div>
            {DISCIPLINES.map((item, i) => {
              const on = i === active;
              return (
                <button key={item.slug}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  style={{
                    width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                    border: 'none', borderBottom: '1px solid #e6e0d2',
                    borderLeft: `3px solid ${on ? ORANGE : 'transparent'}`,
                    background: on ? 'rgba(255,128,72,0.07)' : 'none',
                    borderRadius: on ? '0 10px 10px 0' : 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                    padding: 'clamp(14px,1.6vw,20px) 16px',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}>
                  <span style={{ fontSize: 'clamp(18px,1.9vw,24px)', fontWeight: 700, letterSpacing: '-0.02em', color: on ? ORANGE_DARK : INK, transition: 'color 0.2s' }}>{item.name}</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: 13, color: ORANGE_DARK, opacity: on ? 1 : 0, transform: on ? 'translateX(0)' : 'translateX(-6px)', transition: 'opacity 0.25s, transform 0.25s' }} />
                </button>
              );
            })}
          </div>

          {/* RIGHT detail */}
          <div style={{ background: '#fff', border: '1px solid #ececec', borderRadius: 18, padding: 'clamp(28px,3vw,44px)', minHeight: 420, boxShadow: '0 24px 50px -34px rgba(20,20,30,0.4)' }}>
            <AnimatePresence mode="wait">
              <motion.div key={d.slug}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
                  {d.tags.map(t => <span key={t} style={{ ...label, fontSize: 9.5, color: ORANGE_DARK }}>{t}</span>)}
                </div>
                <h3 style={{ fontSize: 'clamp(26px,2.8vw,38px)', fontWeight: 800, color: INK, margin: '0 0 14px', letterSpacing: '-0.03em' }}>{d.name}</h3>
                <p style={{ fontSize: 15.5, color: BODY, lineHeight: 1.7, margin: '0 0 26px', maxWidth: 520 }}>{d.intro}</p>

                <p style={{ ...label, marginBottom: 14 }}>What's included</p>
                <div className="disc-offerings" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px', marginBottom: 28 }}>
                  {d.offerings.map(o => (
                    <div key={o} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13.5, color: '#4a4a4a' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: ORANGE, marginTop: 7, flexShrink: 0 }} />{o}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {d.tech.map(t => <span key={t} style={chip}>{t}</span>)}
                </div>

                <Link to={`/services/${d.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: ORANGE, textDecoration: 'none' }}>
                  View More <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 4 · Engagement models ──────────────────────────────── */
function EngagementCard({ m, i }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div {...rise(i * 0.08)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'linear-gradient(155deg,#FFF1E8 0%,#FCE9E4 100%)' : '#fff',
        border: `1px solid ${hovered ? 'rgba(255,128,72,0.4)' : '#ececec'}`, borderRadius: 16,
        padding: '26px 24px', display: 'flex', flexDirection: 'column', minHeight: 230,
        boxShadow: hovered ? '0 26px 52px -28px rgba(242,106,46,0.4)' : '0 14px 32px -28px rgba(20,20,30,0.28)',
        transform: hovered ? 'translateY(-5px)' : 'none',
        transition: 'background .3s, border-color .3s, box-shadow .3s, transform .3s',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <span style={{ ...label, fontSize: 9.5 }}>{String(i + 1).padStart(2, '0')} · Model</span>
        <span style={{ fontSize: 11, fontWeight: 700, color: ORANGE_DARK }}>{m.billing}</span>
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 800, color: INK, margin: '0 0 10px', letterSpacing: '-0.02em' }}>{m.tag}</h3>
      <p style={{ fontSize: 13.5, color: BODY, lineHeight: 1.6, margin: '0 0 18px' }}>{m.desc}</p>
      <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(20,20,30,0.1)' }}>
        <span style={{ ...label, fontSize: 9, display: 'block', marginBottom: 5 }}>Best for</span>
        <span style={{ fontSize: 13.5, fontWeight: 600, color: INK }}>{m.best}</span>
      </div>
    </motion.div>
  );
}

function Engagement() {
  return (
    <section style={{ background: PAGE, padding: 'clamp(70px,8vw,110px) 6%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="services-head" style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr', gap: 48, alignItems: 'end', marginBottom: 'clamp(36px,4vw,56px)' }}>
          <motion.div {...rise(0)}>
            <p style={{ ...label, marginBottom: 18 }}>How we engage</p>
            <h2 style={{ fontSize: 'clamp(30px,4vw,54px)', fontWeight: 800, color: INK, lineHeight: 1.02, letterSpacing: '-0.035em', margin: 0 }}>
              Pick the shape<br /><span style={serif}>that fits the build.</span>
            </h2>
          </motion.div>
          <motion.p {...rise(0.1)} style={{ fontSize: 15.5, color: BODY, lineHeight: 1.7, margin: 0 }}>
            Dedicated squad, fixed-scope MVP, staff augmentation, or onsite. Switch between models as the product evolves — most clients do. <Link to="/#contact" style={{ color: ORANGE_DARK, fontWeight: 600, textDecoration: 'none' }}>Talk to us</Link> about the right entry point.
          </motion.p>
        </div>
        <div className="eng-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
          {ENGAGEMENT.map((m, i) => <EngagementCard key={m.tag} m={m} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Section 5 · Tech stack (tabbed icon grid) ──────────────────── */
function TechTile({ t }) {
  const [h, setH] = useState(false);
  const isImg = t.icon.startsWith('/');
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14,
        background: '#fff', border: `1px solid ${h ? 'rgba(255,128,72,0.45)' : '#ece7da'}`, borderRadius: 14,
        padding: '26px 14px', minHeight: 124,
        boxShadow: h ? '0 18px 36px -24px rgba(242,106,46,0.4)' : 'none',
        transform: h ? 'translateY(-4px)' : 'none',
        transition: 'border-color .25s, box-shadow .25s, transform .25s',
      }}>
      <div style={{ height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {isImg
          ? <img src={t.icon} alt={t.name} style={{ width: 32, height: 32, objectFit: 'contain' }} loading="lazy" />
          : <i className={t.icon} style={{ fontSize: 28, color: INK }} />}
      </div>
      <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', fontSize: 12.5, fontWeight: 600, color: '#7a7a7a', letterSpacing: '0.02em', textAlign: 'center' }}>{t.name}</span>
    </div>
  );
}

function TechStack() {
  const tabs = Object.keys(TECH_TABS);
  const [active, setActive] = useState(tabs[0]);
  return (
    <section id="tech" style={{ background: PAGE, padding: 'clamp(70px,8vw,110px) 6%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.p {...rise(0)} style={{ ...label, marginBottom: 22 }}>— Technology</motion.p>
        <motion.h2 {...rise(0.04)} style={{ fontSize: 'clamp(30px,4.6vw,62px)', fontWeight: 800, color: INK, lineHeight: 1.02, letterSpacing: '-0.04em', margin: 0, maxWidth: 820 }}>
          The engineering stack<br /><span style={serif}>behind every build.</span>
        </motion.h2>

        {/* tabs */}
        <motion.div {...rise(0.08)} style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '40px 0 30px', background: '#fff', border: '1px solid #ece7da', borderRadius: 999, padding: 6, width: 'fit-content', maxWidth: '100%' }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setActive(t)}
              style={{ fontSize: 13.5, fontWeight: 600, padding: '9px 18px', borderRadius: 999, cursor: 'pointer', fontFamily: 'inherit',
                border: 'none', background: active === t ? ORANGE : 'transparent', color: active === t ? '#fff' : '#6a6a6a', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>{t}</button>
          ))}
        </motion.div>

        {/* grid */}
        <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          className="tech-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 14 }}>
          {TECH_TABS[active].map(t => <TechTile key={t.name} t={t} />)}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Section 6 · Case teaser ────────────────────────────────────── */
function CaseTeaser() {
  return (
    <section style={{ background: PAGE, padding: 'clamp(70px,8vw,110px) 6%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.p {...rise(0)} style={{ ...label, marginBottom: 20 }}>— Case Studies</motion.p>
        <motion.h2 {...rise(0.05)} style={{ fontSize: 'clamp(30px,4.2vw,58px)', fontWeight: 800, color: INK, lineHeight: 1.04, letterSpacing: '-0.035em', margin: '0 0 20px', maxWidth: 900 }}>
          Real products — <span style={serif}>real outcomes.</span>
        </motion.h2>
        <motion.p {...rise(0.1)} style={{ fontSize: 16, color: BODY, lineHeight: 1.7, maxWidth: 600, margin: '0 0 28px' }}>
          From e-commerce platforms and CRMs to mobile apps and dashboards, we've shipped 500+ projects across 18+ industries. Take a look at the work.
        </motion.p>
        <motion.div {...rise(0.14)}>
          <Link to="/#work" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: INK, color: '#fff', fontSize: 15, fontWeight: 600, padding: '14px 28px', borderRadius: 8, textDecoration: 'none' }}>
            View our work <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 13 }} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Section 7 · CTA ────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ position: 'relative', background: PAGE, padding: 'clamp(80px,10vw,140px) 6%', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,128,72,0.22), rgba(235,47,91,0.12) 45%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 980, margin: '0 auto' }}>
        <motion.p {...rise(0)} style={{ ...label, marginBottom: 22 }}>— Let's Build</motion.p>
        <motion.h2 {...rise(0.05)} style={{ fontSize: 'clamp(38px,6vw,84px)', fontWeight: 800, color: INK, lineHeight: 1.0, letterSpacing: '-0.04em', margin: 0 }}>
          Build something<br /><span style={serif}>worth shipping.</span>
        </motion.h2>
        <motion.p {...rise(0.1)} style={{ fontSize: 17, color: BODY, lineHeight: 1.7, maxWidth: 540, margin: '26px auto 34px' }}>
          Tell us what you're building. We'll reply with honest rates and an upfront estimate — no hidden charges, no fuss.
        </motion.p>
        <motion.div {...rise(0.16)} style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 30 }}>
          <Link to="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: ORANGE, color: '#fff', fontSize: 15, fontWeight: 600, padding: '15px 30px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 16px 32px -12px rgba(255,128,72,0.8)' }}
            onMouseEnter={e => (e.currentTarget.style.background = ORANGE_DARK)} onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}>
            Get a free quote <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 13 }} />
          </Link>
          <a href="mailto:enquiry@professionalsofttech.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: INK, fontSize: 15, fontWeight: 600, padding: '15px 28px', borderRadius: 8, textDecoration: 'none', border: '1px solid #e2dccd', background: '#fff' }}>
            <i className="fa-solid fa-envelope" style={{ fontSize: 12, color: ORANGE }} /> Email us
          </a>
        </motion.div>
        <motion.div {...rise(0.22)} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px', justifyContent: 'center' }}>
          {['Response within 24 hrs', 'NDA on request', 'Free project estimate'].map(t => (
            <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: BODY }}>
              <i className="fa-solid fa-circle-check" style={{ fontSize: 13, color: ORANGE }} />{t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Section · FAQ ──────────────────────────────────────────────── */
const FAQS = [
  { q: 'Why choose Professional Soft-Tech as your development partner?', a: 'We\'ve been crafting web and mobile products since 2010 for clients across 17 countries — a full-service team that delivers beautiful, efficiently coded work with honest, upfront pricing.' },
  { q: 'What services do you offer?', a: 'Web development, mobile apps, UI/UX design, e-commerce, enterprise software, email templates, QA, and DevOps — from design through launch, all under one roof.' },
  { q: 'How do I hire dedicated developers from you?', a: 'Pick the model that fits — a dedicated team, fixed-scope project, or staff augmentation. Tell us your needs and we\'ll assemble the right squad within days.' },
  { q: 'What technologies and frameworks do you specialise in?', a: 'React, Vue, Laravel, Node.js, WordPress, Shopify and Magento on the web; native iOS/Android plus React Native and Flutter on mobile; and AWS, Google Cloud and Docker for infrastructure.' },
  { q: 'How do you ensure quality and on-time delivery?', a: 'Every sprint is demoed and every milestone measured. Manual and automated QA is built into the process, and we respect deadlines — we don\'t delay projects.' },
  { q: 'Which industries have you served?', a: '18+ industries including education, healthcare, real estate, e-commerce, logistics, travel, automobile, and startups.' },
  { q: 'What\'s the typical cost to hire a developer?', a: 'It depends on scope and engagement model. We always give honest rates and an upfront estimate — no hidden charges, no fuss.' },
  { q: 'Do you sign NDAs and guarantee IP ownership?', a: 'Yes. We\'re happy to sign an NDA on request, and all work product and IP belongs entirely to you.' },
  { q: 'How do you handle data security and compliance?', a: 'We build with your industry\'s security and compliance requirements in mind from the very first sprint.' },
  { q: 'Do you work with startups or only enterprises?', a: 'Both. From MVPs for early-stage startups to large-scale enterprise platforms — we scale the team to fit.' },
  { q: 'How do we get started?', a: 'Send us a message or give us a call. We\'ll reply within 24 hours with next steps and an upfront estimate.' },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: PAGE, padding: 'clamp(70px,8vw,110px) 6%' }}>
      <div className="disc-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(32px,4vw,64px)', alignItems: 'start' }}>
        <motion.div {...rise(0)} style={{ position: 'sticky', top: 110 }}>
          <p style={{ ...label, marginBottom: 18 }}>— FAQs</p>
          <h2 style={{ fontSize: 'clamp(30px,3.6vw,52px)', fontWeight: 800, color: INK, lineHeight: 1.02, letterSpacing: '-0.035em', margin: 0 }}>
            Frequently asked<br /><span style={serif}>questions.</span>
          </h2>
        </motion.div>
        <div>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} {...rise(i * 0.03)}
                style={{ borderTop: i === 0 ? 'none' : '1px solid #e6e0d2' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '22px 4px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
                  <span style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                    <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, color: ORANGE, fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ fontSize: 'clamp(15px,1.3vw,17px)', fontWeight: 600, color: isOpen ? ORANGE_DARK : INK, transition: 'color 0.2s' }}>{f.q}</span>
                  </span>
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', border: `1px solid ${isOpen ? ORANGE : '#d8d2c4'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: isOpen ? ORANGE : '#9a9a9a' }}>
                    <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`} style={{ fontSize: 11 }} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: 'hidden' }}>
                      <p style={{ fontSize: 14.5, color: BODY, lineHeight: 1.7, margin: 0, padding: '0 4px 24px 40px' }}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Section · Follow the sun (global presence) ─────────────────── */
const OFFICES = [
  { code: 'US', city: 'Massachusetts, USA', role: 'Americas Office', tz: 'America/New_York', x: '27%', y: '34%' },
  { code: 'SG', city: 'Singapore', role: 'APAC Office', tz: 'Asia/Singapore', x: '77%', y: '58%' },
  { code: 'IN', city: 'India', role: 'Engineering Hub', tz: 'Asia/Kolkata', x: '70.5%', y: '47%' },
];

function useClock(tz) {
  const [t, setT] = useState('');
  useEffect(() => {
    const fmt = () => new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: true });
    setT(fmt());
    const id = setInterval(() => setT(fmt()), 30000);
    return () => clearInterval(id);
  }, [tz]);
  return t;
}

function OfficeCard({ o, last }) {
  const time = useClock(o.tz);
  return (
    <div style={{ padding: 'clamp(20px,2vw,28px)', borderRight: last ? 'none' : '1px solid #ece7da', borderTop: '1px solid #ece7da' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, fontWeight: 700, color: '#fff', background: ORANGE, padding: '3px 8px', borderRadius: 6 }}>{o.code}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#9a9a9a' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3ecf8e', boxShadow: '0 0 0 3px rgba(62,207,142,0.2)' }} />Online
        </span>
      </div>
      <p style={{ fontSize: 16, fontWeight: 700, color: INK, margin: '0 0 2px' }}>{o.city}</p>
      <p style={{ fontSize: 12.5, color: '#9a9a9a', margin: '0 0 14px' }}>{o.role}</p>
      <p style={{ fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 800, color: INK, margin: 0, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{time}</p>
    </div>
  );
}

function FollowTheSun() {
  return (
    <section style={{ background: PAGE, padding: 'clamp(70px,8vw,110px) 6%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="services-head" style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr', gap: 48, alignItems: 'end', marginBottom: 'clamp(32px,4vw,48px)' }}>
          <motion.div {...rise(0)}>
            <p style={{ ...label, marginBottom: 18 }}>— Global Presence</p>
            <h2 style={{ fontSize: 'clamp(30px,4vw,54px)', fontWeight: 800, color: INK, lineHeight: 1.02, letterSpacing: '-0.035em', margin: 0 }}>
              Follow the sun.<br /><span style={serif}>Never lose a day.</span>
            </h2>
          </motion.div>
          <motion.p {...rise(0.1)} style={{ fontSize: 15.5, color: BODY, lineHeight: 1.7, margin: 0 }}>
            Offices in the <strong style={{ color: INK }}>USA, Singapore, and India</strong> mean there's always someone awake and building — your project moves forward around the clock.
          </motion.p>
        </div>

        <motion.div {...rise(0.06)} style={{ background: '#fff', border: '1px solid #ece7da', borderRadius: 24, overflow: 'hidden' }}>
          {/* dotted world map (dots masked to continents) + pins on top */}
          <div style={{ position: 'relative', height: 'clamp(230px,32vw,380px)', margin: '8px 0' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(110,110,110,0.5) 1.25px, transparent 1.45px)',
              backgroundSize: '13px 13px',
              WebkitMaskImage: 'url(/worldmap.svg)', maskImage: 'url(/worldmap.svg)',
              WebkitMaskSize: '100% 100%', maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center', maskPosition: 'center',
            }} />
            {/* "follow the sun" warm light sweep */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'linear-gradient(100deg, transparent 42%, rgba(255,138,72,0.55) 50%, transparent 58%)',
              backgroundSize: '230% 100%', backgroundRepeat: 'no-repeat',
              WebkitMaskImage: 'url(/worldmap.svg)', maskImage: 'url(/worldmap.svg)',
              WebkitMaskSize: '100% 100%', maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center', maskPosition: 'center',
              mixBlendMode: 'multiply', animation: 'gp-sun 9s linear infinite',
            }} />
            {/* animated connection arcs */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}>
              {[['M27,34 Q50,12 70.5,47'], ['M27,34 Q54,14 77,58'], ['M70.5,47 Q72,42 77,58']].map(([d], i) => (
                <path key={i} d={d} fill="none" stroke={ORANGE} strokeWidth="1.4" strokeDasharray="4 4" strokeLinecap="round"
                  vectorEffect="non-scaling-stroke" opacity="0.6" style={{ animation: 'gp-dash 1s linear infinite' }} />
              ))}
            </svg>
            {OFFICES.map(o => (
              <span key={o.code} style={{ position: 'absolute', left: o.x, top: o.y, transform: 'translate(-50%,-50%)', width: 14, height: 14 }}>
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: ORANGE, boxShadow: '0 0 0 5px rgba(255,128,72,0.18)' }} />
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(255,128,72,0.5)', animation: 'gp-ping 2s ease-out infinite' }} />
              </span>
            ))}
          </div>
          {/* office clocks */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }} className="eng-grid">
            {OFFICES.map((o, i) => <OfficeCard key={o.code} o={o} last={i === OFFICES.length - 1} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function WhatWeDo() {
  useSEO({
    title: 'Our Services | Web, Mobile & UI/UX Development — Professional Soft-Tech',
    description: 'Explore our software development services: mobile apps, web development, UI/UX design, e-commerce, enterprise software, QA testing and DevOps.',
    path: '/services',
  });
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main style={{ fontFamily: 'inherit' }}>
      <Hero />
      <TrustedBy />
      <Disciplines />
      <Engagement />
      <TechStack />
      <CaseTeaser />
      <FAQ />
      <FollowTheSun />
      <CTA />
    </main>
  );
}
