<template>
  <div class="root">
    <div class="image" v-bind:style="{backgroundImage: 'url(' + track.album.images[1].url + ')'}">
    </div>
    <div class="text">
      <div class="title">
        {{track.name}}
      </div>
      <div class="artist">
        {{track.artists[0].name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpotifyTrack",
  props: [
    "track"
  ],
  created() {
    console.log(this.track.album.images[2].url);
  }
}
</script>

<style scoped>
  .root {
    display: flex;
    background-color: #333;
    color: white;
    margin: 5px;
    padding: 5px;
  }

  .image {
    height: 5em;
    width: 5em;
    background-size: contain;
  }

  .text {
    margin: auto 5px;
  }

  .title {
    font-size: 1.5em;
    margin-bottom: 5px;
  }

  .album, .artist {
    font-size: 1em;
  }
</style>
