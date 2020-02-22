import Vue from 'vue'
import 'lib-flexible'

import App from './App.vue'
import router from './router'
import store from './store';
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router,
  store
}).$mount('#app')
