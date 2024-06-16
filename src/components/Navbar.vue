<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light py-3">
    <div class="container px-5">
      <RouterLink to="/" class="navbar-brand">
        <span class="fw-bolder text-gradient fs-4">KaryaKuKita
        </span>
      </RouterLink>
      <a class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class='bx bx-menu-alt-right'></i>
      </a>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 small fw-bolder">
                    <li class="nav-item"> <RouterLink to="/home"><a class="nav-link">Home</a></RouterLink></li>
                    <li class="nav-item"><RouterLink to="/list"><a class="nav-link">Cari Aktivitas</a></RouterLink></li>
                    <li class="nav-item"><RouterLink to="/daftarorganisasi"><a class="nav-link">Daftar Organisasi</a></RouterLink></li>
                    <li class="nav-item"><RouterLink to="/profil"><a  class="nav-link">Profil</a></RouterLink></li>
                  </ul>
                  <RouterLink to="/" class="btn btn-outline-danger">
          <b class="text-black">Log Out</b>
        </RouterLink>
            </div>
    </div>

  </nav>
</template>

<style scoped>
.navbar-toggler {
  border: none !important;
  font-size: 24px !important;
}
</style>