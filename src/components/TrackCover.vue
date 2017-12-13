<template>
  <div id="trackCover" class="trackcover">
    <figure class="image is-96x96">
      <img :src="track.cover" :srcset="`${track.cover} 1x, ${track.cover2x} 2x`" alt="Track Cover">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'trackcover',
  props: ['track']
}
</script>
