import { createRouter, createWebHistory } from "vue-router";
import Campaign from "../views/Campaign.vue";
import Dashboard from "../views/Dashboard.vue";
import Account from "../views/Account.vue";
import Layout from "../components/Layout.vue";
import Home from "../components/Home.vue";
import Default from "../components/Default.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Login.vue"),
      children: [
        {
          path: '/Login',
          name: "Login",
          components: {
            default: Default,
            routerViewHome:  () => import("../views/Login.vue"),
          }
        }
      ],
    },
  
    {
      path: "/Layout",
      name: "Layout",
      components: {
        default: Layout,
        routerViewHome: Layout,
      },
      children: [
        {
          path: "/Campaign",
          name: "Campaign",
          components: {
            default: Default,
            routerViewLayout: Campaign,
          },
        },
        {
          path: "/Dashboard",
          name: "Dashboard",
          components: {
            routerViewLayout: Dashboard,
          },
        },
        {
          path: "/Account",
          name: "Account",
          components: {
            routerViewLayout: Account,
          },
        },
      ],
    },

    {
      path: "/Test",
      name: "Test",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Test.vue"),
    },
  ],
});

export default router;
