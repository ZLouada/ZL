import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { SectionAmbientOrbs } from "@/components/AmbientOrbs";

const advisoryFocusOptions = [
  { value: "fractional-cto", label: "Fractional CTO & Executive Governance" },
  { value: "architecture-diligence", label: "High-Concurrency Systems & Code Diligence" },
  { value: "mechanism-design", label: "Quantitative Economic Mechanism Design" },
  { value: "board-advisory", label: "Board Advisory & Venture Strategy" },
];

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [entity, setEntity] = useState("");
  const [email, setEmail] = useState("");
  const [advisoryFocus, setAdvisoryFocus] = useState(advisoryFocusOptions[0].label);
  const [scope, setScope] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !entity || !email || !scope) {
      toast.error("Please provide all required briefing parameters.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Executive briefing transmitted to the Executive Office.");
    }, 500);
  };

  return (
    <section id="contact" className="py-32 bg-black text-zinc-100 relative overflow-hidden">
      {/* Floating Ambient Orbs for Atmospheric Depth */}
      <SectionAmbientOrbs position="split" primaryColor="emerald" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Executive Overview & Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur border border-zinc-800 text-zinc-400 text-[11px] font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Executive Engagement
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-architectural tracking-tight text-zinc-100 mb-6">
                Retain Strategic Counsel
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                Direct engagement for venture founders, institutional funds, and executive boards.
                All discussions remain strictly confidential.
              </p>
            </div>

            {/* Direct Coordinates - Clean Typographic Layout without Icons */}
            <div className="space-y-6 pt-6 border-t border-zinc-900">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  Corporate Email //
                </div>
                <a
                  href="mailto:louadazakaria@gmail.com"
                  className="text-sm font-mono text-zinc-200 hover:text-white transition-colors"
                >
                  louadazakaria@gmail.com
                </a>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  Direct Line / WhatsApp //
                </div>
                <a
                  href="https://wa.me/212665208640"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-mono text-zinc-200 hover:text-white transition-colors"
                >
                  +212 665 208 640
                </a>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  Principal Location //
                </div>
                <p className="text-sm text-zinc-300">
                  Casablanca (GMT+1) · Available for Global Board & Advisory Engagements
                </p>
              </div>
            </div>

            {/* Institutional Discretion Note - No Prices */}
            <div className="p-6 rounded bg-zinc-950 border border-zinc-850 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                Institutional Discretion
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed font-light">
                Mandates are structured as executive advisory retainers or dedicated architecture
                engagements. All briefs are protected under customary non-disclosure agreements
                prior to technical discovery.
              </div>
            </div>
          </motion.div>

          {/* Right Column: Executive Briefing Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded bg-zinc-950/90 backdrop-blur-xl border border-zinc-900 shadow-2xl relative overflow-hidden">
              {/* Internal subtle ambient glow */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-500/12 blur-[90px] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="py-16 text-center space-y-6 relative z-10"
                  >
                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                      TRANSMISSION CONFIRMED //
                    </div>
                    <div className="space-y-2 max-w-md mx-auto">
                      <h3 className="text-2xl font-light text-architectural text-white">
                        Briefing Received
                      </h3>
                      <p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Thank you, {fullName}. Your briefing for{" "}
                        <span className="text-zinc-200 font-medium">{entity}</span> has
                        been dispatched to Zakaria Louada’s executive docket. You will receive
                        a confidential response within 24 hours.
                      </p>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFullName("");
                          setEntity("");
                          setEmail("");
                          setScope("");
                        }}
                        variant="outline"
                        className="font-mono text-xs uppercase tracking-wider text-zinc-300 border-zinc-800 hover:bg-zinc-900 rounded"
                      >
                        Submit Another Brief
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                          Full Name <span className="text-emerald-400">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder="e.g. Alexander Vance"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                          className="bg-black border-zinc-850 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-1 focus-visible:ring-emerald-500/50 h-11 rounded"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                          Institutional / Venture Entity <span className="text-emerald-400">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder="e.g. Apex Protocol / Venture Partners"
                          value={entity}
                          onChange={(e) => setEntity(e.target.value)}
                          required
                          className="bg-black border-zinc-850 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-1 focus-visible:ring-emerald-500/50 h-11 rounded"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                        Corporate Email <span className="text-emerald-400">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="e.g. vance@apexventures.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-black border-zinc-850 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-1 focus-visible:ring-emerald-500/50 h-11 rounded font-mono text-sm"
                      />
                    </div>

                    {/* Advisory Focus Selector - No Price Tiers */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                        Advisory Focus <span className="text-emerald-400">*</span>
                      </label>
                      <Select value={advisoryFocus} onValueChange={setAdvisoryFocus}>
                        <SelectTrigger className="bg-black border-zinc-850 text-zinc-100 h-11 rounded focus:ring-1 focus:ring-emerald-500/50">
                          <SelectValue placeholder="Select advisory focus" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-950 border-zinc-850 text-zinc-100">
                          {advisoryFocusOptions.map((opt) => (
                            <SelectItem
                              key={opt.value}
                              value={opt.label}
                              className="font-mono text-xs focus:bg-zinc-900 focus:text-white py-3 cursor-pointer"
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                        Scope of Engagement <span className="text-emerald-400">*</span>
                      </label>
                      <Textarea
                        rows={4}
                        placeholder="Outline technical mandate, architecture challenges, economic mechanism requirements, or governance timeline..."
                        value={scope}
                        onChange={(e) => setScope(e.target.value)}
                        required
                        className="bg-black border-zinc-850 text-zinc-100 placeholder:text-zinc-700 focus-visible:ring-1 focus-visible:ring-emerald-500/50 resize-none rounded"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-semibold py-6 rounded shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all mt-4"
                      >
                        {isSubmitting ? "Transmitting Briefing..." : "Submit Executive Briefing"}
                      </Button>
                    </motion.div>

                    <p className="text-[11px] font-mono text-zinc-500 text-center leading-relaxed">
                      Submissions are reviewed directly by Zakaria Louada. Strict confidentiality guaranteed.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
