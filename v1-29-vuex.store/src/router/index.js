import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Parent from '../components/child/Parent'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Parent',
      component: Parent
    }
  ]
})
