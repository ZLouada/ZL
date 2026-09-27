import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-200">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      {/* Executive Copyright Footer - Dark AMOLED */}
      <footer className="border-t border-zinc-900 bg-black py-16 text-zinc-400">
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
              <a
                href="#hero"
                className="hover:text-white transition-colors"
                aria-label="Scroll to top"
              >
                Top ↑
              </a>
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
      </footer>
    </div>
  );
};

export default Index;
