<style>
</style>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    created () {
      window.app = this
    },
    store
  }
</script>
