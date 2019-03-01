<template>
  <div class="root">
    <Spotify/>
  </div>
</template>

<script>
import Spotify from "../components/Spotify"

export default {
  name: "Personal",
  components: {
    Spotify
  }
}
</script>

<style scoped>
  .root {
    padding: 20px;
  }
</style>
