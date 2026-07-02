import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessagesSquare } from 'lucide-react';
import Reveal from './ui/Reveal';
import { faqs } from '../lib/data';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="max-shell container-px grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Reveal><span className="eyebrow"><span className="h-px w-8 bg-emerald/50" /> FAQ</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
              Good questions, <span className="text-emerald-gold">clear answers.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-3xl glass p-7">
              <MessagesSquare className="text-emerald-light" size={26} />
              <p className="mt-4 text-paper/65">Something specific on your mind?</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 font-medium text-emerald-light transition-all hover:gap-2.5">Ask us directly →</a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-2">
          <div className="border-t border-white/10">
            {faqs.map((f, idx) => {
              const isOpen = open === idx;
              return (
                <div key={idx} className="border-b border-white/10">
                  <button onClick={() => setOpen(isOpen ? -1 : idx)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                    <span className="font-display text-lg font-medium text-paper md:text-xl">{f.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${isOpen ? 'rotate-45 border-emerald bg-emerald text-ink-900' : 'border-white/15 text-paper'}`}>
                      <Plus size={18} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 0.7, 0.2, 1] }} className="overflow-hidden">
                        <p className="max-w-2xl pb-7 pr-6 leading-relaxed text-paper/60">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
