import * as Icons from 'lucide-react';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import { industries } from '../lib/data';

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 md:py-32">
      <div className="max-shell container-px">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal><span className="eyebrow"><span className="h-px w-8 bg-emerald/50" /> Industries we serve</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
                Your industry has quirks. <span className="text-emerald-gold">We know them.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-paper/55">
              CRA rules read differently for a contractor than a clinic. We speak both — and everything in between.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9 lg:grid-rows-1" stagger={0.05}>
          {industries.map((it) => {
            const Ic = Icons[it.icon] || Icons.Briefcase;
            return (
              <RevealItem key={it.title} className="lg:col-span-1">
                <TiltCard className="h-full" max={6}>
                  <div className="group flex h-full flex-col items-center gap-3 rounded-2xl glass px-3 py-6 text-center transition-all duration-500 hover:shadow-glow">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald/10 text-emerald-light transition-colors duration-300 group-hover:bg-emerald group-hover:text-ink-900">
                      <Ic size={20} strokeWidth={1.8} />
                    </span>
                    <span className="text-xs font-medium leading-snug text-paper/75">{it.title}</span>
                  </div>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
