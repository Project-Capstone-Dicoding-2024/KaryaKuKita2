<script setup>
import { RouterView } from 'vue-router'

// import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="d-flex flex-column justify-content-between" style="height: 100vh !important">
    <main class="flex-shrink-0">
      
      <RouterView />
    </main>

  </div>
</template>