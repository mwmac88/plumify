<template>
  <div id="app" class="app">
    <header class="header">
      <primary-nav/>
    </header>
    <section class="section section__primary">
      <div class="columns is-desktop">
        <div class="column is-7">
          <library-module  />
        </div>
        <div class="column is-4 is-offset-1">
          <activity-module />
        </div>
      </div>
    </section>
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
  @import '~bulma';

  .app {
    background-color: $brand-primary;

    @include mq($from: tablet) {
      padding: 0 40px 0 80px;
    }
  }

  .header {
    height: 8vh;
    
    @include mq($from: desktop) {
      height: 20vh;
    }
  }
  .section__primary {
    height: 80vh;
    
    @include mq($from: desktop) {
      height: 65vh;
      padding: 0;
    }
  }
</style>