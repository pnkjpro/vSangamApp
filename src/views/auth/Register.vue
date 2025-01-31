<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-icon :icon="personAddOutline"></ion-icon>
            Create Account
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-item>
            <ion-icon :icon="personOutline" slot="start"></ion-icon>
            <ion-input placeholder="Full Name" v-model="fullName"></ion-input>
          </ion-item>

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

          <ion-item>
            <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
            <ion-input
              type="password"
              placeholder="Confirm Password"
              v-model="confirmPassword"
            ></ion-input>
          </ion-item>

          <div class="ion-margin-top">
            <ion-button expand="block" @click="register">
              <ion-icon :icon="createOutline" slot="start"></ion-icon>
              Register
            </ion-button>
          </div>

          <div class="ion-text-center ion-margin-top">
            <ion-button fill="clear" @click="navigateToLogin">
              Already have an account?
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
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import {
  personAddOutline,
  personOutline,
  mailOutline,
  lockClosedOutline,
  createOutline,
} from "ionicons/icons";
import { ref } from "vue";
import { useRouter } from "vue-router";

const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

const register = () => {
  // Implement registration logic
  console.log("Register", email.value);
};

const navigateToLogin = () => {
  router.push("/auth/login");
};
</script>

<style scoped>
.register-icon {
  font-size: 48px;
  margin-bottom: 10px;
}
</style>
