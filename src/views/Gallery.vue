<template>
  <div>
    <h3>Gallery</h3>
    <PhotosCollection />
    <!-- <LargePhoto /> -->
  </div>
</template>

<script>
import axios from "axios";
import PhotosCollection from "../components/photos/PhotosCollection.vue";
// import LargePhoto from "../components/photos/LargePhoto.vue";
export default {
  name: "Gallery",
  components: {
    PhotosCollection,
    // LargePhoto,
  },
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.gallery-wrapper {
  width: 80vw;
}
</style>