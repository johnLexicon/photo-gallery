<template>
  <div class="home">
    <h1 class="text-center falling">Gallery</h1>
    <section class="description">
      <div class="card">
        <div class="text-content animate">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          sapiente fuga quos, dolore odio ea amet nihil voluptatem veniam,
          voluptatum, necessitatibus autem doloribus atque numquam reiciendis
          fugit modi pariatur ad reprehenderit! Vitae totam molestiae esse vero
          neque obcaecati magnam explicabo blanditiis earum nesciunt cum nulla
          veniam sint debitis quasi, minus exercitationem in, id dolorem
          voluptate maiores dignissimos sit qui laboriosam.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  background-image: url("../assets/images/gallery_medium.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
.home h1 {
  color: #444;
}
.description {
  height: calc(100% - 62px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.description .card {
  width: 90%;
}
.description .card .text-content {
  padding: 2rem;
  font-weight: 900;
  line-height: 1.6;
  font-size: 1rem;
  /* background-color: rgba(255, 255, 255, 0.7); */
  border-radius: 15px;
}

.animate {
  position: relative;
  animation-name: description-animation;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
}

@media (min-width: 992px) {
  .home {
    background-image: url("../assets/images/gallery.jpg");
  }
  .description .card {
    width: 30%;
  }
  .description .card .text-content {
    font-size: 1.5rem;
  }
}

@media (max-height: 400px) {
  .description .card .text-content {
    font-size: 0.8rem;
  }
}

@keyframes description-animation {
  0% {
    bottom: -1000px;
  }
  50% {
    bottom: 0;
    background-color: transparent;
  }
  100% {
    background-color: rgba(255, 255, 255, 0.7);
  }
}
</style>
