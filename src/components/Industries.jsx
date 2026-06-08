import { motion } from 'framer-motion';

const industries = [
  { name: 'Healthcare',       icon: 'fa-heart-pulse' },
  { name: 'Finance',          icon: 'fa-building-columns' },
  { name: 'E-Commerce',       icon: 'fa-bag-shopping' },
  { name: 'Education',        icon: 'fa-graduation-cap' },
  { name: 'Logistics',        icon: 'fa-truck-fast' },
  { name: 'Retail',           icon: 'fa-store' },
  { name: 'Legal',            icon: 'fa-scale-balanced' },
  { name: 'Travel',           icon: 'fa-plane' },
  { name: 'Manufacturing',    icon: 'fa-industry' },
  { name: 'Real Estate',      icon: 'fa-house' },
  { name: 'Media & OTT',      icon: 'fa-tv' },
  { name: 'Sports',           icon: 'fa-trophy' },
  { name: 'Insurance',        icon: 'fa-shield-halved' },
  { name: 'Automotive',       icon: 'fa-car' },
  { name: 'Construction',     icon: 'fa-building' },
  { name: 'Social Networking',icon: 'fa-users' },
  { name: 'On Demand',        icon: 'fa-mobile-screen-button' },
  { name: 'Hospitality',      icon: 'fa-mug-hot' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-[#F7F4EC] border-b border-[#ece7da]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="section-label mb-4">INDUSTRIES WE SERVE</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.07]">
              AI solutions for modern businesses.
            </h2>
            <p className="text-[#525252] mt-4 text-sm md:text-base leading-relaxed">
              AI-powered applications across 18+ verticals. We understand your domain before we write a line of code.
            </p>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          {industries.map(ind => {
            return (
              <motion.div
                key={ind.name}
                variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.45 } } }}
                className="group bg-white border border-[#e5e5e5] rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:border-[#FF8048]/30 hover:bg-[#f5f8ff] hover:shadow-sm transition-all duration-300 relative overflow-hidden"
              >
                <i className={`fa-solid ${ind.icon} w-4 h-4 text-[#FF8048] flex-shrink-0`} />
                <span className="text-xs font-semibold text-[#525252] group-hover:text-[#0a0a0a] leading-snug">{ind.name}</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8048] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex justify-start mt-10">
          <a href="#contact" className="text-sm font-semibold text-[#FF8048] hover:text-[#F26A2E] transition-colors flex items-center gap-1 group">
            See all industries
            <i className="fa-solid fa-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
