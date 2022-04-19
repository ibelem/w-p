import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import importElementPlus from 'vite-plugin-element-plus'

// install @types/node -> npm i @types/node -D if no path module
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), importElementPlus({})],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // set `@` point to `src` folder
    }
  },
  base: './', // package path
  server: {
    port: 3000, 
    open: true, // open browser automatically
    cors: true
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:x000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // },
  }
})
