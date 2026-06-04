/* Real recognitions from professionalsofttech.com */
import { motion } from 'framer-motion';

const awards = [
  { icon: 'fa-trophy',         name: 'Top Developer 2024',       body: 'Clutch',         year: '2024' },
  { icon: 'fa-award',          name: 'Top Software Company',     body: 'GoodFirms',      year: '2024' },
  { icon: 'fa-star',           name: 'Agency Profile Verified',  body: 'DesignRush',     year: '2024' },
  { icon: 'fa-circle-check',   name: 'Top Rated Agency',         body: 'Upwork',         year: '2023' },
  { icon: 'fa-cloud',          name: 'Google Partner',           body: 'Google',         year: '2024' },
  { icon: 'fa-server',         name: 'AWS Select Partner',       body: 'Amazon',         year: '2023' },
  { icon: 'fa-shield-halved',  name: 'ISO 9001:2015 Certified',  body: 'Quality Mgmt.',  year: '2023' },
  { icon: 'fa-award',          name: 'Shopify Plus Partner',     body: 'Shopify',        year: '2024' },
];

export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-4">RECOGNITION</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.07]">
              Industry <span className="text-gradient">recognised</span> excellence.
            </h2>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {awards.map(aw => {
            return (
              <motion.div
                key={aw.name}
                variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
                whileHover={{ y: -3 }}
                className="bg-white border border-[#e5e5e5] p-5 rounded-2xl flex flex-col items-center text-center hover:border-[#FF8048]/30 hover:shadow-md hover:shadow-blue-50 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF1E9] text-[#FF8048] flex items-center justify-center mb-4">
                  <i className={`fa-solid ${aw.icon} w-5 h-5`} />
                </div>
                <h3 className="text-xs font-bold text-[#0a0a0a] mb-0.5 leading-snug">{aw.name}</h3>
                <p className="text-[10px] text-[#737373] font-semibold mb-1">{aw.body}</p>
                <span className="text-[9px] font-bold text-[#a3a3a3] bg-[#fafafa] border border-[#e5e5e5] px-2 py-0.5 rounded-full">{aw.year}</span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
