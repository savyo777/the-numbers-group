import { motion } from 'framer-motion';

/** Hand-drawn brass underline — draws itself in like a pen stroke. */
export default function Squiggle({ className = '', delay = 1 }) {
  return (
    <svg viewBox="0 0 220 14" fill="none" className={className} aria-hidden preserveAspectRatio="none">
      <motion.path
        d="M4 9 C 40 3, 70 12, 108 7 S 176 4, 216 8"
        stroke="#A9822F"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 0.7, 0.2, 1], delay }}
      />
    </svg>
  );
}
