<template>
  <div class="gallery-container">
    <h1>Gallery</h1>
    <h3 v-if="!photos">Fetching photos</h3>
    <PhotosCollection v-else :photos="photos" />
  </div>
</template>

<script>
import { fetchPhotos } from "../shared/data";
import PhotosCollection from "../components/photos/PhotosCollection.vue";
export default {
  name: "Gallery",
  components: {
    PhotosCollection,
  },
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    this.getPhotos("3");
  },
  methods: {
    async getPhotos(albumId) {
      this.photos = await fetchPhotos(albumId);
    },
  },
};
</script>

<style>
.gallery-container {
  text-align: center;
  margin-top: 2rem;
}
</style>