<!-- LikedOrganizations.vue -->
<template>
    <Navbar/>
    <div class="container mt-5">
        <navbarprofil/>
        <h1 class="text-center"><b>Organisai Yang di Suka</b></h1>
      <div class="row">
        <div class="col-md-4" v-for="org in organizations" :key="org.id">
          <div class="card mb-4">
            <img :src="org.image" class="card-img-top" :alt="org.name">
            <div class="card-body">
              <h5 class="card-title text-center">{{ org.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import navbarprofil from "@/components/profil/NavbarProfil.vue";
  import Navbar from "@/components/Navbar.vue";

  
  
  const router = useRouter();
  
  const organizations = ref([
    { id: 1, name: 'Organization 1', image: '/images/organization.png' },
    { id: 2, name: 'Organization 2', image: '/images/organization.png' },
    { id: 3, name: 'Organization 3', image: '/images/organization.png' }
  ]);
  
  const navigateTo = (page) => {
    router.push({ name: page });
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  