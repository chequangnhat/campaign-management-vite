<script setup>
import { ref } from "vue";
const isActive = ref(false);
const isSmall = ref(false);

function clicked() {
  console.log("clicked");
  // isActive.value = !isActive.value;
  isSmall.value = !isSmall.value;
}
</script>

<template lang="">
  <div class="sidebar" :class="{ smallSideBar: isSideBarShow }">
    <div class="circle--two-container">
      <div class="circle--two"></div>
    </div>

    <div class="username">
      <p>USER NAME</p>
    </div>

    <div class="router-child">
      <div class="router-link-container">
        <font-awesome-icon icon="fa-solid fa-caravan" /> &nbsp;
        <RouterLink to="/Dashboard">Dashboard</RouterLink>
      </div>
    </div>
    <div class="router-child">
      <div class="router-link-container">
        <font-awesome-icon icon="fa-solid fa-table-columns" /> &nbsp;
        <RouterLink to="/Campaign">Campaigns</RouterLink>
      </div>
    </div>
    <div class="router-child">
      <div class="router-link-container">
        <font-awesome-icon icon="fa-solid fa-users" /> &nbsp;
        <RouterLink to="/Account">Account</RouterLink>
      </div>
    </div>
    <div class="router-child">
      <div class="router-link-container">
        <font-awesome-icon icon="fa-solid fa-users" /> &nbsp;
        <RouterLink to="/Test">Test</RouterLink>
      </div>
    </div>
    <!-- faTableColumns, faCaravan, faUsers, faAngleDown  -->
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  background-color: burlywood;

  transition: 0.3s linear;
}

.hidden {
  display: none;
}

.smallSidebar {
  width: 50px;
}

@media screen and (width <= 1000px) {
  .sidebar {
    display: none;
  }
}
</style>
