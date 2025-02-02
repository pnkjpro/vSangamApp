<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Course Lessons</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-list>
          <ion-item v-for="lesson in lessons" :key="lesson.id" button detail>
            <ion-thumbnail slot="start">
              <img :src="lesson.thumbnail" :alt="lesson.title"/>
            </ion-thumbnail>
            
            <ion-label>
              <h2>{{ lesson.title }}</h2>
              <p>{{ lesson.description }}</p>
              <ion-note>Duration: {{ lesson.duration }}</ion-note>
            </ion-label>
          </ion-item>
        </ion-list>
  
        <!-- Empty state -->
        <div v-if="lessons.length === 0" class="ion-text-center ion-padding">
          <ion-icon :icon="bookOutline" size="large" color="medium"></ion-icon>
          <p>No lessons available</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
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
    IonBadge,
    IonIcon
  } from '@ionic/vue'
  import { bookOutline } from 'ionicons/icons'
  
  // Sample data - replace with actual data source
  const lessons = ref([
    {
      id: 1,
      title: 'Introduction to Ionic Vue',
      description: 'Learn the basics of building apps with Ionic Vue',
      duration: '30 mins',
      thumbnail: '/api/placeholder/80/80',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Components and Navigation',
      description: 'Working with Ionic components and navigation',
      duration: '45 mins',
      thumbnail: '/api/placeholder/80/80',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'State Management',
      description: 'Managing application state in Ionic Vue',
      duration: '60 mins',
      thumbnail: '/api/placeholder/80/80',
      status: 'not-started'
    }
  ])
  
  const getLessonStatusColor = (status) => {
    const colors = {
      'completed': 'success',
      'in-progress': 'warning',
      'not-started': 'medium'
    }
    return colors[status]
  }
  </script>