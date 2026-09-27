import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-100 p-6 selection:bg-emerald-500/20 selection:text-emerald-200">
      <div className="text-center max-w-md p-10 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono tracking-widest uppercase text-emerald-400">
          Executive Office // 404
        </div>
        <h1 className="text-6xl font-light text-architectural tracking-tight text-white">
          404
        </h1>
        <p className="text-sm font-light text-zinc-400 leading-relaxed">
          The requested dossier or endpoint does not exist within the current architecture namespace.
        </p>
        <a
          href="/"
          className="inline-block font-mono text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 transition-colors"
        >
          Return to Executive Portal
        </a>
      </div>
    </div>
  );
};

export default NotFound;
