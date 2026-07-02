import { motion } from 'framer-motion';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import AnimatedCounter from './ui/AnimatedCounter';
import { stats } from '../lib/data';

function Stat({ s, i }) {
  return (
    <RevealItem className="flex flex-col items-center text-center">
      <div className="relative h-40 w-40">
        <svg viewBox="0 0 100 100" className="h-40 w-40 -rotate-90">
          <defs>
            <linearGradient id={`ring${i}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E5B4A" />
              <stop offset="100%" stopColor="#A9822F" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(35,42,36,0.10)" strokeWidth="3" />
          <motion.circle
            cx="50" cy="50" r="44" fill="none" stroke={`url(#ring${i})`} strokeWidth="3" strokeLinecap="round"
            strokeDasharray="276"
            initial={{ strokeDashoffset: 276 }}
            whileInView={{ strokeDashoffset: 44 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 0.7, 0.2, 1], delay: 0.1 * i }}
            style={{ filter: 'drop-shadow(0 2px 4px rgba(30,91,74,0.25))' }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-4xl font-semibold text-paper">
            <AnimatedCounter value={s.value} suffix={s.suffix} />
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium uppercase tracking-wider text-paper/55">{s.label}</p>
    </RevealItem>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 mx-auto h-64 max-w-4xl -translate-y-1/2 rounded-full bg-emerald/10 blur-[120px]" />
      <div className="max-shell container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow mx-auto w-fit"><span className="h-px w-8 bg-emerald/50" /> By the numbers</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
              Results that <span className="text-emerald-gold">speak for themselves.</span>
            </h2>
          </Reveal>
        </div>
        {/* VERIFY: 5,000+, 98% and 20+ are placeholder marketing figures — confirm with the firm. */}
        <RevealGroup className="mt-16 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => <Stat key={s.label} s={s} i={i} />)}
        </RevealGroup>
      </div>
    </section>
  );
}
