import { useState } from 'react';
import { useTheme, t } from '../context/ThemeContext';

const ORANGE = '#FF8048';
const ORANGE_BG_HOVER = '#FFF3EC';
const ORANGE_BG_HOVER_DARK = '#2a1a10';

const INDUSTRIES = [
  {
    name: 'Education & eLearning',
    icon: 'fa-solid fa-graduation-cap',
    slug: 'education',
    desc: 'e-Learning solutions that transform learning for schools, colleges and educational institutions — simpler, faster and less expensive.',
  },
  {
    name: 'Recruitment & HR',
    icon: 'fa-solid fa-users-gear',
    slug: 'human-resources',
    desc: 'Efficient recruitment and HR solutions that streamline hiring, candidate management and people analytics for any organisation.',
  },
  {
    name: 'Real Estate',
    icon: 'fa-solid fa-house',
    slug: 'real-estate',
    desc: 'Custom property platforms for dealers, builders and agents — listings, CRM, transaction management and virtual tours.',
  },
  {
    name: 'Healthcare',
    icon: 'fa-solid fa-heart-pulse',
    slug: 'healthcare',
    desc: 'End-to-end digital healthcare for hospitals, doctors and patients — EMR, patient apps, billing and appointment scheduling.',
  },
  {
    name: 'eCommerce & Retail',
    icon: 'fa-solid fa-bag-shopping',
    slug: 'e-commerce',
    desc: 'Secure, functional online stores for manufacturers, wholesalers and retailers — payments, orders, delivery and analytics.',
  },
  {
    name: 'Social Networking',
    icon: 'fa-solid fa-share-nodes',
    slug: 'social-networking',
    desc: 'Highly interactive social platforms built to boost engagement — messaging, media sharing, geolocation tools and social analytics.',
  },
  {
    name: 'Travel & Hospitality',
    icon: 'fa-solid fa-plane',
    slug: 'travel-hospitality',
    desc: 'Web and app solutions for hotels, flights, travel companies and restaurants — booking engines, reservations and itinerary tools.',
  },
  {
    name: 'Logistics',
    icon: 'fa-solid fa-truck-fast',
    slug: 'logistics',
    desc: 'Logistics apps and tools to streamline courier and distribution operations — tracking, fleet management and warehouse systems.',
  },
  {
    name: 'Startups',
    icon: 'fa-solid fa-rocket',
    slug: 'startups',
    desc: 'Best-in-class websites and mobile apps to help new ventures grow — MVPs, branding, on-demand solutions and rapid delivery.',
  },
  {
    name: 'Automobile',
    icon: 'fa-solid fa-car',
    slug: 'automobile',
    desc: 'Software solutions for dealer management, fleet operations, service booking and connected-vehicle applications.',
  },
];

export default function Industries() {
  const { dark } = useTheme();
  const C = t(dark);
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="industries"
      style={{ background: dark ? C.bg : '#f9f8f5', transition: 'background 0.3s' }}
      className="py-24 md:py-32"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-14">
          <div>
            <h2
              className="font-extrabold tracking-tight leading-[1.08]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: C.heading }}
            >
              Deep domain expertise<br />across<br />
              <span
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: ORANGE,
                }}
              >
                10 verticals.
              </span>
            </h2>
          </div>
          <div className="max-w-sm lg:pt-3">
            <p className="text-[14px] leading-relaxed" style={{ color: C.body }}>
              From healthcare and eCommerce to logistics and social networking,
              we've built production systems across 10+ industries. Each engagement
              adds to our playbook — so your project benefits from patterns we've
              already solved.
            </p>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind) => {
            const isHovered = hovered === ind.slug;
            return (
              <div
                key={ind.name}
                className="relative flex flex-col rounded-2xl p-6 cursor-pointer"
                style={{
                  background: isHovered
                    ? (dark ? ORANGE_BG_HOVER_DARK : ORANGE_BG_HOVER)
                    : (dark ? '#1a1917' : '#ffffff'),
                  border: `1px solid ${isHovered ? '#FFB899' : (dark ? '#2a2826' : '#e8e4de')}`,
                  boxShadow: isHovered
                    ? '0 8px 32px rgba(255,128,72,0.12)'
                    : (dark ? 'none' : '0 1px 3px rgba(0,0,0,0.05)'),
                  transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                  transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                }}
                onMouseEnter={() => setHovered(ind.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Icon row + dot */}
                <div className="flex items-start justify-between mb-5">
                  <i
                    className={ind.icon}
                    style={{
                      fontSize: 22,
                      color: ORANGE,
                      transition: 'transform 0.2s',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                  />
                  {/* Small orange dot */}
                  <span
                    className="w-2 h-2 rounded-full mt-1"
                    style={{
                      background: ORANGE,
                      opacity: isHovered ? 1 : 0.3,
                      transition: 'opacity 0.2s',
                    }}
                  />
                </div>

                {/* Name */}
                <h3
                  className="font-bold text-[17px] mb-3 leading-snug"
                  style={{ color: C.heading }}
                >
                  {ind.name}
                </h3>

                {/* Description */}
                <p
                  className="text-[13px] leading-relaxed flex-1 mb-6"
                  style={{ color: C.body }}
                >
                  {ind.desc}
                </p>

                {/* CTA */}
                <a
                  href={`/industries/${ind.slug}`}
                  className="text-[11px] font-bold tracking-[0.12em] uppercase inline-flex items-center gap-2"
                  style={{
                    color: ORANGE,
                    textDecoration: isHovered ? 'underline' : 'none',
                    textUnderlineOffset: '3px',
                    transition: 'text-decoration 0.1s',
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  Explore Playbook <span style={{ fontSize: 13 }}>→</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
