<template>
  <div class="photo-window" @click.self="handleClick">
    <img :src="photoUrl" alt="Large photo" ref="largePhotoElem" />
  </div>
</template>

<script>
export default {
  name: "LargePhoto",
  props: ["photoUrl"],
  methods: {
    handleClick() {
      this.$emit("closeOverlay");
    },
  },
};
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