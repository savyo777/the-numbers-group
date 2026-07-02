import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' so a production build works from any path (incl. GitHub Pages subpath).
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 5190, host: true, open: false },
  build: {
    target: 'es2020',
    rollupOptions: { output: { manualChunks: { motion: ['framer-motion', 'gsap'], three: ['three'] } } },
  },
});
