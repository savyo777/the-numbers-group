import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { navLinks, business } from '../lib/data';
import Magnetic from './ui/Magnetic';

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald/15 ring-1 ring-emerald/30">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M6 18V7l7 7V7" stroke="#1E5B4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18" cy="8" r="1.6" fill="#A9822F" />
        </svg>
      </span>
      <span className="font-display text-[17px] font-semibold tracking-tight text-paper">
        The Numbers Group
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 220);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`mt-3 flex w-full max-w-6xl items-center justify-between rounded-full transition-all duration-500 ${
            scrolled ? 'glass-strong px-4 py-2 shadow-glass' : 'px-5 py-3'
          }`}
        >
          <Logo />
          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-paper/70 transition hover:bg-white/5 hover:text-paper">
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href={business.phoneHref} className="flex items-center gap-1.5 text-sm font-medium text-paper/70 transition hover:text-emerald-light">
              <Phone size={15} /> {business.phone}
            </a>
            <Magnetic>
              <a href="#contact" className="btn-emerald !px-5 !py-2.5">
                Book Consultation <ArrowUpRight size={16} />
              </a>
            </Magnetic>
          </div>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-paper md:hidden">
            <Menu size={20} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-ink-900 md:hidden">
            <div className="flex items-center justify-between px-6 py-5">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-paper">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-1 px-6 pt-6">
              {navLinks.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}
                  className="border-b border-white/10 py-4 font-display text-2xl text-paper/90">
                  {l.label}
                </motion.a>
              ))}
              <a href={business.phoneHref} className="mt-8 flex items-center gap-2 text-emerald-light"><Phone size={18} /> {business.phone}</a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-emerald mt-6 w-full">Book Consultation</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
