<template>
  <div id="libraryModule" class="library module">
    <div class="level module__header">
      <div class="level-left">
        <h2 class="level-item title is-1">Your Library</h2>
      </div>
      <div class="level-right">
        <button class="level-item button is-rounded is-primary">Discover Artists</button>
      </div>
    </div>
    <div class="module__body">
      <div class="trackcover" v-for="(track, index) in tracksData.songs" :key="index">
        <figure class="image is-96x96">
          <img :src="track.cover" :srcset="`${track.cover} 1x, ${track.cover2x} 2x`" alt="Track Cover">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import tracksData from '../assets/tracks.json'
import TrackCover from './TrackCover'
export default {
  name: 'librarymodule',
  components: {TrackCover},
  data () {
    return {
      tracksData: tracksData
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/app';

  h2 {
    font-weight: 300;
    letter-spacing: -1px;

    @include mq($from: desktop) {
      letter-spacing: -5px;
    }
  }
  .button {
    letter-spacing: -1px;

    @include mq($until: desktop) {
      margin: 0 auto;
    }
    @include mq($from: desktop) {
      font-size: 1.5rem;
    }
  }
  .module__body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
