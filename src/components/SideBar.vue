<script setup>
import { ref, reactive } from "vue";

const isActive = ref(false);

function clicked() {
  console.log("clicked");
  // isActive.value = !isActive.value;
  isSmall.value = !isSmall.value;
}

let isSmall = defineProps(['isShow'])
console.log("isSmall", isSmall.isShow)
</script>

<template lang="">
  <div class="sidebar" :class="{ smallSideBar: isSmall.isShow }">
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
* {
  margin: 0px;
  padding: 0px;
}

.wrapper {
  width: 100vw;
}

.content__container {
  width: 100%;
  display: flex;
}

.content__right {
  width: 80%;
  background-color: white;

  overflow-x: auto;
}

.head h1 {
  height: 100px;
  background-color: white;
  text-align: center;
  padding-top: 40px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  background-color: #498fae;
}

.toggle-sidebar {
  margin-left: 2em;
  color: white;
}

.logo-title {
  color: white;
}

.circle {
  background: #c4c4c4;
  clip-path: circle(50%);
  height: 3em;
  width: 3em;
  align-items: flex-end;
  /* margin-left: auto; */
  margin-right: 2rem;
  align-self: center;
}

.sidebar {
  /* position: fixed; */
  /* left: 0; */
  width: px;
  height: 100vh;
  background-color: #498fae;
  transition: 0.3s linear;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.circle--two-container {
  width: 100%;
  border-top: white solid 2px;
  padding-top: 5px;
  display: flex;
  justify-content: center;
}
.username {
  font-size: 25px;
  margin: 15px 0;
}
.sidebar a {
  color: white;
  text-decoration: none;
}

.router-child {
  width: 100%;
  height: 40px;
  font-size: 20px;

  border-top: white solid 2px;
  margin: 5px 0;
  padding: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.router-link-container{
  width: 70%;
}
.circle--two {
  background: #c4c4c4;
  clip-path: circle(50%);
  height: 5em;
  width: 5em;
}

@media screen and (width <=1000px) {
  .sidebar {
    width: 90px;
  }

  .content__right{
    width: calc(100% - 80px);

  }

  .sidebar a, p{
    display: none;
  }

  .router-link-container{
  width: 40%;
}
}

@media screen and (width > 1000px) {
  .sidebar {
    width: 20%;
  }

  .content__right{
    width: 80%;
  }
}

.smallSideBar {
  width: 90px;
}

.smallSideBar p,
.smallSideBar a {
  display: none;
}
</style>
