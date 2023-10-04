import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

import AuthPage from '../views/AuthPage.vue';
import TaskPage from "@/views/TaskPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage,
    },
    {
      path: '/task',
      name: 'task',
      component: TaskPage
    }
  ],
});

export default router;
