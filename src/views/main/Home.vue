<template>
  <ion-page>
    <ion-content>
      <swiper
        :modules="modules"
        :autoplay="true"
        :keyboard="true"
        :pagination="true"
        :scrollbar="true"
        :zoom="true"
      >
        <swiper-slide>
          <ion-card>
            <img
              alt="Silhouette of mountains"
              src="../../assets//images/ssc1.jpg"
            />
            <ion-card-header>
              <ion-card-title>SSC Special BATCH 2025</ion-card-title>
              <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card>
            <img
              alt="Silhouette of mountains"
              src="../../assets/images/ssc2.png"
            />
            <ion-card-header>
              <ion-card-title>SSC Booster Batch 2024</ion-card-title>
              <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card>
            <img
              alt="Silhouette of mountains"
              src="../../assets/images/ssc3.jpeg"
            />
            <ion-card-header>
              <ion-card-title>Complete TIER 1 + 2 Syllabus</ion-card-title>
              <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </ion-card-content>
          </ion-card>
        </swiper-slide>
      </swiper>

      <ion-card color="primary">
        <ion-card-header>
          <ion-card-title>CCC Mock Test 1</ion-card-title>
          <ion-card-subtitle>Each Test Contains 20 questions</ion-card-subtitle>
        </ion-card-header>
      </ion-card>

      <ion-grid>
        <ion-row>
          <ion-col
            size="6"
            size-md="4"
            size-lg="3"
            v-for="feature in features"
            :key="feature.title"
          >
            <ion-card @click="navigateTo(feature.link)">
              <ion-card-header>
                <!-- Add Animated Graphic -->
                <lottie-player
                  :src="feature.animation"
                  background="transparent"
                  speed="1"
                  style="width: 100px; height: 100px; margin: auto"
                  loop
                  autoplay
                ></lottie-player>
                <ion-card-subtitle>{{ feature.title }}</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script setup>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonContent
} from "@ionic/vue";
import {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "@ionic/vue/css/ionic-swiper.css";

import { useRouter } from "vue-router";

const modules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom];

const router = useRouter();

const features = [
  {
    title: "Paid Classes",
    icon: "person-outline",
    description: "Access paid courses",
    animation: "https://vsangam.logicera.in/public/assets/lottie/course.json",
    link: "/main/courses",
  },
  {
    title: "Free Courses",
    icon: "school-outline",
    description: "Learn for free",
    animation: "https://vsangam.logicera.in/public/assets/lottie/course.json",
    link: "/main/courses",
  },
  {
    title: "Free Daily CA",
    icon: "globe-outline",
    description: "Stay updated",
    animation: "https://vsangam.logicera.in/public/assets/lottie/globe.json",
    link: "",
  },
  {
    title: "Free Test Series",
    icon: "clipboard-outline",
    description: "Practice with free tests",
    animation: "https://vsangam.logicera.in/public/assets/lottie/student_reading.json",
    link: "",
  },
  {
    title: "Paid Test Series",
    icon: "receipt-outline",
    description: "Take paid practice tests",
    animation: "https://vsangam.logicera.in/public/assets/lottie/prize.json",
    link: "",
  },
  {
    title: "Free PDF Notes",
    icon: "document-outline",
    description: "Access study materials",
    animation: "https://vsangam.logicera.in/public/assets/lottie/penwriting.json",
    link: "",
  },
  {
    title: "Books",
    icon: "book-outline",
    description: "Browse available books",
    animation: "https://vsangam.logicera.in/public/assets/lottie/tick.json",
    link: "",
  },
  {
    title: "E-Books",
    icon: "book-outline",
    description: "Read digital books",
    animation: "https://vsangam.logicera.in/public/assets/lottie/rocket.json",
    link: "",
  },
];

const navigateTo = (link) => {
  router.push(link);
}
</script>
