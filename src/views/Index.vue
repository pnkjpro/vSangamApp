<template>
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>vSangam</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-app>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
              <ion-tab-button tab="home" href="/main/home">
                <ion-icon aria-hidden="true" :icon="home" />
                <ion-label>Home</ion-label>
              </ion-tab-button>
  
              <ion-tab-button tab="mycourses" href="/main/mycourses">
                <ion-icon aria-hidden="true" :icon="book" />
                <ion-label>My Courses</ion-label>
              </ion-tab-button>
  
              <ion-tab-button tab="live" href="/main/live">
                <ion-icon aria-hidden="true" :icon="videocam" />
                <ion-label>Live</ion-label>
              </ion-tab-button>
            </ion-tab-bar>
          </ion-tabs>
        </ion-app>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonApp,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonPage,
    IonItem,
    IonRouterOutlet,
  } from "@ionic/vue";
  import { home, book, videocam, cart, settings, cash, call, help, share, logOut } from "ionicons/icons";

  </script>