<script setup>

</script>

<template>
 

<div class="container">
  <div class="d-flex justify-content-between align-items-center mt-5">
            <div class="section-title"><h1><p>Organisasi</p></h1></div>
            <RouterLink to="/daftarorganisasi" class="btn btn-primary btn-view-more">Lihat Selengkapnya</RouterLink>
            <!-- <button class="btn btn-primary btn-view-more">Lihat Selengkapnya</button> -->
        </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <!-- Card 1 -->
    <div class="col">
      <div class="card h-100 rounded">
        <img src="/images/organisasi.png" class="card-img-top" alt="Gambar 1">
        <div class="card-body">
          <h4 class="card-title"><b>20 Komunitas & Organisasi 
            Pecinta Alam</b></h4>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="col">
      <div class="card h-100">
        <img src="/images/organisasi.png" class="card-img-top" alt="Gambar 2">
        <div class="card-body">
          <h4 class="card-title"><b>20 Komunitas & Organisasi 
            Pecinta Alam</b></h4>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="col">
      <div class="card h-100">
        <img src="/images/organisasi.png" class="card-img-top" alt="Gambar 3">
        <div class="card-body">
          <h4 class="card-title"><b>20 Komunitas & Organisasi 
            Pecinta Alam</b></h4>
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