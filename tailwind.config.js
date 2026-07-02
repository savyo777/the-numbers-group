/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0A0C0E', 900: '#05070A', 800: '#0B0E11', 700: '#12161A', 600: '#171C22' },
        char: '#14181C',
        emerald: { DEFAULT: '#0F9D76', deep: '#0B795B', light: '#34D6A6', dark: '#0A5C46' },
        gold: { DEFAULT: '#C9A96A', light: '#E7C983', deep: '#A8863F' },
        paper: '#F5F8F6',
        mist: '#E7EEEA',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.045em' },
      boxShadow: {
        glass: '0 20px 60px -24px rgba(0,0,0,0.7)',
        glow: '0 0 60px -12px rgba(15,157,118,0.5)',
        gold: '0 0 50px -12px rgba(201,169,106,0.45)',
        lift: '0 40px 80px -32px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
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
