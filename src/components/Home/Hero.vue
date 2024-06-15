<script setup>

import ProfilePic from "@/components/Home/ProfilePic.vue";
</script>

<template>
  <header class="py-5">
    <div class="container px-5 pb-5">
      <div class="row gx-5 align-items-center">
        <div class="col-xxl-5">
          <!-- Header text content-->
          <div class="text-center text-xxl-start">
            <!-- buatkan 2 icon yang bersebelahan dan di samping setiap iconmemiliki tulisan  -->
            <div class="d-flex justify-content-center justify-content-xxl-start mb-3">
              <div class="d-flex align-items-center">
                <i class="bi bi-person icon me-2"></i>
                <div class="text-center">
                  <h1 class="mb-0">100</h1>
                  <span>Relawan</span>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-building icon me-2"></i>
                <div class="text-center">
                  <h1 class="mb-0">100</h1>
                  <span>Organisasi</span>
                </div>
              </div>
            </div>
            <p > <b>Turn your skills into goodness!</b></p>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
              <RouterLink to="/resume" class="btn btn-custom  btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">Resume</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-xxl-7">
          <!-- Header profile picture-->
          <div class="d-flex justify-content-center mt-5 mt-xxl-0">
            <ProfilePic/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.icon {
  font-size: 100px; /* Ukuran ikon */
}
.btn-custom {
            background-color: #FFA956;
            color: black;
            border: none;
        }
        .btn-custom:hover {
            background-color: #ffeb3b;
            color: black;
        }
</style>