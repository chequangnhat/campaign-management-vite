<script setup>
import {ref} from "vue"
const  isActive = ref(false);
const  isSmall = ref(false);


function clicked() {
  console.log("clicked");
  // isActive.value = !isActive.value;
  isSmall.value = !isSmall.value;
  
}

</script>

<template lang="">
  <aside>
    <div id="side-id"  @click="clicked" class="sidebar" :class="{'smallSidebar': isSmall}" >
      <font-awesome-icon icon="fa-solid fa-user-secret" />
      <font-awesome-icon icon="fa-solid fa-list" />
      <p :class="{'hidden': isActive}">show</p>
    </div>
  </aside>
</template>

<style scoped>
  .sidebar{
    width: 200px;
    height: 100vh;
    background-color: burlywood;

    transition: 0.3s linear;
  }

  .hidden{
    display: none;
  }

  .smallSidebar{
    width: 50px;
  }

  
@media screen and (width <= 1000px) {
  .sidebar {
    display: none;
  }
}

</style>
