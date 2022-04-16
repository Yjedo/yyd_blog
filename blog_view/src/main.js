import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import router from './router/index'
// import requestConfig from './config/index.js'


Vue.use(ElementUI)

Vue.config.productionTip = false


// requestConfig()

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
