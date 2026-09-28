import React from "react";
import { motion } from "framer-motion";

interface AmbientOrbProps {
  color?: "emerald" | "cyan" | "violet" | "silver" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  delay?: number;
  duration?: number;
}

const colorMap = {
  emerald: "from-emerald-500/20 via-emerald-600/10 to-transparent",
  cyan: "from-cyan-500/20 via-teal-600/10 to-transparent",
  violet: "from-indigo-500/15 via-purple-600/08 to-transparent",
  silver: "from-zinc-400/20 via-zinc-600/10 to-transparent",
  gold: "from-amber-500/15 via-yellow-600/10 to-transparent",
};

const sizeMap = {
  sm: "w-64 h-64 blur-[80px]",
  md: "w-96 h-96 blur-[100px]",
  lg: "w-[32rem] h-[32rem] blur-[130px]",
  xl: "w-[44rem] h-[44rem] blur-[160px]",
};

export const AmbientOrb: React.FC<AmbientOrbProps> = ({
  color = "emerald",
  size = "md",
  className = "",
  delay = 0,
  duration = 18,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.15, 0.95, 1],
        x: [0, 25, -20, 0],
        y: [0, -30, 20, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute rounded-full pointer-events-none bg-gradient-to-br ${colorMap[color]} ${sizeMap[size]} ${className}`}
      style={{ willChange: "transform, opacity" }}
    />
  );
};

export const HeroAmbientOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Central dominant emerald/cyan dual core orb */}
      <AmbientOrb
        color="emerald"
        size="xl"
        className="-top-24 left-1/2 -translate-x-1/2 opacity-70"
        duration={16}
      />
      <AmbientOrb
        color="cyan"
        size="lg"
        className="top-1/4 left-1/3 -translate-x-1/2 opacity-60"
        duration={20}
        delay={2}
      />
      {/* Upper-left silver glow */}
      <AmbientOrb
        color="silver"
        size="md"
        className="-top-12 -left-20 opacity-50"
        duration={22}
        delay={1}
      />
      {/* Upper-right violet accent orb */}
      <AmbientOrb
        color="violet"
        size="lg"
        className="top-12 -right-24 opacity-45"
        duration={24}
        delay={3}
      />
      {/* Bottom subtle anchor orb */}
      <AmbientOrb
        color="emerald"
        size="md"
        className="bottom-0 left-1/2 -translate-x-1/2 opacity-35"
        duration={18}
        delay={4}
      />
    </div>
  );
};

export const SectionAmbientOrbs: React.FC<{
  position?: "left" | "right" | "center" | "split";
  primaryColor?: "emerald" | "cyan" | "violet" | "silver";
}> = ({ position = "left", primaryColor = "emerald" }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {position === "left" && (
        <>
          <AmbientOrb
            color={primaryColor}
            size="lg"
            className="top-1/3 -left-48 opacity-50"
            duration={20}
          />
          <AmbientOrb
            color="silver"
            size="md"
            className="bottom-1/4 left-1/4 opacity-30"
            duration={25}
            delay={3}
          />
        </>
      )}

      {position === "right" && (
        <>
          <AmbientOrb
            color={primaryColor}
            size="lg"
            className="top-1/4 -right-48 opacity-50"
            duration={22}
          />
          <AmbientOrb
            color="cyan"
            size="md"
            className="bottom-1/3 right-1/4 opacity-30"
            duration={26}
            delay={2}
          />
        </>
      )}

      {position === "center" && (
        <>
          <AmbientOrb
            color={primaryColor}
            size="xl"
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
            duration={18}
          />
          <AmbientOrb
            color="cyan"
            size="md"
            className="bottom-10 left-1/3 opacity-35"
            duration={22}
            delay={4}
          />
        </>
      )}

      {position === "split" && (
        <>
          <AmbientOrb
            color={primaryColor}
            size="lg"
            className="-top-24 -left-36 opacity-45"
            duration={20}
          />
          <AmbientOrb
            color="cyan"
            size="lg"
            className="bottom-0 -right-36 opacity-45"
            duration={24}
            delay={3}
          />
        </>
      )}
    </div>
  );
};
