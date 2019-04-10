<template>
  <div class="spotify-content">
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
      this.tracks = results;
    } catch (err) {
      this.err = err.message;
    }
  }
}
</script>

<style scoped>
  .spotify-content {
    color: #333;
  }

  h1 {
		font-weight: normal;
		font-size: 3rem;
    text-align: center;
	}

  @media(min-width: 992px) {
    h1 {  
      font-size: 5rem;
    }
  }
</style>
