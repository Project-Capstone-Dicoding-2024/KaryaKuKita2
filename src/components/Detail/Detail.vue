<template>
    <div class="container mt-4">
      <div class="row">
        <!-- Gambar di sebelah kiri -->
        <div class="col-md-6 mb-4">
          <img src="/images/semnas.jpeg" class="img-fluid rounded" alt="Gambar Event">
        </div>
        <!-- Card informasi di sebelah kanan -->
        <div class="col-md-6">
          <div class="card shadow border-0 rounded-4 h-100">
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <h4 class="card-title text-center">Seminar Nasional</h4>
              <p class="card-text text-center text-warning-emphasis">Pandora ID</p>
              <ul class="list-group mb-3">
                <li class="list-group-item"><strong>Jadwal Pendaftaran:</strong> 20 Mei 2024 - 10 Juni 2024</li>
                <li class="list-group-item"><strong>Lokasi:</strong> Jakarta</li>
              </ul>
              <h4 class="card-title text-center text-danger">Batas Registrasi : 10 Juni 2024</h4>
              <button @click="showModal = true" class="btn btn-primary">Daftar Sekarang</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal untuk form pendaftaran -->
      <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block' : showModal }">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Form Pendaftaran</h5>
              <button type="button" class="close" @click="showModal = false">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="nama">Nama</label>
                  <input type="text" class="form-control" id="nama" placeholder="Masukkan nama Anda">
                </div>
                <div class="form-group">
                  <label for="email">Alamat Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Masukkan alamat email Anda">
                </div>
                <div class="form-group">
                  <label for="nomor_hp">Nomor HP</label>
                  <input type="tel" class="form-control" id="nomor_hp" placeholder="Masukkan nomor HP Anda">
                </div>
                <div class="form-group">
                  <label for="cv">Upload CV</label>
                  <input type="file" class="form-control-file" id="cv">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="showModal = false">Tutup</button>
              <button type="button" class="btn btn-primary">Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false
      };
    }
  };
  </script>
  
  <style scoped>
  /* Styling untuk card dan gambar */
  .card {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  </style>
