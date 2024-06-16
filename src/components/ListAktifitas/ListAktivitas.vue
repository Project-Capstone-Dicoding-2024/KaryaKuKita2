<script>
export default {
  data() {
    return {
      experiences: [
        {
          judul: "Webinar ABC x Cakep",
          deskripsi: "Climate Community",
          lokasi: "Ambon",
          tanggal: "20 Mei 2019",
          id: 1
        },
        {
          judul: "Webinar XYZ",
          deskripsi: "Environment Talk",
          lokasi: "Jakarta",
          tanggal: "15 April 2020",
          id: 2
        },
        {
          judul: "Webinar XYZ",
          deskripsi: "Environment Talk",
          lokasi: "Jakarta",
          tanggal: "15 April 2020",
          id: 2
        },
        {
          judul: "Webinar XYZ",
          deskripsi: "Environment Talk",
          lokasi: "Jakarta",
          tanggal: "15 April 2020",
          id: 2
        },
        {
          judul: "Webinar XYZ",
          deskripsi: "Environment Talk",
          lokasi: "Jakarta",
          tanggal: "15 April 2020",
          id: 2
        },
        {
          judul: "Webinar XYZ",
          deskripsi: "Environment Talk",
          lokasi: "Jakarta",
          tanggal: "15 April 2020",
          id: 2
        },
      ],
      searchQuery: ""
    }
  },
  methods: {
    searchExperience() {
      // Implementasi logika pencarian
      console.log("Search query:", this.searchQuery);
    }
  }
}
</script>

<template>
   <section>
    <div class="d-flex align-items-center justify-content-between mb-4">
      <p class="fw-bolder mb-0 me-auto ms-5"><b class="fs-3">Event</b> ,100 Aktivitas membutuhkan bantuan</p>
      <div class="input-group" style="max-width: 300px;">
        <input v-model="searchQuery" type="text" class="form-control" placeholder="Search">
        <button @click="searchExperience" class="btn btn-primary" type="button">Search</button>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="(experience, index) in experiences" :key="index" class="col mb-4">
        <div class="card shadow border-0 rounded-4 h-100">
          <img src="/images/even.png" class="card-img-top" alt="Gambar 1">
          <div class="card-body text-center">
            <h4 class="card-title">{{experience.judul}}</h4>
            <p class="card-text text-warning-emphasis">{{experience.deskripsi}}</p>
            <div class="d-flex align-items-center">
              <i class="bi bi-geo-alt-fill icon-cstm"></i>
              <p class="card-text mb-0 ms-3">{{experience.lokasi}}</p>
            </div>
            <div class="d-flex align-items-center mt-2">
              <i class="bi bi-calendar icon-cstm"></i>
              <p class="card-text mb-0 ms-3">{{experience.tanggal}}</p>
            </div>
            <RouterLink class="btn btn-primary mt-3" to="/detailorganisasi">Lihat Selengkapnya</RouterLink>
            <!-- <router-link  class="btn btn-primary mt-3">Lihat Selengkapnya</router-link> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.icon-cstm {
  font-size: 20px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}
</style>