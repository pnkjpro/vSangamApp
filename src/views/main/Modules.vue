<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Lesson Modules</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-list>
          <ion-item v-for="module in modules" :key="module.id" button detail>
            <ion-thumbnail slot="start">
              <img :src="module.thumbnail" :alt="module.title"/>
            </ion-thumbnail>
            
            <ion-label>
              <h2>{{ module.title }}</h2>
              <p>{{ module.description }}</p>
              <ion-note>Duration: {{ module.duration }}</ion-note>
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
  import { ref, inject, onMounted, watch } from 'vue'
  import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonSpinner,
    IonNote,
    IonBadge,
    IonIcon
  } from '@ionic/vue'
  import { bookOutline } from 'ionicons/icons'
  import { useRoute } from 'vue-router'
  import { useCourseStore } from '@/stores/courseStore';
  import { storeToRefs } from 'pinia';
  import axios from 'axios'

  const route = useRoute();
  const config = inject('config');

  const lessonId = route.params.lessonId;
  console.log(lessonId);
  const courseStore = useCourseStore();
  const { modules } = storeToRefs(courseStore);

  onMounted(() => {
    courseStore.getModules(lessonId);
  });

  const getLessonStatusColor = (status) => {
    const colors = {
      'completed': 'success',
      'in-progress': 'warning',
      'not-started': 'medium'
    }
    return colors[status]
  }
  </script>