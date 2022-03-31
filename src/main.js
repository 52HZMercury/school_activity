import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import store from '../src/store/store'
import router from '../src/router/index'
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import dayjs from 'dayjs';
//main.js中全局引入
import clipboard from 'clipboard';


Vue.prototype.clipboard = clipboard
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = ''
Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(dayjs)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
