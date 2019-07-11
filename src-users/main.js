// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import VueResource from 'vue-resource'
import './static/index.css'

Vue.config.productionTip = false
Vue.use(VueResource)  //内部会给vm对象和组件对象添加一个属性：$http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
