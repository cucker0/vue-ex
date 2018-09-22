import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import jiajian from '../components/jiajian'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jiajian',
      component: jiajian
    }
  ]
})
