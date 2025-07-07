// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Asegúrate de incluir tus archivos Vue y TypeScript
  ],
  theme: {
    extend: {
      // Aquí puedes extender tu configuración de Tailwind si es necesario
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Agrega el plugin de animaciones
  ],
};
