<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/main/home"></ion-back-button>
          </ion-buttons>
          <ion-title>{{ course.title }}</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <!-- Video Player Section -->
        <div class="video-container">
          <iframe
            :src="'https://www.youtube.com/embed/' + currentVideoId + '?rel=0'"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
  
        <!-- Video Info -->
        <div class="ion-padding">
          <h1>{{ currentVideo.title }}</h1>
          <p>{{ currentVideo.description }}</p>
        </div>
  
        <!-- Course Content -->
        <ion-list>
          <ion-list-header>
            <ion-label>Course Videos</ion-label>
          </ion-list-header>
  
          <ion-item 
            v-for="video in course.videos" 
            :key="video.id"
            button
            :color="currentVideoId === video.youtubeId ? 'light' : ''"
            @click="playVideo(video.youtubeId)"
          >
            <ion-thumbnail slot="start">
              <img :src="'https://img.youtube.com/vi/' + video.youtubeId + '/mqdefault.jpg'" :alt="video.title"/>
            </ion-thumbnail>
            
            <ion-label>
              <h2>{{ video.title }}</h2>
              <p>{{ video.duration }}</p>
            </ion-label>
  
            <ion-icon 
              :icon="currentVideoId === video.youtubeId ? playCircle : chevronForward"
              slot="end"
              :color="currentVideoId === video.youtubeId ? 'primary' : 'medium'"
            ></ion-icon>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
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
  
  // Sample course data - replace with your YouTube playlist data
  const course = ref({
    id: 1,
    title: 'Excel Full Course',
    videos: [
      {
        id: 1,
        youtubeId: 'paWue7NfkyY',  // Replace with your video IDs
        title: 'Formatting Cells Like a Pro',
        description: 'Learn the basics of Formatting Cells like a pro',
        duration: '15:30'
      },
      {
        id: 2,
        youtubeId: 'QdSoeLt_MXg',  // Replace with your video IDs
        title: 'Mastering Data Validation in Excel',
        description: 'Learn the basics of data validation',
        duration: '20:45'
      }
    ]
  })
  
  
  const currentVideoId = ref(course.value.videos[0].youtubeId)
  const currentVideo = ref(course.value.videos[0])
  
  const playVideo = (videoId) => {
    currentVideoId.value = videoId
    currentVideo.value = course.value.videos.find(v => v.youtubeId === videoId)
  }
  
  // If you want to fetch videos from YouTube API
  const fetchYoutubePlaylist = async (playlistId) => {
    try {
      // You'll need to implement this function using YouTube Data API
      // Example endpoint: https://www.googleapis.com/youtube/v3/playlistItems
      // Don't forget to handle API key securely on your backend
      const response = await fetch(`YOUR_API_ENDPOINT/playlist/${playlistId}`)
      const data = await response.json()
      
      // Transform YouTube API response to match your data structure
      course.value.videos = data.items.map(item => ({
        id: item.id,
        youtubeId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        duration: '00:00' // You'll need another API call to get duration
      }))
    } catch (error) {
      console.error('Error fetching playlist:', error)
    }
  }
  
  // Uncomment and modify if using YouTube API
  // onMounted(() => {
  //   fetchYoutubePlaylist('YOUR_PLAYLIST_ID')
  // })
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