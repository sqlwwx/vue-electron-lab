<template>
<div class="window">
  <div class="window-content">
    <div class="pane-group">
      <navs></navs>
      <div class="pane">
        <transition :name="transitionName">
          <router-view class="child-view"></router-view>
        </transition>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navs from './PhotonPageView/Navs'
export default {
  name: 'photon-page',
  components: {
    Navs
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>
