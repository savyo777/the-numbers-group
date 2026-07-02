/** @type {import('tailwindcss').Config} */

/*
 * "Ledger paper" editorial palette (humanized reskin, replaces the dark neon theme).
 * NOTE the deliberate semantic remap so existing components restyle automatically:
 *   - `ink`   = warm PAPER creams (backgrounds)   — bg-ink / bg-ink-900 stay valid
 *   - `paper` = warm INK charcoal (text)          — text-paper stays valid
 *   - `white` = warm ink @ full — so every border-white/10, bg-white/5 hairline
 *               becomes an ink-tinted hairline on cream. Real white comes from the
 *               .glass card styles in index.css, never from the `white` token.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: '#232A24',
        ink: { DEFAULT: '#F7F3EA', 900: '#EFE8DA', 800: '#F2EDE1', 700: '#E9E2D1', 600: '#E1D8C4' },
        char: '#232A24',
        emerald: { DEFAULT: '#1E5B4A', deep: '#174A3C', light: '#2F6B57', dark: '#10382C' },
        gold: { DEFAULT: '#A9822F', light: '#C29B4B', deep: '#8A6820' },
        paper: '#232A24',
        mist: '#EFE8DA',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.03em' },
      boxShadow: {
        glass: '0 10px 30px -14px rgba(35, 42, 36, 0.22)',
        glow: '0 14px 36px -16px rgba(30, 91, 74, 0.30)',
        gold: '0 12px 32px -14px rgba(169, 130, 47, 0.30)',
        lift: '0 28px 60px -26px rgba(35, 42, 36, 0.28)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(to right, rgba(35,42,36,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(35,42,36,0.055) 1px, transparent 1px)',
      },
      keyframes: {
        aurora: { '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' }, '50%': { transform: 'translate3d(4%,-4%,0) scale(1.12)' } },
        aurora2: { '0%,100%': { transform: 'translate3d(0,0,0) scale(1.1)' }, '50%': { transform: 'translate3d(-5%,3%,0) scale(1)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        glow: { '0%,100%': { opacity: '0.35' }, '50%': { opacity: '0.7' } },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite',
        aurora2: 'aurora2 22s ease-in-out infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        glow: 'glow 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
      },
    },
  },
  plugins: [],
};
