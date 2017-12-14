<template>
  <div id="app" class="app">
    <header class="header">
      <primary-nav/>
    </header>
    <section class="section section__primary">
      <div class="columns is-desktop">
        <div class="column is-8">
          <library-module/>
        </div>
        <div class="column is-4">
          <activity-module/>
        </div>
      </div>
    </section>
    <footer class="footer__controls">
      <player-controls-module />
    </footer>
  </div>
</template>

<script>
import PrimaryNav from './components/PrimaryNav'
import LibraryModule from './components/LibraryModule'
import ActivityModule from './components/ActivityModule'
import PlayerControlsModule from './components/PlayerControlsModule'

export default {
  name: 'app',
  components: {
    PrimaryNav,
    LibraryModule,
    ActivityModule,
    PlayerControlsModule
  }
}
</script>

<style lang="scss">
  @import './styles/app';

  .app {
    background-color: $brand-primary;
  }

  .header {
    @include mq($from: tablet) {
      padding: 20px 40px 0 80px;
    }
    @include mq($from: desktop) {
      height: 20vh;
    }
  }
  .section__primary {
    // height: 80vh;
    padding: 0.5rem 1rem 15vh 1rem;

    @include mq($from: tablet) {
      padding: 0 40px 0 80px;
    }
    @include mq($from: desktop) {
      height: 65vh;
    }
  }
  .footer__controls {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    // height: 12vh;
    background-color: #164952;
    z-index: 9;
    
    @include mq($from: desktop) {
      height: 15vh;
      padding: 0 40px 0 80px;      
    }
  }
</style>