import { Button } from "@/components/ui/button";

const pillars = [
  {
    number: "01",
    title: "Technical Architecture & Systems",
    focus: "Horizontally scalable platforms, schema rigor, distributed systems.",
    description:
      "Architecting low-latency, fault-tolerant distributed infrastructure and rigorous data pipelines capable of supporting hyper-growth without accumulating crippling technical debt.",
    tags: ["Distributed Systems", "Schema Rigor", "Fault Tolerance", "Zero-to-One"],
  },
  {
    number: "02",
    title: "International Economics & Game Theory",
    focus: "Macro theory, algorithmic allocation, incentive compatibility.",
    description:
      "Leveraging formal international economics and mechanism design to craft incentive structures, dynamic pricing algorithms, and anti-fragile platform equilibria.",
    tags: ["Mechanism Design", "Market Equilibrium", "Incentive Compatibility", "Game Theory"],
  },
  {
    number: "03",
    title: "Fractional CTO Governance",
    focus: "Translating venture milestones into rigid technical roadmaps & unit economics.",
    description:
      "Providing institutional-grade executive technical leadership to founder syndicates, aligning product sprints directly with venture capital milestone execution and board requirements.",
    tags: ["Technical Due Diligence", "Board Advisory", "Hiring Governance", "Vendor Leverage"],
  },
  {
    number: "04",
    title: "Capital Efficiency & Runway Modeling",
    focus: "Defensible cost topologies to maximize runway before institutional capital rounds.",
    description:
      "Transforming cloud infrastructure from a runaway expenditure into an optimized moat. Auditing and reducing cloud COGS to preserve equity ahead of institutional financing.",
    tags: ["Unit COGS Audit", "Cloud Topology", "Runway Defense", "Capital Preservation"],
  },
];

const About = () => {
  return (
    <section id="profile" className="py-32 bg-black text-zinc-100 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-850 text-zinc-400 text-[11px] font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Executive Profile & Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-architectural tracking-tight text-zinc-100 mb-6">
            Convergence of Core Software Engineering & Economic Modeling
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
            Modern high-growth technology ventures fail rarely from syntax bugs—they
            fail from misaligned market mechanisms, uncontrolled infrastructure burn,
            and fragile distributed systems. I bridge the structural chasm between
            hard-nosed systems engineering and mathematical economic theory.
          </p>
        </div>

        {/* 4 Strategic Pillars Grid - Clean Typographic Layout without Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 rounded bg-zinc-950/80 hover:bg-zinc-900/60 border border-zinc-900 hover:border-zinc-800 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                    {pillar.number} // PILLAR
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    METHODOLOGY
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                  {pillar.title}
                </h3>

                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-4">
                  {pillar.focus}
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded bg-black border border-zinc-850 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Advisory Thesis Callout Box - No Price Tags */}
        <div
          id="thesis"
          className="relative rounded bg-zinc-950 border border-zinc-850 p-8 sm:p-12 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                  Core Advisory Thesis
                </span>
                <span className="text-[11px] font-mono text-zinc-400 tracking-wider">
                  Quantitative Systems & Venture Governance
                </span>
              </div>

              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-architectural text-zinc-100 tracking-tight mb-4">
                "Code is an expenditure; sound mechanism design is an asset."
              </blockquote>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                Unchecked engineering velocity without rigorous unit-economic framing creates
                brittle balance sheets and catastrophic cloud overhead. As a Fractional CTO,
                I don’t just enforce zero-latency architectures—I enforce economic viability,
                aligning software topologies directly to venture margins and shareholder equity.
              </p>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0">
              <a href="#contact" className="block w-full">
                <Button className="w-full lg:w-auto bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-semibold px-6 py-6 rounded transition-all duration-200">
                  Initiate Advisory Mandate
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
