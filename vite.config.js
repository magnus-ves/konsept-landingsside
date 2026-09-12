import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vercel, Netlify, and a custom domain all serve the site from "/", so
  // that's the default. Only the GitHub Pages workflow needs the repo-name
  // subpath, set via VITE_BASE in .github/workflows/deploy.yml.
  base: process.env.VITE_BASE || '/',
});
