import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import search from '@/components/search'

import page1 from '@/components/page1'
import page2 from '@/components/page2'
import result from '@/components/result'
import video from '@/components/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/page1',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    },
    {
      path: '/result',
      component: result
    },
    {
      path: '/video',
      component: video
    }
  ]
})
