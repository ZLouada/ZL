import { Button } from "@/components/ui/button";

const skillDomains = [
  {
    index: "01",
    domain: "DISTRIBUTED SYSTEMS & PERFORMANCE",
    title: "Low-Latency Core Engineering",
    description:
      "Production-grade distributed backends engineered for fault tolerance, minimal latency, and high-concurrency throughput under intense traffic loads.",
    technologies: [
      "C (Systems & Memory)",
      "TypeScript / JavaScript",
      "Python",
      "Node.js",
      "Go",
      "High-Concurrency Engines",
      "REST & gRPC Protocols",
      "POSIX / Linux Systems",
      "Event-Driven Architectures",
    ],
    capabilities: [
      "Low-latency distributed state management",
      "Concurrency control & race condition mitigation",
      "Memory allocation profiling & performance benchmarking",
      "Custom protocol & real-time WebSocket infrastructure",
    ],
  },
  {
    index: "02",
    domain: "DATA TOPOLOGIES & CLOUD INFRASTRUCTURE",
    title: "Resilient Data & Cloud Topologies",
    description:
      "Enterprise persistence layers and cloud topologies engineered to scale horizontally while defending venture runway through strict unit COGS optimization.",
    technologies: [
      "PostgreSQL",
      "Redis (In-Memory / PubSub)",
      "MongoDB",
      "Linux (Arch / Fedora)",
      "Docker & Containers",
      "Cloud Unit COGS Optimization",
      "AWS & GCP Infrastructure",
      "Zero-Downtime Migrations",
    ],
    capabilities: [
      "Multi-tiered in-memory caching topologies",
      "Strict schema validation & relational integrity",
      "Cloud architecture cost forensic & 40-70% burn reduction",
      "Automated CI/CD pipelines & containerized microservices",
    ],
  },
  {
    index: "03",
    domain: "QUANTITATIVE ECONOMICS & MECHANISM DESIGN",
    title: "Economic Mechanism & Incentive Design",
    description:
      "Translating formal macroeconomic theory, game theory, and market equilibrium modeling into production-grade platform rules and algorithmic mechanisms.",
    technologies: [
      "Mechanism Design",
      "Market Equilibrium Theory",
      "Game Theory & Nash Equilibria",
      "Algorithmic Dynamic Pricing",
      "Multi-Sided Platform Dynamics",
      "Tokenomics & Staking Models",
      "Econometric Analysis",
      "Incentive Compatibility",
    ],
    capabilities: [
      "Mathematical modeling of user & validator incentive structures",
      "Adversarial game-theoretic attack surface simulations",
      "Dynamic algorithmic fee & liquidity allocation formulas",
      "Platform equilibrium stabilization during volatile macro cycles",
    ],
  },
  {
    index: "04",
    domain: "EXECUTIVE FRACTIONAL CTO GOVERNANCE",
    title: "Technical Governance & Venture Leadership",
    description:
      "Executive technical direction for founder syndicates and venture boards, aligning high-velocity software delivery directly with equity value creation.",
    technologies: [
      "Technical Due Diligence",
      "Board & Investor Technical Reporting",
      "Engineering Hiring & Vetting",
      "Zero-to-One Architecture",
      "Vendor Leverage & Cloud Contracts",
      "Technical Debt Quantification",
      "Roadmap Governance",
      "Security Posture Reviews",
    ],
    capabilities: [
      "Translating venture milestones into rigid engineering roadmaps",
      "Top-decile candidate interviewing & technical screening",
      "Institutional-grade diligence memorandums for Series A/B rounds",
      "Vendor negotiations & infrastructure license cost mitigation",
    ],
  },
];

const Services = () => {
  return (
    <section id="skills" className="py-32 bg-black text-zinc-100 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-850 text-zinc-400 text-[11px] font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Comprehensive Technical & Economic Stack
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-architectural tracking-tight text-zinc-100 mb-6">
            Core Disciplines & Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            The rare convergence of production-grade distributed software engineering,
            low-level systems rigor, quantitative economic mechanism design, and
            fractional technical governance.
          </p>
        </div>

        {/* 4 Skill Domains Grid - Clean AMOLED Typography without Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillDomains.map((item) => (
            <div
              key={item.index}
              className="p-8 rounded bg-zinc-950/80 hover:bg-zinc-900/50 border border-zinc-900 hover:border-zinc-800 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                    {item.domain}
                  </span>
                  <span className="text-xs font-mono text-zinc-600 font-semibold">
                    {item.index}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-architectural text-zinc-100 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2 mb-6 pt-4 border-t border-zinc-900">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                    Core Capabilities:
                  </div>
                  {item.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="text-xs font-mono text-zinc-300 flex items-start gap-2">
                      <span className="text-zinc-600 select-none">—</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="pt-6 border-t border-zinc-900">
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3">
                  Technologies & Frameworks:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-black border border-zinc-850 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Advisory Transition Bar */}
        <div className="mt-16 p-8 rounded bg-zinc-950 border border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-semibold text-zinc-200">
              Need technical governance or mechanism architecture?
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Available for fractional CTO leadership, technical diligence, and strategic mandates.
            </p>
          </div>
          <a href="#contact" className="w-full sm:w-auto flex-shrink-0">
            <Button className="w-full sm:w-auto bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-semibold px-6 py-5 rounded transition-all duration-200">
              Initiate Discussion
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
