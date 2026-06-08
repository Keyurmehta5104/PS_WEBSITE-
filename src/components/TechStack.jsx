import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* Real stack from professionalsofttech.com.
   icon: "/logos/x.svg" → <img>, otherwise a Font Awesome class. */
const ICON = {
  // Front End
  'React Js': '/logos/react.svg', 'Redux': 'fa-solid fa-layer-group', 'TypeScript': '/logos/typescript.svg',
  'Vue.js': 'fa-brands fa-vuejs', 'Material UI': 'fa-solid fa-cube', 'HTML5': 'fa-brands fa-html5',
  'Bootstrap': 'fa-brands fa-bootstrap', 'CSS3': 'fa-brands fa-css3-alt', 'jQuery': 'fa-solid fa-code', 'SASS': 'fa-brands fa-sass',
  // Mobile
  'Android': 'fa-brands fa-android', 'iOS': 'fa-brands fa-apple', 'React Native': 'fa-brands fa-react',
  'Flutter': '/logos/flutter.svg', 'Swift': 'fa-brands fa-swift', 'Objective-C': 'fa-solid fa-code',
  'Kotlin': 'fa-solid fa-mobile-screen-button', 'Java': 'fa-brands fa-java', 'Ionic': 'fa-solid fa-bolt',
  // Backend
  'Laravel': '/logos/laravel.svg', 'CodeIgniter': 'fa-solid fa-fire', 'YII': 'fa-solid fa-code',
  'CakePHP': 'fa-solid fa-cake-candles', 'Node.js': '/logos/nodejs.svg',
  // Database
  'MariaDB': 'fa-solid fa-database', 'MySQL': 'fa-solid fa-database', 'MongoDB': 'fa-solid fa-leaf',
  'Firebase': 'fa-solid fa-fire', 'PostgreSQL': 'fa-solid fa-database',
  // CMS & E-Commerce
  'WordPress': '/logos/wordpress.svg', 'WooCommerce': '/logos/woocommerce.svg', 'Shopify': '/logos/shopify.svg',
  'Shopify Plus': '/logos/shopify.svg', 'Magento': 'fa-solid fa-cart-shopping', 'OpenCart': 'fa-solid fa-cart-shopping', 'PrestaShop': 'fa-solid fa-bag-shopping',
  // Cloud & DevOps
  'AWS': 'fa-brands fa-aws', 'Google Cloud': 'fa-brands fa-google', 'Jenkins': 'fa-brands fa-jenkins',
  'DigitalOcean': 'fa-brands fa-digital-ocean', 'Heroku': 'fa-solid fa-server', 'Docker': 'fa-brands fa-docker',
};
const getIcon = (name) => ICON[name] || 'fa-solid fa-cube';

const tabs = [
  { id: 'frontend', label: 'Front End', techs: ['React Js', 'Redux', 'TypeScript', 'Vue.js', 'Material UI', 'HTML5', 'Bootstrap', 'CSS3', 'jQuery', 'SASS'] },
  { id: 'mobile', label: 'Mobile', techs: ['Android', 'iOS', 'React Native', 'Flutter', 'Swift', 'Objective-C', 'Kotlin', 'Java', 'Ionic'] },
  { id: 'backend', label: 'Backend', techs: ['Laravel', 'CodeIgniter', 'YII', 'CakePHP', 'Node.js'] },
  { id: 'database', label: 'Database', techs: ['MariaDB', 'MySQL', 'MongoDB', 'Firebase', 'PostgreSQL'] },
  { id: 'cms', label: 'CMS & E-Commerce', techs: ['WordPress', 'WooCommerce', 'Shopify', 'Shopify Plus', 'Magento', 'OpenCart', 'PrestaShop'] },
  { id: 'devops', label: 'Infra & DevOps', techs: ['AWS', 'Google Cloud', 'Jenkins', 'DigitalOcean', 'Heroku', 'Docker'] },
];

function TechTile({ name, i }) {
  const icon = getIcon(name);
  const isImg = icon.startsWith('/');
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.025, duration: 0.4 }}
      className="group flex flex-col items-center justify-center gap-3 bg-white border border-[#ece7da] rounded-2xl p-5 min-h-[120px] hover:border-[#FF8048]/45 hover:-translate-y-1 hover:shadow-[0_18px_36px_-24px_rgba(242,106,46,0.4)] transition-all duration-300"
    >
      <div className="h-9 flex items-center justify-center">
        {isImg
          ? <img src={icon} alt={name} className="w-8 h-8 object-contain" loading="lazy" />
          : <i className={icon} style={{ fontSize: 28, color: '#1a1a1a' }} />}
      </div>
      <span className="font-mono text-xs font-semibold text-[#7a7a7a] text-center leading-tight">{name}</span>
    </motion.div>
  );
}

export default function TechStack() {
  const [active, setActive] = useState('frontend');
  const current = tabs.find(t => t.id === active);

  return (
    <section className="py-24 md:py-32 bg-[#F7F4EC] border-b border-[#ece7da]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-4">TECHNOLOGY ECOSYSTEM</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.07]">
            The engineering stack behind<br />
            <span className="text-gradient">every great product.</span>
          </h2>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-12 mx-auto w-fit max-w-full bg-white border border-[#ece7da] rounded-full p-1.5">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                active === t.id ? 'bg-[#FF8048] text-white shadow-md' : 'text-[#6a6a6a] hover:text-[#0a0a0a]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tiles */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3"
          >
            {current?.techs.map((name, i) => <TechTile key={name} name={name} i={i} />)}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
