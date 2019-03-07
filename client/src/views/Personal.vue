<template>
  <div>
    <Header v-bind:isMainPage="false"/>
    <div class="content">
      <Spotify/>
    </div>
  </div>
</template>

<script>
import Spotify from "../components/Spotify";
import Header from "../components/Header";

export default {
  name: "Personal",
  components: {
    Spotify,
    Header
  }
}
</script>

<style scoped>
  .content {
    padding: 20px;
  }
</style>
