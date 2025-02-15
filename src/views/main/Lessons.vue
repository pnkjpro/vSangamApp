<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/main/courses"></ion-back-button>
          </ion-buttons>
          <ion-title>Course Lessons</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-list>
          <ion-item v-for="lesson in lessons" :key="lesson.id" button detail>
            <ion-thumbnail slot="start">
              <img :src="lesson.thumbnail || fallbackCourseImage" :alt="lesson.title"/>
            </ion-thumbnail>
            
            <ion-label @click="visitModule(lesson.id)">
              <h2>{{ lesson.title }}</h2>
              <p>{{ lesson.description }}</p>
              <ion-note color="primary">Duration: {{ lesson.duration }}</ion-note>
            </ion-label>
          </ion-item>
        </ion-list>
  
        <!-- Empty state -->
        <div v-if="lessons.length === 0" class="ion-text-center ion-padding">
          <ion-icon :icon="bookOutline" size="large" color="medium"></ion-icon>
          <p>No lessons available</p>
        </div>
        <!-- Loading state -->
        <div v-if="loading" class="ion-text-center">
          <ion-spinner />
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, inject, onMounted, watch, watchEffect } from 'vue'
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
    IonNote,
    IonSpinner,
    IonButtons,
    IonBackButton,
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
  const { lessons, loading, currentCourse } = storeToRefs(courseStore);
  
  const pullToRefresh = () => {
    courseStore.fetchCourse(currentCourse.value.id);
  }
 
  const visitModule = (lessonId) => {
    courseStore.getModules(lessonId);
    router.push(`/main/modules/`);
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