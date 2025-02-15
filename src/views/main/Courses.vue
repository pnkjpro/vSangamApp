<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/main/lessons"></ion-back-button>
          </ion-buttons>
          <ion-title>Courses</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="toggleView">
              <ion-icon :icon="viewMode === 'card' ? list : grid" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :class="{ 'ion-padding': viewMode === 'card' }">
        <!-- Search bar -->
        <ion-searchbar
          v-model="searchQuery"
          placeholder="Search courses"
          @ionInput="handleSearch"
        />
  
        <!-- Grid view -->
        <ion-grid v-if="viewMode === 'card'">
          <ion-row>
            <ion-col
              size="12"
              size-sm="6"
              size-md="4"
              size-lg="3"
              v-for="course in filteredCourses"
              :key="course.id"
            >
              <ion-card>
                <img :src="course.imageUrl || fallbackCourseImage" :alt="course.title" />
                <ion-card-header>
                  <ion-card-subtitle>{{ course.category }}</ion-card-subtitle>
                  <ion-card-title>{{ course.title }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <p>{{ course.description }}</p>
                  <ion-text color="medium">
                    <p class="time-container">
                      <ion-icon :icon="time" />
                      {{ course.duration }}
                    </p>
                  </ion-text>
                  <ion-button expand="block" @click="enrollCourse(course.id)">
                    Enroll Now
                  </ion-button>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
  
        <!-- List view -->
        <ion-list v-else>
          <ion-item v-for="course in filteredCourses" :key="course.id">
            <ion-thumbnail slot="start">
              <img :src="course.imageUrl || fallbackCourseImage" :alt="course.title" />
            </ion-thumbnail>
            <ion-label>
              <h2>{{ course.title }}</h2>
              <p>{{ course.description }}</p>
              <ion-text color="medium">
                <p class="time-container">
                  <ion-icon :icon="time" />
                  {{ course.duration }}
                </p>
              </ion-text>
            </ion-label>
            <ion-button slot="end" @click="enrollCourse(course.id)">
              Enroll
            </ion-button>
          </ion-item>
        </ion-list>
  
        <!-- Loading state -->
        <div v-if="loading" class="ion-text-center">
          <ion-spinner />
        </div>
  
        <!-- Empty state -->
        <div v-if="!loading && courses.length === 0" class="ion-text-center ion-padding">
          <ion-text color="medium">
            <h4>No courses found</h4>
          </ion-text>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, inject, watch } from 'vue'
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
    IonSearchbar,
    IonSpinner,
    IonText,
    IonButtons,
    IonIcon,
    toastController
  } from '@ionic/vue'
  import { grid, list, time } from 'ionicons/icons'
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { useCourseStore } from '@/stores/courseStore';
import { storeToRefs } from 'pinia';
  
  const viewMode = ref('card')
  const searchQuery = ref('')
  const router = useRouter();
  const config = inject('config');
  const fallbackCourseImage = config.FALLBACK_COURSE_IMAGE;
  const courseStore = useCourseStore();
  const { courses, lessons, loading } = storeToRefs(courseStore); //this works for only reactive state
  
  const filteredCourses = computed(() => {
    return courses.value.filter(course =>
      course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
  console.log(filteredCourses.value);
  const toggleView = () => {
    viewMode.value = viewMode.value === 'card' ? 'list' : 'card'
  }
  
  const handleSearch = (event) => {
    searchQuery.value = event.detail.value || ''
  }
  
  // const enrollCourse = async (courseId) => {
  //   const toast = await toastController.create({
  //     message: `Enrolled in course ${courseId}`,
  //     duration: 2000,
  //     position: 'bottom'
  //   })
  //   await toast.present()
  // }

  const enrollCourse = (courseId) => {
    courseStore.fetchCourse(courseId);
    router.push(`/main/lessons/`);
  }

  onMounted(()=>{
    courseStore.listCourses();
  })
</script>
  
  <style scoped>
  ion-thumbnail {
    width: 100px;
    height: 100px;
  }
  
  ion-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .time-container {
  display: flex;
  align-items: center; /* Align icon and text vertically */
  gap: 5px; /* Add spacing between icon and text */
}

.time-icon {
  font-size: 1.2em; /* Adjust size if needed */
}
  </style>