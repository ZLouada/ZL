import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-bold text-gradient inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              ZLouada
            </motion.a>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ZLouada. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Built with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/ZLouada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-electric transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ZLouada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-electric transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-6 -top-6 p-3 rounded-full bg-electric text-dark-900 shadow-lg shadow-electric/25 hover:shadow-electric/50 transition-shadow duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
