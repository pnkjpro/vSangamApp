<template>
  <ion-page>
    <ion-content>
      <ion-card class="cucumbar-water">
        <img src="../../assets/images/images.jpeg" style="width:100%" :alt="course.title" />
        <ion-card-header>
          <ion-card-title class="course-title">{{ course.title }}</ion-card-title>
          <ion-card-subtitle>
            <ion-icon :icon="star" color="warning"></ion-icon>
            <ion-icon :icon="star" color="warning"></ion-icon>
            <ion-icon :icon="star" color="warning"></ion-icon>
            <ion-icon :icon="starHalf" color="warning"></ion-icon>
            <ion-icon :icon="starOutline" color="warning"></ion-icon>
            <span>4.5</span>
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <div>
            <span class="list-price">{{ course.listPrice }}</span>
            <span class="sell-price">{{ course.sellPrice }}</span>
            <span class="discount">{{ course.discount }}% OFF</span>
          </div>
          <div>
            <button class="btn-grad btn-grad-rbt1">View Demo</button>
            <button class="btn-grad btn-grad-rbt2">View Details</button>
            <button class="btn-grad btn-grad-rbt3">Buy Now</button>
            <ion-button fill="clear" size="small">
              <ion-icon :icon="share-social-outline"></ion-icon>
            </ion-button>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonPage,
  IonContent,
} from "@ionic/vue";

import { star, starHalf } from "ionicons/icons";

const course = {
  title: "SSC Booster Batch 2024",
  image:
    "https://loremflickr.com/cache/resized/defaultImage.small_320_240_nofilter.jpg",
  listPrice: "Rs 99.99",
  sellPrice: "Rs 49.99",
  discount: 50,
};
</script>

<style scoped>
.course-title {
  font-size: 22px;
}
.list-price {
  text-decoration: line-through;
  color: #aaa;
  margin-right: 1rem;
  font-size: x-large;
}
.sell-price {
  color: #333;
  font-weight: bold;
  margin-right: 1rem;
  font-size: x-large;
}
.discount {
  color: #4caf50;
  font-weight: bold;
  font-size: large;
}

.cucumbar-water {
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
}

.btn-grad-rbt1 {background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%)}
.btn-grad-rbt2 {background-image: linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)}
.btn-grad-rbt3 {background-image: linear-gradient(to right, #DCE35B 0%, #45B649  51%, #DCE35B  100%)}
.btn-grad {
  margin: 10px 0px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  width: 100%;
  font-weight: bold;
  font-size: medium;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
         
         
</style>
