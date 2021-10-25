<template>
  <div class="photo-wrapper" :style="backgroundImg">
    <div @click="handleCoverClick" class="cover"></div>
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: ["backgroundImg"],
  data() {
    return {};
  },
  methods: {
    handleCoverClick() {
      console.log("Borracho");
    },
  },
};
</script>

<style>
.photo-wrapper .cover {
  height: inherit;
}
.photo-wrapper .cover:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>