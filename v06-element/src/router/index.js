import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ele from '../components/ele'
import Banar from  '../components/banar'
import Container from '@/components/Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/ele',
      name:'ele',
      component: Ele
    },
    {
      path:'/banar',
      name:'banar',
      component: Banar
    },
    {
      path:'/container',
      name:'Container',
      component: Container
    }
  ]
})
