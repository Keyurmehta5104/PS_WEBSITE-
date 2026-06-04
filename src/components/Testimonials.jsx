/* Real testimonials from professionalsofttech.com */
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sam Kanakanui',
    role: 'Founder',
    company: 'Netwave Solutions',
    text: 'I have been using Professional Soft-Tech for over 6 years and I am very happy with their work. They are reliable, responsive, and deliver exactly what they promise. Highly recommended for any web or mobile project.',
    av: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    id: 2,
    name: 'Dan Salganik',
    role: 'Co-Founder',
    company: 'VisualFizz',
    text: 'Great developers — I have been working with one of their developers for years and he has become an invaluable member of my team. The quality of output and communication has always been outstanding.',
    av: 'bg-sky-100 text-sky-700 border-sky-200',
  },
  {
    id: 3,
    name: 'Terry Tateossian',
    role: 'Founder',
    company: 'Socialfix',
    text: 'Reliable developers who understand our business deeply and consistently deliver quality work on tight deadlines. Professional Softtech has been a trusted long-term partner for our digital transformation.',
    av: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  },
  {
    id: 4,
    name: 'Guðmundur R Einarsson',
    role: 'CEO',
    company: 'Vefgerðin',
    text: 'I highly recommend Professional Softtech. Their development team understood our requirements perfectly and delivered a polished product well within our timeline. The ongoing support has been equally excellent.',
    av: 'bg-violet-100 text-violet-700 border-violet-200',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#fafafa] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">CLIENT SUCCESS</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.07]">
              Loved by forward-thinking<br />
              <span className="text-gradient">tech leaders.</span>
            </h2>
            <p className="text-[#737373] mt-5 text-base md:text-lg leading-relaxed">
              Don't just take our word for it. Here is what our clients say about working with us.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {testimonials.map(t => (
            <motion.div
              key={t.id}
              variants={{ hidden: { y: 24, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.55 } } }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#e5e5e5] p-7 rounded-2xl shadow-sm flex flex-col justify-between hover:border-[#FF8048]/20 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group relative"
            >
              <i className="fa-solid fa-quote-right absolute top-5 right-6 w-10 h-10 text-[#f0f0f0] group-hover:text-[#FFF1E9] transition-colors" />

              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-[#525252] text-sm leading-relaxed italic">"{t.text}"</p>
              </div>

              <div className="flex items-center gap-3 border-t border-[#e5e5e5] pt-5 mt-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border ${t.av}`}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-[#0a0a0a] text-sm">{t.name}</h4>
                  <p className="text-xs text-[#a3a3a3] font-medium mt-0.5">
                    {t.role}, <span className="text-[#525252] font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
