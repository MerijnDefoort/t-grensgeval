import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import GastenboekView from '../views/GastenboekView.vue'
import IndelingView from '../views/IndelingView.vue'
import TarievenView from '../views/TarievenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'font-bold',

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/Gastenboek',
      name: 'gastenboek',
      component: GastenboekView
    },
    {
      path: '/Indeling',
      name: 'indeling',
      component: IndelingView
    },
    {
      path: '/Tarieven',
      name: 'tarieven',
      component: TarievenView
    }
  ]
})

export default router
