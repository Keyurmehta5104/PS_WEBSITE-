import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const projectTypes = ['Web Development', 'Mobile App', 'AI & Machine Learning', 'UI/UX Design', 'DevOps & Cloud', 'Other'];

const INFO_CARDS = [
  { icon: 'fa-solid fa-envelope', label: 'Email Us', value: 'enquiry@professionalsofttech.com', href: 'mailto:enquiry@professionalsofttech.com' },
  { icon: 'fa-solid fa-phone', label: 'Call Us', value: '+1 (413) 529-4901', href: 'tel:+14135294901' },
  { icon: 'fa-solid fa-earth-americas', label: 'We Serve', value: 'USA · Singapore · India — globally', href: null },
];

function FloatingInput({ id, label, type = 'text', placeholder, value, onChange, required, dark, C }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;
  return (
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <label htmlFor={id} style={{
        position: 'absolute', left: 16, top: active ? 2 : 22, fontSize: active ? 9.5 : 14,
        fontWeight: active ? 700 : 400, color: active ? '#FF8048' : C.muted,
        letterSpacing: active ? '0.12em' : '0', textTransform: active ? 'uppercase' : 'none',
        transition: 'all 0.22s cubic-bezier(0.16,1,0.3,1)', pointerEvents: 'none', zIndex: 1,
      }}>{label}</label>
      <input
        id={id} type={type} required={required} value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ''}
        style={{
          width: '100%', boxSizing: 'border-box',
          background: focused ? C.bgCard : C.bgCardSubtle,
          border: `1.5px solid ${focused ? 'rgba(255,128,72,0.55)' : C.borderLight}`,
          borderRadius: 12, padding: '24px 16px 10px', fontSize: 14, color: C.ink,
          outline: 'none', transition: 'border-color 0.25s, background 0.25s, box-shadow 0.25s',
          boxShadow: focused ? '0 0 0 4px rgba(255,128,72,0.09)' : 'none',
        }}
      />
    </div>
  );
}

function FloatingTextarea({ id, label, placeholder, value, onChange, rows = 4, required, dark, C }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;
  return (
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <label htmlFor={id} style={{
        position: 'absolute', left: 16, top: active ? 2 : 22, fontSize: active ? 9.5 : 14,
        fontWeight: active ? 700 : 400, color: active ? '#FF8048' : C.muted,
        letterSpacing: active ? '0.12em' : '0', textTransform: active ? 'uppercase' : 'none',
        transition: 'all 0.22s cubic-bezier(0.16,1,0.3,1)', pointerEvents: 'none', zIndex: 1,
      }}>{label}</label>
      <textarea
        id={id} required={required} rows={rows} value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ''}
        style={{
          width: '100%', boxSizing: 'border-box', resize: 'none',
          background: focused ? C.bgCard : C.bgCardSubtle,
          border: `1.5px solid ${focused ? 'rgba(255,128,72,0.55)' : C.borderLight}`,
          borderRadius: 12, padding: '28px 16px 10px', fontSize: 14, color: C.ink,
          outline: 'none', transition: 'border-color 0.25s, background 0.25s, box-shadow 0.25s',
          boxShadow: focused ? '0 0 0 4px rgba(255,128,72,0.09)' : 'none',
          fontFamily: 'inherit',
        }}
      />
    </div>
  );
}

