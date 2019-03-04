<template>
  <div>
    <div v-bind:key="tracks.indexOf(trackObj)" v-for="trackObj in tracks">
      <SpotifyTrack v-bind:track="trackObj.track.name"/>
    </div>
  </div>
</template>

<script>
import SpotifyTrack from "./SpotifyTrack";

export default {
  name: "SpotifyTracks",
  components: {
    SpotifyTrack
  },
  props: [
    "tracks"
  ]
}
</script>

<style scoped>

</style>
