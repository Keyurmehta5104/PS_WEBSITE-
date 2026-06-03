import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import psLogo from '../assets/logo.png';
import {
  Menu, X, Moon, Sun, ArrowUpRight,
  Globe, Smartphone, Palette, Cloud, Cpu, FileCheck2,
  Heart, Landmark, ShoppingBag, GraduationCap, Truck, Store,
  Scale, Plane, Factory, Home, Tv, Trophy, Shield, Car, Building, Wifi,
  Users, Phone, Briefcase, Search, Zap, ClipboardCheck, CheckCircle,
} from 'lucide-react';

/* ─── Nav link definitions ───────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'Focus',       menu: 'focus' },
  { label: 'Services',    menu: 'services' },
  { label: 'Industries',  menu: 'industries' },
  { label: 'Work',        href: '#work' },
  { label: 'About',       href: '#about' },
  { label: 'How We Work', menu: 'methodology' },
];

/* ─── Dropdown content ───────────────────────────────────────────── */
const MENUS = {
  focus: {
    cols: 2,
    items: [
      { icon: Cloud,       name: 'Enterprise Apps',  desc: 'Robust bespoke software for large-scale operations' },
      { icon: Cpu,         name: 'AI & Automation',  desc: 'Smart agents, LLMs, and workflow optimisation' },
      { icon: ShoppingBag, name: 'Digital Commerce', desc: 'Headless high-conversion e-commerce platforms' },
      { icon: Globe,       name: 'DevOps & Cloud',   desc: 'High-availability architecture and deployments' },
      { icon: FileCheck2,  name: 'BI & Analytics',   desc: 'Predictive data modelling and corporate metrics' },
      { icon: Wifi,        name: 'IoT & Edge',       desc: 'Smart device integrations and edge networking' },
    ],
    promo: { bg: '#FFF3EE', label: 'WHAT WE SHIP', title: 'Five Pillars of Engineering', desc: 'End-to-end delivery at every scale.' },
  },
  services: {
    cols: 2,
    items: [
      { icon: Globe,       name: 'Web Development', desc: 'Modern, dynamic web applications' },
      { icon: Smartphone,  name: 'Mobile Apps',     desc: 'High-performing iOS, Android, cross-platform' },
      { icon: Cpu,         name: 'AI / ML',         desc: 'AI-led solutions, deeply domain-tuned' },
      { icon: Palette,     name: 'UI/UX Design',    desc: 'Intuitive, user-centric design' },
      { icon: Cloud,       name: 'DevOps',          desc: 'CI/CD, infrastructure, observability' },
      { icon: FileCheck2,  name: 'QA & Testing',    desc: 'Automated and manual quality engineering' },
    ],
    promo: { bg: '#FFF8EE', label: 'SHIP FASTER', title: 'Rapid POC', desc: 'Get a working prototype in 2–7 days.' },
  },
  industries: {
    cols: 4,
    items: [
      { icon: Heart,       name: 'Healthcare' },
      { icon: Scale,       name: 'Legal' },
      { icon: Truck,       name: 'Logistics' },
      { icon: Landmark,    name: 'Finance' },
      { icon: GraduationCap, name: 'Education' },
      { icon: Store,       name: 'Retail' },
      { icon: Tv,          name: 'Media & OTT' },
      { icon: Shield,      name: 'Insurance' },
      { icon: Plane,       name: 'Travel' },
      { icon: ShoppingBag, name: 'E-Commerce' },
      { icon: Factory,     name: 'Manufacturing' },
      { icon: Building,    name: 'Construction' },
      { icon: Trophy,      name: 'Sports' },
      { icon: Car,         name: 'Automotive' },
      { icon: Home,        name: 'Real Estate' },
      { icon: Wifi,        name: 'IT & Telecom' },
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
      { icon: Search,        name: 'Discovery',         desc: 'In-depth research that shapes the right solution' },
      { icon: Zap,           name: 'Project Execution', desc: 'Flexible, scalable, business-aligned delivery' },
      { icon: Users,         name: 'Dedicated Teams',   desc: 'On-demand benches wired to your stack' },
      { icon: ClipboardCheck,name: 'Project Review',    desc: 'Always improving what we ship' },
    ],
  },
};

