import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import router from './router'

Vue.config.productionTip = false
new Vue({
  router,
  el: "#app",
  components: { App },
  template: '<App/>'
})
