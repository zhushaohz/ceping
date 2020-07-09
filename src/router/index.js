import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ceshi from '@/components/Ceshi'
import Jieguo from '@/components/Jieguo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ceshi',
      name: 'Ceshi',
      component: Ceshi
    },
    {
      path: '/jieguo',
      name: 'Jieguo',
      component: Jieguo
    }
  ]
})
