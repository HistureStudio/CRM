import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/views/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout, // This uses your new layout
  },
  {
    path: '/about',
    component: () => import('@/views/AboutView.vue'), // Your About page
  },
  // other routes
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
