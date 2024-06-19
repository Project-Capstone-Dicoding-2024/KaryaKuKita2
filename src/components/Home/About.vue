<script setup>

</script>

<template>
 

<div class="container">
  <div class="d-flex justify-content-between align-items-center mt-5">
            <div class="section-title"><h1><p>Event</p></h1></div>
            <!-- <button class="btn btn-primary btn-view-more">Lihat Selengkapnya</button> -->
            <RouterLink to="/list" class="btn btn-primary btn-view-more">Lihat Selengkapnya</RouterLink>
        </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <!-- Card 1 -->
    <div class="col">
      <div class="card h-100 rounded">
        <img src="/images/semnas.jpeg" class="card-img-top" alt="Gambar 1">
        <div class="card-body text-center">
          <h4 class="card-title">Seminar Nasional</h4>
          <p class="card-text text-warning-emphasis">Pandora ID</p>
          <div class="d-flex align-items-center">
            <i class="bi bi-geo-alt-fill icon-cstm"></i>
            <p class="card-text mb-0 ms-3">Jakarta</p>
          </div>
          <div class="d-flex align-items-center mt-2">
            <i class="bi bi-calendar icon-cstm"></i>
            <p class="card-text mb-0 ms-3">15 Juli 2024</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="col">
      <div class="card h-100">
        <img src="/images/workshop.jpeg" class="card-img-top" alt="Gambar 2">
        <div class="card-body text-center">
          <h4 class="card-title">Workshop</h4>
          <p class="card-text text-warning-emphasis">Study Group</p>
          <div class="d-flex align-items-center">
            <i class="bi bi-geo-alt-fill icon-cstm"></i>
            <p class="card-text mb-0 ms-3">Klaten</p>
          </div>
          <div class="d-flex align-items-center mt-2">
            <i class="bi bi-calendar icon-cstm"></i>
            <p class="card-text mb-0 ms-3">15 Juli 2024</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="col">
      <div class="card h-100">
        <img src="/images/membaca.jpg" class="card-img-top" alt="Gambar 3">
        <div class="card-body text-center">
          <h4 class="card-title">Gelar Gerakan Pandai Membaca</h4>
          <p class="card-text text-warning-emphasis">Jejak Baca</p>
          <div class="d-flex align-items-center">
            <i class="bi bi-geo-alt-fill icon-cstm"></i>
            <p class="card-text mb-0 ms-3">Cirebon</p>
          </div>
          <div class="d-flex align-items-center mt-2">
            <i class="bi bi-calendar icon-cstm"></i>
            <p class="card-text mb-0 ms-3">2 Agustus 2024</p>
          </div>
        </div>
      </div>
    </div>
    <!-- tambahkan card lainnya  -->
  </div>
</div>
</template>

<style scoped>
 .card {
      background-color: rgba(255, 255, 255, 0.7); 
      backdrop-filter: blur(10px); 
      border: 1px solid rgba(0, 0, 0, 0.125); 
    }
    .icon-cstm {
            font-size: 30px; 
            background-color: red; 
            color: white; 
            border-radius: 70%; 
            padding: 5px; 
        }
</style>