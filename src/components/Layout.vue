<script setup>
import {ref} from 'vue'

const isSideBarShow = ref(false)


function toggleSidebar(){
  isSideBarShow.value = !isSideBarShow.value
  console.log('clidck', isSideBarShow.value)
}

</script>

<template>
  <div class="wrapper">
    <header>
      <div class="head">
        <h1>BANNER</h1>
      </div>
    </header>
    <nav>
      <div class="row">
        <div class="toggle-sidebar" @click="toggleSidebar">
          <font-awesome-icon icon="fa-solid fa-toggle-on" />
          Toggle sidebar

        </div>
        <div>
          <h2>LOGO</h2>
        </div>
        <div class="circle"></div>
      </div>
    </nav>
    <div class="content__container">
      <div class="sidebar" :class="{'smallSideBar': isSideBarShow}">
        <hr class="underlined" />
        <div class="circle--two"></div>
        <p>USER NAME</p>
        <ul>
          <hr class="underlined" />
          <a><i class="fa-solid fa-table-cells-large"></i> Dashboard
            <RouterLink to="/">dashboard</RouterLink>
          </a>
          <hr class="underlined" />
          <a><i class="fa-solid fa-table-cells-large"></i> Campaign
            <RouterLink to="/Campaign">Campaigns</RouterLink>
          </a>
          <hr class="underlined" />
          <a><i class="fa-solid fa-table-cells-large"></i> Account
            <RouterLink to="/Account">account</RouterLink>
          </a>
          <hr class="underlined" />
        </ul>
      </div>
      <div class="content__right">
        <RouterView />
      </div>
    </div>
    <div>You are logged in</div>
    <button v-on:click="$emit('logOut')">logout</button>
    <button v-on:click="$emit('testRefreshToken')">test refresh token</button>
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
  width: auto;
  background-color: bisque;
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

.row h2 {
  text-align: center;
  color: white;
  align-items: flex-end;
  margin-left: auto;
  margin-right: 2rem;
  align-self: center;
}

.toggle-sidebar {
  margin-left: 2em;
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
  width: 20%;
  height: 100vh;
  background-color: #498fae;
  transition: 0.3s linear;

}



@media screen and (width <=1000px) {
  .sidebar {
    display: none;
  }
}

@media screen and (width > 1000px) {
  .sidebar {
    width: 200px;
  }

  .content__right {
    /* width: calc(100% - 200px);
     */
     width: auto;
    background-color: bisque;
  }
}



.sidebar a {
  color: white;
}

.circle--two {
  background: #c4c4c4;
  clip-path: circle(50%);
  height: 5em;
  width: 5em;
  margin-top: 20px;
  margin-left: 50px;
}

.sidebar p {
  font-size: 15px;
  color: white;
  line-height: 70px;
  user-select: none;
  margin-left: 40px;
  margin-top: -15px;
}

.underlined {
  width: 99%;
  align: center;
  color: white;
  size: 10px;
}

.sider ul a {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 4px;
  box-sizing: border-box;
  border-top: 1px solid rgb(255, 255, 255, 0.1);
  border-bottom: 1px white;
  transition: 0.4s;
}

.sidebar ul a i {
  margin-right: 16px;
  padding-top: 25px;
  padding-bottom: 30px;
  margin-left: 15px;
  color: white;
}
.smallSideBar{
  width: 10%;
}
</style>
