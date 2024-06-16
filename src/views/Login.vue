<template>
    <div class="container mt-5">
      <div class="card shadow border-0 rounded-4">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Login</h2>
          
          <!-- Form Login -->
          <form @submit.prevent="login">
            <!-- Email Input -->
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" id="email" v-model="email" class="form-control" placeholder="Enter email" required>
            </div>
  
            <!-- Password Input -->
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <div class="input-group">
                <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" class="form-control" placeholder="Enter password" required>
                <button class="btn btn-outline-secondary" type="button" @click="showPassword = !showPassword">
                  {{ showPassword ? 'Hide' : 'Show' }}
                </button>
              </div>
            </div>
  
            <!-- Login Button -->
            <RouterLink class="btn btn-primary btn-lg btn-block" to="/home">Login</RouterLink>
            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button> -->
          </form>
  
          <!-- Register Link -->
          <div class="text-center mt-3">
            <p>Belum memiliki akun? <a href="/register">Klik disini</a></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const showPassword = ref(false);
  
  const login = () => {
    // Implementasi logika login di sini (contoh: validasi, pengiriman data ke server, dll)
    console.log('Email:', email.value);
    console.log('Password:', password.value);
  };
  </script>
  
  <style scoped>
  .card {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .btn-outline-secondary {
    border-color: rgba(0, 0, 0, 0.1);
  }
  
  .btn-outline-secondary:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  </style>
  