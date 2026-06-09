const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Code meets Economics
              </h3>

              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Zakaria Louada, a 20-year-old developer based in Morocco. I combine
                  a strong academic foundation in International Economics with hands-on
                  full-stack software engineering.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in building scalable platforms, e-commerce solutions and
                  SaaS products — designing systems that are as thoughtful in their
                  business logic as in their code.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">EDUCATION</h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">International Economics</h5>
                    <p className="text-muted-foreground">University Hassan II</p>
                  </div>
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Software Engineering</h5>
                    <p className="text-muted-foreground">ALX — Full curriculum</p>
                  </div>
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Coding School</h5>
                    <p className="text-muted-foreground">1337 — Systems & C programming</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">BASED IN</h4>
                    <p className="text-xl">Morocco</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">PROJECTS</h4>
                    <p className="text-xl">4+ Live</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
