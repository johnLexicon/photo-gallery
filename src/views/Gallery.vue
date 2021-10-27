<template>
  <div class="gallery-container">
    <h1>{{ albumTitle }} (id: {{ albumId }})</h1>
    <h3 v-if="!photos">Fetching photos</h3>
    <PhotosCollection v-else :photos="photos" />
  </div>
</template>

<script>
import { fetchPhotos } from "../shared/data";
import PhotosCollection from "../components/photos/PhotosCollection.vue";
export default {
  name: "Gallery",
  props: {
    albumTitle: {
      type: String,
      default: "No title",
    },
    albumId: {
      type: String,
      require: true,
    },
  },
  components: {
    PhotosCollection,
  },
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    this.getPhotos(this.albumId);
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