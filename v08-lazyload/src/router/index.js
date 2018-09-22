import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  Image from '../components/tupian'
import Err from  '../components/err'
import Load from  '../components/load'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'image',
      component: Image
    },
    {
      path: '/err',
      name: 'err',
      component: Err
    },
    {
      path: '/load',
      name: 'load',
      component: Load
    },
  ]
})
