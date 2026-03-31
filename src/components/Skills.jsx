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
    icon: <FaCode size={18} />,
    skills: [
      { name: 'C', icon: <SiC size={28} />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript size={28} />, level: 85 },
      { name: 'Python', icon: <SiPython size={28} />, level: 75 },
      { name: 'HTML5', icon: <SiHtml5 size={28} />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt size={28} />, level: 90 },
    ],
  },
  {
    title: 'Frontend',
    icon: <FaPalette size={18} />,
    skills: [
      { name: 'React', icon: <SiReact size={28} />, level: 85 },
      { name: 'Tailwind', icon: <SiTailwindcss size={28} />, level: 90 },
      { name: 'PyQt5', icon: <SiQt size={28} />, level: 70 },
      { name: 'GTK', icon: <SiGtk size={28} />, level: 75 },
    ],
  },
  {
    title: 'Tools',
    icon: <FaTools size={18} />,
    skills: [
      { name: 'Git', icon: <SiGit size={28} />, level: 90 },
      { name: 'GitHub', icon: <SiGithub size={28} />, level: 90 },
      { name: 'Linux', icon: <SiLinux size={28} />, level: 85 },
      { name: 'Arch', icon: <SiArchlinux size={28} />, level: 80 },
      { name: 'Fedora', icon: <SiFedora size={28} />, level: 85 },
      { name: 'Oracle', icon: <FaDatabase size={28} />, level: 70 },
      { name: 'AWS', icon: <FaAws size={28} />, level: 65 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Skills <span className="text-gradient">Cloud</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-electric mx-auto rounded-full mb-3 sm:mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A comprehensive toolkit spanning low-level systems programming to modern web development
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-electric/10 text-electric">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                <div className="flex-1 h-px bg-dark-500" />
              </div>

              {/* Skills Grid - adjusted for mobile */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card p-3 sm:p-4 lg:p-5 text-center group cursor-pointer hover:border-electric/50 transition-all duration-300"
                  >
                    <div className="text-gray-400 group-hover:text-electric transition-colors duration-300 flex justify-center mb-2">
                      {skill.icon}
                    </div>
                    <p className="text-white font-medium text-xs sm:text-sm mb-2 truncate">{skill.name}</p>
                    {/* Skill Level Bar */}
                    <div className="h-1 bg-dark-500 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.05 + 0.3 }}
                        className="h-full bg-gradient-to-r from-electric to-purple-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills - Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 sm:mt-16"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">
            Languages I Speak
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
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
                whileTap={{ scale: 0.95 }}
                className="glass-card px-4 sm:px-6 py-3 flex items-center gap-3 hover:border-electric/50 transition-all duration-300 min-w-[120px]"
              >
                <span className="text-xl sm:text-2xl">{item.flag}</span>
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">{item.lang}</p>
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
