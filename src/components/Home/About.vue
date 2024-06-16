<script setup>

</script>

<template>
 

<div class="container">
  <div class="d-flex justify-content-between align-items-center mt-5">
            <div class="section-title"><h1><p>Event</p></h1></div>
            <button class="btn btn-primary btn-view-more">Lihat Selengkapnya</button>
        </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <!-- Card 1 -->
    <div class="col">
      <div class="card h-100 rounded">
        <img src="/images/even.png" class="card-img-top" alt="Gambar 1">
        <div class="card-body text-center">
          <h4 class="card-title">Webinar ABC x Cakep</h4>
          <p class="card-text text-warning-emphasis">Climate Community</p>
          <div class="d-flex align-items-center">
            <i class="bi bi-geo-alt-fill icon-cstm"></i>
            <p class="card-text mb-0 ms-3">AMBON</p>
          </div>
          <div class="d-flex align-items-center mt-2">
            <i class="bi bi-calendar icon-cstm"></i>
            <p class="card-text mb-0 ms-3">20 Mei 2019</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="col">
      <div class="card h-100">
        <img src="/images/even.png" class="card-img-top" alt="Gambar 2">
        <div class="card-body text-center">
          <h4 class="card-title">Webinar ABC x Cakep</h4>
          <p class="card-text text-warning-emphasis">Climate Community</p>
          <div class="d-flex align-items-center">
            <i class="bi bi-geo-alt-fill icon-cstm"></i>
            <p class="card-text mb-0 ms-3">AMBON</p>
          </div>
          <div class="d-flex align-items-center mt-2">
            <i class="bi bi-calendar icon-cstm"></i>
            <p class="card-text mb-0 ms-3">20 Mei 2019</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="col">
      <div class="card h-100">
        <img src="/images/even.png" class="card-img-top" alt="Gambar 3">
        <div class="card-body text-center">
          <h4 class="card-title">Webinar ABC x Cakep</h4>
          <p class="card-text text-warning-emphasis">Climate Community</p>
          <div class="d-flex align-items-center">
            <i class="bi bi-geo-alt-fill icon-cstm"></i>
            <p class="card-text mb-0 ms-3">AMBON</p>
          </div>
          <div class="d-flex align-items-center mt-2">
            <i class="bi bi-calendar icon-cstm"></i>
            <p class="card-text mb-0 ms-3">20 Mei 2019</p>
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