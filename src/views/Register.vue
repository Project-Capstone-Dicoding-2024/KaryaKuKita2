<template>
    <div class="container mt-5">
      <div class="card shadow border-0 mx-auto" style="max-width: 400px;">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Registrasi Akun Relawan</h2>
          
          <!-- Form Registrasi -->
          <form @submit.prevent="register">
            <!-- Nama Input -->
            <div class="mb-3">
              <label for="name" class="form-label">Nama</label>
              <input type="text" id="name" v-model="name" class="form-control" placeholder="Masukkan nama" required>
            </div>
  
            <!-- Email Input -->
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" id="email" v-model="email" class="form-control" placeholder="Masukkan email" required>
            </div>
  
            <!-- Password Input -->
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" id="password" v-model="password" class="form-control" placeholder="Masukkan password" required>
            </div>
  
            <!-- Register Button -->
            <RouterLink class="btn btn-primary btn-lg btn-block" to="/">Register</RouterLink>
            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block">Register</button> -->
          </form>
  
          <!-- Login Link -->
          <div class="text-center mt-3">
            <p>Sudah memiliki akun? <a href="/">Login disini</a></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  
  const register = () => {
    console.log('Nama:', name.value);
    console.log('Email:', email.value);
    console.log('Password:', password.value);
  };
  </script>
  
  <style scoped>

  </style>
  