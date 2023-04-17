import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [react(), legacy()],
  base: '/',
  build: {
    outDir: 'public'
  }
});
