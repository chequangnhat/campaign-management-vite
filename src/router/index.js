import { createRouter, createWebHistory } from 'vue-router'
import Campaign from '../views/Campaign.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Account from '../views/Account.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/Campaign',
      name: 'Campaign',
      component: Campaign
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Test.vue')
    }
  ]
})

export default router
