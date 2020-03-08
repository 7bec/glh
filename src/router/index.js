import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import PrimeiroAcesso from '../views/PrimeiroAcesso.vue'
import listHome from '../views/listHome.vue'
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
  }
]

const router = new VueRouter({
  routes
})

export default router
