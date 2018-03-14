import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Cust from '@/components/Cust'
import About from '@/components/About'
import Add from '@/components/Add'
import CustDetails from '@/components/CustDetails'
import Edit from '@/components/Edit'

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: Cust },
		{ path: '/about', name: "about", component: About },
		{ path: '/add', component: Add },
		{ path: "/cust/:id", name: "CustDetails", component: CustDetails },
		{ path: "/edit/:id", name: "Edit",
 component: Edit }
	]
})
