<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/albums">Albums</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
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
</style>
