import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Quick premium loading screen — logo + counting ticker, ~1.1s, then wipes away.
 *
 * Robustness contract (mobile-hardened): the overlay's REMOVAL never depends on
 * requestAnimationFrame or an animation completing. If rAF is throttled (iOS
 * low-power mode, background tabs), plain timers still dismiss and unmount it.
 */
export default function Loader() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  // progress: rAF-driven when available, hard-capped by a timer either way
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
      else setTimeout(() => setDone(true), 200);
    };
    raf = requestAnimationFrame(tick);
    const bail = setTimeout(() => { setN(100); setDone(true); }, 1600);
    return () => { cancelAnimationFrame(raf); clearTimeout(bail); };
  }, []);

  // removal: timer-based unmount, animation is purely cosmetic
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setGone(true), 750);
    return () => clearTimeout(t);
  }, [done]);

  if (gone) return null;

  return (
    <motion.div
      initial={false}
      animate={done ? { y: '-100%' } : { y: 0 }}
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
  );
}
