import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, t } from '../context/ThemeContext';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

// Each entry is either a devicon CDN path, a local /logos/ path, or a { fa, color } for Font Awesome fallback
const ICON = {
  // Mobile
  'Android':     `${CDN}/android/android-plain.svg`,
  'iOS':         `${CDN}/apple/apple-original.svg`,
  'React Native':`${CDN}/react/react-original.svg`,
  'Flutter':     `${CDN}/flutter/flutter-original.svg`,
  'Swift':       `${CDN}/swift/swift-original.svg`,
  'Objective-C': `${CDN}/objectivec/objectivec-plain.svg`,
  'Kotlin':      `${CDN}/kotlin/kotlin-original.svg`,
  'Java':        `${CDN}/java/java-original.svg`,
  'Ionic':       `${CDN}/ionic/ionic-original.svg`,
  // Front End
  'React Js':    `${CDN}/react/react-original.svg`,
  'Redux':       `${CDN}/redux/redux-original.svg`,
  'TypeScript':  `${CDN}/typescript/typescript-original.svg`,
  'Vue.js':      `${CDN}/vuejs/vuejs-original.svg`,
  'Material UI': `${CDN}/materialui/materialui-original.svg`,
  'HTML5':       `${CDN}/html5/html5-original.svg`,
  'Bootstrap':   `${CDN}/bootstrap/bootstrap-original.svg`,
  'CSS3':        `${CDN}/css3/css3-original.svg`,
  'jQuery':      `${CDN}/jquery/jquery-original.svg`,
  'SASS':        `${CDN}/sass/sass-original.svg`,
  // Back End
  'Laravel':     `${CDN}/laravel/laravel-original.svg`,
  'CodeIgniter': `${CDN}/codeigniter/codeigniter-plain.svg`,
  'YII':         `${CDN}/yii/yii-original.svg`,
  'CakePHP':     `${CDN}/cakephp/cakephp-original.svg`,
  'Node.js':     `${CDN}/nodejs/nodejs-original.svg`,
  // Database
  'MariaDB':     `${CDN}/mariadb/mariadb-original.svg`,
  'MySQL':       `${CDN}/mysql/mysql-original.svg`,
  'MongoDB':     `${CDN}/mongodb/mongodb-original.svg`,
  'Firebase':    `${CDN}/firebase/firebase-plain.svg`,
  'PostgreSQL':  `${CDN}/postgresql/postgresql-original.svg`,
  // CMS & E-Commerce
  'WordPress':   `${CDN}/wordpress/wordpress-plain.svg`,
  'WooCommerce': '/logos/woocommerce.svg',
  'Shopify':     '/logos/shopify.svg',
  'Shopify Plus':'/logos/shopify.svg',
  'Magento':     `${CDN}/magento/magento-original.svg`,
  'OpenCart':    { fa: 'fa-solid fa-cart-shopping', color: '#23AEFF' },
  'PrestaShop':  { fa: 'fa-solid fa-bag-shopping',  color: '#DF0067' },
  // Cloud & DevOps
  'AWS':         `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  'Google Cloud':`${CDN}/googlecloud/googlecloud-original.svg`,
  'Jenkins':     `${CDN}/jenkins/jenkins-original.svg`,
  'DigitalOcean':`${CDN}/digitalocean/digitalocean-original.svg`,
  'Heroku':      `${CDN}/heroku/heroku-original.svg`,
  'Docker':      `${CDN}/docker/docker-original.svg`,
};

const tabs = [
  { id: 'mobile',    label: 'Mobile',           techs: ['Android','iOS','React Native','Flutter','Swift','Objective-C','Kotlin','Java','Ionic'] },
  { id: 'frontend',  label: 'Front End',        techs: ['React Js','Redux','TypeScript','Vue.js','Material UI','HTML5','Bootstrap','CSS3','jQuery','SASS'] },
  { id: 'backend',   label: 'Back End',          techs: ['Laravel','CodeIgniter','YII','CakePHP','Node.js'] },
  { id: 'database',  label: 'Database',         techs: ['MariaDB','MySQL','MongoDB','Firebase','PostgreSQL'] },
  { id: 'cms',       label: 'CMS & E-Commerce', techs: ['WordPress','WooCommerce','Shopify','Shopify Plus','Magento','OpenCart','PrestaShop'] },
  { id: 'devops',    label: 'Infra & DevOps',   techs: ['AWS','Google Cloud','Jenkins','DigitalOcean','Heroku','Docker'] },
];

function TechTile({ name, i }) {
  const icon = ICON[name] || { fa: 'fa-solid fa-cube', color: '#888' };
  const isImg = typeof icon === 'string';
  const { dark } = useTheme();
  const C = t(dark);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.025, duration: 0.35 }}
      whileHover={{ y: -4, boxShadow: '0 16px 32px -12px rgba(74,48,128,0.28), 0 0 0 1.5px rgba(91,63,160,0.22)' }}
      style={{
        background: dark ? '#1d1c1a' : '#ece9e1',
        borderColor: dark ? '#2d2b28' : 'transparent',
        transition: 'background 0.3s, border-color 0.3s',
      }}
      className="group flex flex-col items-center justify-center gap-3 border rounded-2xl p-5 aspect-square hover:border-[#5B3FA0]/30 transition-all duration-300 cursor-default"
    >
      <div className="flex items-center justify-center w-10 h-10">
        {isImg
          ? <img src={icon} alt={name} className="w-9 h-9 object-contain" loading="lazy" />
          : <i className={icon.fa} style={{ fontSize: 30, color: icon.color }} />}
      </div>
      <span style={{ color: dark ? '#9a9690' : '#555' }} className="text-[11px] font-medium text-center leading-tight group-hover:text-[#5B3FA0] transition-colors duration-300">{name}</span>
    </motion.div>
  );
}

export default function TechStack() {
  const [active, setActive] = useState('mobile');
  const { dark } = useTheme();
  const C = t(dark);
  const current = tabs.find(tab => tab.id === active);

  return (
    <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, transition: 'background 0.3s' }} className="py-24 md:py-32">
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: C.body }}>
          — Technology
        </p>

        {/* Heading */}
        <div className="mb-12">
          <h2
            className="font-extrabold leading-[1.05] tracking-[-0.03em]"
            style={{ color: C.heading, fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            The engineering stack
          </h2>
          <p
            className="leading-[1.1] tracking-[-0.01em]"
            style={{
              color: C.heading,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            behind every great product.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={
                active === tab.id
                  ? { background: '#5B3FA0', color: '#fff' }
                  : { background: 'transparent', color: C.body }
              }
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                active !== tab.id ? 'hover:text-[#0a0a0a] dark:hover:text-white' : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderColor: C.border }} className="border-t mb-10" />

        {/* Tiles */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
          >
            {current?.techs.map((name, i) => <TechTile key={name} name={name} i={i} />)}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
