import { useState } from 'react';

const links = {
  Services:   ['AI Development', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'DevOps & Cloud', 'QA Testing', 'IoT & Edge'],
  Industries: ['Healthcare', 'Finance', 'E-Commerce', 'Education', 'Logistics', 'Legal', 'Manufacturing'],
  Company:    ['About Us', 'Our Work', 'How We Work', 'Careers', 'Blog', 'Contact'],
};

const socials = [
  { label: 'LinkedIn', href: '#', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4' },
  { label: 'GitHub',   href: '#', path: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4 M9 18c-4.51 2-5-2-7-2' },
  { label: 'Twitter',  href: '#', fill: true, path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

const certs = [
  { label: 'ISO 9001:2015', icon: '🛡️' },
  { label: 'AWS Partner',   icon: '☁️' },
  { label: 'Google Partner',icon: '🔍' },
  { label: 'Shopify Plus',  icon: '🛒' },
  { label: 'Upwork Top Rated', icon: '⭐' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = e => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true); setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-[#F7F4EC] text-[#2b2b2b] relative overflow-hidden">

      {/* Subtle background texture blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div style={{ background: 'radial-gradient(ellipse 700px 500px at 5% 100%, rgba(255,128,72,0.07) 0%, transparent 70%)' }} className="absolute inset-0" />
        <div style={{ background: 'radial-gradient(ellipse 500px 400px at 95% 0%, rgba(255,128,72,0.05) 0%, transparent 70%)' }} className="absolute inset-0" />
      </div>

      {/* Top accent line */}
      <div style={{ background: 'linear-gradient(90deg, transparent 0%, #FF8048 30%, #FFB347 60%, transparent 100%)' }} className="h-px w-full opacity-50" />

      {/* CTA banner */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-12 border-b border-[#e8e3d8]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8048] mb-1">Ready to build something great?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight">
              Let's turn your vision into reality.
            </h2>
          </div>
          <a href="#contact"
            style={{ background: 'linear-gradient(135deg, #FF8048, #F26A2E)' }}
            className="flex-shrink-0 px-7 py-3.5 rounded-xl font-bold text-white text-sm shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:scale-105 transition-all duration-300">
            Start a Project →
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-3 flex flex-col gap-7">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div style={{ background: 'linear-gradient(135deg, #FF8048, #F26A2E)' }}
                className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-orange-200 group-hover:scale-105 transition-transform duration-300">
                PS
              </div>
              <span className="font-extrabold text-lg tracking-tight text-[#1a1a1a]">
                Professional <span className="text-[#FF8048]">Softtech</span>
              </span>
            </a>

            <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-xs">
              Engineering digital excellence since 2010. Cutting-edge AI-powered products across 17+ countries and 18+ industries.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-[#e0dbd0] bg-white hover:border-[#FF8048] hover:bg-[#FF8048] text-[#6b6b6b] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill={s.fill ? 'currentColor' : 'none'} stroke={s.fill ? 'none' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-white border border-[#e8e3d8] rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF8048]">Newsletter</p>
                <p className="text-xs text-[#9a9a9a] mt-0.5">Insights, case studies & updates.</p>
              </div>
              <form onSubmit={onSubscribe} className="flex flex-col gap-2">
                <input
                  type="email" required placeholder="your@email.com"
                  value={email} onChange={e => setEmail(e.target.value)}
                  className="bg-[#faf9f6] border border-[#e0dbd0] rounded-xl px-4 py-2.5 text-[#2b2b2b] placeholder-[#c0b9ad] focus:outline-none focus:border-[#FF8048] text-sm transition-colors duration-300 w-full"
                />
                <button type="submit"
                  style={{ background: 'linear-gradient(135deg, #FF8048, #F26A2E)' }}
                  className="w-full py-2.5 rounded-xl font-bold text-white text-xs shadow-md shadow-orange-200 hover:shadow-orange-300 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  Subscribe →
                </button>
                {subscribed && <span className="text-[11px] text-emerald-600 font-semibold text-center">✓ You're subscribed!</span>}
              </form>
            </div>

          </div>

          {/* Link cols */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat} className="lg:col-span-2 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1a1a1a] pb-2 border-b border-[#e8e3d8]">{cat}</span>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-[#6b6b6b] hover:text-[#FF8048] transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#FF8048]/30 group-hover:bg-[#FF8048] transition-colors duration-200 flex-shrink-0" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1a1a1a] pb-2 border-b border-[#e8e3d8]">Contact</span>

            <a href="mailto:enquiry@professionalsofttech.com"
              className="group flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e8e3d8] hover:border-[#FF8048]/40 hover:shadow-md hover:shadow-orange-100 transition-all duration-300">
              <div className="w-7 h-7 rounded-lg bg-[#FFF0E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-[#FF8048]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <span className="text-xs text-[#6b6b6b] group-hover:text-[#FF8048] transition-colors leading-snug">enquiry@<br />professionalsofttech.com</span>
            </a>

            <a href="tel:+14135294901"
              className="group flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e8e3d8] hover:border-[#FF8048]/40 hover:shadow-md hover:shadow-orange-100 transition-all duration-300">
              <div className="w-7 h-7 rounded-lg bg-[#FFF0E8] flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-[#FF8048]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.68h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.56-1.56a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <span className="text-xs text-[#6b6b6b] group-hover:text-[#FF8048] transition-colors whitespace-nowrap">+1 (413) 529-4901</span>
            </a>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e8e3d8]">
              <div className="w-7 h-7 rounded-lg bg-[#FFF0E8] flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-[#FF8048]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="text-xs text-[#6b6b6b] whitespace-nowrap">USA · Singapore · India</span>
            </div>

            {/* Certifications */}
            <div className="mt-1 flex flex-col gap-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#b0a898]">Certifications</p>
              <div className="flex flex-wrap gap-1.5">
                {certs.map(c => (
                  <span key={c.label}
                    className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-[#6b6b6b] border border-[#e0dbd0] rounded-lg px-2 py-1 bg-white shadow-sm">
                    {c.icon} {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[#e8e3d8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-[#9a9a9a]">
            <span>© {new Date().getFullYear()} Professional Softtech. All rights reserved.</span>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(p => (
              <a key={p} href="#" className="hover:text-[#FF8048] transition-colors duration-200">{p}</a>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'linear-gradient(135deg, #FF8048, #F26A2E)' }}
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md shadow-orange-200 hover:scale-110 transition-all duration-300 cursor-pointer flex-shrink-0"
            aria-label="Scroll to top">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>

    </footer>
  );
}
