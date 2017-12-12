<template>
  <div id="app" class="app">
    <primary-nav/>
  </div>
</template>

<script>
import PrimaryNav from './components/PrimaryNav'
export default {
  name: 'app',
  components: {
    PrimaryNav
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/css/bulma.css';
@import '../node_modules/bulma-tooltip/bulma-tooltip.css';
@import '~sass-mq';

$brand-primary: #34A3B4;
.app {
  background-color: $brand-primary;

  @include mq($from: tablet) {
    padding: 0 40px 0 80px;
  }
}
</style>
