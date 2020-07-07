/*
 * @Description: register
 * @Autor: HuangCheng
 * @Date: 2020-07-07 11:24:43
 * @LastEditors: HuangCheng
 * @LastEditTime: 2020-07-07 16:14:14
 */ 
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      component: () => import('@/components/register')
    },
    {
      path: '/main',
      component: () => import('@/components/main')
    },
    {
      path: '/update',
      component: () => import('@/components/update')
    }
  ]
})
