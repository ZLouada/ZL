const Portfolio = () => {
  const projects = [
    {
      number: "01",
      title: "CREATOR HUB",
      location: "PLATFORM · 2025",
      description:
        "An all-in-one platform built for content creators — managing workflow, assets and audience. Sourced from my GitHub.",
      stack: "React · Node.js · MongoDB",
      href: "https://front-end-creator-hub.vercel.app/",
    },
    {
      number: "02",
      title: "EDITING HUB",
      location: "STARTUP · MARKETPLACE",
      description:
        "A directory and marketplace connecting content creators with professional video editors.",
      stack: "React · Node.js · Redis",
      href: "https://editting-hub.vercel.app/",
    },
    {
      number: "03",
      title: "GALLERY STORE",
      location: "E-COMMERCE · LIVE",
      description:
        "A fully operational Shopify storefront — designed, built and managed end to end.",
      stack: "Shopify · Liquid · Brand",
      href: "#",
    },
    {
      number: "04",
      title: "TRACKER GOAL",
      location: "APP · OPEN SOURCE",
      description:
        "A focused goal-tracking application designed to make consistent progress visible. Sourced from my GitHub.",
      stack: "React · TypeScript",
      href: "https://tracker-goal-ai-chat.vercel.app/",
    },
  ];

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Projects
            </h3>
          </div>

          <div className="divide-y divide-border border-t border-border">
            {projects.map((project) => (
              <a
                key={project.number}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block py-12 md:py-16 transition-colors duration-500"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-1 text-minimal text-muted-foreground">
                    {project.number}
                  </div>

                  <div className="md:col-span-4">
                    <h4 className="text-3xl md:text-4xl font-light text-architectural mb-3 group-hover:text-muted-foreground transition-colors duration-500">
                      {project.title}
                    </h4>
                    <p className="text-minimal text-muted-foreground">
                      {project.location}
                    </p>
                  </div>

                  <div className="md:col-span-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>
                    <p className="text-minimal text-muted-foreground mt-4">
                      {project.stack}
                    </p>
                  </div>

                  <div className="md:col-span-1 text-right text-2xl text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
