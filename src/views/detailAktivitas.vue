<script setup>
import Navbar from "@/components/Navbar.vue";

const detail = {
    eventName: 'Seminar Nasional',
    eventDeskripsi: 'Bergabunglah dengan kami dalam Tim Seminar Nasional 2024 dan dapatkan pengalaman berharga, jaringan profesional, serta pengembangan diri yang tak ternilai! Kami mencari individu yang berdedikasi, komunikatif, mampu bekerja dalam tim, kreatif, dan bersemangat belajar. Tersedia berbagai posisi seperti Koordinator Acara, Tim Humas dan Media, Tim Logistik, Sponsorship, Kreatif dan Desain, serta Registrasi dan Tiketing.',
    organsasiName: "Pandora ID",
    organisasiLokasi: "Jakarta",
    eventStart: "19 Juli 2024",
    evenPicture:"/images/semnas.jpeg"
};
</script>

<template>
    <Navbar/>
    <img class="event-detail-poster" :src="detail.evenPicture">
    <div class="event-detail-content">
        <h2 class="event-detail-title">{{ detail.eventName }}</h2>

        <table class="event-detail-table">
            <tbody>
                <tr>
                    <th>
                        <i class="far fa-building"></i>
                        <span>Organization : </span>
                    </th>
                    <td>{{ detail.organsasiName }}</td>
                </tr>

                <tr>
                    <th>
                        <i class="fa fa-map-marker"></i>
                        <span>Location : </span>
                    </th>
                    <td>{{ detail.organisasiLokasi }}</td>
                </tr>

                <tr>
                    <th>
                        <i class="far fa-calendar-check"></i>
                        <span>Event Start : </span>
                    </th>
                    <td>{{ detail.eventStart }}</td>
                </tr>
            </tbody>
        </table>
        <div class="event-detail-description">
            <h3>Description</h3>
            <p>{{ detail.eventDeskripsi }}</p>
        </div>
    </div>
    <!-- <div class="container mt-5 mb-5">
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-8">
                    <div class="card-body">
                        <hi class="card-title text-center mt5">{{ detail.eventName }}</hi>
                        <p class="card-text text-center">{{ detail.eventDeskripsi }}</p>
                        <div class="card-category text-center mt-3">
                            <span class="badge">{{ detail.organisasiName }}</span>
                            <span class="badge">{{ detail.organisasiLokasi }}</span>
                            <span class="badge">{{ detail.eventStart }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="/images/semnas.jpeg" class="card-img" alt="Gambar Placeholder">
                </div>
            </div>
        </div>
    </div> -->
</template>

<style scoped>
.content-detail {
    background-color: white;
    padding: 32px;
}

.event-detail{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    padding: 1.5rem 0;
}

.event-detail-content {
    padding: 0 16px;
}

.event-detail-poster {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 10px;
    margin: 0 auto;
    max-width: 360px;
}

.event-detail .event-detail-title {
    color: blanchedalmond;
    margin-top: -10px;
    font-size: 360px;
    font-weight: 600;
}

.event-detail .event-detail-table {
    width: 100%;
    border-collapse: collapse;
}

.event-detail-table tr {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    margin-top: 0.75rem;
}

.event-detail-table tr th,
.event-detail-table tr td {
    color: black;
    text-align: start;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
}

.event-detail-table tr th {
    font-size: 14px;
    min-width: 120px;
    white-space: nowrap;
}

.event-detail-table tr th>svg{
    width: 1rem;
    overflow: hidden;
}

.event-detail-table tr td {
    font-size: 0.875rem;
}

.event-detail-description {
    margin-top: 24px;
    font-size: 14px;
    text-align: justify;
}
</style>