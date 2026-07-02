import { Phone, CalendarCheck } from 'lucide-react';
import Reveal from './ui/Reveal';
import Magnetic from './ui/Magnetic';
import { business } from '../lib/data';

export default function CtaBand() {
  return (
    <section className="relative py-10">
      <div className="max-shell container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-dark via-emerald to-emerald-deep p-10 shadow-glow md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <span aria-hidden className="pointer-events-none absolute -right-4 bottom-0 select-none font-display text-[10rem] font-bold leading-none text-ink-900/10">%</span>
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-ink-900 md:text-5xl">
                  Tax season is easier with a CPA in your corner.
                </h2>
                <p className="mt-3 max-w-lg text-ink-900/70">Free consultation. Clear pricing. A plan before you pay a dollar.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Magnetic>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5">
                    <CalendarCheck size={17} /> Book Free Consultation
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <a href={business.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-ink-900/30 px-7 py-3.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-900/10">
                    <Phone size={16} /> {business.phone}
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