export default function Contact() {
  const { dark } = useTheme();
  const C = t(dark);
  const [form, setForm] = useState({ name: '', email: '', projectType: 'Web Development', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); setForm({ name: '', email: '', projectType: 'Web Development', message: '' }); }, 1200);
  };

  return (
    <section id="contact" ref={sectionRef} style={{ background: C.bg, transition: 'background 0.3s' }} className="py-24 md:py-32 relative overflow-hidden">

      {/* Background orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,128,72,0.07) 0%, transparent 65%)', top: '-10%', right: '-8%' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(235,47,91,0.05) 0%, transparent 65%)', bottom: '-8%', left: '5%' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-4">START YOUR PROJECT</p>
          <h2 style={{ color: C.heading }} className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.07]">
            Let's build something{' '}
            <span className="text-gradient">epic together.</span>
          </h2>
          <p style={{ color: C.body }} className="mt-4 text-base leading-relaxed">
            Have an idea or a complex business challenge? We reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left info cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, boxShadow: '0 16px 32px -16px rgba(242,106,46,0.25), 0 0 0 1.5px rgba(255,128,72,0.18)' }}
                style={{ background: C.bgCard, borderRadius: 18, border: `1px solid ${C.border}`, padding: '22px 24px', transition: 'border-color 0.25s, box-shadow 0.25s, background 0.3s' }}
                className="group"
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #FFF1E9 0%, #FFE4D4 100%)', border: '1px solid rgba(255,128,72,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={card.icon} style={{ fontSize: 15, color: '#FF8048' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 10.5, fontWeight: 700, color: C.muted, letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 4px' }}>{card.label}</p>
                    {card.href ? (
                      <a href={card.href} style={{ fontSize: 13.5, fontWeight: 600, color: C.ink, textDecoration: 'none', lineHeight: 1.4, display: 'block' }} className="hover:text-[#FF8048] transition-colors duration-300">
                        {card.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: 13.5, fontWeight: 600, color: C.ink, margin: 0, lineHeight: 1.4 }}>{card.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginTop: 4, background: 'linear-gradient(135deg, #FF8048 0%, #F26A2E 100%)', borderRadius: 18, padding: '22px 24px', color: '#fff' }}
            >
              <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star" style={{ fontSize: 12, color: 'rgba(255,255,255,0.9)' }} />)}
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.55, margin: '0 0 10px' }}>
                "We've worked with Professional Softtech for 6+ years — they're the most reliable engineering team we know."
              </p>
              <p style={{ fontSize: 12, opacity: 0.8, margin: 0 }}>— Sam Kanakanui, Netwave Solutions</p>
            </motion.div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
            style={{ background: C.bgCard, borderRadius: 24, border: `1px solid ${C.border}`, boxShadow: dark ? '0 24px 48px -24px rgba(0,0,0,0.4)' : '0 24px 48px -24px rgba(0,0,0,0.12)', overflow: 'hidden', transition: 'background 0.3s, border-color 0.3s' }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -8 }} onSubmit={handleSubmit}
                  style={{ padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 22 }}>

                  {/* Project type chips */}
                  <div>
                    <p style={{ fontSize: 10.5, fontWeight: 700, color: C.muted, letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 12px' }}>Project Type</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {projectTypes.map(type => (
                        <motion.button key={type} type="button" onClick={() => setForm({ ...form, projectType: type })}
                          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                          style={{
                            padding: '8px 16px', borderRadius: 100, fontSize: 12.5, fontWeight: 600,
                            border: form.projectType === type ? '1.5px solid transparent' : '1.5px solid #e5e5e5',
                            background: form.projectType === type ? 'linear-gradient(135deg, #FF8048, #F26A2E)' : C.bgCardSubtle,
                            color: form.projectType === type ? '#fff' : C.body,
                            cursor: 'pointer', transition: 'all 0.2s',
                            boxShadow: form.projectType === type ? '0 6px 18px -8px rgba(242,106,46,0.55)' : 'none',
                          }}
                        >{type}</motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="grid-cols-1 sm:grid-cols-2">
                    <FloatingInput id="name" label="Your Name" placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required dark={dark} C={C} />
                    <FloatingInput id="email" label="Email Address" type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required dark={dark} C={C} />
                  </div>

                  {/* Message */}
                  <FloatingTextarea id="message" label="Project Details" placeholder="Tell us about your project scope, technology needs, and timeline…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} required dark={dark} C={C} />

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 18px 36px -12px rgba(242,106,46,0.6)' }}
                    whileTap={{ scale: 0.97 }}
                    type="submit" disabled={loading}
                    className="shimmer-btn"
                    style={{
                      width: '100%', background: 'linear-gradient(135deg, #FF8048 0%, #F26A2E 100%)',
                      color: '#fff', fontWeight: 700, fontSize: 15, padding: '16px 24px',
                      borderRadius: 14, border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                      boxShadow: '0 12px 32px -12px rgba(242,106,46,0.5)',
                      opacity: loading ? 0.7 : 1, transition: 'opacity 0.2s',
                      position: 'relative', overflow: 'hidden',
                    }}
                  >
                    {loading ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="fa-solid fa-paper-plane" style={{ fontSize: 13 }} />
                      </>
                    )}
                  </motion.button>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  style={{ padding: 'clamp(40px,6vw,72px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                    style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}
                  >
                    <i className="fa-solid fa-check" style={{ fontSize: 28, color: '#10B981' }} />
                  </motion.div>
                  <h4 style={{ fontSize: 26, fontWeight: 800, color: '#0a0a0a', margin: '0 0 10px', letterSpacing: '-0.02em' }}>Message Received!</h4>
                  <p style={{ fontSize: 15, color: '#737373', maxWidth: 360, lineHeight: 1.65, margin: '0 0 28px' }}>
                    Thank you for reaching out. A senior partner will contact you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    onClick={() => setSubmitted(false)}
                    style={{ background: '#fafafa', border: '1.5px solid #e5e5e5', color: '#0a0a0a', fontWeight: 600, fontSize: 13, padding: '10px 22px', borderRadius: 100, cursor: 'pointer', transition: 'all 0.2s' }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
