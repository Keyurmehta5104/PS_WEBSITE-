import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const ORANGE = '#5B3FA0';

const projectTypes = [
  'Web Development', 'Mobile App', 'AI & Machine Learning',
  'UI/UX Design', 'DevOps & Cloud', 'Other',
];

const INFO = [
  { icon: 'fa-solid fa-envelope',       value: 'enquiry@professionalsofttech.com', href: 'mailto:enquiry@professionalsofttech.com' },
  { icon: 'fa-solid fa-phone',           value: '+1 (413) 529-4901',                href: 'tel:+14135294901' },
  { icon: 'fa-solid fa-earth-americas',  value: 'USA · Singapore · India',          href: null },
];

const STATS = [
  { num: '500+', label: 'Projects'     },
  { num: '14+',  label: 'Years'        },
  { num: '30+',  label: 'Countries'    },
  { num: '98%',  label: 'Satisfaction' },
];

/* ── Floating-label input ── */
function Field({ id, label, type = 'text', value, onChange, required, as = 'input', rows = 3 }) {
  const [focused, setFocused] = useState(false);
  const active = focused || !!value;
  const shared = {
    onFocus: () => setFocused(true),
    onBlur:  () => setFocused(false),
    value, onChange, required,
    style: {
      width: '100%', boxSizing: 'border-box', fontFamily: 'inherit',
      background: '#f8f7f5',
      border: `1.5px solid ${focused ? ORANGE : '#e2ddd7'}`,
      borderRadius: 10,
      padding: as === 'textarea' ? '26px 14px 10px' : '24px 14px 8px',
      fontSize: 13.5, color: '#1a1a1a', outline: 'none',
      resize: as === 'textarea' ? 'none' : undefined,
      transition: 'border-color 0.2s, box-shadow 0.2s',
      boxShadow: focused ? `0 0 0 3px ${ORANGE}18` : 'none',
    },
  };
  return (
    <div style={{ position: 'relative', paddingTop: 8 }}>
      <label htmlFor={id} style={{
        position: 'absolute', left: 14,
        top: active ? 3 : 19,
        fontSize: active ? 9 : 13.5,
        fontWeight: active ? 700 : 400,
        color: active ? ORANGE : '#9a9082',
        letterSpacing: active ? '0.1em' : 0,
        textTransform: active ? 'uppercase' : 'none',
        transition: 'all 0.2s', pointerEvents: 'none', zIndex: 1,
      }}>{label}</label>
      {as === 'textarea'
        ? <textarea id={id} rows={rows} {...shared} />
        : <input    id={id} type={type} {...shared} />
      }
    </div>
  );
}

