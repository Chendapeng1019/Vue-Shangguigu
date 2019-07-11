import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import About from  '../views/About'
import Home from '../views/Home'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path:'/',
      redirect: '/about'
    },
    {
      path:'/about',
      component: About
    },
    {
      path:'/home',
      component: Home
    }
  ]
})
