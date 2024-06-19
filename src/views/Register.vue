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
          <button type="submit" class="btn btn-primary btn-lg btn-block">Register</button>
          <button type="button" class="btn btn-secondary btn-lg btn-block mt-2 ms-3" @click="registerWithGoogle">Register with Google</button>
        </form>

        <!-- Login Link -->
        <div class="text-center mt-3">
          <p>Sudah memiliki akun? <RouterLink to="/">Login disini</RouterLink></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  const auth = getAuth();
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push('/home');
  } catch (error) {
    console.error('Registration error:', error);
    alert(error.message);
  }
};

const registerWithGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    router.push('/home');
  } catch (error) {
    console.error('Google registration error:', error);
    alert(error.message);
  }
};
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: 0 auto;
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
