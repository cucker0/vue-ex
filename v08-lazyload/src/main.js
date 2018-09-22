// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534663186591&di=f396d9a41cb8d8e2ec3fb871a6123d0f&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2013%2F0830%2F20130830061910734.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534663236306&di=85f1df0a3007c68a9c9b6889c4168f52&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F6c578519jw1ezpv82movgg20b40b4glp.gif',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
