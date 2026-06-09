
const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop)` }}
      />


      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="text-minimal text-white/70 mb-6 reveal">
          ZAKARIA LOUADA — PORTFOLIO 2026
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white text-architectural mb-8 reveal">
          FULL-STACK
          <br />
          DEVELOPER
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto reveal-delayed">
          Building scalable platforms, SaaS, and e-commerce products — at the
          intersection of code and economics.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/40" />
        <div className="text-minimal text-white/60 mt-4 rotate-90 origin-center">
          SCROLL
        </div>
      </div>
    </section>
  );
};

export default Hero;
