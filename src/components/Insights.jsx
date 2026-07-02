import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Reveal from './ui/Reveal';
import Magnetic from './ui/Magnetic';
import { insights } from '../lib/data';

const EASE = [0.22, 0.7, 0.2, 1];

/* ---------- animated SVG charts (accounting motifs, re-animate on tab change) */
function BarsCompare() {
  const before = [72, 64, 78, 70];
  const after = [48, 42, 52, 45];
  return (
    <svg viewBox="0 0 320 190" className="w-full">
      {before.map((h, i) => (
        <g key={i}>
          <motion.rect x={26 + i * 74} width="24" rx="5" fill="rgba(255,255,255,0.14)"
            initial={{ height: 0, y: 160 }} animate={{ height: h, y: 160 - h }} transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }} />
          <motion.rect x={54 + i * 74} width="24" rx="5" fill="url(#gEm)"
            initial={{ height: 0, y: 160 }} animate={{ height: after[i], y: 160 - after[i] }} transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.08 }} />
        </g>
      ))}
      <line x1="16" y1="160" x2="304" y2="160" stroke="rgba(255,255,255,0.15)" />
      <text x="26" y="182" fill="rgba(245,248,246,0.4)" fontSize="10">Tax paid — self-filed vs. planned</text>
      <defs><linearGradient id="gEm" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#0B795B" /><stop offset="100%" stopColor="#34D6A6" /></linearGradient></defs>
    </svg>
  );
}
function LineUp() {
  return (
    <svg viewBox="0 0 320 190" className="w-full">
      {[40, 80, 120].map((y) => <line key={y} x1="16" y1={y} x2="304" y2={y} stroke="rgba(255,255,255,0.06)" />)}
      <motion.path d="M20,150 C70,140 90,120 130,110 S 210,80 250,58 S 290,34 302,26"
        fill="none" stroke="#34D6A6" strokeWidth="3" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: EASE }} />
      <motion.circle cx="302" cy="26" r="5" fill="#C9A96A" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1 }} />
      <line x1="16" y1="160" x2="304" y2="160" stroke="rgba(255,255,255,0.15)" />
      <text x="20" y="182" fill="rgba(245,248,246,0.4)" fontSize="10">Net worth projection with a plan</text>
    </svg>
  );
}
function BarsUp() {
  const bars = [34, 48, 44, 62, 58, 84, 104];
  return (
    <svg viewBox="0 0 320 190" className="w-full">
      {bars.map((h, i) => (
        <motion.rect key={i} x={26 + i * 40} width="26" rx="6" fill={i === bars.length - 1 ? 'url(#gGold)' : 'url(#gEm2)'}
          initial={{ height: 0, y: 160 }} animate={{ height: h, y: 160 - h }} transition={{ duration: 0.8, ease: EASE, delay: i * 0.07 }} />
      ))}
      <line x1="16" y1="160" x2="304" y2="160" stroke="rgba(255,255,255,0.15)" />
      <text x="26" y="182" fill="rgba(245,248,246,0.4)" fontSize="10">Revenue, quarter over quarter</text>
      <defs>
        <linearGradient id="gEm2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#0B795B" /><stop offset="100%" stopColor="#34D6A6" /></linearGradient>
        <linearGradient id="gGold" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#A8863F" /><stop offset="100%" stopColor="#E7C983" /></linearGradient>
      </defs>
    </svg>
  );
}
function Wave() {
  return (
    <svg viewBox="0 0 320 190" className="w-full">
      <motion.path d="M16,120 C 50,60 80,60 110,105 S 170,160 200,110 S 260,55 304,80"
        fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" strokeDasharray="5 7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.path d="M16,105 C 60,88 100,86 140,92 S 240,100 304,88"
        fill="none" stroke="#34D6A6" strokeWidth="3" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: EASE, delay: 0.15 }} />
      <line x1="16" y1="160" x2="304" y2="160" stroke="rgba(255,255,255,0.15)" />
      <text x="16" y="182" fill="rgba(245,248,246,0.4)" fontSize="10">Cash flow — before &amp; after smoothing</text>
    </svg>
  );
}
const CHARTS = { 'bars-compare': BarsCompare, 'line-up': LineUp, 'bars-up': BarsUp, wave: Wave };

export default function Insights() {
  const [active, setActive] = useState(0);
  const item = insights[active];
  const Chart = CHARTS[item.chart];
  const Ic = Icons[item.icon] || Icons.Sparkles;

  return (
    <section id="insights" className="relative bg-ink-900/60 py-24 md:py-32">
      <div className="pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-emerald/10 blur-[130px]" />
      <div className="max-shell container-px relative">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow"><span className="h-px w-8 bg-emerald/50" /> Financial insights</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
              Where a CPA <span className="text-emerald-gold">moves the needle.</span>
            </h2>
          </Reveal>
        </div>

        {/* tabs */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {insights.map((t, i) => {
              const TIc = Icons[t.icon] || Icons.Sparkles;
              const is = i === active;
              return (
                <button key={t.key} onClick={() => setActive(i)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    is ? 'bg-emerald text-ink-900 shadow-glow' : 'glass text-paper/65 hover:text-paper'
                  }`}>
                  <TIc size={15} /> {t.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* panel */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div key={item.key}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grad-border grid gap-10 rounded-[2rem] glass-strong p-8 md:p-12 lg:grid-cols-2">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald/12 text-emerald-light"><Ic size={22} /></span>
                <h3 className="mt-6 font-display text-3xl font-semibold text-paper">{item.headline}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-paper/60">{item.body}</p>
                <ul className="mt-6 space-y-2.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-paper/75">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald/15 text-emerald-light"><Check size={12} /></span>{p}
                    </li>
                  ))}
                </ul>
                <Magnetic className="mt-8 inline-block" strength={0.18}>
                  <a href="#contact" className="btn-glass !px-5 !py-2.5 text-sm">Talk this through <ArrowRight size={15} /></a>
                </Magnetic>
              </div>
              <div className="flex items-center rounded-2xl border border-white/8 bg-ink-800/70 p-6">
                <Chart />
              </div>
            </motion.div>
          </AnimatePresence>
          <p className="mt-3 text-center text-[11px] text-paper/30">Charts are illustrative, not client data.</p>
        </div>
      </div>
    </section>
  );
}
