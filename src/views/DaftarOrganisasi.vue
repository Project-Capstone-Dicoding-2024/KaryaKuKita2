<script setup>
import Navbar from "@/components/Navbar.vue";

import { ref } from 'vue';

const cards = ref([
  {
    imageUrl: '/images/Los angeles 2.png',
    title: 'Komunitas Sehat Jasmani',
    description: 'Ambon, Maluku'
  },
  {
    imageUrl: '/images/Los angeles 2.png',
    title: 'Komunitas Sehat Jasmani',
    description: 'Ambon, Maluku'
  },
  {
    imageUrl: '/images/Los angeles 2.png',
    title: 'Komunitas Sehat Jasmani',
    description: 'Ambon, Maluku'
  },
  {
    imageUrl: '/images/Los angeles 2.png',
    title: 'Komunitas Sehat Jasmani',
    description: 'Ambon, Maluku'
  },
  {
    imageUrl: '/images/Los angeles 2.png',
    title: 'Komunitas Sehat Jasmani',
    description: 'Ambon, Maluku'
  },
  {
    imageUrl: '/images/Los angeles 2.png',
    title: 'Komunitas Sehat Jasmani',
    description: 'Ambon, Maluku'
  },
  {
    imageUrl: '/images/Los angeles 2.png',
    title: 'Komunitas Sehat Jasmani',
    description: 'Ambon, Maluku'
  },
  {
    imageUrl: '/images/Los angeles 2.png',
    title: 'Komunitas Sehat Jasmani',
    description: 'Ambon, Maluku'
  },
  {
    imageUrl: '/images/Los angeles 2.png',
    title: 'Komunitas Sehat Jasmani',
    description: 'Ambon, Maluku'
  },
]);
</script>

<template>
  <Navbar/>
 
  <div class="container mt-4">
    <div class="row">
      <!-- Loop through cards -->
      <div class="col-md-4" v-for="(card, index) in cards" :key="index">
        <RouterLink :to="{ name: 'detailorganisasi', params: { id: card.id } }" class="text-decoration-none">
          <div class="card shadow border-0 rounded-4 mb-4">
            <div class="row g-0">
              <!-- Gambar di sebelah kiri -->
              <div class="col-md-4">
                <img :src="card.imageUrl" class="img-fluid rounded-start" alt="Gambar Event">
              </div>
              <!-- Judul dan deskripsi di sebelah kanan gambar -->
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ card.title }}</h5>
                  <p class="card-text">{{ card.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styling untuk card */
.card {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
