// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import { AjaxPlugin } from 'vux'

//添加mockjs拦截请求，模拟返回服务器数据
import mock from './api/mock'

// import Home from './components/HelloFromVux'
import Index from './page/Index'
import Register from './page/Register'

Vue.use(AjaxPlugin)
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Index
},
{
  path: '/register',
  component: Register
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
