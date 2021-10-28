<template>
  <div class="home">
    <h1 class="text-center">Start page</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.home {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/images/gallery_medium.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

@media (min-width: 992px) {
  .home {
    background-image: url("../assets/images/gallery.jpg");
  }
}
</style>
