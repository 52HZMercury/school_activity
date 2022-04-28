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
import MyIssue from '@/views/MyIssue.vue'

import AllMain from '../views/AllMain'
import HomeCardMain from '../components/AllMain/HomeCardMain'

import secondHand from '../views/secondHand'
import secondHandChoice from '../components/secondHand/secondHandChoice'
import secondHandDetail from '../components/secondHand/secondHandDetail'
import secondHandMain from '../components/secondHand/secondHandMain'

import Message from '../views/Message'
import PersonalDetail from '../components/Message/PersonalDetail'

import MyGoods from '../views/MyGoods'

import LoseThings from '@/views/LoseThings'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'login'
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
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
  {
    path: '/AllMain',
    name: 'AllMain',
    component: AllMain,
    children:[
      {
        path:'secondHandMain',
        name:'secondHandMain',
        component:secondHandMain,
      },
      {
        path: 'HomeCardMain',
        name: 'HomeCardMain',
        component: HomeCardMain,
      },
      {
        path: 'Publish',
        name: 'Publish',
        component: Publish
      },
      {
        path: '/Home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/Message',
        name: 'Message',
        component: Message,
        children:[
          {
            path:'PersonalDetail',
            name:'PersonalDetail',
            component:PersonalDetail,
          },
          {
            path:'MyGoods',
            name:'MyGoods',
            component:MyGoods,   
          },
          {
            path:'MyIssue',
            name:'MyIssue',
            component:MyIssue
          },
          {
            path: 'Revamp',
            name: 'Revamp',
            component: Revamp
          },
        ]
      },
      {
        path: '/LoseThings',
        name: 'LoseThings',
        component: LoseThings
      }
    ]
  },
  {
    path: '/secondHand',
    name: 'secondHand',
    component: secondHand,
    children:[
      {
        path:'secondHandChoice',
        name:'secondHandChoice',
        component:secondHandChoice,
      },
      {
        path:'secondHandDetail',
        name:'secondHandDetail',
        component:secondHandDetail,
      }
    ]
  },
  

]

const router = new VueRouter({
  routes
})

export default router
