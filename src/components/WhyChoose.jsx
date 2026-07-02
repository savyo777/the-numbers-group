import * as Icons from 'lucide-react';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import { whyChoose } from '../lib/data';

const SPANS = ['lg:col-span-2', '', '', 'lg:col-span-2', 'lg:col-span-2', ''];

export default function WhyChoose() {
  return (
    <section id="why" className="relative bg-ink-900/60 py-24 md:py-32">
      <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
      <div className="max-shell container-px relative">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow"><span className="h-px w-8 bg-emerald/50" /> Why The Numbers Group</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
              The accountants clients <span className="text-emerald-gold">don’t switch from.</span>
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid auto-rows-[minmax(11rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((c, i) => {
            const Ic = Icons[c.icon] || Icons.Sparkles;
            return (
              <RevealItem key={c.title} className={SPANS[i]}>
                <TiltCard className="h-full" max={5}>
                  <div className="grad-border group relative h-full overflow-hidden rounded-3xl glass p-7 transition-shadow duration-500 hover:shadow-glow">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-emerald-light ring-1 ring-white/10">
                      <Ic size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-medium text-paper">{c.title}</h3>
                    <p className="mt-2.5 max-w-md text-sm leading-relaxed text-paper/55">{c.body}</p>
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
