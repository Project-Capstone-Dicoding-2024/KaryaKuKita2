import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ResumeView from "@/views/ResumeView.vue";
// import ProjectView from "@/views/ProjectView.vue";
// import ContactView from "@/views/ContactView.vue";
import List from "@/views/CariAktivitas.vue";
import Detail from "@/views/DetailList.vue";
import DaftarOrganisasi from "@/views/DaftarOrganisasi.vue";
import DetailOrganisasi from "@/views/DetailOrganisasi.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import EditUser from "@/views/profil/EditUser.vue";
import OrganisasiDisukai from "@/views/profil/OrganisasiDisukai.vue";
import ProfilUser from "@/views/profil/ProfilUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login 
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/daftarorganisasi',
      name: 'daftarorganisasi',
      component: DaftarOrganisasi
    },
    {
      path: '/detailorganisasi',
      name: 'detailorganisasi',
      component: DetailOrganisasi
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilUser
    },
    //
    {
      path: '/organisasilike',
      name: 'organisasilike',
      component: OrganisasiDisukai
    },
    //
    {
      path: '/edituser',
      name: 'edituser',
      component: EditUser
    },
    //
    // {
    //   path: '/resume',
    //   name: 'resume',
    //   component: ResumeView
    // },
    // {
    //   path: '/project',
    //   name: 'project',
    //   component: ProjectView
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: ContactView
    // },
  ]
})

export default router
