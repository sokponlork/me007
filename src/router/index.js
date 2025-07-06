import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // Import the Home view component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView // Your Home section will be the default route
    },
    {
      path: '/about',
      name: 'about',
      // Lazy-load the AboutView component for better performance
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
