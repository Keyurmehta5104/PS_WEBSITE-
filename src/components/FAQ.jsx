import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Why choose Professional Softtech?',
    a: '14+ years in the industry, 500+ projects shipped, 95% client retention, and 30+ dedicated engineers across web, mobile, AI, and DevOps. We combine global delivery standards with fast, transparent communication.' },
  { q: 'What AI/ML services do you offer?',
    a: 'We cover the full AI spectrum: generative AI, autonomous agents, NLP/chatbots, computer vision, custom ML model development, RAG systems, LLM fine-tuning, MLOps pipelines, and AI product strategy.' },
  { q: 'How do I hire dedicated developers?',
    a: 'We offer three engagement models: staff augmentation, managed teams, and fixed-scope delivery. Engineers are vetted and onboarded in 3–5 business days. Every engagement starts with a 7-day risk-free trial.' },
  { q: 'What technologies do you specialise in?',
    a: 'React, Next.js, Node.js, Python, Laravel, CodeIgniter, Flutter, React Native, Swift, Kotlin, .NET, WordPress, Shopify Plus, WooCommerce, LangChain, PyTorch, TensorFlow, AWS, GCP, Docker, and the full AI stack.' },
  { q: 'How do you ensure quality and on-time delivery?',
    a: 'We maintain a 92% on-time delivery rate through dedicated QA engineers on every project, sprint-based reviews with demos, automated testing pipelines, and real-time client visibility via daily standups.' },
  { q: 'Which industries do you serve?',
    a: 'We are active in 18+ verticals: Healthcare, Finance, Legal, Logistics, E-Commerce, Education, HR, Real Estate, Travel, Manufacturing, Retail, Social Networking, Insurance, Automotive, Construction, Sports, On Demand, and Hospitality.' },
  { q: 'What are your developer hiring costs?',
    a: 'Rates depend on seniority and stack. Senior full-stack engineers start at $28/hr; AI/ML specialists from $45/hr. Fixed-scope projects are quoted per brief. Contact us for a tailored proposal within 24 hours.' },
  { q: 'Do you sign NDAs and guarantee IP ownership?',
    a: 'Absolutely. We sign mutual NDAs before any discovery call. Full IP and source code ownership is transferred to the client and guaranteed in the master service agreement — no exceptions.' },
  { q: 'How do you handle data security?',
    a: 'We follow ISO 9001-aligned practices, GDPR compliance, encrypted infrastructure, least-privilege access controls, secure code reviews, and full audit trails. Client data is never used for model training.' },
  { q: 'What does the 7-day free trial include?',
    a: 'A fully functional dedicated team working on your actual project for one week at no cost. If you are not satisfied with the output and communication quality, you receive a full refund — no questions asked.' },
  { q: 'Do you work with startups or only enterprises?',
    a: 'Both. We have shipped MVP prototypes for pre-seed startups in under 6 weeks, and scaled enterprise platforms processing millions of transactions for large companies. We tailor our process to your stage.' },
  { q: 'How do we get started?',
    a: 'Fill out the contact form or email enquiry@professionalsofttech.com or call +1 (413) 529-4901. We respond within 4 hours. A senior partner will schedule a scoping call and your project can begin within a week.' },
];

function Item({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e5e5] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group cursor-pointer"
      >
        <span className="font-semibold text-[#0a0a0a] text-sm md:text-[15px] group-hover:text-[#1557FF] transition-colors leading-snug">
          {faq.q}
        </span>
        <span className="w-7 h-7 rounded-full bg-[#fafafa] border border-[#e5e5e5] flex items-center justify-center flex-shrink-0 text-[#737373] group-hover:bg-[#1557FF] group-hover:text-white group-hover:border-transparent transition-all duration-300">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#737373] text-sm leading-relaxed max-w-3xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-[#fafafa] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.07] mb-5">
              Frequently asked questions.
            </h2>
            <p className="text-[#737373] text-sm leading-relaxed">Can't find your answer? Reach out directly.</p>
            <a href="mailto:enquiry@professionalsofttech.com" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1557FF] hover:text-[#0A3DD6] transition-colors">
              enquiry@professionalsofttech.com →
            </a>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8">
            {faqs.map((f, i) => <Item key={i} faq={f} />)}
          </div>

        </div>
      </div>
    </section>
  );
}
