import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroAmbientOrbs } from "@/components/AmbientOrbs";

const metrics = [
  {
    index: "01",
    category: "LEADERSHIP",
    title: "Co-Founder / CTO",
    detail: "Zero-to-One Product & Scale",
  },
  {
    index: "02",
    category: "ECONOMICS",
    title: "Intl. Economics",
    detail: "Equilibrium & Mechanism Design",
  },
  {
    index: "03",
    category: "ARCHITECTURE",
    title: "High-Concurrency",
    detail: "Distributed & Low-Latency Architecture",
  },
  {
    index: "04",
    category: "MANDATE",
    title: "Strategic Advisory",
    detail: "Fractional CTO & Technical Audits",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden bg-black text-zinc-100"
    >
      {/* Floating Luminous Ambient Orbs */}
      <HeroAmbientOrbs />

      {/* Deep AMOLED Background Mesh with shifted offset */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] [background-position:16px_16px] opacity-20 pointer-events-none z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-6 max-w-6xl text-center flex flex-col items-center"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-5 max-w-5xl leading-[1.18]"
        >
          <span className="text-zinc-100 block">Co-Founder & CTO.</span>
          <span className="text-metallic-silver inline-block mt-1 pb-3">
            Economic Systems Strategist.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-zinc-400 font-light tracking-wide max-w-3xl leading-relaxed mb-6"
        >
          Engineering fault-tolerant, high-throughput digital infrastructure while
          anchoring product growth in quantitative macroeconomic modeling,
          market equilibrium analysis, and venture capital rigor.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          <a href="#contact">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-semibold px-8 py-6 rounded shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] transition-all duration-200"
              >
                Initiate Executive Engagement
              </Button>
            </motion.div>
          </a>

          <a href="#skills">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="bg-zinc-950/80 backdrop-blur hover:bg-zinc-900 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider px-8 py-6 rounded border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
              >
                Explore Skills & Architecture
              </Button>
            </motion.div>
          </a>
        </motion.div>

        {/* Metrics Ribbon (4-Column Grid) */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
        >
          {metrics.map((item) => (
            <motion.div
              key={item.index}
              whileHover={{
                y: -4,
                borderColor: "rgba(16, 185, 129, 0.35)",
                backgroundColor: "rgba(18, 18, 20, 0.95)",
              }}
              transition={{ duration: 0.2 }}
              className="group relative p-6 rounded bg-zinc-950/80 backdrop-blur-md border border-zinc-900 shadow-lg overflow-hidden transition-colors"
            >
              {/* Subtle top edge glow highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent group-hover:via-emerald-500/60 transition-all duration-300" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase group-hover:text-emerald-400 transition-colors">
                  {item.category}
                </span>
                <span className="text-[11px] font-mono text-zinc-600 font-medium">
                  {item.index}
                </span>
              </div>
              <div className="text-base font-semibold text-zinc-100 mb-1.5 group-hover:text-white transition-colors">
                {item.title}
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed font-light">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
