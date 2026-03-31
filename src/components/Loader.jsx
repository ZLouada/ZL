import { motion } from 'framer-motion';

const Loader = ({ progress, onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-dark-900 flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mb-8"
      >
        {/* Animated Z letter */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-electric to-purple-600 flex items-center justify-center mb-6 mx-auto shadow-lg shadow-electric/30"
        >
          <span className="text-4xl sm:text-5xl font-bold text-white">Z</span>
        </motion.div>

        {/* Name with letter animation */}
        <div className="flex justify-center overflow-hidden">
          {'ZLouada'.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.08,
                ease: 'easeOut',
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-500 text-sm sm:text-base mt-3 text-center"
        >
          Software Engineer
        </motion.p>
      </motion.div>

      {/* Loading bar container */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '200px' }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="relative z-10 sm:w-[250px]"
      >
        {/* Progress bar background */}
        <div className="h-1 sm:h-1.5 bg-dark-600 rounded-full overflow-hidden">
          {/* Progress bar fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-electric via-purple-500 to-fuchsia-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>

        {/* Progress percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-between items-center mt-3"
        >
          <span className="text-xs text-gray-600">Loading...</span>
          <span className="text-xs text-electric font-mono">{Math.round(progress)}%</span>
        </motion.div>
      </motion.div>

      {/* Decorative dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex gap-2"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="w-2 h-2 rounded-full bg-electric"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;
