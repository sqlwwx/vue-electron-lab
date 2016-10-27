<style scoped>
</style>

<template>
<div class="window">
  <div class="window-content">
    <div class="pane-group">
      <navs></navs>
      <div class="pane">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import Navs from './PhotonPageView/Navs'
  export default {
    components: {
      Navs
    },
    name: 'photon-page'
  }
</script>
