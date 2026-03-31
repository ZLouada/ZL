import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 sm:py-12 border-t border-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl sm:text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            ZLouada
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/ZLouada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-gray-500 hover:text-electric transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={22} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/zakaria-louada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-gray-500 hover:text-electric transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={22} />
            </motion.a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
            <span>Built with</span>
            <FaHeart className="text-red-500 animate-pulse" size={14} />
            <span>using React & Tailwind</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs sm:text-sm text-center">
            &copy; {new Date().getFullYear()} ZLouada. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-4 sm:right-6 -top-6 p-3 rounded-full bg-electric text-white shadow-lg shadow-electric/25 hover:shadow-electric/50 transition-shadow duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} />
      </motion.button>
    </footer>
  );
};

export default Footer;
