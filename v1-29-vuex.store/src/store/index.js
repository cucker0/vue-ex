import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment(state){
      state.count++
    },
    jianjian(state){
      state.count--
    }
  },
  actions:{
    add({commit}){
      setTimeout(() => {
        commit('increment')
      }, 1000)
      // context.commit('increment')
    },
    jian(context){
      // context.commit('jianjian')
      setTimeout(function () {
        context.commit('jianjian')
      }, 2000)
    }
  },
  getters: {
    getcou(state) {
      return state.count > 0 ? state.count : 0
    }
  }

})
