import { useState } from 'react';
import { Phone, MapPin, ArrowRight, Check, Facebook, Instagram, Linkedin } from 'lucide-react';
import { business, navLinks, services } from '../lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  const [subbed, setSubbed] = useState(false);
  // VERIFY: newsletter is a client-side demo — wire to Mailchimp/CRM before launch.
  const sub = (e) => { e.preventDefault(); setSubbed(true); };
  // VERIFY: real social profile URLs.
  const socials = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="relative bg-ink-900">
      <div className="mx-auto h-px max-w-[1500px] bg-gradient-to-r from-transparent via-emerald/50 to-transparent" />
      <div className="max-shell container-px py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald/15 ring-1 ring-emerald/30">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 18V7l7 7V7" stroke="#34D6A6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="18" cy="8" r="1.6" fill="#C9A96A" /></svg>
              </span>
              <span className="font-display text-lg font-semibold text-paper">The Numbers Group</span>
            </div>
            <p className="mt-5 max-w-sm font-display text-2xl font-medium leading-snug text-paper/85">{business.tagline}</p>
            <a href={business.phoneHref} className="mt-6 inline-flex items-center gap-2 text-paper/70 transition hover:text-emerald-light"><Phone size={16} /> {business.phone}</a>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Ic, label, href }) => (
                <a key={label} href={href} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-paper/60 transition hover:border-emerald/50 hover:text-emerald-light">
                  <Ic size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">Explore</p>
            <ul className="mt-5 space-y-3">{navLinks.map((l) => <li key={l.href}><a href={l.href} className="text-paper/65 transition hover:text-paper">{l.label}</a></li>)}</ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">Services</p>
            <ul className="mt-5 grid grid-cols-1 gap-y-3">{services.slice(0, 6).map((s) => <li key={s.title}><a href="#services" className="text-sm text-paper/65 transition hover:text-paper">{s.title}</a></li>)}</ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">Stay sharp</p>
            <p className="mt-5 text-sm leading-relaxed text-paper/60">Occasional tax deadlines & money-saving reminders. No noise.</p>
            {subbed ? (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-light"><Check size={16} /> You’re on the list.</p>
            ) : (
              <form onSubmit={sub} className="mt-4 flex overflow-hidden rounded-full border border-white/12 bg-white/5 focus-within:border-emerald/50">
                <input required type="email" placeholder="Email address" className="w-full bg-transparent px-4 py-3 text-sm text-paper placeholder-paper/40 outline-none" />
                <button type="submit" aria-label="Subscribe" className="grid w-12 shrink-0 place-items-center bg-emerald text-ink-900 transition hover:brightness-110">
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
            <div className="mt-6 flex items-start gap-2 text-sm text-paper/55"><MapPin size={16} className="mt-0.5 shrink-0 text-emerald-light" /><span>{business.address}, {business.city}</span></div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-paper/40 sm:flex-row sm:items-center">
          <p>© {year} {business.name}. All rights reserved. · Chartered Professional Accountants {/* VERIFY firm registration/CPA licensing line */}</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-paper/70">Privacy Policy {/* VERIFY link */}</a>
            <p>Milton, Ontario · Rated {business.rating}★ on Google</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
