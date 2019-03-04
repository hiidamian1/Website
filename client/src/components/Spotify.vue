<template>
  <div class="content">
    <h1>
      What I've Been Listening To
    </h1>
    <SpotifyTracks v-bind:tracks="this.tracks"/>
  </div>
</template>

<script>
import SpotifyTracks from "./SpotifyTracks"
import SpotifyService from "../SpotifyService";

export default {
  name: "Spotify",
  components: {
    SpotifyTracks
  },
  data() {
    return {
      tracks: []
    }
  },
  async created() {
    try {
      const results = await SpotifyService.getRecent();
      for (let i = 0 ; i < results.length; i++) {
        console.log(results[i].track.name);
      }
      this.tracks = results;
      console.log(this.tracks);
    } catch (err) {
      this.err = err.message;
    }
  }
}
</script>

<style scoped>
  .content {
    color: #333;
  }

  h1 {
		font-weight: normal;
		font-size: 50px;
	}
</style>
