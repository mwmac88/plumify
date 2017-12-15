<template>
  <div id="app" class="app">
    <header class="header">
      <primary-nav/>
    </header>
    <section class="section section__primary">
      <div class="columns is-desktop">
        <div class="column is-7-desktop is-8-widescreen">
          <library-module/>
        </div>
        <div class="column is-5-desktop is-4-widescreen">
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
  // Import global styles
  @import './styles/app';

  html,
  .app {
    background-color: $brand-primary;
  }

  .header {
    height: auto;
    
    // @include mq($from: desktop) {
    //   height: 8vh;
    // }
    // @include mq($from: wide) {
    //   height: 12vh;
    // }
  }

  // Main Body Content Section - Library/Activity
  .section__primary {
    padding: 0.5rem 1rem 1rem 1rem;
    height: auto;

    @include mq($from: wide) {
      padding: 0.5rem 40px 1rem 80px;   
    }
  }
  .footer__controls {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: #164952;
    z-index: 9;
    
    @include mq($from: desktop) {
      padding: 0 40px 0 80px;
    }
  }
</style>