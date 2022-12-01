import { createRouter, createWebHistory } from 'vue-router'
import Campaign from '../views/Campaign.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Account from '../views/Account.vue'
import Layout from '../components/Layout.vue'
import Home from '../components/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/Campaign',
      name: 'Campaign',
      component: Campaign
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
    {
      path: '/Test',
      name: 'Test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Test.vue')
    },
  

    {
      path: '/redirectLayout',
      redirect: '/Login'
    },
  ]
})

export default router
