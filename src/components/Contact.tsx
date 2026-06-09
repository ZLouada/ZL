const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Let's Build Something
                <br />
                Together
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a
                    href="mailto:louadazakaria@gmail.com"
                    className="text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    louadazakaria@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">WHATSAPP</h4>
                  <a
                    href="https://wa.me/212665208640"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    +212 665 208 640
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">LOCATION</h4>
                  <address className="text-xl not-italic">
                    Casablanca
                    <br />
                    Morocco
                  </address>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">AVAILABILITY</h4>
                  <p className="text-xl">Open to freelance & collaborations</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">ELSEWHERE</h4>
                <div className="space-y-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    Twitter / X
                  </a>
                </div>
              </div>

              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground">
                  I approach each project with curiosity, rigor and a commitment to
                  shipping. From first conversation to deployed product — I work closely
                  with founders and teams to translate ideas into systems that scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
