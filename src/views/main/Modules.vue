<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/main/lessons"></ion-back-button>
          </ion-buttons>
          <ion-title>Lesson Modules</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-list>
          <ion-item v-for="module in modules" :key="module.id" button detail>
            <ion-thumbnail slot="start">
              <img :src="module.thumbnail || fallbackCourseImage" :alt="module.title"/>
            </ion-thumbnail>
            
            <ion-label @click="provideToPlayer(module)">
              <h2>{{ module.title }}</h2>
              <p>{{ module.description }}</p>
              <ion-note color="primary">Duration: {{ module.duration }}</ion-note>
            </ion-label>
          </ion-item>
        </ion-list>
  
        <!-- Empty state -->
        <div v-if="modules.length === 0" class="ion-text-center ion-padding">
          <ion-icon :icon="bookOutline" size="large" color="medium"></ion-icon>
          <p>No module available</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, inject, onMounted, watch, provide } from 'vue'
  import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonButtons,
    IonBackButton,
    IonLabel,
    IonSpinner,
    IonNote,
    IonBadge,
    IonIcon
  } from '@ionic/vue'
  import { bookOutline } from 'ionicons/icons'
  import { useRoute, useRouter } from 'vue-router'
  import { useCourseStore } from '@/stores/courseStore';
  import { storeToRefs } from 'pinia';
  import axios from 'axios'

  const router = useRouter();
  const config = inject('config');
  const fallbackCourseImage = config.FALLBACK_COURSE_IMAGE;
  
  const courseStore = useCourseStore();
  const { modules, currentModule } = storeToRefs(courseStore);

  const provideToPlayer = (module) => {
    currentModule.value = module;
    router.push(`/main/module/play`);
  }

  const getLessonStatusColor = (status) => {
    const colors = {
      'completed': 'success',
      'in-progress': 'warning',
      'not-started': 'medium'
    }
    return colors[status]
  }
  </script>