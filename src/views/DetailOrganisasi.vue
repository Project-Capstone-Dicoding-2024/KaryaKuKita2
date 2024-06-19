<script setup>
import Navbar from "@/components/Navbar.vue";

const cardData = {
  volunteerCount: 50,
  location: 'Jakarta',
  website: 'www.example.com',
  date: 'June 30, 2024',
  email: 'info@example.com',
  activities: [
    {
      imageUrl: '/images/semnas.jpeg',
      title: 'Seminar Nasional 2024'
    },
    {
      imageUrl: '/images/workshop.jpeg',
      title: 'Workshop'
    }
  ]
};
</script>

<template>
  <Navbar/>
 <div class="container mt-5 mb-5">
    <div class="card">
      <div class="row no-gutters">
        <div class="col-md-8">
          <div class="card-body">
            <h1 class="card-title text-center mt-5">Pandora ID</h1>
            <p class="card-text text-center">Pandora ID merupakan organisasi yang bergerak dibidang Pengembangan Sumber Daya Manusia, Berfokus pada pemanfaatan dan pengembangan kualitas individu agar mereka yang ikut berpartisipasi bisa mengembangakan potensi pada dirinya</p>
            <div class="card-category text-center mt-3">
              <span class="badge bg-primary">Pendidikan</span>
              <span class="badge bg-primary ms-5">Olahraga</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <img src="/images/organization.png" class="card-img" alt="Gambar Placeholder">
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-4">
    <div class="row g-0">
      <!-- Bagian kiri -->
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">Informasi Relawan</h5>
          <ul class="list-group">
            <li class="list-group-item">Jumlah Relawan: {{ cardData.volunteerCount }}</li>
            <li class="list-group-item">Lokasi: {{ cardData.location }}</li>
            <li class="list-group-item">Website: <a :href="'http://' + cardData.website" target="_blank">{{ cardData.website }}</a></li>
            <li class="list-group-item">Tanggal: {{ cardData.date }}</li>
            <li class="list-group-item">Email: <a :href="'mailto:' + cardData.email">{{ cardData.email }}</a></li>
          </ul>
        </div>
      </div>
      <!-- Bagian kanan -->
      <div class="col-md-6">
        <div class="row g-0">
          <!-- Aktivitas 1 -->
          <div class="col-md-6">
            <div class="card">
              <img :src="cardData.activities[0].imageUrl" class="card-img-top" alt="Activity 1">
              <div class="card-body">
                <h5 class="card-title">{{ cardData.activities[0].title }}</h5>
              </div>
            </div>
          </div>
          <!-- Aktivitas 2 -->
          <div class="col-md-6">
            <div class="card">
              <img :src="cardData.activities[1].imageUrl" class="card-img-top" alt="Activity 2">
              <div class="card-body">
                <h5 class="card-title">{{ cardData.activities[1].title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.card-img {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 10px;
    max-width: 260px;
}
.card-body {
  padding: 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

.list-group-item {
  border: none;
}
</style>
