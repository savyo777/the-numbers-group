import { Star } from 'lucide-react';
import Reveal from './ui/Reveal';
import AnimatedCounter from './ui/AnimatedCounter';
import { trustStats, trustMarquee, business } from '../lib/data';

/* Trust signals — intentionally NO fabricated client logos: the real 5.0★ Google
   rating + service breadth carry this section. VERIFY: years & retention figures. */
export default function TrustBar() {
  return (
    <section className="relative border-y border-white/5 bg-ink-800/80 py-10">
      <div className="max-shell container-px">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-3">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, k) => <Star key={k} size={16} className="text-gold" fill="#A9822F" strokeWidth={0} />)}
              </span>
              <p className="text-sm text-paper/70">
                <span className="font-semibold text-paper">{business.rating}</span> on Google · every one of our{' '}
                <span className="font-semibold text-paper">{business.reviews} reviews</span> is five stars
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-4">
              {trustStats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="font-display text-2xl font-semibold text-paper">
                    <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-paper/45">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      {/* service marquee */}
      <div className="marquee mt-8">
        <div className="marquee__track">
          {[...trustMarquee, ...trustMarquee].map((t, i) => (
            <span key={i} className="flex items-center gap-6 whitespace-nowrap font-display text-sm uppercase tracking-[0.25em] text-paper/30">
              {t} <span className="text-emerald/60">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
