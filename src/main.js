import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import Router from 'vue-router'
import routes from './routes'
// import Framework7 from 'framework7';
// import Framework7Vue from 'framework7-vue';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import "framework7-icons";

import 'lib-flexible/flexible';

import '../public/framework7css/framework7.bundle.css'

Vue.use(Router)

Vue.config.productionTip = false

Framework7.use(Framework7Vue)

new Vue({
  // router,
  routes,
  store,
  render: h => h(App)
}).$mount('#app')
