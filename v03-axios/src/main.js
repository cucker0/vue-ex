// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import qs from 'qs'


Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.HOST = '/api'


//拦截器
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.data = qs.stringify(config.data )          //对数据进行格式化成form-data
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
