<script>
export default {
  data() {
    return {
      experiences: [
        {
          judul: "Seminar Nasional",
          organisasi: "Pandora ID",
          lokasi: "Jakarta",
          tanggal: "19 Juli 2024",
          picture: "/images/semnas.jpeg",
          id: 1
        },
        {
          judul: "Workshop",
          organisasi: "Study Group",
          lokasi: "Klaten",
          tanggal: "15 Juli 2024",
          picture: "/images/workshop.jpeg",
          id: 2
        },
        {
          judul: "Gelar Gerakan Pandai Membaca",
          organisasi: "Jejak Baca",
          lokasi: "Cirebon",
          tanggal: "2 Agustus 2024",
          picture: "/images/membaca.jpg",
          id: 3
        },
        {
          judul: "Seminar Nasional",
          organisasi: "Pandora ID",
          lokasi: "Jakarta",
          tanggal: "19 Juli 2024",
          picture: "/images/semnas.jpeg",
          id: 1
        },
        {
          judul: "Workshop",
          organisasi: "Study Group",
          lokasi: "Klaten",
          tanggal: "15 Juli 2024",
          picture: "/images/workshop.jpeg",
          id: 2
        },
        {
          judul: "Gelar Gerakan Pandai Membaca",
          organisasi: "Jejak Baca",
          lokasi: "Cirebon",
          tanggal: "2 Agustus 2024",
          picture: "/images/membaca.jpg",
          id: 3
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
          <img :src="experience.picture" class="card-img-top" alt="Gambar 1">
          <div class="card-body text-center">
            <h4 class="card-title">{{experience.judul}}</h4>
            <p class="card-text text-warning-emphasis">{{experience.organisasi}}</p>
            <div class="d-flex align-items-center">
              <i class="bi bi-geo-alt-fill icon-cstm"></i>
              <p class="card-text mb-0 ms-3">{{experience.lokasi}}</p>
            </div>
            <div class="d-flex align-items-center mt-2">
              <i class="bi bi-calendar icon-cstm"></i>
              <p class="card-text mb-0 ms-3">{{experience.tanggal}}</p>
            </div>
            <RouterLink class="btn btn-primary mt-3" to="/detail">Lihat Selengkapnya</RouterLink>
            <!-- <router-link  class="btn btn-primary mt-3">Lihat Selengkapnya</router-link> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
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