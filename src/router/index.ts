import HomeVue from '@/views/Home.vue'
import NotFoundVue from '@/views/NotFound.vue'
import { createRouter, createWebHistory} from 'vue-router'
import basicRoutes from './basicRoutes'
import practicalRoutes from './practicalRoutes'
import guisRoutes from './guisRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeVue
    },

    ...basicRoutes,
    ...practicalRoutes,
    ...guisRoutes,

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundVue },
  ]
})

export default router
