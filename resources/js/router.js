import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './components/Homepage.vue'; // C'est correct
import Dashboard from './components/DashboardPage.vue'; // Correction ici

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homepage,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



