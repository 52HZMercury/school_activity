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

import Message from '../views/message'
import PersonalDetail from '../components/Message/PersonalDetail'
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
  {
    path: '/AllMain',
    name: 'AllMain',
    component: AllMain,
    children:[
      {
        path: '/HomeCardMain',
        name: 'HomeCardMain',
        component: HomeCardMain,
      },
      {
        path: '/Publish',
        name: 'Publish',
        component: Publish
      },
      {
        path: '/Home',
        name: 'Home',
        component: Home
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
        ]
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
  {
    path:'/myissue',
    name:'MyIssue',
    component:MyIssue
  }
  

]

const router = new VueRouter({
  routes
})

export default router
