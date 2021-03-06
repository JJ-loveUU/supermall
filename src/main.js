import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();//vue实例可以进行发射事件

//结局移动端300ms延迟
FastClick.attach(document.body)


//图片懒加载
Vue.use(VueLazyload,{
  loading:require('./assets/imgs/lazyLoad/lazy.png')
})


//安装插件
Vue.use(toast);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
