<template>
  <div>
    <!-- Botón flotante del Chatbot con notificación -->
    <div
      v-show="!chatVisible"
      @click="openChat"
      class="fixed bottom-8 right-8 p-4 bg-gradient-to-r to-indigo-600 text-white rounded-full cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
    >
      <div class="relative">
        <img src="../assets/logo_marca.png" alt="Chatbot" class="h-18 w-16"/>        
        <span v-if="unreadMessages" class="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-25 w-25 flex items-center justify-center animate-pulse">
          {{ unreadMessages }}
        </span>
      </div>
    </div>

    <!-- Ventana del chat -->
    <div
      v-show="chatVisible"
      class="fixed bottom-4 right-4 w-full h-[80vh] max-w-md bg-white border-t-2 border-gray-200 rounded-t-xl shadow-2xl flex flex-col z-50"
      :class="{'animate-fade-in-up': chatVisible}"
    >
      <!-- Encabezado del chat -->
      <div class="bg-gradient-to-r bg-[#C24704] text-white p-0 flex justify-between items-baseline rounded-t-xl">
        <div class="flex items-center space-x-2">
          <img src="../assets/logo_foot.png" alt="Chatbot" class="h-8 w-8" />
          <h2 class="font-bold text-lg leading-tight">Pregúntale a ¡Oe!</h2>
        </div>
        <div class="flex items-center space-x-2 mr-2">
          <button @click="closeChat" 
          class="!bg-[#C24704] text-white text-4xl duration-300 transform hover:!bg-[#C24704] hover:scale-110">
            &times;
          </button>
        </div>
      </div>

      <!-- Redes sociales -->
      <div v-if="chatVisible> 0" class="flex justify-center gap-2 p-3 pd-2 bg-gray-50">
        <a href="https://wa.me/3144706996" target="_blank" class="p-3 rounded-full hover:bg-gradient-to-r hover:from-green-400 transition-all">
          <img src="../assets/icon_whatsapp.svg" alt="WhatsApp" class="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/laverdeosorioandres/" target="_blank" class="p-3 rounded-full  hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all">
          <img src="../assets/icon_instagram.svg" alt="instagram" class="w-8 h-8" />
        </a>
        <a href="mailto:digytalconsulting@outlook.com" target="_blank" class="p-3 rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:via-yellow-500 hover:to-black-500 transition-all">
          <img src="../assets/icon_instagram.svg" alt="email" class="w-8 h-8" />
        </a>
        <a href="https://web.telegram.org/k/" target="_blank" class="p-3 rounded-full hover:bg-gradient-to-r hover:from-blue-300 hover:via-white-500 hover:to-black-500 transition-all">
          <img src="../assets/icon_telegram.svg" alt="telegram" class="w-8 h-8" />
        </a>
      </div>

      <!-- Contenedor del chat -->
      <div 
        ref="chatContainer"
        class="flex-1 p-4 space-y-4 overflow-y-auto scroll-smooth"
        :class="{'bg-gray-50': isNightMode}"
      >
        <!-- Mensaje inicial -->
        <div v-if="messages.length === 0" class="text-center text-gray-500">
          <p>¡Hablalo! ¿Para que soy bueno?</p>
        </div>

        <!-- Mensajes -->
        <div v-for="(msg, index) in messages" :key="index" class="mb-4">
          <!-- Usuario -->
          <div v-if="msg.type === 'user'" class="flex justify-end">
            <div class="p-3 rounded-lg max-w-xs md:max-w-md rounded-br-none shadow text-black">
              <p class="break-words">{{ msg.text }}</p>
              <p class="text-xs text-black text-right mt-1">{{ formatTime(msg.timestamp) }}</p>
            </div>
          </div>

          <!-- Bot -->
          <div v-if="msg.type === 'bot'" class="flex justify-start">
            <div class="bg-gray-100 !text-gray-800 p-3 rounded-lg max-w-xs md:max-w-md rounded-bl-none shadow">
              <p class="break-words">{{ msg.text }}</p>
              <div v-if="msg.quickReplies" class="mt-2 flex flex-wrap gap-2">
                <button
                  v-for="(reply, i) in msg.quickReplies"
                  :key="i"
                  @click="sendQuickReply(reply)"
                  class="text-xs !bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-1 rounded-full transition-colors duration-200"
                >
                  {{ reply }}
                </button>
              </div>
              <p class="text-xs text-gray-500 text-right mt-1">{{ formatTime(msg.timestamp) }}</p>
            </div>
          </div>

          <!-- Producto -->
          <div v-if="msg.type === 'product'" class="flex justify-start">
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-4 max-w-xs md:max-w-md">
              <h3 class="font-bold text-blue-600">{{ msg.product.name }}</h3>
              <p class="text-sm text-gray-600 mt-1">{{ msg.product.description }}</p>
              <div class="mt-4 flex justify-baseline items-center space-x-2">
                <span class="font-bold text-gray-900">${{ msg.product.price }}</span>
                <button 
                  @click="showCheckout(msg.product)"
                  class="!bg-[#0062CC] hover:!bg-[#C24704] text-white px-3 py-3 rounded text-sm transition-colors duration-300"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Escribiendo -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none shadow">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sugerencias rápidas -->
      <div v-if="showQuickSuggestions" class="px-4 pt-2 bg-gray-50">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(suggestion, index) in quickSuggestions"
            :key="index"
            @click="sendQuickSuggestion(suggestion)"
            class="text-sm !bg-gray-100 hover:bg-blue-200 text-black px-3 py-1 rounded-full transition-colors"
          >
            {{ suggestion }}
          </button>
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 bg-gray-50">
        <form @submit.prevent="sendMessage" class="flex items-center space-x-2">
          <input
            v-model="userMessage"
            type="text"
            class="text-black flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 outline-none transition-all"
            placeholder="Contamelo escribe tu mensaje..."
            @focus="handleInputFocus"
          />
          <button
            type="submit"
            class="p-3 !bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            :disabled="!userMessage.trim()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </form>
      </div>
    </div>

    <!-- Checkout Modal -->
    <div v-if="showCheckoutModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Formulario de Compra</h3>
        <h4 class="text-lg font-semibold text-gray-800 mb-4">Selecciona un Medio de Pago</h4>        
        <div class="flex items-center justify-center space-x-4 mb-6"> 
          <a href="https://www.nequi.com.co" target="_blank" class="transition-all hover:scale-105">
            <img src="../assets/icon_nequi.png" alt="Nequi" class="w-10 h-10" />
          </a>
          <a href="https://www.mercadopago.com.co" target="_blank" class="transition-all hover:scale-105">
            <img src="../assets/icon_mercado_pago.svg" alt="Mercado Pago" class="w-10 h-10" />
          </a>
          <a href="https://www.daviplata.com" target="_blank" class="transition-all hover:scale-105">
            <img src="../assets/icon_daviplata.svg" alt="Daviplata" class="w-10 h-10" />
          </a>
        </div>
        <div class="mb-4">
          <h4 class="font-semibold">{{ selectedProduct.name }}</h4>
          <p class="text-gray-600">Valor a pagar: ${{ selectedProduct.price }}</p>
        </div>
        <form @submit.prevent="processCheckout" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
            <input type="text" v-model="checkoutData.name" required class="w-full p-2 border border-gray-300 rounded-md text-black" placeholder="Tu nombre completo"/>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" v-model="checkoutData.email" required class="w-full p-2 border border-gray-300 rounded-md text-black" placeholder="tu.email@example.com"/>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
            <input type="tel" v-model="checkoutData.phone" class="w-full p-2 border border-gray-300 rounded-md text-black" placeholder="Tu número de teléfono"/>
          </div>
          <div class="mt-6 flex justify-end space-x-3">
            <button @click="showCheckoutModal = false" type="button" class="px-4 py-2 border !bg-blue-800 border-gray-300 rounded-md text-white-700 hover:!bg-gray-800 transition-colors">Cancelar</button>
            <button type="submit" class="px-4 py-2 !bg-blue-800 text-white rounded-md hover:!bg-[#C24704] transition-colors duration-300">Confirmar Compra</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, nextTick } from "vue";
