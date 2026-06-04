/* Real contact data from professionalsofttech.com */
import { useState } from 'react';

const links = {
  Services:   ['AI Development', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'DevOps & Cloud', 'QA Testing', 'IoT & Edge'],
  Industries: ['Healthcare', 'Finance', 'E-Commerce', 'Education', 'Logistics', 'Legal', 'Manufacturing'],
  Company:    ['About Us', 'Our Work', 'How We Work', 'Awards', 'Careers', 'Blog', 'Contact'],
};

const socials = [
  { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4' },
  { label: 'GitHub',   path: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4 M9 18c-4.51 2-5-2-7-2' },
  { label: 'Twitter',  fill: true, path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

const certs = ['ISO 9001:2015', 'AWS Partner', 'Google Partner', 'Shopify Plus Partner', 'Upwork Top Rated'];

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
    <footer className="bg-[#FAFAFA] text-[#4D4D4D] border-t border-[#ececec]">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-4 flex flex-col gap-7">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-[#FF8048] flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-orange-900/30 group-hover:scale-105 transition-transform duration-300">PS</div>
              <span className="font-extrabold text-[17px] tracking-tight text-[#2b2b2b]">
                Professional <span className="text-gradient">Softtech</span>
              </span>
            </a>

            <p className="text-sm text-[#4D4D4D] leading-relaxed">
              Engineering digital excellence since 2010. We build cutting-edge AI-powered products that redefine business capabilities — across 17+ countries and 18+ industries.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-[#f1f1f1] border border-[#ececec] hover:border-transparent hover:bg-[#FF8048] text-[#4D4D4D] hover:text-white flex items-center justify-center transition-all duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill={s.fill ? 'currentColor' : 'none'} stroke={s.fill ? 'none' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <form onSubmit={onSubscribe} className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#2b2b2b] uppercase tracking-wider">Newsletter</span>
              <div className="flex gap-2">
                <input type="email" required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}
                  className="bg-white border border-[#ececec] rounded-xl px-4 py-2.5 text-[#2b2b2b] placeholder-[#9a9a9a] focus:outline-none focus:border-[#FF8048] text-sm w-full transition-colors duration-300" />
                <button type="submit" className="bg-[#FF8048] hover:bg-[#F26A2E] text-white font-semibold text-xs px-4 rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Subscribe
                </button>
              </div>
              {subscribed && <span className="text-[11px] text-green-600 font-semibold">✓ Subscribed!</span>}
            </form>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat} className="lg:col-span-2 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#2b2b2b] uppercase tracking-wider">{cat}</span>
              {items.map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-[#4D4D4D] hover:text-[#FF8048] transition-colors duration-200">{item}</a>
              ))}
            </div>
          ))}

          {/* Contact col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-bold text-[#2b2b2b] uppercase tracking-wider">Contact</span>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-envelope w-3.5 h-3.5 text-[#8a8a8a] mt-0.5 flex-shrink-0" />
              <a href="mailto:enquiry@professionalsofttech.com" className="text-xs text-[#4D4D4D] hover:text-[#FF8048] transition-colors leading-snug">
                enquiry@<br />professionalsofttech.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-phone w-3.5 h-3.5 text-[#8a8a8a] mt-0.5 flex-shrink-0" />
              <a href="tel:+14135294901" className="text-xs text-[#4D4D4D] hover:text-[#FF8048] transition-colors">+1 (413) 529-4901</a>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-location-dot w-3.5 h-3.5 text-[#8a8a8a] mt-0.5 flex-shrink-0" />
              <span className="text-xs text-[#4D4D4D] leading-snug">USA · Singapore · India</span>
            </div>
            <div className="mt-2 flex flex-col gap-1.5">
              {certs.map(c => (
                <span key={c} className="text-[10px] font-semibold text-[#8a8a8a] uppercase tracking-wide">✓ {c}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#ececec]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#8a8a8a]">
            <span>© {new Date().getFullYear()} Professional Softtech. All rights reserved.</span>
            <a href="#" className="hover:text-[#FF8048] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF8048] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FF8048] transition-colors">Cookie Policy</a>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full bg-[#f1f1f1] border border-[#ececec] hover:bg-[#FF8048] hover:border-transparent text-[#4D4D4D] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer flex-shrink-0"
            aria-label="Scroll to top">
            <i className="fa-solid fa-arrow-up w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

    </footer>
  );
}
