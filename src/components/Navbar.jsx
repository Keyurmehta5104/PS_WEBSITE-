import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

/* ── Font Awesome icon helper (drop-in for the old lucide API) ──── */
function FaIcon({ icon, size = 16, color, style }) {
  return (
    <i
      className={`fa-solid ${icon}`}
      style={{ fontSize: size, color, lineHeight: 1, display: 'inline-block', ...style }}
      aria-hidden="true"
    />
  );
}

/* ─── Nav link definitions ───────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'About',       menu: 'about' },
  { label: 'Focus',       menu: 'focus' },
  { label: 'Industries',  menu: 'industries' },
  { label: 'Services',    menu: 'services' },
  { label: 'How We Work', menu: 'methodology' },
  { label: 'Work',        menu: 'work' },
];

/* ─── Animated Orbit for About Insights card ────────────────────── */
function OrbitAnimation() {
  return (
    <div style={{ position: 'relative', width: '100%', height: 140, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Static concentric rings */}
      {[90, 65, 42, 22].map((r, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: r * 2, height: r * 2,
          borderRadius: '50%',
          border: '1px solid rgba(180,160,140,0.25)',
        }} />
      ))}
      {/* Center dot */}
      <div style={{
        position: 'absolute',
        width: 14, height: 14,
        borderRadius: '50%',
        background: '#3a3530',
        zIndex: 2,
      }} />
      {/* Orbiting dot 1 — outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 180, height: 180 }}
      >
        <div style={{
          position: 'absolute',
          top: '50%', left: 0,
          transform: 'translateY(-50%)',
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#5B3FA0',
          boxShadow: '0 0 6px rgba(255,92,26,0.6)',
        }} />
      </motion.div>
      {/* Orbiting dot 2 — middle ring, opposite direction */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 128, height: 128 }}
      >
        <div style={{
          position: 'absolute',
          top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: 6, height: 6,
          borderRadius: '50%',
          background: '#3a3530',
          opacity: 0.6,
        }} />
      </motion.div>
      {/* Orbiting dot 3 — inner ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 84, height: 84 }}
      >
        <div style={{
          position: 'absolute',
          top: '50%', right: 0,
          transform: 'translateY(-50%)',
          width: 5, height: 5,
          borderRadius: '50%',
          background: '#5B3FA0',
          opacity: 0.5,
        }} />
      </motion.div>
    </div>
  );
}

/* ─── Radar pulse animation + "15+ Years" promo card ────────────── */
function FocusPromoCard() {
  return (
    <div style={{
      width: 200,
      background: '#E8F5F0',
      borderRadius: 14,
      padding: '20px 18px 18px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      overflow: 'hidden',
      position: 'relative',
      minHeight: 230,
    }}>
      {/* Radar rings — top-right anchored */}
      <div style={{
        position: 'absolute',
        top: -30, right: -30,
        width: 220, height: 220,
        pointerEvents: 'none',
      }}>
        {/* Static concentric rings */}
        {[40, 70, 100, 130, 160].map((r, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: r, height: r,
            borderRadius: '50%',
            border: '1px solid rgba(0,120,80,0.15)',
          }} />
        ))}
        {/* Pulsing ring 1 */}
        <motion.div
          animate={{ scale: [0.3, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0 }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 80, height: 80,
            borderRadius: '50%',
            border: '1.5px solid rgba(0,140,90,0.4)',
          }}
        />
        {/* Pulsing ring 2 */}
        <motion.div
          animate={{ scale: [0.3, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 80, height: 80,
            borderRadius: '50%',
            border: '1.5px solid rgba(0,140,90,0.4)',
          }}
        />
        {/* Pulsing ring 3 */}
        <motion.div
          animate={{ scale: [0.3, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 2 }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 80, height: 80,
            borderRadius: '50%',
            border: '1.5px solid rgba(0,140,90,0.4)',
          }}
        />
        {/* Center dot */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 12, height: 12,
          borderRadius: '50%',
          background: '#1a1a1a',
        }} />
      </div>

      {/* Text content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span style={{
          fontSize: 9, fontWeight: 800,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: '#5a9e80', display: 'block', marginBottom: 6,
        }}>
          15+ YEARS OF
        </span>
        <p style={{
          fontSize: 26, fontWeight: 800,
          color: '#1a1a1a', margin: '0 0 6px',
          lineHeight: 1.1, letterSpacing: '-0.02em',
        }}>
          Consistency
        </p>
        <p style={{ fontSize: 12, color: '#666', margin: 0, lineHeight: 1.45 }}>
          Delivering excellence across the globe.
        </p>
      </div>
    </div>
  );
}

/* ─── Work dropdown — 3 visual cards with consistent hover highlight ── */

function WorkCardWrapper({ href, children, title, desc, titleColor = '#1a1a1a' }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ y: hovered ? -4 : 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{
        textDecoration: 'none', borderRadius: 14,
        display: 'flex', flexDirection: 'column', flex: 1,
        cursor: 'pointer',
        boxShadow: hovered ? '0 8px 28px rgba(0,0,0,0.13)' : '0 0 0 rgba(0,0,0,0)',
        transition: 'box-shadow 0.25s ease',
      }}
    >
      {/* Illustration area — scale + brighten on hover */}
      <motion.div
        animate={{ scale: hovered ? 1.03 : 1, filter: hovered ? 'brightness(1.07)' : 'brightness(1)' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{ borderRadius: 14, overflow: 'hidden', height: 160 }}
      >
        {children}
      </motion.div>

      {/* Text */}
      <div style={{ padding: '12px 4px 4px' }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: hovered ? '#5B3FA0' : titleColor, margin: '0 0 3px', display: 'flex', alignItems: 'center', gap: 4, transition: 'color 0.2s' }}>
          {title} <FaIcon icon="fa-arrow-up-right" size={12} />
        </p>
        <p style={{ fontSize: 12, color: '#888', margin: 0 }}>{desc}</p>
      </div>
    </motion.a>
  );
}

