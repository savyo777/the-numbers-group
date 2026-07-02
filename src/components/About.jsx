import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import Magnetic from './ui/Magnetic';
import { values, yearTimeline } from '../lib/data';
import aboutPhoto from '../assets/about-team.jpg';

const bars = [38, 52, 46, 64, 58, 78, 92];

export default function About() {
  return (
    <section id="about" className="relative bg-ink-900/60 py-24 md:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-emerald/10 blur-[130px]" />
      <div className="max-shell container-px relative">
        {/* story + visual */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              {/* real people, real paper — the human anchor of the page.
                  VERIFY: stock photo; swap for the firm's own office/team photo when provided. */}
              <div className="relative overflow-hidden rounded-[2rem] border border-paper/10 shadow-lift">
                <img
                  src={aboutPhoto}
                  alt="Advisors reviewing financial documents together at a desk"
                  width="1200" height="800"
                  className="h-[26rem] w-full object-cover md:h-[30rem]"
                  loading="lazy" decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-dark/25 via-transparent to-transparent" />
              </div>

              {/* floating mini-chart card */}
              <div className="glass-strong absolute -bottom-8 -right-3 w-56 rounded-2xl p-5 shadow-glass sm:right-6">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-wider text-paper/50">Your year</p>
                  <span className="rounded-full bg-emerald/10 px-2 py-0.5 text-[10px] font-semibold text-emerald">On track</span>
                </div>
                <div className="mt-3 flex h-16 items-end gap-1.5">
                  {bars.map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: [0.22, 0.7, 0.2, 1], delay: 0.08 * i }}
                      className="flex-1 rounded-t bg-gradient-to-t from-emerald-deep to-emerald-light" />
                  ))}
                </div>
              </div>

              <div className="animate-floaty absolute -top-4 left-6 rounded-2xl glass-strong px-4 py-2.5 shadow-glass" style={{ animationDelay: '-1.5s' }}>
                <p className="flex items-center gap-1.5 text-sm font-medium text-paper"><Check size={15} className="text-emerald" /> CRA filed</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal><span className="eyebrow"><span className="h-px w-8 bg-emerald/50" /> About The Numbers Group</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-paper md:text-5xl">
                A Milton firm that treats your books like <span className="text-emerald-gold">our own.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-paper/60">
                <p>The Numbers Group was built on a simple idea: your accountant should feel like part of your team — not a once-a-year stranger.</p>
                <p>
                  We’re Chartered Professional Accountants based in Milton, serving individuals and businesses across the
                  GTA. Our mission is simple — precision in the work, clarity in the advice, and a genuine stake in your
                  success. {/* VERIFY: years in business, team size, credentials */}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Magnetic className="mt-9 inline-block">
                <a href="#contact" className="btn-emerald">Start the conversation <ArrowRight size={16} /></a>
              </Magnetic>
            </Reveal>
          </div>
        </div>

        {/* values */}
        <RevealGroup className="mt-20 grid gap-4 md:grid-cols-3">
          {values.map((v) => {
            const Ic = Icons[v.icon] || Icons.Sparkles;
            return (
              <RevealItem key={v.title}>
                <TiltCard className="h-full" max={5}>
                  <div className="grad-border h-full rounded-3xl glass p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald/12 text-emerald-light"><Ic size={20} /></span>
                    <h3 className="mt-5 font-display text-xl font-medium text-paper">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/55">{v.body}</p>
                  </div>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* a year with us — honest timeline (no fabricated company history) */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-paper">Your first year with us</h3>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {yearTimeline.map((t, i) => (
              <RevealItem key={t.q}>
                <div className="relative h-full rounded-3xl glass p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-gold/15 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-gold-light">{t.q}</span>
                    {i < yearTimeline.length - 1 && <span className="hidden h-px flex-1 bg-gradient-to-r from-emerald/50 to-transparent lg:block" />}
                  </div>
                  <h4 className="mt-4 font-display text-lg font-medium text-paper">{t.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-paper/55">{t.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
