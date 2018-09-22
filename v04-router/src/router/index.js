import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import Catalog from '../components/catalog'

Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {path: '/hello', component: HelloWorld},
    {path: '/catalog', component: Catalog}
  ]
})


