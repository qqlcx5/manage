import Vue from 'vue'
import App from './App'

import router from './router'

import Axios from 'axios'
Vue.prototype.$axios = Axios


Vue.config.productionTip = false
new Vue({
	router,
	el: "#app",
	components: { App },
	template: '<App/>'
})
