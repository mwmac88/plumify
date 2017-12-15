<template>
  <div id="userActivity" class="useractivity">
    <article class="media">
      <figure class="media-left">
        <img class="useractivity__img" :src="useraction.userimg+'.png'" :srcset="`${useraction.userimg}.png 1x, ${useraction.userimg}@2x.png 2x`" alt="User Profile Image">
      </figure>
      <div class="media-content useractivity__content" :class="[useraction.playlist ? 'useractivity__share' : 'useractivity__track',]">
        <h3 class="useractivity__username">{{useraction.user}}</h3>
        <p class="useractivity__action" v-show="useraction.track">listened to <span class="useractivity__highlight">{{useraction.track}}</span></p>
        <p class="useractivity__action" v-show="useraction.playlist">shared her <span class="useractivity__highlight">{{useraction.playlist}}</span> playlist</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'useractivity',
  props: ['useraction'],
  data () {
    return {
      actionsplit: ''
    }
  },
  methods: {
  },
  created: function () {
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/app';

  .useractivity {
    @include mq($from: desktop) {
      margin-bottom: 20px;
    }
    &__img {
      width: 95px;
      height: 95px;
    }
    &__content {
      align-self: center;
    }
    &__username {
      font-size: 1.2rem;
      font-family: $font-tertiary;
      letter-spacing: -1px;
      font-weight: 700;
      margin-bottom: 0;
    }
    &__track,
    &__share {
      letter-spacing: -1px;      
    }
    &__track {
      .useractivity__highlight {
        color: $brand-primary;
        font-weight: 600;
      }
    }
    &__share {
      color: $white;
      .useractivity__highlight {
        color: #339864;
        font-weight: 600;
      }
    }
  }
</style>
