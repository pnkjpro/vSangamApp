<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-back-button default-href="/main/home" text="Back" slot="start"></ion-back-button>
          <ion-title>Settings</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-segment v-model="selectedSection" class="ion-padding">
          <ion-segment-button value="profile">
            <ion-label>Profile</ion-label>
          </ion-segment-button>
          <ion-segment-button value="password">
            <ion-label>Password</ion-label>
          </ion-segment-button>
        </ion-segment>
  
        <!-- Profile Update Section -->
        <div v-if="selectedSection === 'profile'" class="ion-padding">
          <ion-list>
            <ion-item>
              <ion-label position="floating">Full Name</ion-label>
              <ion-input v-model="profile.fullName" type="text"></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input v-model="profile.email" type="email"></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-label position="floating">Phone</ion-label>
              <ion-input v-model="profile.phone" type="tel"></ion-input>
            </ion-item>
          </ion-list>
  
          <ion-button expand="block" class="ion-margin-top" @click="updateProfile">
            Update Profile
          </ion-button>
        </div>
  
        <!-- Password Update Section -->
        <div v-if="selectedSection === 'password'" class="ion-padding">
          <ion-list>
            <ion-item>
              <ion-label position="floating">Current Password</ion-label>
              <ion-input v-model="passwordForm.currentPassword" type="password"></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-label position="floating">New Password</ion-label>
              <ion-input v-model="passwordForm.newPassword" type="password"></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-label position="floating">Confirm New Password</ion-label>
              <ion-input v-model="passwordForm.confirmPassword" type="password"></ion-input>
            </ion-item>
          </ion-list>
  
          <ion-button expand="block" class="ion-margin-top" @click="updatePassword">
            Update Password
          </ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    toastController,
    IonBackButton
  } from '@ionic/vue';
  
  // State management
  const selectedSection = ref('profile');
  
  const profile = reactive({
    fullName: '',
    email: '',
    phone: ''
  });
  
  const passwordForm = reactive({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  // Methods
  const showToast = async (message) => {
    const toast = await toastController.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  };
  
  const updateProfile = async () => {
    try {
      // Add your API call here to update profile
      // Example: await api.updateProfile(profile);
      await showToast('Profile updated successfully');
    } catch (error) {
      await showToast('Failed to update profile');
      console.error('Update profile error:', error);
    }
  };
  
  const updatePassword = async () => {
    try {
      if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        await showToast('New passwords do not match');
        return;
      }
  
      // Add your API call here to update password
      // Example: await api.updatePassword(passwordForm);
      await showToast('Password updated successfully');
      
      // Clear password fields
      passwordForm.currentPassword = '';
      passwordForm.newPassword = '';
      passwordForm.confirmPassword = '';
    } catch (error) {
      await showToast('Failed to update password');
      console.error('Update password error:', error);
    }
  };
  </script>