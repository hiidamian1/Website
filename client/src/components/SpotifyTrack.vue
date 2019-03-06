<template>
  <div class="root">
    <div class="image" v-on:click="playState" v-on:mouseover="display=true" v-on:mouseleave="display=false" v-bind:style="{backgroundImage: 'url(' + track.album.images[0].url + ')'}">
      <i class="far fa-play-circle play-icon" v-show="display"></i>
    </div>
    <div class="description">
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
  data() {
    return {
      song: new Audio(this.track.preview_url),
      playing: false,
      display: false
    }
  },
  methods: {
    playState() {
      if (!this.playing){
        this.song.play();
        this.playing = true;
      } else {
        this.song.pause();
        this.playing = false;
      }
    }
  },
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
    cursor: pointer;
    text-align: center;
  }

  .image:hover {
    opacity: .5;
  }

  .play-icon {
    margin: 2em 0em;
  }

  .description {
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