export default function Contact() {
  const { dark } = useTheme();
  const C = t(dark);
  const [form, setForm]           = useState({ name: '', email: '', projectType: 'Web Development', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const submit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false); setSubmitted(true);
      setForm({ name: '', email: '', projectType: 'Web Development', message: '' });
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ background: C.bg, transition: 'background 0.3s' }}
      className="py-20 md:py-28"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-10 lg:gap-14 items-start">

          {/* ── LEFT: info on dark bg ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 lg:pt-2"
          >
            {/* Label + heading */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: ORANGE }}>
                Start Your Project
              </p>
              <h2 className="font-extrabold leading-tight" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)', color: C.heading }}>
                Let's build something{' '}
                <span style={{ color: ORANGE }}>epic</span>{' '}
                together.
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed" style={{ color: C.body }}>
                Have a project in mind? Drop us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {STATS.map(s => (
                <div key={s.label}>
                  <span className="block text-3xl font-black" style={{ color: ORANGE }}>{s.num}</span>
                  <span className="text-[11px] font-medium" style={{ color: C.muted }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div style={{ borderLeft: `2px solid ${ORANGE}`, paddingLeft: 16 }}>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star" style={{ fontSize: 9, color: ORANGE }} />)}
              </div>
              <p style={{ fontSize: 12.5, color: C.body, lineHeight: 1.6, fontStyle: 'italic', margin: '0 0 6px' }}>
                "The most reliable engineering team we know — 6 years and counting."
              </p>
              <p style={{ fontSize: 10.5, color: C.muted, margin: 0 }}>— Sam Kanakanui, Netwave Solutions</p>
            </div>
          </motion.div>

          {/* ── RIGHT: white form card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#ffffff',
              borderRadius: 20,
              boxShadow: dark ? '0 32px 64px -16px rgba(0,0,0,0.5)' : '0 8px 40px -8px rgba(0,0,0,0.12)',
              border: `1px solid ${C.border}`,
              overflow: 'hidden',
            }}
          >
            {/* Orange top stripe */}
            <div style={{ height: 4, background: `linear-gradient(90deg, ${ORANGE}, #4A3080, #EB2F5B)` }} />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={submit}
                  style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', gap: 20 }}
                >
                  {/* Heading */}
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a1a', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
                      Send us a message
                    </h3>
                    <p style={{ fontSize: 12.5, color: '#8a8075', margin: 0 }}>We reply within 24 hours.</p>
                  </div>

                  {/* Project type chips */}
                  <div>
                    <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#9a9082', margin: '0 0 10px' }}>
                      Project Type
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                      {projectTypes.map(type => (
                        <button
                          key={type} type="button"
                          onClick={() => setForm({ ...form, projectType: type })}
                          style={{
                            padding: '6px 13px', borderRadius: 100, fontSize: 11.5, fontWeight: 600, cursor: 'pointer', transition: 'all 0.18s',
                            border: form.projectType === type ? '1.5px solid transparent' : '1.5px solid #e2ddd7',
                            background: form.projectType === type ? `linear-gradient(135deg, ${ORANGE}, #4A3080)` : '#f8f7f5',
                            color: form.projectType === type ? '#fff' : '#6b6056',
                            boxShadow: form.projectType === type ? '0 4px 12px -4px rgba(74,48,128,0.45)' : 'none',
                          }}
                        >{type}</button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <Field id="name"  label="Your Name"     value={form.name}  onChange={e => setForm({ ...form, name: e.target.value })}  required />
                    <Field id="email" label="Email Address" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>

                  {/* Message */}
                  <Field id="message" label="Project Details" as="textarea" rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />

                  {/* Submit */}
                  <div>
                    <motion.button
                      whileHover={{ scale: 1.015, boxShadow: '0 12px 28px -8px rgba(74,48,128,0.55)' }}
                      whileTap={{ scale: 0.97 }}
                      type="submit" disabled={loading}
                      style={{
                        width: '100%', padding: '14px 20px', borderRadius: 11, border: 'none',
                        background: `linear-gradient(135deg, ${ORANGE}, #4A3080)`,
                        color: '#fff', fontWeight: 700, fontSize: 14,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        cursor: loading ? 'not-allowed' : 'pointer',
                        boxShadow: '0 6px 20px -6px rgba(74,48,128,0.4)',
                        opacity: loading ? 0.75 : 1, transition: 'opacity 0.2s',
                      }}
                    >
                      {loading
                        ? <><i className="fa-solid fa-circle-notch fa-spin" /> Sending…</>
                        : <><i className="fa-solid fa-paper-plane" style={{ fontSize: 12 }} /> Send Message</>
                      }
                    </motion.button>
                    <p style={{ textAlign: 'center', fontSize: 10.5, color: '#b0a898', marginTop: 10, marginBottom: 0 }}>
                      <i className="fa-solid fa-lock" style={{ fontSize: 9, marginRight: 4 }} />
                      Your information is private and never shared.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  style={{ padding: '56px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                >
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                    style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#d1fae5,#a7f3d0)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}
                  >
                    <i className="fa-solid fa-check" style={{ fontSize: 24, color: '#10B981' }} />
                  </motion.div>
                  <h4 style={{ fontSize: 22, fontWeight: 800, color: '#1a1a1a', margin: '0 0 8px' }}>Message Received!</h4>
                  <p style={{ fontSize: 13.5, color: '#6b6056', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 300 }}>
                    A senior partner will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{ background: '#f8f7f5', border: '1.5px solid #e2ddd7', color: '#1a1a1a', fontWeight: 600, fontSize: 12.5, padding: '9px 22px', borderRadius: 100, cursor: 'pointer' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
