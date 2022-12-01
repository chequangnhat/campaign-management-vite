<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Login from "./views/Login.vue";
import Campaign from "./views/Campaign.vue";
import { RouterLink, RouterView } from "vue-router";
import router from "./router";
import Layout from "./components/Layout.vue";
import Home from "./components/Home.vue";
import SideBar from "./components/SideBar.vue";
function redirectLogin() {
      router.push({
        name: 'Login',
      })
    }
</script>

<template>
  <!-- <Login /> -->
  <!-- <Campaign /> -->
  <Home/>
  <!-- <Layout /> -->
  <!-- <Login /> -->
</template>

<style scoped>
</style>
