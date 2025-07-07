// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'   // mantiene tu Tailwind

export default defineConfig({
  /**
   * Ajusta la URL base según el nombre EXACTO
   * del repositorio GitHub (sensible a mayúsculas).
   * Ej.:  https://usuario.github.io/mi-landing/  → base: '/mi-landing/'
   */
  base: '/https://github.com/DIGYTALCONSULTING/DG/',        // ⬅️  ¡reemplaza <tu-repo>!

  plugins: [
    vue(),
    tailwindcss(),            // orden habitual: Vue → Tailwind
  ],

  // Opcional: alias o configuraciones extra
  // resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } }
})
