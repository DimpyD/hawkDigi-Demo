import { defineConfig } from 'vite';
export default defineConfig({ base: './', esbuild: { jsx: 'automatic' }, build: { sourcemap: false, target: 'es2022' } });
