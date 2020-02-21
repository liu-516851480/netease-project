import Vue from 'vue'
import 'lib-flexible'

import App from './App.vue'
import router from './router'
import store from './store';
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false
Vue.use(infiniteScroll)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
