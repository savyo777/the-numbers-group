import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Plus, Check } from 'lucide-react';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { services } from '../lib/data';

export default function Services() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-emerald/10 blur-[130px]" />
      <div className="max-shell container-px relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal><span className="eyebrow"><span className="h-px w-8 bg-emerald/50" /> Our services</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
                Everything your numbers <span className="text-emerald-gold">need.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-paper/55">One firm for the full picture — tap any service to see exactly what’s included.</p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" stagger={0.05}>
          {services.map((s, i) => {
            const Ic = Icons[s.icon] || Icons.Sparkles;
            const isOpen = open === i;
            return (
              <RevealItem key={s.title}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`grad-border group flex w-full flex-col rounded-3xl glass p-6 text-left transition-all duration-500 hover:shadow-glow ${isOpen ? 'shadow-glow' : ''}`}
                >
                  <div className="flex w-full items-start justify-between">
                    <span className={`grid h-11 w-11 place-items-center rounded-2xl transition-colors duration-300 ${isOpen ? 'bg-emerald text-ink-900' : 'bg-emerald/12 text-emerald-light group-hover:bg-emerald group-hover:text-ink-900'}`}>
                      <Ic size={20} strokeWidth={1.8} />
                    </span>
                    <span className={`grid h-7 w-7 place-items-center rounded-full border border-white/15 text-paper/60 transition-all duration-300 ${isOpen ? 'rotate-45 border-emerald bg-emerald text-ink-900' : ''}`}>
                      <Plus size={14} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium text-paper">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/55">{s.body}</p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 0.7, 0.2, 1] }} className="w-full overflow-hidden">
                        <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                          {s.details.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs leading-relaxed text-paper/70">
                              <Check size={13} className="mt-0.5 shrink-0 text-emerald-light" /> {d}
                            </li>
                          ))}
                        </ul>
                        <span className="mt-4 inline-block rounded-full bg-emerald/12 px-3 py-1.5 text-[11px] font-semibold text-emerald-light">
                          Ask about this →
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
