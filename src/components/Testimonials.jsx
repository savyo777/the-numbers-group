import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import Reveal from './ui/Reveal';
import { testimonials, business } from '../lib/data';

const EASE = [0.22, 0.7, 0.2, 1];
const initials = (n) => n.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

export default function Testimonials() {
  const [[i, dir], setState] = useState([0, 1]);
  const go = (d) => setState(([p]) => [(p + d + testimonials.length) % testimonials.length, d]);
  useEffect(() => {
    const t = setInterval(() => setState(([p]) => [(p + 1) % testimonials.length, 1]), 6500);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink-900/60 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-emerald/10 blur-[120px]" />
      <div className="max-shell container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow mx-auto w-fit"><span className="h-px w-8 bg-emerald/50" /> Client Stories</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
              A perfect <span className="text-emerald-gold">5.0</span>, earned.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full glass px-4 py-2">
              <span className="flex gap-0.5">{[...Array(5)].map((_, k) => <Star key={k} size={14} className="text-gold" fill="#C9A96A" strokeWidth={0} />)}</span>
              <span className="text-sm text-paper/80">{business.rating} · {business.reviews} verified Google reviews</span>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-14 flex min-h-[19rem] max-w-3xl items-center">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure key={i} custom={dir}
              initial={{ opacity: 0, x: dir * 48 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -48 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grad-border w-full rounded-[2rem] glass-strong p-9 text-center shadow-glass md:p-12">
              <Quote className="mx-auto text-emerald-light" size={34} fill="#0F9D76" strokeWidth={0} />
              <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-paper md:text-[1.7rem]">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center justify-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-emerald to-gold font-display text-sm font-semibold text-ink-900">{initials(t.name)}</span>
                <span className="text-left"><span className="block font-medium text-paper">{t.name}</span><span className="text-sm text-paper/50">{t.role}</span></span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button onClick={() => go(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper transition hover:border-emerald hover:bg-emerald hover:text-ink-900"><ArrowLeft size={18} /></button>
          <div className="flex gap-2">
            {testimonials.map((_, k) => (
              <button key={k} onClick={() => setState([k, k > i ? 1 : -1])} aria-label={`Review ${k + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${k === i ? 'w-7 bg-emerald' : 'w-2 bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper transition hover:border-emerald hover:bg-emerald hover:text-ink-900"><ArrowRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}
