<script setup>

</script>

<template>
 

<div class="container">
  <div class="d-flex justify-content-between align-items-center mt-5">
            <div class="section-title"><h1><p>Organisasi</p></h1></div>
            <button class="btn btn-primary btn-view-more">Lihat Selengkapnya</button>
        </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <!-- Card 1 -->
    <div class="col">
      <div class="card h-100 rounded">
        <img src="/images/even.png" class="card-img-top" alt="Gambar 1">
        <div class="card-body">
          <h5 class="card-title">Judul Card 1</h5>
          <p class="card-text">Deskripsi singkat mengenai Card 1.</p>
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
              <path d="M7.987 0a8 8 0 0 1 5.657 14.343l-5.01-5.01a2.5 2.5 0 1 0-3.535-3.536l-5.01 5.01A8 8 0 0 1 7.987 0z"/>
            </svg>
            <p class="card-text mb-0">Nama Lokasi 1</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="col">
      <div class="card h-100">
        <img src="/images/even.png" class="card-img-top" alt="Gambar 2">
        <div class="card-body">
          <h5 class="card-title">Judul Card 2</h5>
          <p class="card-text">Deskripsi singkat mengenai Card 2.</p>
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
              <path d="M7.987 0a8 8 0 0 1 5.657 14.343l-5.01-5.01a2.5 2.5 0 1 0-3.535-3.536l-5.01 5.01A8 8 0 0 1 7.987 0z"/>
            </svg>
            <p class="card-text mb-0">Nama Lokasi 2</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="col">
      <div class="card h-100">
        <img src="/images/even.png" class="card-img-top" alt="Gambar 3">
        <div class="card-body">
          <h5 class="card-title">Judul Card 3</h5>
          <p class="card-text">Deskripsi singkat mengenai Card 3.</p>
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
              <path d="M7.987 0a8 8 0 0 1 5.657 14.343l-5.01-5.01a2.5 2.5 0 1 0-3.535-3.536l-5.01 5.01A8 8 0 0 1 7.987 0z"/>
            </svg>
            <p class="card-text mb-0">Nama Lokasi 3</p>
          </div>
        </div>
      </div>
    </div>
    <!-- tambahkan card lainnya sesuai kebutuhan -->
  </div>
</div>
</template>

<style scoped>
 .card {
      background-color: rgba(255, 255, 255, 0.7); 
      backdrop-filter: blur(10px); 
      border: 1px solid rgba(0, 0, 0, 0.125); /* Border ringan */
    }
</style>