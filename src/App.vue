<template>
  <div>
    <navbar />
    <router-view class="app-container" />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  font-family: "Lato", sans-serif;
}
.text-center {
  text-align: center;
}
.app-container {
  margin-top: 62px;
  padding-top: 3rem;
  height: calc(100vh - 62px);
}
.falling {
  position: relative;
  animation-name: sliding-down;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
}

@keyframes sliding-down {
  0% {
    top: -150px;
  }
  100% {
    top: 0px;
  }
}
</style>
