/* Real office locations from professionalsofttech.com */
import { motion } from 'framer-motion';

const offices = [
  { city: 'Massachusetts',  country: 'USA',          role: 'Americas HQ',    detail: 'Enterprise Sales & Client Services', flag: '🇺🇸' },
  { city: 'Singapore',      country: 'Singapore',    role: 'APAC Office',    detail: 'Regional Delivery & Partnerships',   flag: '🇸🇬' },
  { city: 'India',          country: 'India',        role: 'Engineering HQ', detail: 'Development & AI Labs',              flag: '🇮🇳' },
  { city: 'Dubai',          country: 'UAE',          role: 'MENA Office',    detail: 'Client Services & Consulting',       flag: '🇦🇪' },
];

export default function GlobalPresence() {
  return (
    <section className="py-20 bg-[#F7F8FA] border-b border-[#ececec]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="text-center mb-14">
          <p className="section-label mb-4" style={{ color: '#FF8048' }}>GLOBAL PRESENCE</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2b2b2b] tracking-[-0.03em] leading-[1.07]">
            Follow the sun. <span className="text-gradient">Never lose a day.</span>
          </h2>
          <p className="text-[#4D4D4D] mt-4 text-sm md:text-base">
            Offices across four time zones — your project always has someone awake and working.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {offices.map(o => (
            <motion.div
              key={o.city}
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.55 } } }}
              className="group bg-white border border-[#ececec] rounded-2xl p-7 flex flex-col gap-4 shadow-[0_16px_40px_-28px_rgba(20,20,30,0.25)] hover:bg-[#FFF8F3] hover:border-[#FF8048]/40 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{o.flag}</span>
                <i className="fa-solid fa-location-dot w-4 h-4 text-[#8a8a8a] group-hover:text-[#FF8048] transition-colors mt-0.5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#2b2b2b] tracking-tight">{o.city}</h3>
                <span className="text-[10px] font-bold text-[#8a8a8a] uppercase tracking-widest">{o.country}</span>
              </div>
              <div className="border-t border-[#ececec] pt-4">
                <span className="text-[10px] font-black text-[#FF8048] uppercase tracking-widest block mb-1">{o.role}</span>
                <span className="text-xs text-[#4D4D4D]">{o.detail}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
