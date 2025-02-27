import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/UNAX-WEB",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
