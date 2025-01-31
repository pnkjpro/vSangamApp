<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-icon :icon="personOutline" class="login-icon"></ion-icon>
            Login
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-item>
            <ion-icon :icon="mailOutline" slot="start"></ion-icon>
            <ion-input
              type="email"
              placeholder="Email"
              v-model="email"
            ></ion-input>
          </ion-item>

          <ion-item>
            <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
            <ion-input
              type="password"
              placeholder="Password"
              v-model="password"
            ></ion-input>
          </ion-item>

          <div class="ion-margin-top">
            <ion-button expand="block" @click="navigateToHome">
              <ion-icon :icon="logInOutline" slot="start"></ion-icon>
              Login
            </ion-button>
          </div>

          <div class="ion-text-center ion-margin-top">
            <ion-button fill="clear" @click="navigateToRegister">
              Create Account
            </ion-button>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";

import {
  personOutline,
  mailOutline,
  lockClosedOutline,
  logInOutline,
} from "ionicons/icons";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value);
};

const isFormValid = computed(() => {
  return validateEmail() && password.value.length >= 6;
});

const login = async () => {
  if (isFormValid.value) {
    try {
      // Implement actual login logic here
      console.log("Login attempt", { email: email.value });
      // Example: await authService.login(email.value, password.value);
    } catch (error) {
      // Handle login errors
      console.error("Login failed", error);
    }
  }
};

const forgotPassword = () => {
  // Implement forgot password navigation
  console.log("Forgot password clicked");
};

const navigateToRegister = () => {
  router.push("/auth/register");
};

const navigateToHome = () => {
  router.push("/main/home");
}
</script>

<style scoped>
ion-content {
  --background: #f4f5f8;
}

ion-card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
