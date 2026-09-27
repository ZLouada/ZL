import { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#profile", label: "Executive Profile" },
  { href: "#skills", label: "Skills & Architecture" },
  { href: "#thesis", label: "Economics & Thesis" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-zinc-900 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Monogram Emblem */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="w-8 h-8 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center font-mono text-xs font-semibold text-zinc-200 group-hover:border-zinc-700 transition-all">
            ZL
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              Zakaria Louada
            </span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
              Executive Office
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center space-x-4">
          <a href="#contact">
            <Button
              className="bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs font-mono uppercase tracking-wider px-5 py-2.5 rounded shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5"
            >
              <span>Initiate Advisory</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-900" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Trigger via Sheet */}
        <div className="lg:hidden flex items-center space-x-3">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-300 hover:text-white hover:bg-zinc-900 border border-zinc-850"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black border-l border-zinc-900 text-zinc-100 p-8 flex flex-col justify-between"
            >
              <div className="space-y-8 mt-6">
                <div className="flex items-center gap-3 pb-6 border-b border-zinc-900">
                  <div className="w-8 h-8 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center font-mono text-xs font-semibold text-zinc-200">
                    ZL
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold tracking-tight text-zinc-100">
                      Zakaria Louada
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                      Executive Office
                    </span>
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-colors py-2"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-900 space-y-4">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                  Executive Engagements
                </div>
                <SheetClose asChild>
                  <a href="#contact" className="block w-full">
                    <Button className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-semibold py-3 flex items-center justify-center gap-2">
                      <span>Initiate Advisory</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-900" />
                    </Button>
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
