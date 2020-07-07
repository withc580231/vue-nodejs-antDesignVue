/*
 * @Description: 
 * @Autor: HuangCheng
 * @Date: 2020-07-07 11:24:43
 * @LastEditors: HuangCheng
 * @LastEditTime: 2020-07-07 16:19:21
 */ 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.prototype.Axios = Axios
let userInfo = window.sessionStorage.getItem('userInfo')
// 路由拦截
router.beforeEach((to, from, next) => {
  console.log(to,from)
  if (to.path==='/'){
    next()
  } else if (userInfo===null) {
    next({path: '/'})
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
