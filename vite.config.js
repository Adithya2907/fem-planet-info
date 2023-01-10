import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        venus: resolve(__dirname, 'venus.html'),
        earth: resolve(__dirname, 'earth.html'),
        mars: resolve(__dirname, 'mars.html'),
        jupiter: resolve(__dirname, 'jupiter.html'),
        saturn: resolve(__dirname, 'saturn.html'),
        uranus: resolve(__dirname, 'uranus.html'),
        neptune: resolve(__dirname, 'neptune.html'),
      },
    },
  },
});
