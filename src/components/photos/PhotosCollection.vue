<template>
  <div>
    <div v-if="photos.length > 0" class="photos-container">
      <thumbnail-card
        v-for="photo in photos"
        :key="photo.id"
        :photo="photo"
        @showPhoto="showPhoto"
      />
    </div>
    <h3 class="text-center" v-else>No photos available</h3>
  </div>
</template>

<script>
import ThumbnailCard from "./ThumbnailCard.vue";
export default {
  name: "PhotosCollection",
  props: ["photos"],
  components: {
    ThumbnailCard,
  },
  methods: {
    showPhoto(photoUrl) {
      this.$emit("showPhoto", photoUrl);
    },
  },
};
</script>

<style>
.photos-container {
  margin-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
}
</style>