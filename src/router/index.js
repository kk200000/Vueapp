import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Main from '../views/Main'
import User from '../views/User'
import Mall from '../views/Mall'
import PageOne from "@/views/Others/PageOne";
import PageTwo from "@/views/Others/PageTwo";
Vue.use(VueRouter)

const routes = [
    // 主路由 匹配 /
  {
    path: '/',
    redirect:'/home',
    component: Main,
    children:[
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/user',
        name: 'user',
        component:User
      },
      {
        path: '/mall',
        name: 'mall',
        component: Mall
      },
      {
        path: '/page1',
        component: PageOne
      },
      {
        path: '/page2',
        component: PageTwo
      }
    ]
  },







]

const router = new VueRouter({
  routes
})

export default router