import { io } from "socket.io-client";

export default {
  setup() {
    const messages = ref([]);
    const userMessage = ref("");
    const chatVisible = ref(false);
    const unreadMessages = ref(0);
    const isTyping = ref(false);
    const typingIndicator = ref(true);
    const chatContainer = ref(null);
    const isNightMode = ref(false);
    const showCheckoutModal = ref(false);
    const selectedProduct = ref({});
    const checkoutData = ref({ name: "", email: "", phone: "" });

    const products = ref([
      { id: 1, name: "Arranque Sencillo", description: "Diseño básico...", price:"400.000 COP" },
      { id: 2, name: "Metale Ganas", description: "Diseño avanzado...", price:"800.000 COP" },
      { id: 3, name: "Hagale con Toda", description: "Solución completa...", price:"Personalizado" }
    ]);

    const quickSuggestions = ref([
      "¿Qué tipos de landing pages ofrecen?",
      "¿Cuánto vale una landing page?",
    ]);
    const showQuickSuggestions = ref(true);

    const socket = io("http://localhost:5000", { reconnectionAttempts: 5, reconnectionDelay: 1000 });

    const openChat = () => {
      chatVisible.value = true;
      unreadMessages.value = 0;
      if (messages.value.length === 0) {
        setTimeout(() => {
          addBotMessage("¡Hablalo! ¿Para qué soy bueno? Aquí puedes preguntar o comprar.");
        }, 500);
      }
    };

    const closeChat = () => { chatVisible.value = false; };
    const handleInputFocus = () => { showQuickSuggestions.value = true; };

    const addUserMessage = (text) => {
      messages.value.push({ type: "user", text, timestamp: new Date() });
      scrollToBottom();
    };

    const addBotMessage = (text, quickReplies = null) => {
      messages.value.push({ type: "bot", text, quickReplies, timestamp: new Date() });
      scrollToBottom();
    };

    const showProduct = (product) => {
      messages.value.push({ type: "product", product, timestamp: new Date() });
      scrollToBottom();
    };

    const sendMessage = () => {
      if (userMessage.value.trim()) {
        addUserMessage(userMessage.value);
        if (typingIndicator.value) isTyping.value = true;
        socket.emit("userMessage", userMessage.value);
        processUserMessage(userMessage.value);
        userMessage.value = "";
        showQuickSuggestions.value = false;
      }
    };

    const processUserMessage = (msg) => {
      const lower = msg.toLowerCase();
      setTimeout(() => {
        isTyping.value = false;
        if (lower.includes("hola")) {
          addBotMessage("¡Hola! ¿En qué puedo ayudarte hoy?", ["Sí, cuéntame más", "¿Qué tipos tienen?", "¿Cuáles son los precios?"]);
        } else if (lower.includes("tipos") || lower.includes("qué ofrecen")) {
          addBotMessage("Ofrecemos tres tipos principales de landing pages:");
          setTimeout(() => { showProduct(products.value[0]); showProduct(products.value[1]); showProduct(products.value[2]); }, 300);
        } else {
          addBotMessage("Entiendo que quieres info sobre: " + msg, ["Sí, por favor", "Prefiero hablar con un humano"]);
        }
      }, 1000);
    };

    const sendQuickSuggestion = (s) => { userMessage.value = s; sendMessage(); };
    const sendQuickReply = (r) => { userMessage.value = r; sendMessage(); };
    const showCheckout = (p) => { selectedProduct.value = p; showCheckoutModal.value = true; };

    const processCheckout = () => {
      showCheckoutModal.value = false;
      addBotMessage(`¡Gracias por tu compra de ${selectedProduct.value.name}! Te contactaremos pronto.`);
      checkoutData.value = { name: "", email: "", phone: "" };
    };

    const formatTime = (date) => new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const scrollToBottom = () => {
      nextTick(() => {
        if (chatContainer.value) chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
      });
    };

    socket.on("botMessage", (msg) => { isTyping.value = false; addBotMessage(msg); });

    watch(chatVisible, (v) => { if (v) { scrollToBottom(); unreadMessages.value = 0; } });
    watch(messages, (val) => {
      if (!chatVisible.value && val.length && val[val.length - 1].type === 'bot') unreadMessages.value++;
    }, { deep: true });

    onMounted(() => { const hour = new Date().getHours(); isNightMode.value = hour < 6 || hour >= 18; });

    return {
      messages, userMessage, chatVisible, unreadMessages, isTyping,
      chatContainer, isNightMode, quickSuggestions, showQuickSuggestions,
      showCheckoutModal, selectedProduct, checkoutData, products,
      openChat, closeChat, sendMessage, sendQuickSuggestion, sendQuickReply,
      showCheckout, processCheckout, formatTime, handleInputFocus
    };
  }
};
</script>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fadeInUp 0.3s ease-out forwards; }

.scroll-smooth::-webkit-scrollbar { width: 6px; }
.scroll-smooth::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
.scroll-smooth::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 10px; }
.scroll-smooth::-webkit-scrollbar-thumb:hover { background: #a1a1a1; }
.transition-all { transition: all 0.3s ease; }
</style>
