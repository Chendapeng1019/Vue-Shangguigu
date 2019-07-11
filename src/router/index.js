import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import About from  '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path:'/',
      redirect: '/about'
    },
    {
      path:'/about',
      component: About,
      children:[
        {
          path: 'news',
          component: News
        }
      ]
    },
    {
      path:'/home',
      component: Home,
      children: [
        {
          path: 'message',
          component: Message
        }
      ]
    }
  ]
})
