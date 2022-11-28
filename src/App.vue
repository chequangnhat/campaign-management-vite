<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./views/Login.vue";
import Campaign from "./views/Campaign.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <Login /> -->
  <!-- <Campaign /> -->
  <nav>
    <RouterLink to="/">Campaigns</RouterLink>
    <RouterLink to="/test">test</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #080808aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
