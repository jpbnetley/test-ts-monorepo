import { defineConfig } from 'vite';
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import checker from 'vite-plugin-checker'

export default defineConfig({
  resolve: { 
    alias: { 
      src: resolve('src/') 
    } 
  },
  plugins: [dts(), checker({ typescript: true })],
  server: {
    port: 3000
  },
  build: { 
    lib: { 
      entry: resolve(__dirname, 'src/index.mts'), 
      formats: ['es'], 
      fileName: 'index'
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