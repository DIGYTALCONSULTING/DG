
<template> 
    <div class="fixed top-0 left-0 rigth-0 z-index w-full z-50 flex">
        <div class="w-1/2">
        </div>  
        <div class="w-1/2 flex justify-end items-center mt-4 gap-5 px-14">
            <a class= "cursor-pointer animate-color-change text-lg font-bold font-sans" href="#HeroSection">¿Qué más, pues?</a>
            <a class="cursor-pointer animate-color-change text-lg font-bold font-sans" href="#ProcessSection">Pa' las que sea</a>
            <a class="cursor-pointer animate-color-change text-lg font-bold font-sans" href="#PlanSection">Se le tiene  </a>
            <a class="cursor-pointer animate-color-change text-lg font-bold font-sans" href="#ContacSection">¡Hey! Hablemos</a>
        </div>
    </div>    
    
</template>


<style>
@keyframes colorChange {
  0% {
    color: #ffffff;
  }
  50% {
    color: #2B8559; /* Color de cambio intermedio */
  }
  100% {
    color: #0A2441; /* Color final */
  }
}

.animate-color-change {
  animation: colorChange 15s ease-in-out infinite;
}
</style>