/* ─── Logo using actual PS brand image ───────────────────────────── */
function PSLogo({ collapsed }) {
  return (
    <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
      {/* Full logo image — collapses to just the icon portion on scroll */}
      <div style={{
        overflow: 'hidden',
        /* On scroll: shrink to ~38px wide (just the circular icon part of the image) */
        maxWidth: collapsed ? '38px' : '220px',
        transition: 'max-width 0.38s cubic-bezier(0.16,1,0.3,1)',
        height: collapsed ? 32 : 40,
      }}>
        <img
          src={psLogo}
          alt="Professional Soft-Tech"
          style={{
            height: collapsed ? 32 : 40,
            width: 'auto',
            maxWidth: 'none',
            objectFit: 'cover',
            objectPosition: 'left center',
            transition: 'height 0.35s ease',
            display: 'block',
          }}
        />
      </div>
    </a>
  );
}

/* ─── Floating dropdown card ─────────────────────────────────────── */
function DropdownCard({ menuKey, triggerRef }) {
  const menu = MENUS[menuKey];
  if (!menu) return null;

  const ORANGE = '#FF5C1A';

  return (
    <motion.div
      key={menuKey}
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: '#fff',
        borderRadius: 18,
        boxShadow: '0 8px 48px rgba(0,0,0,0.13)',
        padding: '28px 28px 24px',
        minWidth: menu.cols === 4 ? 820 : 640,
        maxWidth: menu.cols === 4 ? 900 : 700,
        width: 'max-content',
      }}
    >
      {/* Industry / methodology: no-desc grid */}
      {(menu.cols === 4 && !menu.single) && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px 12px', marginBottom: menu.promo2 ? 20 : 0 }}>
            {menu.items.map(({ icon: Icon, name }) => (
              <a key={name} href="#industries"
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#FFF3EE'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <Icon size={16} color={ORANGE} strokeWidth={1.6} />
                <span style={{ fontSize: 13.5, fontWeight: 500, color: '#1a1a1a' }}>{name}</span>
              </a>
            ))}
          </div>
          {/* Double promo cards */}
          {menu.promo2 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 4 }}>
              {menu.promo2.map(p => (
                <div key={p.title} style={{ background: p.bg, borderRadius: 14, padding: '20px 22px' }}>
                  <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', color: '#999', textTransform: 'uppercase' }}>{p.label}</span>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', margin: '6px 0 4px' }}>{p.title}</p>
                  <p style={{ fontSize: 12.5, color: '#666', margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Methodology: single-row 4-col icons + desc */}
      {menu.single && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0 20px' }}>
          {menu.items.map(({ icon: Icon, name, desc }) => (
            <a key={name} href="#process"
              style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '10px 8px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#FFF3EE'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <Icon size={22} color={ORANGE} strokeWidth={1.5} />
              <div>
                <p style={{ fontSize: 13.5, fontWeight: 700, color: '#1a1a1a', margin: 0 }}>{name}</p>
                <p style={{ fontSize: 12, color: '#888', margin: '4px 0 0', lineHeight: 1.45 }}>{desc}</p>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Focus / Services: 2-col grid + promo card */}
      {menu.cols === 2 && !menu.single && (
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            {menu.items.map(({ icon: Icon, name, desc }) => (
              <a key={name} href="#services"
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 12px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#FFF3EE'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <Icon size={17} color={ORANGE} strokeWidth={1.6} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: '#1a1a1a', margin: 0 }}>{name}</p>
                  <p style={{ fontSize: 12, color: '#888', margin: '3px 0 0', lineHeight: 1.45 }}>{desc}</p>
                </div>
              </a>
            ))}
          </div>
          {/* Promo card */}
          {menu.promo && (
            <div style={{ width: 200, background: menu.promo.bg, borderRadius: 14, padding: '20px 18px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', color: '#999', textTransform: 'uppercase' }}>{menu.promo.label}</span>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', margin: '8px 0 4px', lineHeight: 1.25 }}>{menu.promo.title}</p>
              <p style={{ fontSize: 12, color: '#888', margin: 0 }}>{menu.promo.desc}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Main Navbar ────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [activeMenu,  setActiveMenu]  = useState(null);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [darkMode,    setDarkMode]    = useState(false);
  const leaveTimer = useRef(null);

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
    leaveTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  /* ── Dynamic styles ── */
  const BG     = scrolled
    ? 'rgba(245,242,238,0.94)'
    : '#F5F2EE';
  const SHADOW = scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none';
  const BORDER = scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent';
  const HEIGHT = scrolled ? 60 : 68;

  return (
    <>
      {/* ── Backdrop when dropdown open ── */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{ position: 'fixed', inset: 0, zIndex: 990, background: 'rgba(0,0,0,0.18)', backdropFilter: 'blur(2px)' }}
            onMouseEnter={handleMouseLeave}
          />
        )}
      </AnimatePresence>

      {/* ── Floating dropdown ── */}
      <AnimatePresence>
        {activeMenu && (
          <div
            onMouseEnter={() => handleMouseEnter(activeMenu)}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'fixed',
              top: HEIGHT,
              left: 0, right: 0,
              zIndex: 998,
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 8,
              pointerEvents: 'none',
            }}
          >
            <div style={{ pointerEvents: 'all' }}>
              <DropdownCard menuKey={activeMenu} />
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Navbar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: BG,
        boxShadow: SHADOW,
        borderBottom: BORDER,
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 48px',
          height: HEIGHT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'height 0.3s ease',
        }}>

          {/* ── Logo ── */}
          <PSLogo collapsed={scrolled} />

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
                onEnter={() => menu ? handleMouseEnter(menu) : handleMouseLeave()}
                onLeave={handleMouseLeave}
              />
            ))}
          </div>

          {/* ── Right actions ── */}
          <div className="hidden lg:flex items-center" style={{ gap: 12 }}>
            {/* Dark mode toggle */}
            <DarkToggle dark={darkMode} onToggle={() => setDarkMode(d => !d)} />

            {/* Contact CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: '#FF5C1A', color: '#fff',
                fontSize: 14, fontWeight: 500,
                padding: '10px 22px', borderRadius: 999,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e84f12'}
              onMouseLeave={e => e.currentTarget.style.background = '#FF5C1A'}
            >
              Contact <ArrowUpRight size={14} />
            </motion.a>
          </div>

          {/* ── Mobile right ── */}
          <div className="lg:hidden" style={{ alignItems: 'center', gap: 10 }}>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              background: '#FF5C1A', color: '#fff',
              fontSize: 13, fontWeight: 500,
              padding: '8px 16px', borderRadius: 999,
              textDecoration: 'none',
            }}>
              Contact <ArrowUpRight size={13} />
            </a>
            <button
              onClick={() => setMobileOpen(o => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1a1a1a', padding: 4, display: 'flex' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

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
              background: '#F5F2EE',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
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
                {[['#work','Work'],['#about','About'],['#process','How We Work']].map(([href,lbl]) => (
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
function NavLink({ label, menu, href, isActive, onEnter, onLeave }) {
  const [hovered, setHovered] = useState(false);
  const color  = (hovered || isActive) ? '#FF5C1A' : '#1a1a1a';
  const ulLine = (hovered || isActive) ? '2px solid #FF5C1A' : '2px solid transparent';

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

/* ─── Dark mode toggle ───────────────────────────────────────────── */
function DarkToggle({ dark, onToggle }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36, height: 36, borderRadius: '50%',
        border: `1px solid ${hovered ? '#FF5C1A' : '#ccc'}`,
        background: 'transparent', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? '#FF5C1A' : '#555',
        transition: 'border-color 0.2s, color 0.2s',
      }}
      aria-label="Toggle dark mode"
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
