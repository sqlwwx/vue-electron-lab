<template>
  <div>
    video-player
    <video-player :options="videoOptions"></video-player>
  </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      videoOptions: {
        source: {
          type: 'video/webm',
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
        }
      }
    }
  },
  methods: {
    playerAction (action) {
      this.$emit('playerAction', action)
    }
  }
}
</script>
