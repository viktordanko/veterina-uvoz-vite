import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'components'),
      components: path.resolve(__dirname, 'components'),
      '@hooks': path.resolve(__dirname, 'hooks'),
      hooks: path.resolve(__dirname, 'hooks'),
      'next/link': path.resolve(__dirname, 'src/NextLink.jsx'),
      'next/router': path.resolve(__dirname, 'src/NextRouter.js'),
    },
  },
});
