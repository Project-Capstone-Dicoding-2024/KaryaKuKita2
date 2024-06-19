import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import List from "@/views/CariAktivitas.vue";
import Detail from "@/views/DetailList.vue";
import DaftarOrganisasi from "@/views/DaftarOrganisasi.vue";
import DetailOrganisasi from "@/views/DetailOrganisasi.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import EditUser from "@/views/profil/EditUser.vue";
import OrganisasiDisukai from "@/views/profil/OrganisasiDisukai.vue";
import ProfilUser from "@/views/profil/ProfilUser.vue";
import detailAktivitas from '@/views/detailAktivitas.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/list',
    name: 'list',
    component: List,
    meta: { requiresAuth: true }
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: { requiresAuth: true }
  },
  {
    path: '/daftarorganisasi',
    name: 'daftarorganisasi',
    component: DaftarOrganisasi,
    meta: { requiresAuth: true }
  },
  {
    path: '/detailorganisasi',
    name: 'detailorganisasi',
    component: DetailOrganisasi,
    meta: { requiresAuth: true }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilUser,
    meta: { requiresAuth: true }
  },
  {
    path: '/organisasilike',
    name: 'organisasilike',
    component: OrganisasiDisukai,
    meta: { requiresAuth: true }
  },
  {
    path: '/edituser',
    name: 'edituser',
    component: EditUser,
    meta: { requiresAuth: true }
  },
  {
    path: '/detailAktivitas',
    name: 'detailAktivitas',
    component: detailAktivitas,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next({ name: 'login' });
      }
    });
  } else {
    next();
  }
});

export default router;
