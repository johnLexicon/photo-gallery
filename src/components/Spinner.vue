<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style>
.spinner {
  width: 25px;
  height: 25px;
  background-color: transparent;
  border-radius: 50%;
  border-top: 5px solid darkgreen;
  border-bottom: 5px solid red;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    border-bottom-color: darkgreen;
    border-top-color: red;
  }
}
</style>