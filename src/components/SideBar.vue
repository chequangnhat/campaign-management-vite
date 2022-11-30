<script setup>
import {ref} from "vue"
const  isActive = ref(false);

function clicked() {
  console.log("clicked");
  isActive.value = !isActive.value;
}

const hide = "hideSideBar"
const show = "showSideBar"


</script>

<template lang="">
  <aside>
    <div id="side-id"  @click="clicked">
      <font-awesome-icon icon="fa-solid fa-user-secret" />
      <font-awesome-icon icon="fa-solid fa-list" />
      <p :class="isActive ? hide: show">show</p>
    </div>
  </aside>
</template>

<style scoped>
  aside{
    width: 200px;
    height: 100vh;
    background-color: burlywood;
  }

  .hideSideBar{
    display: none;
  }

</style>
