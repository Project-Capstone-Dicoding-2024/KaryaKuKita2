<script setup>

import Hero from "@/components/Home/Hero.vue";
import About from "@/components/Home/About.vue";
import Organisasi from "@/components/Home/Organisai.vue";
import Hubungi from "@/components/Home/Hubungi.vue";
import Navbar from "@/components/Navbar.vue";

</script>

<template>
  <Navbar/>
  <Hero/>
  <About/>
  <Organisasi class="mt-5"/>
  <Hubungi/>
</template>
