<template>
    <section class="bg-white py-18">
    <div id="ProcessSection"></div>
    <h1 class=" font-serif-custom font-extrabold text-black text-left text-5xl ml-96">Pa' las que sea</h1>
    <h2 class=" font-serif-custom font-semibold text-black p-3 text-left ml-76 mt-4">Así transformas tus ideas en realidad con Digytal Consulting.</h2>
    <div class="grid grid-cols-4 grid-rows-2 gap-x-px mt-2">
        <div class="bg-[#0B488A] flex justify-start items-start pb-4"> 
            <div class="relative overflow-hidden rounded-br-4xl bg-white w-70 h-60">
                <img src="/src/assets/fabio_joven_process.png" 
                alt="chico joven" 
                class="w-60 object-left rounded-br-4xl animate__animated animate__fadeInLeft" 
                loading="lazy">
            </div>
        </div>        
        <div class="bg-[#4F2BBF] mt-4"> 
            <h1 class="font-serif-custom font-extrabold my-4 p-2 text-center text-amber-50" style="font-size: 1.3rem;">
             CONECTAMOS CON TUS IDEAS
            </h1>
            <h2 class="font-serif-custom text-amber-50 text-center">Cuéntanos quién eres </h2>
            <h2 class="font-serif-custom text-amber-50 text-center">y cual es tu Idea.</h2>
            <p class="font-serif-custom font-bold italic text-white text-xl 
            animate__animated animate__fadeInLeft my-8 text-center">Entrevista inicial.</p>

        </div>
         <div class="bg-[#0B488A] flex justify-end"> 
                <div class="bg-[#0B488A] relative overflow-hidden rounded-bl-4xl w-70 h-60">  
                    <img src="/src/assets/carla_joven_process.png" 
                    alt="chica joven" 
                    class="w-80 h-auto object-contain object-left rounded-bl-4xl"    
                    loading="lazy">
                </div>
         </div>
        <div class="bg-[#0A2441] mt-4"> 
            <h1 class="font-serif-custom font-extrabold my-4 p-2 text-amber-50 text-center" style="font-size: 1.3rem;">
                TE DAMOS UNA ESTRATEGIA A LA MEDIDA
            </h1>
            <h2 class="font-serif-custom m-4 text-amber-50 text-center">
                Ofrecemos un tipo de página Web que se adapte a tus necesidades. 
            </h2>
            <p class="font-serif-custom font-bold italic text-amber-50 text-center text-xl animate__animated animate__fadeInRight">Identificamos la solución a tu necesidad.</p>
        </div>
        <div class="bg-[#0A2441] h-auto w-fit object-contain"> 
            <h1 class="font-serif-custom font-extrabold my-6 p-2 text-amber-50 text-center" style="font-size: 1.3rem;">
                ASÍ QUEDARÍA TU IDENTIDAD DIGITAL
            </h1>
            <h2 class="font-serif-custom text-amber-50 text-center">
                Presentamos el diseño de tu Web.
            </h2>
            
            <p class="font-serif-custom font-bold italic text-xl 
            animate__animated animate__fadeInUp text-amber-50 text-center">Presentamos un prototipo de tu Web.</p>
        </div>
        <div class="bg-[#0B488A] relative overflow-hidden mb-4">
            <img src="/src/assets/fabio_ejecutivo_process.png" 
            alt="chica joven" 
            class="w-58 h-auto absolute bottom-0 rounded-tr-4xl"    
            loading="lazy">
        </div>
        <div class="bg-[#3B82F6] h-auto w-fit object-contain">  
            <h1 class="font-serif-custom font-extrabold my-6 p-2 text-amber-50 text-center" style="font-size: 1.3rem;">
                HAGAMOSLO REAL
            </h1>
            <h2 class="font-serif-custom text-amber-50 text-center">
                Ponemos en marcha
            </h2>
            <h2 class="font-serif-custom text-amber-50 text-center">
                tu página Web.
            </h2>
            <p class="m-2 font-serif-custom font-bold italic text-amber-50 text-center text-xl 
            animate__animated animate__fadeInUp">Acá formalizadamos lo que esperas recibir.</p>
        </div>
        <div class="bg-[#216752] relative overflow-hidde mb-2">
            <img src="/src/assets/carla_ejecutiva_process.png" 
            alt="chica ejecutiva" 
            class="rounded-tl-4xl absolute bottom-0 right-0 w-auto h-58"
            loading="lazy">
        </div>
    </div>
</section>
</template>



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