<template>
  <div class="album-card" @click="handleClick">
    <h3>{{ album.title }} (id: {{ album.id }})</h3>
  </div>
</template>

<script>
export default {
  name: "AlbumCard",
  props: ["album"],
  methods: {
    handleClick() {
      this.$router.push({
        name: "Gallery",
        params: { albumId: this.album.id, albumTitle: this.album.title },
      });
    },
  },
};
</script>

<style>
.album-card {
  width: 400px;
  height: 100px;
  text-align: center;
  padding-top: 2rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fefefe;
  box-shadow: rgba(0, 133, 0, 0.35) 0px 5px 15px;
}
.album-card:hover {
  color: #fefefe;
  background-color: rgb(0, 133, 0);
}
</style>