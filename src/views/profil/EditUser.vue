<!-- EditUser.vue -->
<template>
    <Navbar/>
    <div class="container mt-5">
      <navbarprofil/>
      <h1 class="text-center"><b>Halaman Edit Profil</b></h1>
      <form @submit.prevent="saveChanges">
        <div class="mb-3">
          <label for="name" class="form-label">Nama</label>
          <input type="text" id="name" v-model="user.name" class="form-control" placeholder="Enter name" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" v-model="user.password" class="form-control" placeholder="Enter password" required>
        </div>
        <div class="mb-3">
          <label for="photo" class="form-label">Foto</label>
          <input type="file" id="photo" @change="onFileChange" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import navbarprofil from "@/components/profil/NavbarProfil.vue";
  import Navbar from "@/components/Navbar.vue";

  
  const router = useRouter();
  
  const user = ref({
    name: 'John Doe',
    password: '',
    photo: 'https://via.placeholder.com/150'
  });
  
  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      user.value.photo = URL.createObjectURL(file);
    }
  };
  
  const saveChanges = () => {
    // Implement save changes logic here
    console.log('User data:', user.value);
  };
  
  const navigateTo = (page) => {
    router.push({ name: page });
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  