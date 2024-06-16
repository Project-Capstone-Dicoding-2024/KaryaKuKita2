import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ResumeView from "@/views/ResumeView.vue";
// import ProjectView from "@/views/ProjectView.vue";
// import ContactView from "@/views/ContactView.vue";
import List from "@/views/CariAktivitas.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'lost',
      component: List
    },
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
