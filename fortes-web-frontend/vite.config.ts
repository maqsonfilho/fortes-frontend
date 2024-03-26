import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    //global: {},
  },
  plugins: [react()],

    resolve: {
    alias: {
      '~': '/src',
    },
  },
});
