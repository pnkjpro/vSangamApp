<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/main/home"></ion-back-button>
          </ion-buttons>
          <ion-title>{{ currentCourse.title }}</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <!-- Video Player Section -->
        <div class="video-container">
          <iframe
            :src="'https://www.youtube.com/embed/' + currentModule.bucket_link + '?rel=0'"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
  
        <!-- Video Info -->
        <div class="ion-padding">
          <h1>{{ currentModule.title }}</h1>
          <p>{{ currentModule.description }}</p>
        </div>
  
        <!-- Course Content -->
        <ion-list>
          <ion-list-header>
            <ion-label>Course Videos</ion-label>
          </ion-list-header>
  
          <ion-item v-if="prevModule"
            @click="playModule(prevModule)"
          >
          <ion-thumbnail slot="start">
              <img :src="'https://img.youtube.com/vi/' + prevModule.bucket_link + '/mqdefault.jpg'" :alt="prevModule.title"/>
            </ion-thumbnail>
            
            <ion-label>
              <h2>{{ prevModule.title }}</h2>
              <p>{{ prevModule.duration }}</p>
            </ion-label>
  
            <ion-icon 
              :icon="chevronForward"
              slot="end"
              :color="'medium'"
            ></ion-icon>
          </ion-item>
          <ion-item>
          <ion-thumbnail slot="start">
              <img :src="'https://img.youtube.com/vi/' + currentModule.bucket_link + '/mqdefault.jpg'" :alt="currentModule.title"/>
            </ion-thumbnail>
            
            <ion-label>
              <h2>{{ currentModule.title }}</h2>
              <p>{{ currentModule.duration }}</p>
            </ion-label>
  
            <ion-icon 
              :icon="playCircle"
              slot="end"
              :color="'primary'"
            ></ion-icon>
          </ion-item>

          <ion-item v-if="nextModule"
            @click="playModule(nextModule)"
          >
          <ion-thumbnail slot="start">
              <img :src="'https://img.youtube.com/vi/' + nextModule.bucket_link + '/mqdefault.jpg'" :alt="nextModule.title"/>
            </ion-thumbnail>
            
            <ion-label>
              <h2>{{ nextModule.title }}</h2>
              <p>{{ nextModule.duration }}</p>
            </ion-label>
  
            <ion-icon 
              :icon="chevronForward"
              slot="end"
              :color="'medium'"
            ></ion-icon>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, onMounted, inject, provide, watch } from 'vue'
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonListHeader,
    IonThumbnail,
  } from '@ionic/vue'
  import {
    playCircle,
    chevronForward
  } from 'ionicons/icons'
  import { useCourseStore } from '@/stores/courseStore'
  import { storeToRefs } from 'pinia'

  const prevModule = ref(null);
  const nextModule = ref(null);
  const courseStore = useCourseStore();
  const { currentCourse, currentModule } = storeToRefs(courseStore)
  
  const playModule = (module) => {
    currentModule.value = module;
  }

  watch(()=>currentModule.value, (newModule)=>{
    nextModule.value = null;
    prevModule.value = null;
    nextModule.value = courseStore.getModule(currentModule.value.id+1);
    prevModule.value = courseStore.getModule(currentModule.value.id-1);
  }, {immediate: true});

  
  </script>
  
  <style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  ion-thumbnail {
    --size: 120px;
    margin: 10px;
  }
  
  ion-thumbnail img {
    border-radius: 4px;
  }
  </style>