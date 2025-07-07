<template>
    <section class="bg-white py-8">
    <div id="ProcessSection"></div>
    <h1 class=" font-serif-custom font-extrabold text-black">Pa' las que sea</h1>
    <h2 class=" font-serif-custom font-extrabold text-black p-3">Así transformas tus ideas en realidad con Digytal Consulting.</h2>
    <div class="grid grid-cols-4 grid-rows-2 gap-x-px">
        <div class="bg-[#0B488A] flex justify-start items-start"> 
            <div class="relative overflow-hidden rounded-br-4xl bg-white w-60 h-60">
                <img src="/src/assets/Images/Avatar chico Joven  sin fondo.png" 
                alt="chico joven" 
                class="w-60 object-left rounded-br-4xl animate__animated animate__fadeInLeft" 
                loading="lazy">
            </div>
        </div>        
        <div class="bg-[#4F2BBF] "> 
            <h1 class="font-serif-custom font-extrabold my-4 p-2" style="font-size: 1.3rem;">
             CONECTAMOS CON TUS IDEAS
            </h1>
            <h2 class="font-serif-custom">Cuéntanos quién eres </h2>
            <h2 class="font-serif-custom">y cuáles son tus metas,</h2>
            <h2 class="font-serif-custom">para ofrecerte la mejor opción.</h2>
            <p class="font-serif-custom font-bold italic text-white text-xl animate__animated animate__fadeInLeft my-8">Entrevista inicial</p>

        </div>
        <div class="bg-[#0B488A] flex justify-end items-start animate__animated animate__fadeInRight">  
            <img src="/src/assets/Images/Avatar chica sin fondo.png" 
            alt="chica joven" 
            class="w-60 h-auto object-contain object-left rounded-bl-4xl"    
            loading="lazy">
        </div>
        <div class="bg-[#0A2441] mt-2"> 
            <h1 class="font-serif-custom font-extrabold my-4 p-2" style="font-size: 1.3rem;">
                TE DAMOS UNA ESTRATEGIA A LA MEDIDA
            </h1>
            <h2 class="font-serif-custom my-4">
                Te ofrecemos una estrategia personalizada, diseñada para adaptarse a tus necesidades. 
            </h2>
            <p class="font-serif-custom font-bold italic text-white text-xl animate__animated animate__fadeInRight">Identificamos la solución a tu necesidad.</p>
        </div>
        <div class="bg-[#0A2441] h-auto w-fit object-contain"> 
            <h1 class="font-serif-custom font-extrabold my-6 p-2" style="font-size: 1.3rem;">
                ASÍ QUEDARÍA TU IDENTIDAD DIGITAL
            </h1>
            <h2 class="font-serif-custom">
                Te presentamos un diseño personalizado adaptado 
            </h2>
            <h2 class="font-serif-custom">
                para conectar con tu público objetivo.
            </h2>
            <p class="font-serif-custom font-bold italic text-white text-xl animate__animated animate__fadeInUp">Presentamos un prototipo de tu Web</p>
        </div>
        <div class="bg-[#0B488A] relative overflow-hidden">
            <img src="/src/assets/Images/Hombre ejecutivo.png" 
            alt="chica joven" 
            class="w-58 h-auto absolute bottom-0 rounded-tr-4xl"    
            loading="lazy">
        </div>
        <div class="bg-[#3B82F6] h-auto w-fit object-contain">  
            <h1 class="font-serif-custom font-extrabold my-6 p-2" style="font-size: 1.3rem;">
                HAGAMOSLO REAL
            </h1>
            <h2 class="font-serif-custom">
                Materializamos y damos vida a tu proyecto digital para que logres tus objetivos
            </h2>
            <p class="font-serif-custom font-bold italic text-white text-xl animate__animated animate__fadeInUp">Damos Formalidad al acuerdo</p>
        </div>
        <div class="bg-[#216752] relative p-10">
            <img src="/src/assets/Images/Avatar chica ejecutiva sin fondo.png" 
            alt="chica ejecutiva" 
            class="rounded-tl-4xl absolute bottom-0 right-0 w-auto h-58"
            loading="lazy">
        </div>
    </div>
</section>
</template>


<script lang="ts">
export default {
  name: "App",
};
</script>



<style scoped>
/* Animaciones */
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.animate-bounce-custom {
  animation: bounce 1s ease-in-out;
}

@keyframes fadeScale {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-scale {
  animation: fadeScale 1s ease-out;
}
</style>