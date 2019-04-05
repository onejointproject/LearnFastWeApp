// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/lib/style/reset.css'
import '@/lib/iconfont/iconfont.css'
import store from './store'
import Axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
import LazyLoad from 'vue-lazyload'

Vue.use(LazyLoad, {
  error: require('@/assets/logo.png'), 
  loading: require('@/assets/logo.png'),
  attempt: 1 ,
})


Vue.config.productionTip = false
Vue.prototype.$axios = Axios 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
