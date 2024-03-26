import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },

  plugins: [react()],

  resolve: {
    alias: {
      '~': '/src',
    },
  },

  build: {
    minify: 'terser', 
    sourcemap: false, 
    outDir: 'dist', 
  },
});