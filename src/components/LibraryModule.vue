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
      <!-- {{tracksData.songs.length}} -->
      <div class="trackcover" v-for="(track, index) in tracksData.songs" :key="index">
        <figure @click="setCurrentTrack(track) " class="image trackcover__img">
          <img :src="track.cover" :srcset="`${track.cover} 1x, ${track.cover2x} 2x`" alt="Track Cover">
          <audio :src="track.file" :ref="track.filename"></audio>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import tracksData from '../assets/tracks.json'
// import TrackCover from './TrackCover'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'librarymodule',
  // components: {TrackCover},
  data () {
    return {
      tracksData: tracksData,
      audio: ''
    }
  },
  computed: {
    ...mapGetters({
      songinprog: 'GET_SONGPLAYING',
      currTrack: 'GET_CURR_TRACK',
      currPlaying: 'GET_CURRENTLYPLAYING'
    })
  },
  methods: {
    ...mapActions({
      setCurrent: 'ACTION_SET_CURRENTLYPLAYING',
      setAudioTrack: 'ACTION_SET_AUDIOTRACK',
      notify: 'ACTION_NOTIFY',
      stopPlaying: 'ACTION_STOP_PLAYING'
    }),
    setCurrentTrack (objTrack) {
      // SET NEW AUDIO FILE ON PLAY
      let audio = new Audio(objTrack.file)
      // IF SONG CURRENTLY PLAYING
      if (this.songinprog) {
        let newAudio = new Audio(objTrack.file)
        // CHECK IF SAME SONG AS CURRENT
        if (this.currPlaying.file === objTrack.file) {
          // IF SAME SONG - STOP PLAYING
          this.stopPlaying()
        } else {
          // IF NOT SAME SONG - STOP CURRENT AND START SELECTED
          this.stopPlaying()
          this.setAudioTrack(newAudio)
          this.setCurrent(objTrack)
          this.notify()
          newAudio.play()
        }
      } else {
        // NO CURRENT SONG PLAYING - START SELECTED AND UPDATED STATE
        audio.play()
        this.setCurrent(objTrack)
        this.setAudioTrack(audio)
        this.notify()
        // UPDATE STATE ON END OF SONG
        audio.onended = () => {
          this.stopPlaying()
        }
      }
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
    justify-content: center;
  }
  .trackcover__img {
    position: relative;
    width: 90px;
    height: 90px;
    margin: 10px 5px;

    @include mq($from: desktop) {
      width: 95px;
      height: 95px;
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: url('../assets/ui/icons/play-icon.png');
      background-color: rgba(0,0,0,0);
      background-size: 0;
      transition: background-color 0.3s ease-in-out;
    }

    &:hover {
      cursor: pointer;

      &:before {
        background-color: rgba(0,0,0,0.7);
        background-image: url('../assets/ui/icons/play-icon.png');
        background-position: center center;
        background-repeat: no-repeat;
        opacity: 0.65;
        background-size: 50%;
        transition: background-color 0.3s ease-in-out, background-size 0.2s ease-in-out;

        // Retina 2x Icon
        @media only screen and (min-device-pixel-ratio: 1.25), only screen and (min-resolution: 1.25dppx) {
          background-image: url('../assets/ui/icons/play-icon@2x.png');
        }
      }
    }
  }
</style>
