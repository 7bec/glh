import Vue from 'vue'
import VueRouter from 'vue-router'
import PrimeiroAcesso from '../views/PrimeiroAcesso.vue'
import listHome from '../views/listHome.vue'
import Cadastro from '../views/Cadastro'
import Demo from '../views/Demo'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/primeiroacesso',
    name: 'Primeiro Acesso',
    component: PrimeiroAcesso,
  },
  {
    path: '/listHome',
    name: 'Lista',
    component: listHome
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
]

const router = new VueRouter({
  routes
})

export default router
