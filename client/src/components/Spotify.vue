<template>
  <div class="content">
    <h1>
      What I've Been Listening To
    </h1>
    <SpotifyTracks/>
  </div>
</template>

<script>
import SpotifyTracks from "./SpotifyTracks"

export default {
  name: "Spotify",
  components: {
    SpotifyTracks
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
