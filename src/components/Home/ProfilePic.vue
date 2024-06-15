<script setup>

</script>

<template>
  <div class="profile">
    <img class="profile-img" src="/images/home/home 1.png" alt="..." />
    
  </div>
</template>


<style scoped>
.feature {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
}

.profile {
  position: relative;
  height: 75vw;
  width: 75vw;
  border-radius: 5vw;
  margin-top: 5vw;
  max-height: 40rem;
  max-width: 40rem;
}
.profile .profile-img {
  height: 80vw;
  max-height: 45rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.profile .dots-1 {
  position: absolute;
  width: 3vw;
  right: 1.5vw;
  top: 4vw;
}
.profile .dots-1 svg {
  fill: #fff;
}
.profile .dots-2 {
  position: absolute;
  width: 3vw;
  right: -4vw;
  top: 6.05vw;
}
.profile .dots-2 svg {
  fill: #1e30f3;
}
.profile .dots-3 {
  position: absolute;
  width: 3vw;
  left: 1.5vw;
  bottom: 6.05vw;
}
.profile .dots-3 svg {
  fill: #fff;
}
.profile .dots-4 {
  position: absolute;
  width: 3vw;
  left: -4vw;
  bottom: 4vw;
}
.profile .dots-4 svg {
  fill: #1e30f3;
}

@media (min-width: 576px) {
  .profile {
    height: 25vw;
    width: 25vw;
  }
  .profile .profile-img {
    height: 25vw;
  }
  .profile .dots-1 {
    width: 3vw;
    right: 1.5vw;
  }
  .profile .dots-2 {
    width: 3vw;
    right: -4vw;
  }
  .profile .dots-3 {
    width: 3vw;
    left: 1.5vw;
  }
  .profile .dots-4 {
    width: 3vw;
    left: -4vw;
  }
}
@media (min-width: 768px) {
  .profile {
    height: 35vw;
    width: 35vw;
  }
  .profile .profile-img {
    height: 35vw;
  }
  .profile .dots-1 {
    width: 3vw;
    right: 1.5vw;
  }
  .profile .dots-2 {
    width: 3vw;
    right: -4vw;
  }
  .profile .dots-3 {
    width: 3vw;
    left: 1.5vw;
  }
  .profile .dots-4 {
    width: 3vw;
    left: -4vw;
  }
}
@media (min-width: 992px) {
  .profile {
    height: 35vw;
    width: 35vw;
  }
  .profile .profile-img {
    height: 35vw;
  }
  .profile .dots-1 {
    width: 1.5vw;
    right: 0.75vw;
  }
  .profile .dots-2 {
    width: 1.5vw;
    right: -2vw;
  }
  .profile .dots-3 {
    width: 1.5vw;
    left: 0.75vw;
  }
  .profile .dots-4 {
    width: 1.5vw;
    left: -2vw;
  }
}
@media (min-width: 1200px) {
  .profile {
    height: 25vw;
    width: 25vw;
  }
  .profile .profile-img {
    height: 25vw;
  }
  .profile .dots-1 {
    width: 1.5vw;
    right: 0.75vw;
  }
  .profile .dots-2 {
    width: 1.5vw;
    right: -2vw;
  }
  .profile .dots-3 {
    width: 1.5vw;
    left: 0.75vw;
  }
  .profile .dots-4 {
    width: 1.5vw;
    left: -2vw;
  }
}
</style>