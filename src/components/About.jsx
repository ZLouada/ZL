import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaChartLine, FaCode, FaDumbbell, FaGlobe } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaChartLine size={24} />,
    title: 'Data-Driven Mindset',
    description: 'Economics background provides analytical thinking for understanding user behavior and market dynamics.',
  },
  {
    icon: <FaCode size={24} />,
    title: 'Low-Level Expertise',
    description: 'Proficiency in C gives me deep understanding of memory management and system architecture.',
  },
  {
    icon: <FaDumbbell size={24} />,
    title: 'Discipline & Consistency',
    description: 'Fitness discipline translates directly to coding consistency and project commitment.',
  },
  {
    icon: <FaGlobe size={24} />,
    title: 'Multilingual',
    description: 'Fluent in Arabic, French, and English - enabling global collaboration and communication.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-dark-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-electric mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 electric-glow">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Dual-Path Developer
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm a 20-year-old developer walking an unconventional path - simultaneously 
                pursuing International Economics and Software Engineering. This unique 
                combination isn't just academic diversity; it's a strategic advantage.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                My economics background gives me a <span className="text-electric">data-driven mindset</span> that 
                most developers lack. I don't just write code; I understand how markets behave, 
                how users make decisions, and how to build products that align with real-world dynamics.
              </p>
              <p className="text-gray-400 leading-relaxed">
                While most web developers only know high-level languages, I cut my teeth on 
                <span className="text-electric"> C programming</span> - building systems like my 
                Gym Management application with GTK interfaces. This low-level foundation means 
                I understand memory management, optimization, and the "why" behind how things work, 
                not just the "how."
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 group hover:border-electric/50 transition-all duration-300"
              >
                <div className="text-electric mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '3+', label: 'Years Coding' },
            { value: '10+', label: 'Projects' },
            { value: '5+', label: 'Technologies' },
            { value: '3', label: 'Languages Spoken' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-gradient mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
