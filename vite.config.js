import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // 👉 Esto indica el nombre de la carpeta/repo en GitHub Pages
  base: '/digytalv3/',

  plugins: [
    vue(),         // Plugin para Vue 3
    tailwindcss(), // Plugin para Tailwind CSS
  ],
})
