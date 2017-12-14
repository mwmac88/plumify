<template>
  <div id="userActivity" class="useractivity">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="user.img" alt="User Profile Image">
        </p>
      </figure>
      <div class="media-content">
      <div class="content">
        <h3 class="useractivity__username">{{user.fullname}}</h3>
        <p class="useractivity__action">{{user.action}}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'useractivity'
}
</script>
