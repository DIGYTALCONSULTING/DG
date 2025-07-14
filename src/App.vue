<script setup lang="ts">
import HeroSection from './components/HeroSection/HeroSection.vue'
import ProcessSection from './components/ProcessSection/ProcessSection.vue'
import PlanSections from './components/PlansSection/PlanSections.vue'
import ContacSection from './components/ContacSection/ContacSection.vue'
import NvarSection from './components/NvarSection/NvarSection.vue'
import FootPage from './components/FootPage/FootPage.vue'
import Chat_bot from './components/Chat_bot/Chat_bot.vue'
import 'animate.css'
</script>

<template>
  <div>
    <NvarSection msg="" />
    <HeroSection msg="" />
    <ProcessSection msg="" />
    <PlanSections msg="" />
    <ContacSection msg="" />
    <FootPage msg="" />
    <Chat_bot msg=""/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
