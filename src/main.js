import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './utils/rem.js'

import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
