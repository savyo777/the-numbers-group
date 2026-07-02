import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Accounting-themed ambient backdrop.
 * A fixed layer of oversized ledger glyphs — digits, $, %, ∑, = — that drift at
 * different parallax depths as the page scrolls, over faint ledger rules.
 * Pure GPU transforms (translate/rotate/opacity): no WebGL, no flicker, no layout work.
 */
const GLYPHS = [
  // [glyph, left%, top(vh), size(rem), parallax speed, rotate deg, color]
  ['$',  '4%',   80,  11, -0.06,  -8, 'text-emerald-light'],
  ['%',  '88%',  60,  9,  -0.11,  10, 'text-gold'],
  ['7',  '72%', 145,  13, -0.05,  -6, 'text-paper'],
  ['∑',  '10%', 210,  10, -0.09,   7, 'text-emerald-light'],
  ['24', '82%', 260,  11, -0.045, -9, 'text-paper'],
  ['=',  '16%', 340,  12, -0.08,   0, 'text-gold'],
  ['3',  '90%', 400,  10, -0.06,  12, 'text-emerald-light'],
  ['+',  '6%',  470,  9,  -0.1,   -5, 'text-paper'],
  ['9',  '78%', 540,  12, -0.05,   8, 'text-gold'],
  ['$',  '12%', 620,  10, -0.075, -10, 'text-emerald-light'],
  ['%',  '86%', 690,  11, -0.055,  6, 'text-paper'],
];

function Glyph({ g, scrollY }) {
  const [char, left, top, size, speed, rot, color] = g;
  const y = useTransform(scrollY, (v) => v * speed);
  return (
    <motion.span
      aria-hidden
      style={{ left, top: `${top}vh`, y, rotate: rot, fontSize: `${size}rem` }}
      className={`absolute select-none font-display font-semibold leading-none ${color} opacity-[0.045]`}
    >
      {char}
    </motion.span>
  );
}

export default function Backdrop() {
  const { scrollY } = useScroll();
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* faint ledger rules */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent 0, transparent 47px, rgba(52,214,166,0.5) 48px), linear-gradient(to right, transparent 0, transparent calc(8% - 1px), rgba(201,169,106,0.45) 8%, transparent calc(8% + 1px))',
        }}
      />
      {/* soft static color pools (subtle — the motion now comes from the glyphs) */}
      <div className="absolute -left-40 top-[6%] h-[38rem] w-[38rem] rounded-full bg-emerald/12 blur-[140px]" />
      <div className="absolute right-[-10%] top-[42%] h-[34rem] w-[34rem] rounded-full bg-gold/8 blur-[150px]" />
      <div className="absolute bottom-[-12%] left-[24%] h-[36rem] w-[36rem] rounded-full bg-emerald-deep/12 blur-[150px]" />
      {/* parallax ledger glyphs */}
      {GLYPHS.map((g, i) => (
        <Glyph key={i} g={g} scrollY={scrollY} />
      ))}
    </div>
  );
}
