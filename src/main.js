import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from "firebase/app";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAmuqsbgQS1_D1SbHEB8j5YoCLT39sqb88",
    authDomain: "karyakukita.firebaseapp.com",
    projectId: "karyakukita",
    storageBucket: "karyakukita.appspot.com",
    messagingSenderId: "161171806412",
    appId: "1:161171806412:web:08019994a9667594028a69",
    measurementId: "G-ERE34QMJ6Y",
};

// Inisialisasi Firebase
initializeApp(firebaseConfig);

// Buat dan pasang aplikasi Vue
createApp(App).use(router).mount("#app");
