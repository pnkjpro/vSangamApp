import { createRouter, createWebHistory } from '@ionic/vue-router';
import Index from '../views/Index.vue';
const routes = [
  {
    path: '/main/',
    component: Index,
    children: [
      {
        path: '',
        redirect: '/main/home'
      },
      {
        path: 'home',
        component: () => import('../views/main/Home.vue')
      },
      {
        path: 'mycourses',
        component: () => import('../views/main/MyCourses.vue')
      },
      {
        path: 'live',
        component: () => import('../views/main/LiveCourse.vue')
      }
    ]
  },
  {
    path: '/settings',
    component: () => import('../views/Settings.vue'),
  },
  {
    path: '/auth/',
    component: () => import('../views/Auth.vue'),
    children: [
      {
        path: '',
        redirect: '/auth/login'
      },
      {
        path: 'login',
        component: () => import('../views/auth/Login.vue'),
      },
      {
        path: 'register',
        component: () => import('../views/auth/Register.vue'),
      }
    ]
  },
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
