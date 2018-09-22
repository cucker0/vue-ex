// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import store from './store/index'

// import Vuex from 'vuex'
// Vue.use(Vuex)
//
// const store = new Vuex.Store({
//   state:{
//     count:0
//   },
//   mutations:{
//     increment(state){
//       state.count++
//     },
//     jianjian(state){
//       state.count--
//     }
//   },
//   actions:{
//     add({commit}){
//       setTimeout(() => {
//         commit('increment')
//       }, 1000)
//       // context.commit('increment')
//     },
//     jian(context){
//       // context.commit('jianjian')
//       setTimeout(function () {
//         context.commit('jianjian')
//       }, 2000)
//     }
//   },
//   getters: {
//     getcou(state) {
//       return state.count > 0 ? state.count : 0
//     }
//   }
//
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
