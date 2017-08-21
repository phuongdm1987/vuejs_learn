import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/account/Login'
import Logout from '@/components/account/Logout'
import auth from './auth'

// configs axios
import '@/api/config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: auth.requireAuth
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      beforeEnter: auth.requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
