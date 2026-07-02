import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Check, ArrowRight } from 'lucide-react';
import Reveal from './ui/Reveal';
import Magnetic from './ui/Magnetic';
import { business, services } from '../lib/data';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: services[0].title, message: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  // VERIFY: client-side demo handler — wire to email/CRM (Formspree, Resend, serverless) before launch.
  const submit = (e) => { e.preventDefault(); setSent(true); };
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`;
  const inputCls = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper placeholder-paper/40 outline-none transition focus:border-emerald/50 focus:bg-white/[0.08]';

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-emerald/12 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />

      <div className="max-shell container-px relative grid gap-14 lg:grid-cols-2">
        <div>
          <Reveal><span className="eyebrow"><span className="h-px w-8 bg-emerald/50" /> Get in touch</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-paper md:text-6xl">
              Let’s talk <span className="text-emerald-gold">numbers.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/60">
              Book a free, no-obligation consultation. Tell us where you’re headed and we’ll map the smartest path
              forward.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-5">
              <a href={business.phoneHref} className="group flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-emerald-light ring-1 ring-white/10 transition group-hover:bg-emerald group-hover:text-ink-900"><Phone size={18} /></span>
                <span><span className="block text-xs text-paper/45">Call</span><span className="font-medium text-paper">{business.phone}</span></span>
              </a>
              <a href={`mailto:${business.email}`} className="group flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-emerald-light ring-1 ring-white/10 transition group-hover:bg-emerald group-hover:text-ink-900"><Mail size={18} /></span>
                <span><span className="block text-xs text-paper/45">Email</span><span className="font-medium text-paper">{business.email}</span></span>
              </a>
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-emerald-light ring-1 ring-white/10"><MapPin size={18} /></span>
                <span><span className="block text-xs text-paper/45">Visit</span><span className="font-medium text-paper">{business.address}, {business.city}</span></span>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-emerald-light ring-1 ring-white/10"><Clock size={18} /></span>
                <div className="text-sm"><span className="block text-xs text-paper/45">Hours</span>
                  {business.hours.map((h) => <div key={h.d} className="flex gap-3"><span className="text-paper/55">{h.d}</span><span className="font-medium text-paper">{h.h}</span></div>)}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <iframe title={`Map to ${business.name}`} src={mapsSrc} className="h-56 w-full" style={{ filter: 'grayscale(0.15) sepia(0.08)' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="grad-border rounded-[2rem] glass-strong p-8 shadow-glass md:p-10">
            {sent ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald text-ink-900"><Check size={30} /></span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-paper">Thanks — we’ll be in touch.</h3>
                <p className="mt-3 max-w-xs text-paper/55">A Numbers Group advisor will reach out shortly. For anything urgent, call {business.phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h3 className="font-display text-2xl font-semibold text-paper">Request your free consultation</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required className={inputCls} placeholder="Full name" value={form.name} onChange={set('name')} />
                  <input required type="tel" className={inputCls} placeholder="Phone" value={form.phone} onChange={set('phone')} />
                </div>
                <input required type="email" className={inputCls} placeholder="Email address" value={form.email} onChange={set('email')} />
                <select className={`${inputCls} appearance-none`} value={form.interest} onChange={set('interest')}>
                  {services.map((s) => <option key={s.title} className="bg-ink-900" value={s.title}>{s.title}</option>)}
                </select>
                <textarea rows={4} className={`${inputCls} resize-none`} placeholder="Tell us a little about what you need…" value={form.message} onChange={set('message')} />
                <Magnetic strength={0.15}>
                  <button type="submit" className="btn-emerald w-full">Send request <ArrowRight size={16} /></button>
                </Magnetic>
                <p className="text-center text-xs text-paper/40">No spam, ever. Your details stay private.</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
