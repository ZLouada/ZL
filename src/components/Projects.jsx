import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiC, SiGtk, SiPython, SiTailwindcss } from 'react-icons/si';

const projects = [
  {
    title: 'Front-end-creator-Hub',
    description: 'A full-stack React application designed for developers to streamline their frontend workflow with component templates and code snippets.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    icons: [<SiReact key="react" />, <SiTailwindcss key="tw" />],
    github: 'https://github.com/ZLouada/Front-end-creator-Hub',
    live: null,
    featured: true,
  },
  {
    title: 'Gym Management System',
    description: 'A desktop application built in C with GTK interface. Features database integration for member tracking and subscription management.',
    tags: ['C', 'GTK', 'Database'],
    icons: [<SiC key="c" />, <SiGtk key="gtk" />],
    github: 'https://github.com/ZLouada/gym-management-system',
    live: null,
    featured: true,
  },
  {
    title: 'ALX Software Engineering',
    description: 'Collection of projects from ALX SE program including data structures, algorithms, and system engineering concepts.',
    tags: ['C', 'Python', 'Shell'],
    icons: [<SiC key="c" />, <SiPython key="python" />],
    github: 'https://github.com/ZLouada',
    live: null,
    featured: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="projects" className="section-padding bg-dark-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-electric mx-auto rounded-full mb-3 sm:mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-4">
            From low-level C systems to modern React applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover:border-electric/50 transition-all duration-500 h-full flex flex-col">
                {/* Project Image Placeholder */}
                <div className="relative h-36 sm:h-44 lg:h-48 bg-dark-600 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-purple-600/20 to-fuchsia-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl sm:text-5xl text-gray-600 flex gap-3 sm:gap-4">
                      {project.icons.map((icon, i) => (
                        <span key={i} className="group-hover:text-electric transition-colors duration-300">
                          {icon}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 sm:px-3 py-1 text-xs font-medium bg-electric text-white rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 sm:p-4 rounded-full bg-white/10 hover:bg-electric hover:text-dark-900 transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={22} />
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 sm:p-4 rounded-full bg-white/10 hover:bg-electric hover:text-dark-900 transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-electric transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 text-xs rounded-full bg-dark-600 text-gray-400 border border-dark-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile: Always visible GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden flex items-center justify-center gap-2 p-4 border-t border-dark-500 text-electric text-sm font-medium"
                >
                  <FaGithub size={18} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.a
            href="https://github.com/ZLouada"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 min-h-[48px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} />
            <span className="text-sm sm:text-base">View All on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
