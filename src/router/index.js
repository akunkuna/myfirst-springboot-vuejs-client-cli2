import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Currency from '@/components/Currency'

import page1 from '@/components/page1'
import page2 from '@/components/page2'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/currency',
      name: 'Currency',
      component: Currency
    },
    {
      path: '/',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    },
    {
      path: '/test',
      component: test
    }
  ]
})
