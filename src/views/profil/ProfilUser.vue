<!-- ProfileUser.vue -->
<template>
  <Navbar/>
  
    <div class="container mt-5">
      <navbarprofil />
      <h1 class="text-center"><b>Profil</b></h1>
      <div class="card mx-auto" style="max-width: 400px;">
        <div class="card-body text-center">
          <img :src="user.photo" alt="User Photo" class="rounded-circle mb-3" width="150" height="150">
          <h2 class="card-title">{{ user.name }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import navbarprofil from "@/components/profil/NavbarProfil.vue";
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Navbar from "@/components/Navbar.vue";
  

  const router = useRouter();
  
  const user = ref({
    name: 'John Doe',
    photo: 'https://via.placeholder.com/150'
  });
  
  const navigateTo = (page) => {
    router.push({ name: page });
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  