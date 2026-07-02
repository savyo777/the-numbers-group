import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/** Quick premium loading screen — logo + counting ticker, ~1.1s, then wipes away. */
export default function Loader() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setDone(true); return; }
    let raf;
    let start;
    const D = 850;
    const tick = (t) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / D, 1);
      setN(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 220);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-900"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald/15 ring-1 ring-emerald/30">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 18V7l7 7V7" stroke="#1E5B4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="8" r="1.6" fill="#A9822F" />
              </svg>
            </span>
            <span className="font-display text-xl font-semibold text-paper">The Numbers Group</span>
          </div>
          <div className="mt-8 h-px w-56 overflow-hidden bg-white/10">
            <motion.div className="h-full bg-gradient-to-r from-emerald to-gold" style={{ width: `${n}%` }} />
          </div>
          <p className="mt-4 font-display text-sm tabular-nums text-paper/50">{n}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
