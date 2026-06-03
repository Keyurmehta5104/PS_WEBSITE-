import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'ai', label: 'AI Technologies',
    techs: [
      { name: 'OpenAI',       dot: '#10a37f' }, { name: 'Anthropic',    dot: '#d97706' },
      { name: 'Gemini',       dot: '#4285f4' }, { name: 'Llama',        dot: '#7c3aed' },
      { name: 'Mistral',      dot: '#ef4444' }, { name: 'TensorFlow',   dot: '#ff6f00' },
      { name: 'PyTorch',      dot: '#ee4c2c' }, { name: 'LangChain',    dot: '#1c7ed6' },
      { name: 'LangGraph',    dot: '#1557FF' }, { name: 'Vertex AI',    dot: '#4285f4' },
      { name: 'Pinecone',     dot: '#00b4d8' }, { name: 'Weaviate',     dot: '#00c4a1' },
      { name: 'Hugging Face', dot: '#fbbf24' }, { name: 'OpenCV',       dot: '#5c3317' },
      { name: 'n8n',          dot: '#ea4b71' }, { name: 'Cognitive AI', dot: '#0078d4' },
    ],
  },
  {
    id: 'frontend', label: 'Front End',
    techs: [
      { name: 'React',        dot: '#61dafb' }, { name: 'Next.js',      dot: '#000000' },
      { name: 'Vue.js',       dot: '#41b883' }, { name: 'TypeScript',   dot: '#3178c6' },
      { name: 'Redux',        dot: '#764abc' }, { name: 'Tailwind CSS', dot: '#06b6d4' },
      { name: 'GraphQL',      dot: '#e10098' }, { name: 'Material UI',  dot: '#007FFF' },
      { name: 'SASS',         dot: '#cc6699' }, { name: 'Bootstrap',    dot: '#7952b3' },
    ],
  },
  {
    id: 'mobile', label: 'Mobile',
    techs: [
      { name: 'Flutter',      dot: '#54c5f8' }, { name: 'React Native', dot: '#61dafb' },
      { name: 'Swift',        dot: '#f05138' }, { name: 'Kotlin',       dot: '#7f52ff' },
      { name: 'iOS',          dot: '#555555' }, { name: 'Android',      dot: '#3DDC84' },
      { name: 'Ionic',        dot: '#3880ff' }, { name: 'Dart',         dot: '#00b4ab' },
    ],
  },
  {
    id: 'backend', label: 'Backend',
    techs: [
      { name: 'Node.js',      dot: '#339933' }, { name: 'Python',       dot: '#3776ab' },
      { name: 'Laravel',      dot: '#ff2d20' }, { name: 'Django',       dot: '#0c4b33' },
      { name: 'FastAPI',      dot: '#009688' }, { name: 'PHP',          dot: '#8892BF' },
      { name: 'Go',           dot: '#00add8' }, { name: '.NET',         dot: '#512bd4' },
      { name: 'CodeIgniter',  dot: '#dd4814' }, { name: 'WordPress',    dot: '#21759b' },
      { name: 'Shopify',      dot: '#95bf47' }, { name: 'WooCommerce',  dot: '#7f54b3' },
    ],
  },
  {
    id: 'database', label: 'Database',
    techs: [
      { name: 'PostgreSQL',   dot: '#336791' }, { name: 'MySQL',        dot: '#4479a1' },
      { name: 'MongoDB',      dot: '#47a248' }, { name: 'Redis',        dot: '#dc382d' },
      { name: 'Firebase',     dot: '#ffca28' }, { name: 'MariaDB',      dot: '#003545' },
      { name: 'Supabase',     dot: '#3ecf8e' }, { name: 'DynamoDB',     dot: '#ff9900' },
    ],
  },
  {
    id: 'devops', label: 'Infra & DevOps',
    techs: [
      { name: 'AWS',          dot: '#ff9900' }, { name: 'Google Cloud', dot: '#4285f4' },
      { name: 'DigitalOcean', dot: '#0080ff' }, { name: 'Heroku',       dot: '#430098' },
      { name: 'Docker',       dot: '#2496ed' }, { name: 'Kubernetes',   dot: '#326ce5' },
      { name: 'Jenkins',      dot: '#d24939' }, { name: 'GitHub',       dot: '#24292e' },
      { name: 'Terraform',    dot: '#7b42bc' }, { name: 'Vercel',       dot: '#000000' },
    ],
  },
];

export default function TechStack() {
  const [active, setActive] = useState('ai');
  const current = tabs.find(t => t.id === active);

  return (
    <section className="py-24 md:py-32 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="section-label mb-4">TECHNOLOGY ECOSYSTEM</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.07]">
            The AI & engineering stack behind<br />
            <span className="text-gradient">intelligent applications.</span>
          </h2>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer border ${
                active === t.id
                  ? 'bg-[#0a0a0a] text-white border-transparent shadow-md'
                  : 'bg-white text-[#525252] border-[#e5e5e5] hover:border-[#d4d4d4] hover:text-[#0a0a0a]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Pills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {current?.techs.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.025 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#e5e5e5] rounded-full shadow-sm hover:border-[#1557FF]/30 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.dot }} />
                <span className="font-semibold text-sm text-[#525252]">{t.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
