<style scoped>
textarea {
  width: 100%;
  height: 100%;
}
</style>

<template>
<div class="pane-group">
  <div class="pane">
    <textarea v-model.trim="uml" lazy></textarea>
  </div>
  <div class="pane">
    <img class="uml-img" :src="'http://www.plantuml.com/plantuml/png/' + encodedUml">
    <div class="toolbar-actions">
      <button @click="saveCode" class="btn btn-primary pull-right">复制代码</button>
    </div>
    <div class="toolbar-actions">
      <button @click="saveURL" class="btn btn-primary pull-right">复制图片地址</button>
    </div>
</div>
</template>

<script>
import plantumlEncoder from 'plantuml-encoder'
export default {
  data () {
    return {
      uml: `
Client -> WebStore: 1. create order: post {order} /GamificationOrders
WebStore --> Client: 2: order
Client -> AppStore: 3: payment
AppStore --> Client: 4: receipt_data
Client -> WebStore: 5: verify: post {receipt_data} /GamificationOrders/{orderId}/execWorkflow/verify
WebStore -> WebStore: 6: base64(receipt_data)
WebStore -> AppStore: 7: verify
AppStore --> WebStore: 8: verify_result
WebStore -> Client: 9: notify
`
    }
  },
  computed: {
    encodedUml () {
      return plantumlEncoder.encode(this.uml)
    }
  },
  methods: {
    saveURL () {
      try {
        this.$electron.clipboard.writeText('http://www.plantuml.com/plantuml/png/' + this.encodedUml)
        /* eslint-disable no-new */
        new Notification('复制UML图片地址成功')
      } catch (error) {
        /* eslint-disable no-new */
        new Notification('复制UML图片地址失败')
      }
    },
    saveCode () {
      try {
        this.$electron.clipboard.writeText('@startuml\n' + this.uml + '\n@enduml')
        /* eslint-disable no-new */
        new Notification('复制代码成功')
      } catch (error) {
        /* eslint-disable no-new */
        new Notification('复制代码失败')
      }
    }
  }
}
</script>
