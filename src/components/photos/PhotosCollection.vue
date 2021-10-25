<template>
  <div class="collection-wrapper">
    <Photo
      class="photo-wrapper"
      :key="index"
      v-for="(bgImg, index) in bgImgs"
      :backgroundImg="bgImg"
    />
  </div>
</template>

<script>
import Photo from "./Photo.vue";
export default {
  name: "PhotosCollection",
  components: {
    Photo,
  },
  data() {
    return {
      bgImgs: [
        {
          backgroundImage: `url(${require("../../assets/img/thumbs/img1.jpg")})`,
        },
        {
          backgroundImage: `url(${require("../../assets/img/thumbs/img2.jpg")})`,
        },
        {
          backgroundImage: `url(${require("../../assets/img/thumbs/img3.jpg")})`,
        },
        {
          backgroundImage: `url(${require("../../assets/img/thumbs/img4.jpg")})`,
        },
        {
          backgroundImage: `url(${require("../../assets/img/thumbs/img5.jpg")})`,
        },
        {
          backgroundImage: `url(${require("../../assets/img/thumbs/img6.jpg")})`,
        },
        {
          backgroundImage: `url(${require("../../assets/img/thumbs/img7.jpg")})`,
        },
      ],
    };
  },
};
</script>

<style>
.collection-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 358px);
  gap: 10px;
}
.photo-wrapper {
  width: 100%; /* necessary for the image to be able to expand */
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
</style>