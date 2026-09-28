import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-200 relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      {/* Floating Scroll to Top Quick Action */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scrollTop"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(24, 24, 27, 0.95)" }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center shadow-[0_0_25px_rgba(0,0,0,0.9)] hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 text-emerald-400" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Executive Copyright Footer - Dark AMOLED */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-zinc-900 bg-black py-16 text-zinc-400 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-900">
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center font-mono text-xs font-semibold text-zinc-300">
                ZL
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-zinc-200">
                  Zakaria Louada
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  Executive Office — Strategic Advisory & Systems Architecture
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <a href="#profile" className="hover:text-zinc-100 transition-colors">
                Profile
              </a>
              <a href="#skills" className="hover:text-zinc-100 transition-colors">
                Skills
              </a>
              <a href="#thesis" className="hover:text-zinc-100 transition-colors">
                Thesis
              </a>
              <a href="#contact" className="hover:text-zinc-100 transition-colors">
                Inquiries
              </a>
              <button
                onClick={scrollToTop}
                className="hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll to top"
              >
                Top ↑
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-600">
            <div>
              © {currentYear} Zakaria Louada. All rights reserved.
            </div>
            <div>
              Executive Office — Strategic Advisory & Systems Architecture
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
