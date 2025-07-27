<template>
  <footer class="bg-gradient-to-b from-black via-gray-900 to-black">
    <!-- Contenedor principal -->
    <div class="max-w-6xl mx-auto px-6 py-12 space-y-10">
      
      <!-- Logo y descripción -->
      <div class="flex flex-col items-center text-center space-y-4">
        <img
          src="../assets/logo_marca.png"
          alt="Digytal Consulting"
          class="h-80"
        />
        <p class="text-sm text-gray-300 max-w-md">
          Asesoramos, diseñamos y mejoramos tu presencia digital con páginas web profesionales y dinámicas.
        </p>
      </div>

      <!-- Navegación y enlaces rápidos -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
        <!-- Clientes -->
        <div>
          <h3 class="font-semibold uppercase text-xs tracking-widest text-gray-400 mb-3">Clientes</h3>
          <ul class="space-y-2 text-sm">
            <li>Raza & Gourmet</li>
            <li>Licencias Carvajal Bogotá</li>
            <li>Contaplus</li>
          </ul>
        </div>

        <!-- Conócenos -->
        <div>
          <h3 class="font-semibold uppercase text-xs tracking-widest text-gray-400 mb-3">Conócenos</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-gray-400">Cómo lo hacemos</a></li>
            <li><a href="#" class="hover:text-gray-400">Quiénes somos</a></li>
          </ul>
        </div>

        <!-- Redes Sociales -->
        <div>
          <h3 class="font-semibold uppercase text-xs tracking-widest text-gray-400 mb-3">Síguenos</h3>
          <div class="flex justify-center sm:justify-start space-x-4">
            <!-- Iconos -->
            <a href="#" aria-label="Instagram" class="hover:text-gray-400">
              <!-- Puedes reemplazar por íconos Heroicons -->
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <!-- Instagram SVG -->
              </svg>
            </a>
            <a href="#" aria-label="Facebook" class="hover:text-gray-400">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <!-- Facebook SVG -->
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" class="hover:text-gray-400">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <!-- LinkedIn SVG -->
              </svg>
            </a>
          </div>
        </div>

        <!-- Info legal -->
        <div>
          <h3 class="font-semibold uppercase text-xs tracking-widest text-gray-400 mb-3">Legal</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-gray-400">Política de Privacidad</a></li>
            <li><a href="#" class="hover:text-gray-400">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Línea inferior minimalista -->
    <div class="border-t border-gray-800 py-4">
      <div class="text-center text-xs text-gray-500">
        © 2025 Digytal Consulting. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer a {
  transition: color 0.3s ease-in-out;
}
</style>
