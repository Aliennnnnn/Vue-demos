// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Layout from './components/layout.vue'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
	{ path:'/',component: Layout },
	{ path:'/topic',component: resolve =>require(['./components/topic.vue'],resolve) },
	{ path:'/explore',component: resolve =>require(['./components/explore.vue'],resolve) }
];

let router = new VueRouter({
	mode: 'hash',
	routes
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
