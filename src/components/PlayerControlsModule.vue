<template>
  <div id="playerControls" class="playercontrols is-flex">
    <div class="playercontrols__container">

        <div class="columns">
          <div class="column is-12-mobile is-9-desktop is-flex">
          
                <figure class="image playercontrols__cover">
                  <img class="cover__img" v-show="currentlyPlaying.cover" :src="currentlyPlaying.cover" :srcset="`${currentlyPlaying.cover} 1x, ${currentlyPlaying.cover2x} 2x`" alt="Currently Playing Track Cover">
                </figure>
             
                <div class="playercontrols__controls">
                  <div v-show="currentlyPlaying.title" class="playercontrols__title">{{currentlyPlaying.title}}</div>
                  <audio ref="audio" :src="currentlyPlaying.file"></audio>
                  <input class="slider is-fullwidth is-small is-circle" v-model="playtime" step="1" min="0" max="120" value="60" type="range">
                  <output class="slider__time" for="sliderWithValue" type="number">{{calcmins}}</output>
                  <div class="playercontrols__playshufrep">
                    <i class="ico ico--play" :class="{'ico--disabled': !songPlaying}"></i>
                    <i class="ico ico--shuffle ico--disabled"></i>
                    <i class="ico ico--repeat ico--disabled"></i>
                  </div>
                </div>
     
          </div>
          <div class="column is-hidden-touch is-3 level-right">
            <user-activity v-for="(share, index) in userShares" :useraction="share" :key="index" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// VUEX GETTERS
import { mapGetters, mapActions } from 'vuex'

import userActivities from '../assets/activity.json'
import UserActivity from './UserActivity'

export default {
  name: 'playercontrolsmodule',
  data () {
    return {
      playtime: 0,
      userShares: userActivities.shares
    }
  },
  components: {
    UserActivity
  },
  computed: {
    ...mapGetters({
      currentlyPlaying: 'GET_CURRENTLYPLAYING',
      songPlaying: 'GET_SONGPLAYING'
    }),
    calcmins () {
      let minutes = Math.floor(this.playtime / 60)
      let seconds = this.playtime - minutes * 60
      let time = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds)
      return time
    }
  },
  watch: {
    songPlaying () {
      this.playpauseSong()
    }
  },
  methods: {
    ...mapActions({
      stopPlaying: 'ACTION_STOP_PLAYING'
    }),
    playpauseSong () {
      let audio = new Audio(this.currentlyPlaying.file)
      if (this.songPlaying) {
        audio.play()
      } else {
        audio.pause()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/app';
  @import '../styles/icons';

  .playercontrols {
    height: 100%;
    align-items: center;

    &__container {
      width: 95%;
      padding: 5px 10px;

      @include mq($from: desktop) {
        width: 100%;
        margin: 0;
      }
    }

    &__cover {
      width: 105px;
      height: 80px;
      margin: auto 0;

      @include mq($from: desktop) {
        width: 95px;
        height: 95px;
      }
    }

    &__controls {
      width: 100%;
      margin-left: 30px;
    }

    &__title {
      color: $white;
      font-weight: 600;
      font-size: 1.2rem;
    }

    // Bulma Slider Extension Overrides
    .slider__time {
      display: block !important;      
      background-color: transparent !important;
      color: $white;
      width: auto !important;
      float: right !important;
      padding: 0 !important;
      font-size: 1rem !important;
      margin-left: 0 !important;
    }
    .useractivity__username {
      color: $white;
    }
  }
</style>
