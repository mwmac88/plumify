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
    
  }
</style>
