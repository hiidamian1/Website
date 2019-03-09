<template>
  <div class="track-content">
    <div class="image" v-on:click="playState" v-on:mouseover="displayPlay=true" v-on:mouseleave="displayPlay=false" v-bind:style="{backgroundImage: 'url(' + track.album.images[0].url + ')'}">
      <i class="far fa-play-circle play-icon" v-show="displayPlay"></i>
    </div>
    <div class="description" v-on:mouseover="displayTitleTooltip=true" v-on:mouseleave="displayTitleTooltip=false">
      <div class="title">
        {{track.name}}
      </div>
      <div class="artist" v-on:mouseover="displayArtistTooltip=true" v-on:mouseleave="displayArtistTooltip=false">
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
      displayPlay: false,
      displayTitleTooltip: false,
      displayArtistsTooltip: false
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
  .track-content {
    display: flex;
    background-color: #333;
    color: white;
    margin: .5rem;
    padding: .5rem;
  }

  .image {
    min-height: 5rem;
    min-width: 5rem;
    background-size: contain;
    cursor: pointer;
    text-align: center;
  }

  .image:hover {
    opacity: .5;
  }

  .play-icon {
    margin: 2rem 0em;
  }

  .description {
    margin: auto 0rem auto .5rem;
    white-space: nowrap;
    overflow: hidden;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: .5rem;
    text-overflow: ellipsis;
  }

  .album, .artist {
    font-size: 1rem;
  }

  /* Tooltip container */
  .tooltip {
    position: relative;
  }

  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: .5rem 0;
  
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>
