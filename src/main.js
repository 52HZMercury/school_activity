import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = ''
Vue.use(ElementUI)
Vue.use(Vant)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
