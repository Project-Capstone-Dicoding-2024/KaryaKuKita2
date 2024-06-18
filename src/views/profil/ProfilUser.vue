<!-- ProfileUser.vue -->
<template>
  <Navbar/>
  <div class="container">
  <navbarprofil /></div>
  <div class="profile">
    <div class="image-container">
      <img :src="user.photo" alt="User Photo">
    </div>
    <div class="info-container">
      <h1>{{ user.name }}</h1>
      <strong class="activity">Aktivitas yang diikuti : </strong> {{ user.activity }}
      <strong class="location">Domisili : </strong> {{ user.domisili }}
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
    name: 'Falah Salahudin',
    photo: '/images/profile.png',
    activity: '3',
    domisili: 'Condong Catur, Yogyakarta'
  });
  
  const navigateTo = (page) => {
    router.push({ name: page });
  };
  </script>
  
  <style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

 .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 500px;
  background-color: #fae1cd;
 }

 .profile {
  display: flex;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  background: white;
}

 .image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
 }

 .image-container img {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 10px;
    margin: 0 auto;
    max-width: 360px;
 }

 .info-container {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

 .info-container h1 {
  margin-top: 0;
 }

 .activity, .location {
  font-size: 16px;
  margin-bottom: 5px;
 }

 .activity strong, .location strong {
  font-weight: bold;
 }
  </style>
  