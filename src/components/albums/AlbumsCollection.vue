<template>
  <div>
    <div v-if="albums.length > 0" class="albums-container">
      <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
    </div>
    <h3 v-else>No albums available</h3>
  </div>
</template>

<script>
import AlbumCard from "./AlbumCard.vue";
export default {
  name: "AlbumsCollection",
  props: ["albums"],
  components: {
    AlbumCard,
  },
};
</script>

<style>
.albums-container {
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: auto;
  margin-top: 2rem;
}
</style>