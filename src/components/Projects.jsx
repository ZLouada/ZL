import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiC, SiGtk, SiPython, SiTailwindcss } from 'react-icons/si';

const projects = [
  {
    title: 'Front-end-creator-Hub',
    description: 'A full-stack React application designed for developers to streamline their frontend workflow. Features include component templates, code snippets, and project scaffolding tools.',
    image: '/project-frontend-hub.png',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    icons: [<SiReact key="react" />, <SiTailwindcss key="tw" />],
    github: 'https://github.com/ZLouada/Front-end-creator-Hub',
    live: null,
    featured: true,
  },
  {
    title: 'Gym Management System',
    description: 'A desktop application built in C with a GTK graphical interface. Features database integration for member tracking, subscription management, and attendance monitoring. Demonstrates low-level programming expertise.',
    image: '/project-gym.png',
    tags: ['C', 'GTK', 'Database', 'Desktop App'],
    icons: [<SiC key="c" />, <SiGtk key="gtk" />],
    github: 'https://github.com/ZLouada/gym-management-system',
    live: null,
    featured: true,
  },
  {
    title: 'ALX Software Engineering',
    description: 'A comprehensive collection of projects from the ALX Software Engineering program. Includes implementations of data structures, algorithms, system engineering concepts, and shell scripting.',
    image: '/project-alx.png',
    tags: ['C', 'Python', 'Shell', 'DSA'],
    icons: [<SiC key="c" />, <SiPython key="python" />],
    github: 'https://github.com/ZLouada',
    live: null,
    featured: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding bg-dark-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-electric mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            From low-level C systems to modern React applications - showcasing versatility and technical depth
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover:border-electric/50 transition-all duration-500 h-full flex flex-col">
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-dark-600 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-blue-600/20 to-purple-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl text-gray-600 flex gap-4">
                      {project.icons.map((icon, i) => (
                        <span key={i} className="group-hover:text-electric transition-colors duration-300">
                          {icon}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-electric text-dark-900 rounded-full">
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
                      className="p-3 rounded-full bg-white/10 hover:bg-electric hover:text-dark-900 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-electric hover:text-dark-900 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-dark-600 text-gray-400 border border-dark-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/ZLouada"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
