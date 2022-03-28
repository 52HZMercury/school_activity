import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Publish from '@/views/Publish'
import Revamp from '@/views/Revamp.vue'
import Login from '@/views/Login.vue'
import Log from '@/components/Login/Log.vue'
import Register from '@/components/Login/Register.vue'
import ResetPsw from '@/views/Resetpsw.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'login'
  },
  {
    path: '/home',
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
  },
  {
    path: '/revamp',
    name: 'Revamp',
    component: Revamp
  },
  {
    path:'/resetpsw',
    name:'ResetPsw',
    component: ResetPsw
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    redirect: '/login/log',
    children:[
      {
        path: '/login/log',
        name: 'Log',
        component: Log
      },
      {
        path: '/login/register',
        name: 'Register',
        component: Register
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
