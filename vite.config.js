import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';


export default defineConfig({

  plugins: [
    react(),

    svgr({
      svgrOptions: {
        ref: true
      }
    }),

    eslint({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: []
    })
  ],
});
