<template>
  <div>
    <h1 class="text-center">Albums</h1>
    <h3 class="text-center" v-if="!albums">Fetching albums</h3>
    <albums-collection v-else :albums="albums" />
  </div>
</template>

<script>
import { fetchAlbums } from "../shared/data";
import AlbumsCollection from "../components/albums/AlbumsCollection.vue";
export default {
  name: "Albums",
  components: {
    AlbumsCollection,
  },
  data() {
    return {
      albums: null,
    };
  },
  mounted() {
    this.getAlbums();
  },
  methods: {
    async getAlbums() {
      this.albums = await fetchAlbums();
    },
  },
};
</script>

<style>
.album-container {
  background-color: green;
}
</style>