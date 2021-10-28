<template>
  <div class="gallery-container">
    <h1>{{ albumTitle }} (Album id: {{ albumId }})</h1>
    <h3 v-if="!photos">Fetching photos</h3>
    <PhotosCollection v-else :photos="photos" @showPhoto="showPhoto" />
    <large-photo
      v-if="showOverlay"
      :photoUrl="photoUrl"
      @closeOverlay="showOverlay = false"
    />
  </div>
</template>

<script>
import LargePhoto from "../components/photos/LargePhoto.vue";
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
      type: Number,
      require: true,
    },
  },
  components: {
    LargePhoto,
    PhotosCollection,
  },
  data() {
    return {
      photos: null,
      showOverlay: false,
      photoUrl: null,
    };
  },
  mounted() {
    this.getPhotos(this.albumId);
  },
  methods: {
    async getPhotos(albumId) {
      this.photos = await fetchPhotos(albumId);
    },
    showPhoto(photoUrl) {
      this.photoUrl = photoUrl;
      this.showOverlay = true;
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