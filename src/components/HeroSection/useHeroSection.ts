// src/components/HeroSection/useHeroSection.ts
import { ref, computed } from 'vue'; // Añade computed aquí


interface HeroSectionProps {
  msg?: string;
}

export function useHeroSection(props: HeroSectionProps) {
  const count = ref(0);
  
  const doSomething = () => {
    console.log('Haciendo algo...');
    count.value++;
  };

  // Ahora computed está disponible
  const enhancedMessage = computed(() => `Mensaje: ${props.msg || 'default'}`);

  return {
    count,
    doSomething,
    enhancedMessage
  };
}