// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入 路由器 插件
import store from './store'// 引入 vuex 状态管理 插件
import axios from 'axios' // // 引入 axios 请求数据 插件
import ElementUI from 'element-ui' // // 引入 elementUI 前端 插件
import 'element-ui/lib/theme-chalk/index.css' // elementUI css样式
Vue.use(ElementUI) // 在 vue 中使用 element 插件

axios.defaults.baseURL = "http://localhost:3000"; //  设置axios默认请求数据的服务器和端口
Vue.prototype.$http = axios; // 将 axios 设置成 vue的一个属性
Vue.config.productionTip = false


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,// 注册 路由组件
  store, // 注册 vuex状态 管理
  components: { App },
  template: '<App/>'
})
