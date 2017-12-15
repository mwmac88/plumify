<template>
  <div id="activityModule" class="activity module">
    <div class="level module__header">
      <div class="level-left">
        <h2 class="level-item title is-1">Activity</h2>
      </div>
    </div>
    <div class="module__body">
      <user-activity v-for="(useraction, index) in dataSubset" :useraction="useraction" :key="index" />
    </div>
    <div class="module__controls">
      <div class="field is-flex activity__controlscontainer">
        <div class="control">
          <button class="button is-light is-medium is-rounded" disabled>Prev</button>
        </div>
        <div class="control">
          <button class="button is-light is-medium is-rounded">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userActivities from '../assets/activity.json'
import UserActivity from './UserActivity'
export default {
  name: 'activitymodule',
  components: {
    UserActivity
  },
  data () {
    return {
      userActivities: userActivities.listens,
      dataSubset: [],
      page: 1
    }
  },
  methods: {
    paginateData () {
      this.dataSubset = this.userActivities.splice(5).reverse()
    }
  },
  created: function () {
    this.paginateData()
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/app';

  .activity {
    &__controlscontainer {
      justify-content: center;
    }
    .button {
      margin-right: 10px;
    }
  }
</style>
