import { defineConfig } from 'vite';
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import checker from 'vite-plugin-checker'

export default defineConfig({
  resolve: { 
    alias: { 
      '~': resolve('./src') 
    } 
  },
  plugins: [dts(), checker({ typescript: true })],
  server: {
    port: 3000
  },
  build: { 
    outDir: resolve(__dirname, 'dist'),
    lib: { 
      entry: {
        index: resolve(__dirname, 'src/index.ts'), 
        web: resolve(__dirname, 'src/web/index.ts')
      },
      formats: ['es'], 
    },
    rollupOptions: {
      output: {
        entryFileNames: `[name].mjs`,
        chunkFileNames: `[name].[hash].mjs`,
        assetFileNames: `[name].[hash].[ext]`
      },
    },
  },
});