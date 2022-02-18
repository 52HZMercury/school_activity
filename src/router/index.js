import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Publish from '@/views/Publish'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish
  }
]

const router = new VueRouter({
  routes
})

export default router
