<template>
  <div class="photo-window">
    <img src="../../assets/img/thumbs/img6.jpg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.photo-window {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo-window .large-img {
  width: 80vw;
  height: 80vh;
}
</style>