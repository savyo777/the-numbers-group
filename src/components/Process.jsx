import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Icons from 'lucide-react';
import Reveal from './ui/Reveal';
import { processSteps } from '../lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const root = useRef(null);
  const lineH = useRef(null);
  const lineV = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      [lineH.current, lineV.current].forEach((ln, idx) => {
        if (!ln) return;
        gsap.fromTo(ln, { [idx === 0 ? 'scaleX' : 'scaleY']: 0 }, {
          [idx === 0 ? 'scaleX' : 'scaleY']: 1, ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top 60%', end: 'bottom 75%', scrub: 0.6 },
        });
      });
      gsap.utils.toArray('.pdot').forEach((el) => {
        gsap.fromTo(el, { opacity: 0.35, scale: 0.85 }, {
          opacity: 1, scale: 1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%', end: 'top 48%', scrub: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={root} className="relative py-24 md:py-32">
      <div className="max-shell container-px">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow mx-auto w-fit"><span className="h-px w-8 bg-emerald/50" /> How it works</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
              Four steps. <span className="text-emerald-gold">Zero stress.</span>
            </h2>
          </Reveal>
        </div>

        {/* desktop horizontal */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute inset-x-[10%] top-8 h-px bg-white/10" />
          <div ref={lineH} className="absolute inset-x-[10%] top-8 h-px origin-left bg-gradient-to-r from-emerald via-emerald-light to-gold" />
          <div className="grid grid-cols-4 gap-8">
            {processSteps.map((s) => {
              const Ic = Icons[s.icon] || Icons.Circle;
              return (
                <div key={s.n} className="flex flex-col items-center text-center">
                  <div className="pdot relative z-10 grid h-16 w-16 place-items-center rounded-2xl glass-strong text-emerald-light shadow-glow">
                    <Ic size={24} strokeWidth={1.8} />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gold font-display text-[11px] font-bold text-ink-900">{s.n.slice(-1)}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-paper">{s.title}</h3>
                  <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-paper/55">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* mobile vertical with arrows */}
        <div className="relative mt-14 lg:hidden">
          <div className="absolute bottom-4 left-[31px] top-4 w-px bg-white/10" />
          <div ref={lineV} className="absolute left-[31px] top-4 w-px origin-top bg-gradient-to-b from-emerald to-gold" style={{ height: 'calc(100% - 2rem)' }} />
          <div className="space-y-10">
            {processSteps.map((s) => {
              const Ic = Icons[s.icon] || Icons.Circle;
              return (
                <div key={s.n} className="relative flex gap-5">
                  <div className="pdot relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-2xl glass-strong text-emerald-light">
                    <Ic size={24} strokeWidth={1.8} />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gold font-display text-[11px] font-bold text-ink-900">{s.n.slice(-1)}</span>
                  </div>
                  <div className="pt-2.5">
                    <h3 className="font-display text-xl font-medium text-paper">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper/55">{s.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
