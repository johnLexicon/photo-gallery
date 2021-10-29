<template>
  <div class="thumbnail-card" @click="handleClick">
    <h3 class="card-header">{{ shortTitle }}</h3>
    <figure v-lazyload class="image-wrapper">
      <spinner class="spinner" />
      <img
        :data-url="photo.thumbnailUrl"
        :alt="photo.title"
        class="image-item"
      />
    </figure>
  </div>
</template>

<script>
import Spinner from "../Spinner.vue";
export default {
  name: "ThumbnailCard",
  props: ["photo"],
  components: {
    Spinner,
  },
  computed: {
    shortTitle() {
      return this.photo.title.slice(0, 7);
    },
  },
  methods: {
    handleClick() {
      this.$emit("showPhoto", this.photo.url);
    },
  },
};
</script>

<style>
.loaded .spinner {
  display: none;
}
.card-header {
  text-align: center;
}
.thumbnail-card {
  cursor: pointer;
  background-color: #fefefe;
  flex-basis: 20%;
  min-width: 222px;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
}
.thumbnail-card figure {
  height: 200px;
}
.thumbnail-card img {
  width: 150px;
  height: 150px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: none;
}

.loaded img {
  display: block;
}

.image-wrapper {
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>