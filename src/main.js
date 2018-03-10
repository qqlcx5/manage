import Vue from 'vue'
import App from './App'
import Cust from './components/Cust'
import About from './components/About'
import Add from './components/Add'
import CustDetails from './components/CustDetails'
import Edit from './components/Edit'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false

const router =new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
    {path:'/',component:Cust},
    {path:'/about',component:About},
    {path:'/add',component:Add},
    {path:"/cust/:id",component:CustDetails},
    {path:"/edit/:id",component:Edit}
    ]
})
new Vue({
  router,
  template:`
    <div id="app">
        <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to='/' class="navbar-brand">用户管理系统</router-link></li>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to='/'>主页</router-link></li>
            <li><router-link to='/about'>关于我们</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to='/add'>添加用户</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <router-view></router-view>
    </div>
  `
}).$mount("#app")
