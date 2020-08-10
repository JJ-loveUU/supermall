import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();//vue实例可以进行发射事件

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
