<template>
  <div class="tracks">
    <div class="root" v-bind:key="tracks.indexOf(trackObj)" v-for="trackObj in tracks">
      <SpotifyTrack v-bind:track="trackObj.track"/>
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
  .tracks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  .root {
    width: 100%;
  }

  @media(min-width: 768px){
    .root {
      width: 50%;
    }
  }

  @media(min-width: 992px){
    .root {
      width: 33.3%;
    }
  }
</style>
