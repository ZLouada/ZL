
import { Button } from "@/components/ui/button";

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

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden bg-black text-zinc-100"
    >
      {/* Deep AMOLED Background Mesh with shifted offset */}
      <div className="absolute inset-0 bg-[radial-gradient(#222226_1px,transparent_1px)] [background-size:32px_32px] [background-position:16px_16px] opacity-15 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-5 max-w-5xl leading-[1.18] reveal">
          <span className="text-zinc-100 block">Co-Founder & CTO.</span>
          <span className="text-metallic-silver inline-block mt-1 pb-3">
            Economic Systems Strategist.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light tracking-wide max-w-3xl leading-relaxed mb-6 reveal-delayed">
          Engineering fault-tolerant, high-throughput digital infrastructure while
          anchoring product growth in quantitative macroeconomic modeling,
          market equilibrium analysis, and venture capital rigor.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 reveal-delayed">
          <a href="#contact">
            <Button
              size="lg"
              className="bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-semibold px-8 py-6 rounded transition-all duration-200"
            >
              Initiate Executive Engagement
            </Button>
          </a>

          <a href="#skills">
            <Button
              variant="outline"
              size="lg"
              className="bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider px-8 py-6 rounded border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
            >
              Explore Skills & Architecture
            </Button>
          </a>
        </div>

        {/* Metrics Ribbon (4-Column Grid) - Positioned higher up */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left reveal-delayed">
          {metrics.map((item) => (
            <div
              key={item.index}
              className="p-6 rounded bg-zinc-950/80 hover:bg-zinc-900/60 border border-zinc-900 hover:border-zinc-800 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  {item.category}
                </span>
                <span className="text-[11px] font-mono text-zinc-600 font-medium">
                  {item.index}
                </span>
              </div>
              <div className="text-base font-semibold text-zinc-100 mb-1.5">
                {item.title}
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed font-light">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
