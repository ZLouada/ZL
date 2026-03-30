import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiC, SiJavascript, SiPython, SiHtml5,
  SiReact, SiTailwindcss, SiGtk, SiQt,
  SiGit, SiGithub, SiLinux,
  SiFedora, SiArchlinux
} from 'react-icons/si';
import { FaCode, FaPalette, FaTools, FaCss3Alt, FaDatabase, FaAws } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode size={20} />,
    skills: [
      { name: 'C', icon: <SiC size={32} />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript size={32} />, level: 85 },
      { name: 'Python', icon: <SiPython size={32} />, level: 75 },
      { name: 'HTML5', icon: <SiHtml5 size={32} />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt size={32} />, level: 90 },
    ],
  },
  {
    title: 'Frontend',
    icon: <FaPalette size={20} />,
    skills: [
      { name: 'React', icon: <SiReact size={32} />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, level: 90 },
      { name: 'PyQt5', icon: <SiQt size={32} />, level: 70 },
      { name: 'GTK', icon: <SiGtk size={32} />, level: 75 },
    ],
  },
  {
    title: 'Backend & Tools',
    icon: <FaTools size={20} />,
    skills: [
      { name: 'Git', icon: <SiGit size={32} />, level: 90 },
      { name: 'GitHub', icon: <SiGithub size={32} />, level: 90 },
      { name: 'Linux', icon: <SiLinux size={32} />, level: 85 },
      { name: 'Arch Linux', icon: <SiArchlinux size={32} />, level: 80 },
      { name: 'Fedora', icon: <SiFedora size={32} />, level: 85 },
      { name: 'Oracle DB', icon: <FaDatabase size={32} />, level: 70 },
      { name: 'AWS', icon: <FaAws size={32} />, level: 65 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills <span className="text-gradient">Cloud</span>
          </h2>
          <div className="w-24 h-1 bg-electric mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive toolkit spanning low-level systems programming to modern web development
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-electric/10 text-electric">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                <div className="flex-1 h-px bg-dark-500" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-6 text-center group cursor-pointer hover:border-electric/50 transition-all duration-300"
                  >
                    <div className="text-gray-400 group-hover:text-electric transition-colors duration-300 flex justify-center mb-3">
                      {skill.icon}
                    </div>
                    <p className="text-white font-medium text-sm mb-3">{skill.name}</p>
                    {/* Skill Level Bar */}
                    <div className="h-1 bg-dark-500 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className="h-full bg-gradient-to-r from-electric to-blue-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Languages I Speak
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { lang: 'Arabic', flag: '🇲🇦', level: 'Native' },
              { lang: 'French', flag: '🇫🇷', level: 'Fluent' },
              { lang: 'English', flag: '🇬🇧', level: 'Professional' },
            ].map((item, index) => (
              <motion.div
                key={item.lang}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="glass-card px-6 py-3 flex items-center gap-3 hover:border-electric/50 transition-all duration-300"
              >
                <span className="text-2xl">{item.flag}</span>
                <div>
                  <p className="text-white font-medium">{item.lang}</p>
                  <p className="text-gray-500 text-xs">{item.level}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
