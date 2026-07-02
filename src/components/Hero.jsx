import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, CalendarCheck, Star, TrendingUp, ShieldCheck } from 'lucide-react';
import { business } from '../lib/data';
import Magnetic from './ui/Magnetic';
import AnimatedCounter from './ui/AnimatedCounter';

const EASE = [0.22, 0.7, 0.2, 1];

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 50, damping: 20 });
  const smy = useSpring(my, { stiffness: 50, damping: 20 });

  const p1x = useTransform(smx, [-0.5, 0.5], [-16, 16]);
  const p1y = useTransform(smy, [-0.5, 0.5], [-12, 12]);
  const p2x = useTransform(smx, [-0.5, 0.5], [26, -26]);
  const p2y = useTransform(smy, [-0.5, 0.5], [20, -20]);
  const p3x = useTransform(smx, [-0.5, 0.5], [-32, 32]);
  const p3y = useTransform(smy, [-0.5, 0.5], [24, -24]);
  const glowX = useTransform(smx, [-0.5, 0.5], ['32%', '68%']);
  const glowY = useTransform(smy, [-0.5, 0.5], ['30%', '70%']);
  const glow = useTransform([glowX, glowY], ([x, y]) => `radial-gradient(600px circle at ${x} ${y}, rgba(15,157,118,0.12), transparent 65%)`);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="top" onMouseMove={onMove} className="relative min-h-[100svh] w-full overflow-hidden">
      {/* gradient mesh (transparent to the ledger-glyph backdrop behind) */}
      <div className="pointer-events-none absolute -left-40 top-[-12%] h-[42rem] w-[42rem] rounded-full bg-emerald/25 blur-[130px] animate-aurora" />
      <div className="pointer-events-none absolute right-[-12%] top-[8%] h-[38rem] w-[38rem] rounded-full bg-gold/12 blur-[140px] animate-aurora2" />
      <div className="pointer-events-none absolute bottom-[-22%] left-[28%] h-[38rem] w-[38rem] rounded-full bg-emerald-deep/25 blur-[150px] animate-aurora" />
      <div className="absolute inset-0 bg-grid-dark opacity-60 [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_74%)]" />
      <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0" />

      <div className="max-shell container-px relative z-10 grid min-h-[100svh] items-center gap-12 pt-32 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* copy */}
        <div>
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm text-paper/80">
            <span className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, k) => <Star key={k} size={12} fill="#C9A96A" strokeWidth={0} />)}
            </span>
            <span className="font-medium text-paper">{business.rating}</span>
            <span className="text-paper/50">· {business.reviews} reviews · Milton CPA</span>
          </motion.span>

          <h1 className="mt-7 font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-tightest">
            {[['Precision.', 'text-paper'], ['Trust.', 'text-emerald-gold'], ['Growth.', 'text-paper']].map(([w, c], i) => (
              <motion.span key={w} initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.28 + i * 0.12 }} className={`block ${c}`}>
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.66 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-paper/65">
            {business.sub}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#contact" className="btn-emerald"><CalendarCheck size={17} /> Book Consultation</a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href="#services" className="btn-glass">Explore Services <ArrowRight size={16} /></a>
            </Magnetic>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-paper/50">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-light" /> CPA-certified</span>
            <span className="flex items-center gap-2"><TrendingUp size={16} className="text-emerald-light" /> Tax · Bookkeeping · Advisory</span>
            <span>Individuals &amp; businesses</span>
          </motion.div>
        </div>

        {/* floating glass scene */}
        <div className="relative hidden h-[32rem] lg:block">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/20 blur-[90px]" />

          {/* main dashboard card */}
          <motion.div style={{ x: p1x, y: p1y }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="absolute left-6 top-14 w-[22rem]">
            <div className="animate-floaty rounded-3xl glass-strong p-6 shadow-lift">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-paper/45">Estimated tax saved</span>
                <span className="rounded-full bg-emerald/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-light">▲ 32%</span>
              </div>
              <div className="mt-2 font-display text-4xl font-semibold text-paper">
                $<AnimatedCounter value={14280} />
              </div>
              <p className="mt-1 text-xs text-paper/40">vs. self-filed · illustrative</p>
              {/* sparkline */}
              <svg viewBox="0 0 300 80" className="mt-5 w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34D6A6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#34D6A6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline points="0,64 40,58 80,60 120,44 160,48 200,30 240,26 300,8" fill="none" stroke="#34D6A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <polygon points="0,64 40,58 80,60 120,44 160,48 200,30 240,26 300,8 300,80 0,80" fill="url(#spark)" />
              </svg>
            </div>
          </motion.div>

          {/* review chip */}
          <motion.div style={{ x: p2x, y: p2y }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.7 }}
            className="absolute right-2 top-2 w-52">
            <div className="animate-floaty rounded-2xl glass-strong p-5 shadow-glass" style={{ animationDelay: '-2s' }}>
              <div className="flex gap-0.5 text-gold">{[...Array(5)].map((_, k) => <Star key={k} size={15} fill="#C9A96A" strokeWidth={0} />)}</div>
              <p className="mt-2 font-display text-2xl font-semibold text-paper">5.0 rating</p>
              <p className="text-xs text-paper/45">33 verified Google reviews</p>
            </div>
          </motion.div>

          {/* retention ring */}
          <motion.div style={{ x: p3x, y: p3y }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.9 }}
            className="absolute bottom-2 right-10 w-60">
            <div className="animate-floaty flex items-center gap-4 rounded-2xl glass-strong p-5 shadow-glass" style={{ animationDelay: '-4s' }}>
              <div className="relative h-16 w-16 shrink-0">
                <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="#0F9D76" strokeWidth="3" strokeLinecap="round" strokeDasharray="97.4" strokeDashoffset="20" />
                </svg>
                <span className="absolute inset-0 grid place-items-center font-display text-sm font-semibold text-paper">98%</span>
              </div>
              <div>
                <p className="font-display text-base font-semibold text-paper">Client retention</p>
                <p className="text-xs text-paper/45">they stay for a reason</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
