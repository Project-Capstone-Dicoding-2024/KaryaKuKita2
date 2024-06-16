<template>
    <div class="container mt-4">
      <div class="row">
        <!-- Card deskripsi kegiatan -->
        <div class="col-md-6 mb-4">
          <div class="card bg-light shadow border-0 rounded-4 h-100">
            <div class="card-body">
              <h5 class="card-title">Deskripsi Kegiatan</h5>
              <p class="card-text">“Often when you think you’re at the end of something, you’re at the beginning of something else.”
              – Fred Rogers, Television Personality  Halo sobat Gen-B! ⚡🙌🏻 We bring a good news for everyone that mulai HARI INI, Generasi Energi Bersih is finally here in 
              Jakarta Timur dan telah membuka pendaftaran relawan yang cocok sekali untuk kalian yang 
              tertarik pada isu-isu lingkungan, transisi energi, and much more! 🤩 🎉  We’re very welcome for everyone and waiting for you to fill out the registration form through
              the link below before 29th May 2024: ⬇🤗 🔗: bit.ly/GEBJaktimMemanggil2024  Jangan lupa untuk membaca syarat dan ketentuan yang berlaku sebelum mengisi format 
              registrasi dan ajak teman-teman kalian untuk menjaga bumi dengan menjadi relawan 
              #GenerasiEnergiBersih, see you guys on top! 🫵🏻🌏🌱  #IESR #GenerasiEnergiBersih #BebasEmisi2050 #TransisiEnergi #EnergiTerbarukan 
              #CleanEnergy #BersamaKurangiEmisi #GEBinJaktim #GEBMemanggil #Volunteers #Relawan</p>
            </div>
          </div>
        </div>
  
        <!-- Card deskripsi aktivitas -->
        <div class="col-md-6 mb-4">
          <div class="card bg-light shadow border-0 rounded-4 h-100">
            <div class="card-body">
              <h5 class="card-title">Detail Aktivitas</h5>
              <p class="card-text">Metode Briefing
              Setelah mengisi link registration, calon relawan akan langsung dikontak 
              melalui WhatsApp atau Email untuk memilih jadwal interview. 
              Setelah interview masing-masing individu selesai, calon relawan 
              diharapkan untuk menunggu pengumuman akhir.</p>
              
              <h5>Pekerjaan</h5>
              <div class="mt-3">
                <!-- Card pekerjaan yang ditawarkan -->
                <div class="card">
                  <div class="card-header bg-primary text-white">
                    Content Creator
                  </div>
                  <div class="card-body">
                    <button class="btn btn-primary btn-sm mt-2" @click="toggleJobDescription(1)">Lihat Deskripsi</button>
                    <ul v-if="showJobDescription === 1" class="list-group text-center mb-3">
                      <li class="list-group-item">Jumlah Orang: 5</li>
                      <li class="list-group-item">Kriteria:
                        <ul>
                          <li>Jujur</li>
                          <li>Terampil</li>
                          <li>Produktif</li>
                          <!-- Tambahkan kriteria lainnya sesuai kebutuhan -->
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
  
                <div class="card mt-3">
                  <div class="card-header bg-primary text-white">
                    Full Stack Developer
                  </div>
                  <div class="card-body">
                    <button class="btn btn-primary btn-sm mt-2" @click="toggleJobDescription(2)">Lihat Deskripsi</button>
                    <ul v-if="showJobDescription === 2" class="list-group text-center mb-3">
                      <li class="list-group-item">Jumlah Orang: 5</li>
                      <li class="list-group-item">Kriteria:
                        <ul>
                          <li>Jujur</li>
                          <li>Terampil</li>
                          <li>Produktif</li>
                          <!-- Tambahkan kriteria lainnya sesuai kebutuhan -->
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
        showJobDescription: 0 // 0 untuk tidak menampilkan deskripsi pekerjaan
      };
    },
    methods: {
      toggleJobDescription(jobNumber) {
        // Toggle untuk menampilkan deskripsi pekerjaan
        this.showJobDescription = (this.showJobDescription === jobNumber) ? 0 : jobNumber;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling untuk card */
  .card {
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  
  .card-header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  </style>
  