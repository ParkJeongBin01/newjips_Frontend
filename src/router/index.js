import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import authRotes from './auth';
import boardRotes from './board';
import travelRoutes from './travel';
import galleryRoutes from './gallery';
import mapRoutes from './map';
import chatRoutes from './chat';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    ...authRotes,
    ...boardRotes,
    ...travelRoutes,
    ...galleryRoutes,
    ...mapRoutes,
    ...chatRoutes
  ],
});

export default router;
