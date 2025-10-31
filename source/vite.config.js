import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// This config builds the popup UI directly into the extension's static folder
// and places index.html in the root directory for the Chrome extension
export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: path.resolve(__dirname, '..'),
    emptyOutDir: false, // Don't empty root dir (has manifest.json, etc)
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name].[hash].js',
        chunkFileNames: 'static/js/[name].[hash].chunk.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'static/css/[name].[hash][extname]';
          }
          return 'static/media/[name].[hash][extname]';
        }
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true
  },
  base: './'
});
