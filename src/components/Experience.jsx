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
    description: 'Intensive software engineering program focusing on low-level programming, system design, DevOps, and full-stack development. Mastered C programming, data structures, algorithms, and system engineering.',
    skills: ['C Programming', 'Data Structures', 'Algorithms', 'System Engineering', 'Shell Scripting'],
    icon: <FaCode size={24} />,
  },
  {
    type: 'education',
    title: 'International Economics',
    organization: 'University',
    period: '2022 - Present',
    description: 'Pursuing a degree in International Economics, developing analytical skills in market analysis, data interpretation, and economic modeling that complement my technical expertise.',
    skills: ['Market Analysis', 'Data Interpretation', 'Economic Modeling', 'Statistical Analysis'],
    icon: <HiAcademicCap size={24} />,
  },
];

const certifications = [
  {
    title: 'Git & GitHub Certification',
    issuer: 'Scrimba',
    date: '2023',
    icon: <FaCertificate size={20} />,
  },
  {
    title: 'HTML & CSS Fundamentals',
    issuer: 'Scrimba',
    date: '2023',
    icon: <FaCertificate size={20} />,
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Scrimba',
    date: '2023',
    icon: <FaCertificate size={20} />,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-electric mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            A unique blend of technical training and economic education
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-dark-500 hidden sm:block" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-0 sm:pl-20 mb-8"
                >
                  {/* Timeline Dot */}
                  <div className="hidden sm:flex absolute left-0 w-16 h-16 rounded-full bg-dark-700 border-2 border-electric items-center justify-center text-electric">
                    {exp.icon}
                  </div>

                  {/* Card */}
                  <div className="glass-card p-6 hover:border-electric/50 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-electric">{exp.organization}</p>
                      </div>
                      <span className="px-3 py-1 text-sm bg-dark-600 text-gray-400 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-500 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-electric/10 text-electric border border-electric/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-electric/10 text-electric">
                  <FaGraduationCap size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark-600/50 hover:bg-dark-600 transition-colors duration-300"
                  >
                    <div className="text-electric mt-1">{cert.icon}</div>
                    <div>
                      <h4 className="text-white font-medium">{cert.title}</h4>
                      <p className="text-gray-500 text-sm">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ALX Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-br from-electric/20 to-blue-600/20 border border-electric/30 text-center"
              >
                <div className="text-3xl mb-2">🎓</div>
                <p className="text-white font-medium">ALX SE Student</p>
                <p className="text-gray-500 text-sm">Building Africa's Future Tech Leaders</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
