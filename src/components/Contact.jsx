/* Real contact data from professionalsofttech.com */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectTypes = ['Web Development', 'Mobile App', 'AI & Machine Learning', 'UI/UX Design', 'DevOps & Cloud', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', projectType: 'Web Development', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); setForm({ name: '', email: '', projectType: 'Web Development', message: '' }); }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border border-[#e5e5e5] rounded-3xl overflow-hidden shadow-xl shadow-black/[0.04]">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left panel */}
            <div className="lg:col-span-5 bg-[#fafafa] p-8 md:p-12 lg:p-16 flex flex-col justify-between border-r border-[#e5e5e5] relative overflow-hidden">
              <div className="absolute top-[15%] -left-[10%] w-52 h-52 bg-[#FF8048]/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-5">
                <p className="section-label">START YOUR PROJECT</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.07]">
                  Let's build something<br />
                  <span className="text-gradient">epic together.</span>
                </h2>
                <p className="text-[#737373] text-sm md:text-base leading-relaxed">
                  Have an idea or a complex business challenge? Tell us what you want to build. We reply within 24 hours.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-3 mt-10">
                <a href="mailto:enquiry@professionalsofttech.com"
                  className="text-[#FF8048] hover:text-[#F26A2E] transition-colors font-semibold text-base flex items-center gap-2">
                  enquiry@professionalsofttech.com <i className="fa-solid fa-arrow-right w-4 h-4" />
                </a>
                <a href="tel:+14135294901" className="text-[#0a0a0a] font-semibold text-base hover:text-[#FF8048] transition-colors">
                  +1 (413) 529-4901
                </a>
                <span className="text-[#a3a3a3] text-xs font-semibold">USA · Singapore · India — serving clients globally.</span>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-16">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="flex flex-col gap-6">

                    {/* Project type chips */}
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold text-[#a3a3a3] uppercase tracking-widest">Project Type</label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map(type => (
                          <button key={type} type="button" onClick={() => setForm({ ...form, projectType: type })}
                            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
                              form.projectType === type
                                ? 'bg-[#FF8048] text-white border-transparent shadow-sm'
                                : 'bg-white border-[#e5e5e5] text-[#737373] hover:border-[#d4d4d4] hover:text-[#0a0a0a]'
                            }`}
                          >{type}</button>
                        ))}
                      </div>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { id: 'name',  label: 'Your Name',      type: 'text',  ph: 'John Doe',          val: form.name,  key: 'name'  },
                        { id: 'email', label: 'Email Address',   type: 'email', ph: 'john@example.com',  val: form.email, key: 'email' },
                      ].map(f => (
                        <div key={f.id} className="flex flex-col gap-2">
                          <label htmlFor={f.id} className="text-[10px] font-bold text-[#a3a3a3] uppercase tracking-widest">{f.label}</label>
                          <input id={f.id} type={f.type} required value={f.val}
                            onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                            placeholder={f.ph}
                            className="bg-[#fafafa] border border-[#e5e5e5] focus:border-[#FF8048]/50 rounded-xl px-4 py-3.5 text-[#0a0a0a] placeholder-[#d4d4d4] focus:outline-none transition-all duration-300 text-sm focus:bg-white focus:shadow-sm"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[10px] font-bold text-[#a3a3a3] uppercase tracking-widest">Project Details</label>
                      <textarea id="message" required rows="4" value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your project scope, technology needs, and timeline…"
                        className="bg-[#fafafa] border border-[#e5e5e5] focus:border-[#FF8048]/50 rounded-xl px-4 py-3.5 text-[#0a0a0a] placeholder-[#d4d4d4] focus:outline-none transition-all duration-300 text-sm resize-none focus:bg-white focus:shadow-sm"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      type="submit" disabled={loading}
                      className="mt-1 w-full bg-[#FF8048] hover:bg-[#F26A2E] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg shadow-black/10 text-sm"
                    >
                      {loading ? 'Sending…' : 'Send Message ✈'}
                    </motion.button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="flex flex-col items-center justify-center text-center py-14"
                  >
                    <i className="fa-solid fa-circle-check w-14 h-14 text-green-500 mb-5" />
                    <h4 className="text-2xl font-extrabold text-[#0a0a0a] mb-2 tracking-tight">Message Received!</h4>
                    <p className="text-[#737373] text-sm max-w-sm leading-relaxed mb-8">
                      Thank you for reaching out. A senior partner from Professional Softtech will contact you within 24 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)}
                      className="bg-[#fafafa] hover:bg-[#f0f0f0] text-[#0a0a0a] border border-[#e5e5e5] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 text-xs cursor-pointer">
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
