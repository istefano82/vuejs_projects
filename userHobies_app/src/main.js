import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = ('https://hello-worlds-b819b.firebaseio.com')
axios.defaults.headers.common['Authorization'] = 'fasfasd'

const reqInterceptor = axios.interceptors.request.use(config => {
    console.log('Request interceptors', config)
    return config
})
const resInterceptor = axios.interceptors.response.use(res => {
    console.log('response interceptors', res)
    return res
})
axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
