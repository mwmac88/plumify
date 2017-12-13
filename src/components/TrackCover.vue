<template>
  <div id="trackCover" class="trackcover">
    <!-- <img src="../assets/covers/album-1.png"> -->
    {{track.title}}
  </div>  
</template>

<script>
export default {
  name: 'trackcover',
  props: ['track']
}
</script>
