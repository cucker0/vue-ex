import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'      //@表示 根路径

import Index from '@/components/index'
import Course from '@/components/course'
import Master from '@/components/master'
import Java from '@/components/pages/java'
import Web from '@/components/pages/web'
import Android from '@/components/pages/android'


Vue.use(Router)


//导出路由
export default new Router({
  linkActiveClass:'active',     //改变 全局配置 <router-link> 的默认“激活 class 类名”默认是 router-link-active，如果觉得长可以在此修改。
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
      alias:'/kc',
      redirect:'/course/web',
      children:[{
        path:'java',
        component:Java
        },
        {
          path:'web',
          component:Web
        },
        {
          path:'android',
          component:Android
        }
      ]
    },
    {
      path:'/master/:count/:q/',
      name:'master',
      component: Master
    },
  ]
})
