import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import SobreMimView from '../views/SobreMimView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: ProjetosView,
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: SobreMimView,
  },
  // Você pode adicionar mais rotas aqui, como /contato
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
