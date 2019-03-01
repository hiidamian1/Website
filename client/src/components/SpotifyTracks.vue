<template>
  <div>
    <div v-bind:key="track.indexOf()" v-for="track in this.tracks">
      <SpotifyTrack v-bind:track="track"/>
    </div>
  </div>
</template>

<script>
import SpotifyTrack from "./SpotifyTrack";
import SpotifyService from "../SpotifyService";

export default {
  name: "SpotifyTracks",
  components: {
    SpotifyTrack
  },
  data() {
    return {
      tracks: [
        "Rings and Roses",
        "Lick",
        "hammer"
      ]
    }
  },
  async created() {
    try {
      await SpotifyService.authorize();
      
      //this.tracks = await SpotifyService.getRecent();
    } catch (err) {
      this.err = err.message;
    }
  }
}
</script>

<style scoped>

</style>
