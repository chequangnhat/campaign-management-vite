<script>

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
        <a><i class="fa-solid fa-list"></i>Toggle sidebar</a>
        <h2>LOGO</h2>
        <div class="circle"></div>
      </div>
    </nav>
    <div class="sidebar">
      <hr class="underlined" />
      <div class="circle--two"></div>
      <p> USER NAME</p>
      <ul>
        <hr class="underlined" />
        <a><i class="fa-solid fa-table-cells-large"></i> Dashboard</a>
        <hr class="underlined" />
        <a><i class="fa-solid fa-table-cells-large"></i> Campaign</a>
        <hr class="underlined" />
        <a><i class="fa-solid fa-table-cells-large"></i> Account</a>
        <hr class="underlined" />
      </ul>
    </div>
    <div>
      <div>You are logged in</div>
      <button v-on:click="$emit('logOut')">logout</button>
      <button v-on:click="$emit('testRefreshToken')">test refresh token</button>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.head h1 {
  height: 100px;
  background-color: white;
  text-align: center;
  padding-top: 40px;
}

.row {
  /* overflow: hidden;
  display: block; */
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-auto-columns: minmax(200px,1fr);
  grid-gap: 16px;
  height: 90px; 
  background-color: #498fae; */
  display: flex;
  justify-content: space-between;
  height: 90px;
  background-color: #498fae;
}

.row a {
  color: white;
  text-decoration: none;
}

.row a i {
  margin-top: 35px;
  margin-left: 50px;
  margin-right: 10px;
}

.row h2 {
  text-align: center;
  color: white;
  align-items: flex-end;
  margin-left: auto;
  margin-right: 2rem;
  align-self: center;
}

.circle {
  background: #c4c4c4;
  clip-path: circle(50%);
  height: 3em;
  width: 3em;
  align-items: flex-end;
  margin-left: auto;
  margin-right: 2rem;
  align-self: center;
}


.sidebar {
  /* position: fixed; */
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #498fae;
}

@media screen and (max-width: 600px) {

  .sidebar,
  a,
  hr,
  i {
    width: 100%;
  }
}

@media screen and (max-width: 1000px) {
  .sidebar {
    width: 100px;
    display: none;
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
  border-top: 1px solid rgb(255, 255, 255, .1);
  border-bottom: 1px white;
  transition: .4s;
}

.sidebar ul a i {
  margin-right: 16px;
  padding-top: 25px;
  padding-bottom: 30px;
  margin-left: 15px;
  color: white;
}
</style>
