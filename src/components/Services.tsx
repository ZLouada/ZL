const Services = () => {
  const skills = [
    {
      number: "01",
      title: "LANGUAGES",
      description: "JavaScript, TypeScript, Python, C — comfortable across the stack and the systems beneath it.",
    },
    {
      number: "02",
      title: "FRAMEWORKS",
      description: "React and Node.js for product engineering — fast iteration without sacrificing structure.",
    },
    {
      number: "03",
      title: "DATA & INFRA",
      description: "MongoDB and Redis on Linux (Arch / Fedora). Git-driven workflows, Neovim, Ghostty.",
    },
    {
      number: "04",
      title: "PRACTICE",
      description: "Full-stack web, SaaS architecture, e-commerce, API design and pragmatic DevOps.",
    },
  ];

  return (
    <section id="skills" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">SKILLS</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              The Stack
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {skills.map((s, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {s.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {s.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
