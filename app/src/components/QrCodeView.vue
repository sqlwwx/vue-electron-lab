<style scoped>
textarea {
  width: 100%;
  height: 100%;
}
</style>

<template>
<div class="pane-group">
  <div class="pane">
    <textarea v-model.trim="text"></textarea>
  </div>
  <div class="pane">
    <img ref="qrcodeImg"/>
  </div>
</div>
</template>

<script>
  import { createQRPNGBase64 } from './QrCodeView/utils'
  export default {
    name: 'qr-code',
    watch: {
      text (text) {
        this.createImg(text)
      }
    },
    data () {
      return {
        text: 'hello wuweixing!'
      }
    },
    mounted () {
      this.createImg()
    },
    methods: {
      createImg (text) {
        createQRPNGBase64(text || this.text).then((dataUri) => {
          this.$refs.qrcodeImg.src = dataUri
        })
      }
    }
  }
</script>