// Card 1: Purple — floating rounded rectangles
function WorkCard1() {
  const rects = [
    { w: 80, h: 22, x: 18, y: 28, delay: 0 },
    { w: 55, h: 22, x: 90, y: 28, delay: 0.3 },
    { w: 100, h: 22, x: 28, y: 66, delay: 0.6 },
    { w: 65, h: 22, x: 50, y: 104, delay: 0.2 },
    { w: 40, h: 22, x: 18, y: 104, delay: 0.9 },
  ];
  return (
    <WorkCardWrapper href="#work" title="Popular Brands" desc="For the world's best-known brands.">
      <div style={{ background: 'linear-gradient(145deg, #c4b5f4 0%, #a78bfa 100%)', height: '100%', position: 'relative', overflow: 'hidden' }}>
        {rects.map((r, i) => (
          <motion.div key={i}
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: r.delay }}
            style={{ position: 'absolute', left: r.x, top: r.y, width: r.w, height: r.h, borderRadius: 8, background: 'rgba(255,255,255,0.55)' }}
          />
        ))}
      </div>
    </WorkCardWrapper>
  );
}

// Card 2: Teal — animated horizontal bars
function WorkCard2() {
  const bars = [
    { w: '85%', delay: 0,   color: '#0d9488' },
    { w: '65%', delay: 0.4, color: '#14b8a6' },
    { w: '75%', delay: 0.8, color: '#2dd4bf' },
  ];
  return (
    <WorkCardWrapper href="#work" title="Case Studies" desc="How we delivered at scale.">
      <div style={{ background: 'linear-gradient(145deg, #99f6e4 0%, #5eead4 100%)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px', gap: 12, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(13,148,136,0.3)', filter: 'blur(30px)' }} />
        {bars.map((bar, i) => (
          <motion.div key={i}
            initial={{ width: 0 }}
            animate={{ width: bar.w }}
            transition={{ duration: 1.2, delay: bar.delay, ease: [0.16, 1, 0.3, 1], repeat: Infinity, repeatDelay: 3 }}
            style={{ height: 10, borderRadius: 999, background: bar.color, opacity: 0.85 }}
          />
        ))}
      </div>
    </WorkCardWrapper>
  );
}

// Card 3: Blue grid — scattered animated dots
function WorkCard3() {
  const dots = [
    { cx: 30,  cy: 35,  r: 5, delay: 0 },
    { cx: 120, cy: 22,  r: 4, delay: 0.5 },
    { cx: 75,  cy: 80,  r: 6, delay: 0.9 },
    { cx: 155, cy: 60,  r: 4, delay: 0.3 },
    { cx: 50,  cy: 120, r: 3, delay: 1.2 },
    { cx: 130, cy: 110, r: 5, delay: 0.7 },
  ];
  return (
    <WorkCardWrapper href="#work" title="Our Work" desc="Design, build, ship across verticals.">
      <div style={{ background: 'linear-gradient(145deg, #dde8ff 0%, #c7d7ff 100%)', height: '100%', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }} viewBox="0 0 180 160">
          {[0,20,40,60,80,100,120,140,160,180].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="160" stroke="#93a3d4" strokeWidth="0.5"/>)}
          {[0,20,40,60,80,100,120,140,160].map(y => <line key={`h${y}`} x1="0" y1={y} x2="180" y2={y} stroke="#93a3d4" strokeWidth="0.5"/>)}
        </svg>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 180 160">
          {dots.map((d, i) => (
            <motion.circle key={i} cx={d.cx} cy={d.cy} r={d.r}
              fill="#4f6ef7" opacity={0.7}
              animate={{ r: [d.r, d.r + 2, d.r], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: d.delay, ease: 'easeInOut' }}
            />
          ))}
        </svg>
      </div>
    </WorkCardWrapper>
  );
}

/* ─── Dropdown content ───────────────────────────────────────────── */
const MENUS = {
  work: { type: 'work' },
  about: {
    type: 'about',
    items: [
      { icon: 'fa-users',         name: 'Team',         desc: 'Ready to go an extra mile to deliver great software' },
      { icon: 'fa-bolt',          name: 'How We Work',  desc: 'Get to know how you can work with us' },
      { icon: 'fa-phone',         name: 'Contact',      desc: 'Discuss your idea with our technology experts' },
      { icon: 'fa-briefcase',     name: 'Careers',      desc: 'Explore current openings and join the team' },
    ],
  },
  focus: {
    cols: 2,
    type: 'focus',
    items: [
      { icon: 'fa-rocket',           name: 'Startup & MVP Builds',         desc: 'From idea to working product fast' },
      { icon: 'fa-users',            name: 'Staff Augmentation',           desc: 'Extend your team with expert developers' },
      { icon: 'fa-handshake',        name: 'Long-Term Product Partnership', desc: 'We grow with your product, not just build it' },
      { icon: 'fa-code-branch',      name: 'Open Source Customization',    desc: 'Deep expertise in Laravel, WordPress, Shopify' },
      { icon: 'fa-mobile-screen-button', name: 'Cross-Platform Delivery',  desc: 'One team, web + mobile, delivered together' },
    ],
  },
  services: {
    cols: 2,
    items: [
      { icon: 'fa-globe',         name: 'Web Development', desc: 'Modern, dynamic web applications' },
      { icon: 'fa-mobile-screen-button', name: 'Mobile Apps', desc: 'High-performing iOS, Android, cross-platform' },
      { icon: 'fa-microchip',     name: 'AI / ML',         desc: 'AI-led solutions, deeply domain-tuned' },
      { icon: 'fa-pen-ruler',     name: 'UI/UX Design',    desc: 'Intuitive, user-centric design' },
      { icon: 'fa-cloud',         name: 'DevOps',          desc: 'CI/CD, infrastructure, observability' },
      { icon: 'fa-flask-vial',    name: 'QA & Testing',    desc: 'Automated and manual quality engineering' },
    ],
    promo: { bg: '#FFF8EE', label: 'SHIP FASTER', title: 'Rapid POC', desc: 'Get a working prototype in 2–7 days.' },
  },
  industries: {
    cols: 4,
    items: [
      { icon: 'fa-graduation-cap',  name: 'Education',          slug: 'education' },
      { icon: 'fa-users-gear',      name: 'Human Resources',    slug: 'human-resources' },
      { icon: 'fa-house',           name: 'Real Estate',        slug: 'real-estate' },
      { icon: 'fa-bag-shopping',    name: 'E-Commerce',         slug: 'e-commerce' },
      { icon: 'fa-heart-pulse',     name: 'Healthcare',         slug: 'healthcare' },
      { icon: 'fa-share-nodes',     name: 'Social Networking',  slug: 'social-networking' },
      { icon: 'fa-plane',           name: 'Travel & Hospitality', slug: 'travel-hospitality' },
      { icon: 'fa-truck-fast',      name: 'Logistics',          slug: 'logistics' },
      { icon: 'fa-rocket',          name: 'Startups',           slug: 'startups' },
      { icon: 'fa-car',             name: 'Automobile',         slug: 'automobile' },
    ],
    promo2: [
      { bg: '#FDE8F0', label: 'NAMES YOU ALREADY KNOW', title: 'Our Partners in Growth', desc: 'Deep domain expertise across every vertical.' },
      { bg: '#FFF8EE', label: 'RAPID POC',               title: 'Have an Idea?',          desc: 'Get a working prototype in 2–7 days.' },
    ],
  },
  methodology: {
    cols: 4,
    single: true,
    items: [
      { icon: 'fa-magnifying-glass', name: 'Discovery',         desc: 'In-depth research that shapes the right solution' },
      { icon: 'fa-gears',            name: 'Project Execution', desc: 'Flexible, scalable, business-aligned delivery' },
      { icon: 'fa-users',            name: 'Dedicated Teams',   desc: 'On-demand benches wired to your stack' },
      { icon: 'fa-clipboard-check',  name: 'Project Review',    desc: 'Always improving what we ship' },
    ],
  },
};

/* ─── Logo using actual PS brand image ───────────────────────────── */
function PSLogo({ collapsed, darkMode }) {
  const imgH = collapsed ? 34 : 42;

  /* In dark mode: clip the PNG to show only the colorful icon (~40px),
     then render white HTML text beside it — no filter, no colour shift. */
  if (darkMode) {
    return (
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', flexShrink: 0 }}>
        {/* Icon only — clip the logo PNG to the icon portion */}
        <div style={{ width: imgH, height: imgH, overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <img
            src="/ps-logo.png"
            alt="Professional Soft-Tech icon"
            style={{ height: imgH, width: 'auto', maxWidth: 'none', display: 'block', flexShrink: 0 }}
          />
        </div>

        {/* White HTML text — hidden when collapsed (pill nav already small) */}
        {!collapsed && (
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{
              fontFamily: 'var(--font-sans, Poppins, sans-serif)',
              fontSize: 13.5, fontWeight: 800, color: '#ffffff',
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>Professional<sup style={{ fontSize: 7, verticalAlign: 'super', fontWeight: 600, opacity: 0.7 }}>®</sup></span>
            <span style={{
              fontFamily: 'var(--font-sans, Poppins, sans-serif)',
              fontSize: 13.5, fontWeight: 800, color: '#ffffff',
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>Soft-Tech</span>
          </div>
        )}
      </a>
    );
  }

  /* Light mode: original image, full width clip behaviour */
  return (
    <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
      <div style={{
        overflow: 'hidden',
        maxWidth: collapsed ? '36px' : '260px',
        height: imgH,
        transition: 'max-width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.3s ease',
        display: 'flex', alignItems: 'center',
      }}>
        <img
          src="/ps-logo.png"
          alt="Professional Soft-Tech"
          style={{ height: imgH, width: 'auto', maxWidth: 'none', display: 'block', flexShrink: 0, transition: 'height 0.3s ease' }}
        />
      </div>
    </a>
  );
}

/* ─── Floating dropdown card ─────────────────────────────────────── */
function DropdownCard({ menuKey, darkMode }) {
  const menu = MENUS[menuKey];
  if (!menu) return null;

  const ORANGE = '#5B3FA0';
  const D = darkMode;

  // Dark mode tokens
  const cardBg    = D ? '#161616' : '#fff';
  const titleClr  = D ? '#fff'    : '#1a1a1a';
  const descClr   = D ? 'rgba(255,255,255,0.45)' : '#888';
  const hoverBg   = D ? 'rgba(255,255,255,0.06)' : '#FFF3EE';
  const borderClr = D ? 'rgba(255,255,255,0.08)' : '#eee';
  const tagClr    = D ? 'rgba(255,255,255,0.5)'  : '#525252';

  const cardWidth = menu.type === 'work'  ? 620
    : menu.type === 'about' ? 580
    : menu.cols === 4 ? 820 : 640;

  return (
    <motion.div
      key={menuKey}
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: cardBg,
        borderRadius: 18,
        boxShadow: D ? '0 8px 48px rgba(0,0,0,0.6)' : '0 8px 48px rgba(0,0,0,0.13)',
        border: D ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        padding: '24px 24px 20px',
        minWidth: cardWidth,
        maxWidth: cardWidth,
        width: 'max-content',
      }}
    >
      {/* ── About dropdown ── */}
      {menu.type === 'about' && (
        <div>
          {/* 2×2 grid of links */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 12 }}>
            {menu.items.map(({ icon, name, desc }) => (
              <a
                key={name}
                href={name === 'Contact' ? '/#contact' : '/about'}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 14px', borderRadius: 12, textDecoration: 'none', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = hoverBg}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <FaIcon icon={icon} size={17} color={ORANGE} style={{ marginTop: 2, flexShrink: 0, width: 20, textAlign: 'center' }} />
                <div>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: titleClr, margin: 0 }}>{name}</p>
                  <p style={{ fontSize: 12, color: descClr, margin: '3px 0 0', lineHeight: 1.4 }}>{desc}</p>
                </div>
              </a>
            ))}
          </div>
          {/* Insights orbit promo card */}
          <div style={{
            background: D ? 'linear-gradient(135deg, #1e1240 0%, #160e38 100%)' : 'linear-gradient(135deg, #F0EBF8 0%, #EDE8F5 100%)',
            borderRadius: 14, overflow: 'hidden', padding: '20px 24px 0', position: 'relative',
          }}>
            <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: D ? 'rgba(255,255,255,0.4)' : '#999' }}>INSIGHTS</span>
            <p style={{ fontSize: 20, fontWeight: 700, color: ORANGE, margin: '6px 0 2px' }}>About</p>
            <p style={{ fontSize: 12.5, color: D ? 'rgba(255,255,255,0.55)' : '#666', margin: 0 }}>Stories that drive smarter innovation.</p>
            <OrbitAnimation />
          </div>
        </div>
      )}

      {/* Work: 3 visual cards */}
      {menu.type === 'work' && (
        <div style={{ display: 'flex', gap: 16, width: 580 }}>
          <WorkCard1 />
          <WorkCard2 />
          <WorkCard3 />
        </div>
      )}

      {/* Industry / methodology: no-desc grid */}
      {(menu.cols === 4 && !menu.single) && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px 12px', marginBottom: menu.promo2 ? 20 : 0 }}>
            {menu.items.map(({ icon, name, slug }) => (
              <a key={name} href={slug ? `/industries/${slug}` : '/industries'}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = hoverBg}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <FaIcon icon={icon} size={15} color={ORANGE} style={{ width: 18, textAlign: 'center' }} />
                <span style={{ fontSize: 13.5, fontWeight: 500, color: tagClr }}>{name}</span>
              </a>
            ))}
          </div>
          {menu.promo2 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 8 }}>
              {/* LEFT card */}
              <div style={{ background: D ? '#1f1218' : '#F9E8EE', borderRadius: 14, padding: '20px 22px', position: 'relative', overflow: 'hidden', minHeight: 130 }}>
                <div style={{ position: 'absolute', top: 0, right: 0, display: 'grid', gridTemplateColumns: 'repeat(7, 28px)', gridTemplateRows: 'repeat(4, 28px)', gap: 5, padding: 12, opacity: 0.45 }}>
                  {Array.from({ length: 28 }).map((_, i) => (
                    <motion.div key={i}
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: (i * 0.09) % 2.5, ease: 'easeInOut' }}
                      style={{ width: 24, height: 24, borderRadius: 5, background: D ? 'rgba(255,100,150,0.3)' : 'rgba(200,120,150,0.35)' }}
                    />
                  ))}
                </div>
                <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', paddingTop: 40 }}>
                  <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', color: D ? '#e05080' : '#c06080', textTransform: 'uppercase' }}>NAMES YOU ALREADY KNOW</span>
                  <p style={{ fontSize: 16, fontWeight: 700, color: titleClr, margin: '6px 0 4px' }}>Our Partners in Growth</p>
                  <p style={{ fontSize: 12, color: descClr, margin: 0 }}>Deep domain expertise across every vertical.</p>
                </div>
              </div>
              {/* RIGHT card */}
              <div style={{ background: D ? '#1a1608' : '#FEF6E4', borderRadius: 14, padding: '20px 22px', position: 'relative', overflow: 'hidden', minHeight: 130 }}>
                <svg style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', opacity: 0.35 }} viewBox="0 0 300 130" preserveAspectRatio="xMidYMid slice">
                  {[0,18,36,54,72,90].map((offset, i) => (
                    <motion.path key={i}
                      d={`M -20 ${offset} Q 80 ${offset-14} 160 ${offset} Q 240 ${offset+14} 320 ${offset}`}
                      stroke={D ? 'rgba(200,160,60,0.6)' : 'rgba(160,120,50,0.5)'}
                      strokeWidth="1.2" fill="none"
                      animate={{ d: [
                        `M -20 ${offset} Q 80 ${offset-14} 160 ${offset} Q 240 ${offset+14} 320 ${offset}`,
                        `M -20 ${offset} Q 80 ${offset+14} 160 ${offset} Q 240 ${offset-14} 320 ${offset}`,
                        `M -20 ${offset} Q 80 ${offset-14} 160 ${offset} Q 240 ${offset+14} 320 ${offset}`,
                      ]}}
                      transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  ))}
                </svg>
                <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', paddingTop: 40 }}>
                  <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', color: D ? '#c8a040' : '#b08030', textTransform: 'uppercase' }}>RAPID POC</span>
                  <p style={{ fontSize: 16, fontWeight: 700, color: titleClr, margin: '6px 0 4px' }}>Have an Idea?</p>
                  <p style={{ fontSize: 12, color: descClr, margin: 0 }}>Get a working prototype in 2–7 days.</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Methodology: single-row 4-col icons + desc */}
      {menu.single && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0 20px' }}>
          {menu.items.map(({ icon, name, desc }) => (
            <a key={name} href="#process"
              style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '10px 8px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = hoverBg}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <FaIcon icon={icon} size={20} color={ORANGE} />
              <div>
                <p style={{ fontSize: 13.5, fontWeight: 700, color: titleClr, margin: 0 }}>{name}</p>
                <p style={{ fontSize: 12, color: descClr, margin: '4px 0 0', lineHeight: 1.45 }}>{desc}</p>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Focus / Services: 2-col grid + promo card */}
      {menu.cols === 2 && !menu.single && (
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1 }}>
            {/* For focus (5 items): first 4 in 2-col, last one full-width */}
            {menu.type === 'focus' ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                  {menu.items.slice(0, 4).map(({ icon, name, desc }) => (
                    <a key={name} href="#"
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 12px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.background = hoverBg}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <FaIcon icon={icon} size={16} color={ORANGE} style={{ marginTop: 2, flexShrink: 0, width: 19, textAlign: 'center' }} />
                      <div>
                        <p style={{ fontSize: 13.5, fontWeight: 700, color: titleClr, margin: 0 }}>{name}</p>
                        <p style={{ fontSize: 12, color: descClr, margin: '3px 0 0', lineHeight: 1.45 }}>{desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
                {menu.items[4] && (() => {
                  const { icon, name, desc } = menu.items[4];
                  return (
                    <a href="#"
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 12px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s', marginTop: 4 }}
                      onMouseEnter={e => e.currentTarget.style.background = hoverBg}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <FaIcon icon={icon} size={16} color={ORANGE} style={{ marginTop: 2, flexShrink: 0, width: 19, textAlign: 'center' }} />
                      <div>
                        <p style={{ fontSize: 13.5, fontWeight: 700, color: titleClr, margin: 0 }}>{name}</p>
                        <p style={{ fontSize: 12, color: descClr, margin: '3px 0 0', lineHeight: 1.45 }}>{desc}</p>
                      </div>
                    </a>
                  );
                })()}
              </>
            ) : (
              /* Services: standard 2-col 6-item grid */
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                {menu.items.map(({ icon, name, desc }) => (
                  <a key={name} href="#services"
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 12px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#FFF3EE'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <FaIcon icon={icon} size={16} color={ORANGE} style={{ marginTop: 2, flexShrink: 0, width: 19, textAlign: 'center' }} />
                    <div>
                      <p style={{ fontSize: 13.5, fontWeight: 700, color: titleClr, margin: 0 }}>{name}</p>
                      <p style={{ fontSize: 12, color: descClr, margin: '3px 0 0', lineHeight: 1.45 }}>{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Animated promo card for Focus */}
          {menu.type === 'focus' && <FocusPromoCard />}

          {/* Animated promo card for Services */}
          {menu.promo && menu.type !== 'focus' && (
            <div style={{
              width: 210, flexShrink: 0,
              background: D ? '#1a1008' : '#F5D5C0',
              borderRadius: 14,
              padding: '20px 18px',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              position: 'relative', overflow: 'hidden',
              minHeight: 220,
            }}>
              {/* Floating dots */}
              {[
                { top: '18%', left: '12%', size: 7, delay: 0 },
                { top: '35%', left: '62%', size: 5, delay: 0.8 },
                { top: '55%', left: '28%', size: 6, delay: 1.4 },
                { top: '22%', left: '80%', size: 4, delay: 0.4 },
                { top: '68%', left: '72%', size: 5, delay: 1.0 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [-4, 4, -4], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }}
                  style={{
                    position: 'absolute',
                    top: dot.top, left: dot.left,
                    width: dot.size, height: dot.size,
                    borderRadius: '50%',
                    background: 'rgba(180, 90, 40, 0.35)',
                  }}
                />
              ))}

              {/* Wavy SVG lines */}
              <svg style={{ position: 'absolute', bottom: 60, left: 0, width: '100%', opacity: 0.25 }} viewBox="0 0 210 60" preserveAspectRatio="none">
                {[10, 24, 38, 52].map((y, i) => (
                  <motion.path
                    key={i}
                    d={`M 0 ${y} Q 55 ${y - 10} 105 ${y} Q 160 ${y + 10} 210 ${y}`}
                    stroke="#a0500a"
                    strokeWidth="1"
                    fill="none"
                    animate={{ d: [
                      `M 0 ${y} Q 55 ${y - 10} 105 ${y} Q 160 ${y + 10} 210 ${y}`,
                      `M 0 ${y} Q 55 ${y + 10} 105 ${y} Q 160 ${y - 10} 210 ${y}`,
                      `M 0 ${y} Q 55 ${y - 10} 105 ${y} Q 160 ${y + 10} 210 ${y}`,
                    ]}}
                    transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </svg>

              {/* Text */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', color: D ? '#c8903a' : '#a06030', textTransform: 'uppercase' }}>SHIP FASTER</span>
                <p style={{ fontSize: 22, fontWeight: 800, color: titleClr, margin: '6px 0 5px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Rapid POC</p>
                <p style={{ fontSize: 12, color: D ? 'rgba(255,255,255,0.5)' : '#7a4020', margin: 0, lineHeight: 1.5 }}>Validate your idea with a working prototype in weeks.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Theme toggle button (reused in both navbars) ──────────────── */
function ThemeToggle({ darkMode, onToggle, size = 36 }) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label="Toggle dark mode"
      style={{
        width: size, height: size, borderRadius: '50%', flexShrink: 0,
        border: darkMode ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(0,0,0,0.11)',
        background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', color: darkMode ? '#f0ede6' : '#1a1a1a',
        transition: 'background 0.25s, border-color 0.25s, color 0.25s',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.i
          key={darkMode ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
          transition={{ duration: 0.18 }}
          className={darkMode ? 'fa-solid fa-sun' : 'fa-regular fa-moon'}
          style={{ fontSize: 14 }}
          aria-hidden="true"
        />
      </AnimatePresence>
    </motion.button>
  );
}

/* ─── Main Navbar ────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark: darkMode, toggle } = useTheme();
  const leaveTimer = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleMouseEnter = (menu) => {
    clearTimeout(leaveTimer.current);
    setActiveMenu(menu || null);
  };

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => setActiveMenu(null), 180);
  };

  const HEIGHT = 70;
  const dropdownTop = scrolled ? 74 : HEIGHT + 6;
  const linkClr = darkMode ? 'rgba(255,255,255,0.8)' : '#1a1a1a';

  return (
    <>
      {/* ── Dropdown overlay — covers full screen so there is ZERO dead zone ── */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed', inset: 0,
              zIndex: 996,
              /* Dim backdrop below the card */
              background: 'rgba(0,0,0,0.18)',
              backdropFilter: 'blur(2px)',
            }}
            /* Clicking the backdrop closes menu */
            onClick={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Dropdown card — seamless zone from top:0 through navbar into card ── */}
      <AnimatePresence>
        {activeMenu && (
          <div
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0,
              /* height covers navbar + gap + card — mouse never leaves this zone */
              height: '100vh',
              zIndex: 997,
              pointerEvents: 'none',   /* transparent everywhere except card */
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: dropdownTop,
            }}
          >
            {/* This inner div is the only interactive zone */}
            <div
              style={{ pointerEvents: 'all' }}
              onMouseEnter={() => {
                clearTimeout(leaveTimer.current);
              }}
              onMouseLeave={() => {
                leaveTimer.current = setTimeout(() => setActiveMenu(null), 200);
              }}
            >
              <DropdownCard menuKey={activeMenu} darkMode={darkMode} />
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Full-width navbar — only shown when at top of page ── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            key="full-nav"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0,
              zIndex: 1000,
              background: darkMode ? '#0a0a0a' : '#FFFFFF',
              transition: 'background 0.3s ease',
            }}
          >
            <div style={{
              maxWidth: '100%',
              margin: '0 auto',
              padding: '0 5%',
              height: HEIGHT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>

              {/* ── Logo ── */}
              <PSLogo collapsed={false} darkMode={darkMode} />

              {/* ── Desktop nav links ── */}
              <div
                className="hidden lg:flex items-center"
                style={{ gap: 36, height: '100%' }}
              >
                {NAV_ITEMS.map(({ label, menu, href }) => (
                  <NavLink
                    key={label}
                    label={label}
                    menu={menu}
                    href={href}
                    isActive={activeMenu === menu}
                    darkMode={darkMode}
                    onClick={
                      menu === 'about' ? () => { setActiveMenu(null); navigate('/about'); }
                      : menu === 'services' ? () => { setActiveMenu(null); navigate('/services'); }
                      : menu === 'industries' ? () => { setActiveMenu(null); navigate('/industries'); }
                      : undefined
                    }
                    onEnter={() => {
                      clearTimeout(leaveTimer.current);
                      if (menu) setActiveMenu(menu);
                      else setActiveMenu(null);
                    }}
                    onLeave={() => {
                      if (!menu) return;
                      leaveTimer.current = setTimeout(() => setActiveMenu(null), 200);
                    }}
                  />
                ))}
              </div>

              {/* ── Right actions ── */}
              <div className="hidden lg:flex items-center" style={{ gap: 10 }}>
                <ThemeToggle darkMode={darkMode} onToggle={toggle} size={38} />
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    background: '#5B3FA0', color: '#fff',
                    fontSize: 14, fontWeight: 500,
                    padding: '10px 22px', borderRadius: 999,
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#4A3080'}
                  onMouseLeave={e => e.currentTarget.style.background = '#5B3FA0'}
                >
                  Contact <FaIcon icon="fa-arrow-up-right" size={13} />
                </motion.a>
              </div>

              {/* ── Mobile right ── */}
              <div className="lg:hidden" style={{ alignItems: 'center', gap: 10 }}>
                <a href="#contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  background: '#5B3FA0', color: '#fff',
                  fontSize: 13, fontWeight: 500,
                  padding: '8px 16px', borderRadius: 999,
                  textDecoration: 'none',
                }}>
                  Contact <FaIcon icon="fa-arrow-up-right" size={12} />
                </a>
                <button
                  onClick={() => setMobileOpen(o => !o)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1a1a1a', padding: 4, display: 'flex' }}
                >
                  {mobileOpen ? <FaIcon icon="fa-xmark" size={22} /> : <FaIcon icon="fa-bars" size={20} />}
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── Floating pill navbar — appears when user scrolls ── */}
      <AnimatePresence>
        {scrolled && (
          <div
            key="pill-wrapper"
            style={{
              position: 'fixed',
              top: 14,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
            }}
          >
            <motion.nav
              initial={{ opacity: 0, y: -16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: darkMode ? 'rgba(18,17,15,0.88)' : 'rgba(242,240,234,0.88)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
                borderRadius: 999,
                boxShadow: darkMode ? '0 4px 32px rgba(0,0,0,0.5)' : '0 4px 32px rgba(0,0,0,0.11), 0 1px 0 rgba(255,255,255,0.7) inset',
                border: darkMode ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(0,0,0,0.09)',
                height: 54,
                display: 'flex',
                alignItems: 'center',
                padding: '0 8px 0 10px',
                gap: 0,
                whiteSpace: 'nowrap',
              }}
            >
              {/* Logo icon only */}
              <PSLogo collapsed={true} darkMode={darkMode} />

              {/* Thin divider */}
              <div style={{ width: 1, height: 20, background: 'rgba(0,0,0,0.12)', margin: '0 16px 0 12px', flexShrink: 0 }} />

              {/* Nav links */}
              <div className="hidden lg:flex items-center" style={{ gap: 26 }}>
                {NAV_ITEMS.map(({ label, menu, href }) => (
                  <NavLink
                    key={label}
                    label={label}
                    menu={menu}
                    href={href}
                    isActive={activeMenu === menu}
                    darkMode={darkMode}
                    onClick={
                      menu === 'about' ? () => { setActiveMenu(null); navigate('/about'); }
                      : menu === 'services' ? () => { setActiveMenu(null); navigate('/services'); }
                      : menu === 'industries' ? () => { setActiveMenu(null); navigate('/industries'); }
                      : undefined
                    }
                    onEnter={() => { clearTimeout(leaveTimer.current); if (menu) setActiveMenu(menu); else setActiveMenu(null); }}
                    onLeave={() => { if (!menu) return; leaveTimer.current = setTimeout(() => setActiveMenu(null), 200); }}
                  />
                ))}
              </div>

              {/* Right: dark-mode toggle + Contact */}
              <div className="hidden lg:flex items-center" style={{ gap: 8, marginLeft: 22 }}>
                <ThemeToggle darkMode={darkMode} onToggle={toggle} size={34} />

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    background: '#5B3FA0', color: '#fff',
                    fontSize: 13.5, fontWeight: 500,
                    padding: '9px 20px', borderRadius: 999,
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#4A3080'}
                  onMouseLeave={e => e.currentTarget.style.background = '#5B3FA0'}
                >
                  Contact <FaIcon icon="fa-arrow-up-right" size={12} />
                </motion.a>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: HEIGHT,
              left: 0, right: 0, zIndex: 998,
              background: '#ffffff',
              borderBottom: darkMode ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
              overflowY: 'auto',
              maxHeight: '80vh',
            }}
            className="lg:hidden"
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { label: 'Focus Areas',  items: MENUS.focus.items.map(i => i.name),        href: '#services'  },
                { label: 'Services',     items: MENUS.services.items.map(i => i.name),      href: '#services'  },
                { label: 'Industries',   items: MENUS.industries.items.map(i => i.name).slice(0, 12), href: '#industries' },
              ].map(({ label, items, href }) => (
                <div key={label}>
                  <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', display: 'block', marginBottom: 10 }}>{label}</span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
                    {items.map(name => (
                      <a key={name} href={href} onClick={() => setMobileOpen(false)}
                        style={{ fontSize: 14, color: '#1a1a1a', textDecoration: 'none', fontWeight: 400 }}>
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[['/#work','Work'],['/about','About'],['/#process','How We Work']].map(([href,lbl]) => (
                  <a key={lbl} href={href} onClick={() => setMobileOpen(false)}
                    style={{ fontSize: 15, fontWeight: 500, color: '#1a1a1a', textDecoration: 'none' }}>{lbl}</a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── NavLink atom ───────────────────────────────────────────────── */
function NavLink({ label, menu, href, isActive, onEnter, onLeave, onClick, darkMode }) {
  const [hovered, setHovered] = useState(false);
  const color  = (hovered || isActive) ? '#5B3FA0' : darkMode ? 'rgba(255,255,255,0.85)' : '#1a1a1a';
  const ulLine = (hovered || isActive) ? '2px solid #5B3FA0' : '2px solid transparent';

  const baseStyle = {
    fontSize: 15, fontWeight: 400, color,
    textDecoration: 'none', background: 'none', border: 'none',
    cursor: 'pointer', padding: '4px 0',
    borderBottom: ulLine,
    transition: 'color 0.2s, border-color 0.2s',
    letterSpacing: 0,
    fontFamily: 'inherit',
  };

  return menu ? (
    <button
      style={baseStyle}
      onClick={onClick}
      onMouseEnter={() => { setHovered(true); onEnter(); }}
      onMouseLeave={() => { setHovered(false); onLeave(); }}
    >
      {label}
    </button>
  ) : (
    <a
      href={href}
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
}

