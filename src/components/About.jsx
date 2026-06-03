import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Eye } from 'lucide-react';

function StatCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;

      const duration = 1200; // 1.2 seconds total
      const steps = Math.min(end, 50);
      const stepDuration = duration / steps;
      const increment = Math.ceil(end / steps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#faf5ff] border-b border-gray-200 relative overflow-hidden">
      {/* Soft orb background */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-purple-250/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column (60%) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <span className="text-xs font-black tracking-widest uppercase text-[#6c2bd9] mb-3 block">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-[#0f0f0f] tracking-tight leading-tight">
                Engineering the Future, One <br />
                <span className="text-gradient">Line of Code</span> at a Time.
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-500 text-base md:text-lg font-normal leading-relaxed">
              At Professional Softtech, we believe that exceptional software is born from the intersection of robust engineering, intuitive design, and deep client alignment. For over a decade, we have partnered with enterprises and startups alike to build technology products that streamline workflows, solve complex problems, and drive tangible business outcomes.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-500 text-base md:text-lg font-normal leading-relaxed">
              Our team consists of passionate developers, designers, and systems architects who treat software development not just as a job, but as a craft. We operate with radical transparency, rapid iteration cycles, and a zero-compromise attitude towards code quality and performance.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-2xl text-[#6c2bd9] border border-purple-100/50 flex-shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Mission</h4>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">To transform complex business workflows into simple digital experiences.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 border border-blue-100/50 flex-shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Vision</h4>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">To be the global benchmark for custom software delivery and design excellence.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            {/* Stat Card 1 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 flex flex-col justify-center shadow-md shadow-purple-50/20 relative overflow-hidden group hover:border-[#6c2bd9]/20 transition-all duration-300">
              <span className="text-4xl md:text-5xl font-black font-display text-gray-950 mb-2">
                <StatCounter value="50" suffix="+" />
              </span>
              <span className="text-sm font-bold uppercase tracking-wider text-[#6c2bd9] mb-1">PROJECTS DELIVERED</span>
              <span className="text-xs text-gray-400 font-medium">Across fintech, commerce, and diagnostics</span>
            </div>

            {/* Stat Card 2 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 flex flex-col justify-center shadow-md shadow-purple-50/20 relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
              <span className="text-4xl md:text-5xl font-black font-display text-gray-950 mb-2">
                <StatCounter value="10" suffix="+" />
              </span>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-1">YEARS OF EXCELLENCE</span>
              <span className="text-xs text-gray-400 font-medium">Delivering engineering quality since 2014</span>
            </div>

            {/* Stat Card 3 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 flex flex-col justify-center shadow-md shadow-purple-50/20 relative overflow-hidden group hover:border-green-500/20 transition-all duration-300">
              <span className="text-4xl md:text-5xl font-black font-display text-gray-950 mb-2">
                <StatCounter value="30" suffix="+" />
              </span>
              <span className="text-sm font-bold uppercase tracking-wider text-green-600 mb-1">GLOBAL CLIENTS</span>
              <span className="text-xs text-gray-400 font-medium">Trusted by leaders in USA, Europe, and Asia</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
