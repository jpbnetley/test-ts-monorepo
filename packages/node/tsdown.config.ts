import { defineConfig } from 'vite-plus/pack';

export default defineConfig({
  entry: 'src/index.ts',
  outDir: 'dist',
  dts: true,
  sourcemap: true
});
