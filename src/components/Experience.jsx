import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';

const experiences = [
  {
    type: 'education',
    title: 'ALX Software Engineering Program',
    organization: 'ALX Africa',
    period: '2023 - Present',
    description: 'Intensive software engineering program focusing on low-level programming, system design, DevOps, and full-stack development.',
    skills: ['C Programming', 'Data Structures', 'Algorithms', 'System Engineering'],
    icon: <FaCode size={20} />,
  },
  {
    type: 'education',
    title: 'International Economics',
    organization: 'University',
    period: '2022 - Present',
    description: 'Pursuing a degree in International Economics, developing analytical skills in market analysis and data interpretation.',
    skills: ['Market Analysis', 'Data Interpretation', 'Economic Modeling'],
    icon: <HiAcademicCap size={20} />,
  },
];

const certifications = [
  {
    title: 'Git & GitHub',
    issuer: 'Scrimba',
    date: '2023',
    icon: <FaCertificate size={18} />,
  },
  {
    title: 'HTML & CSS',
    issuer: 'Scrimba',
    date: '2023',
    icon: <FaCertificate size={18} />,
  },
  {
    title: 'DSA',
    issuer: 'Scrimba',
    date: '2023',
    icon: <FaCertificate size={18} />,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-electric mx-auto rounded-full mb-3 sm:mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A unique blend of technical training and economic education
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Card */}
                <div className="glass-card p-4 sm:p-6 hover:border-electric/50 transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-electric/10 flex items-center justify-center text-electric">
                      {exp.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-2">
                        <div>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">{exp.title}</h3>
                          <p className="text-electric text-sm">{exp.organization}</p>
                        </div>
                        <span className="px-2 sm:px-3 py-1 text-xs bg-dark-600 text-gray-400 rounded-full w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-3 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 sm:px-3 py-1 text-xs rounded-full bg-electric/10 text-electric border border-electric/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-4 sm:p-6 lg:sticky lg:top-24">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-electric/10 text-electric">
                  <FaGraduationCap size={18} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-dark-600/50 hover:bg-dark-600 transition-colors duration-300"
                  >
                    <div className="text-electric flex-shrink-0">{cert.icon}</div>
                    <div className="min-w-0">
                      <h4 className="text-white font-medium text-sm truncate">{cert.title}</h4>
                      <p className="text-gray-500 text-xs">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ALX Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="mt-4 sm:mt-6 p-4 rounded-xl bg-gradient-to-br from-electric/20 to-purple-600/20 border border-electric/30 text-center"
              >
                <div className="text-2xl sm:text-3xl mb-2">🎓</div>
                <p className="text-white font-medium text-sm sm:text-base">ALX SE Student</p>
                <p className="text-gray-500 text-xs sm:text-sm">Building Africa's Future Tech Leaders</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
