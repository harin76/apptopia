<template>
<app-body>
    <breadcrumb slot="crumbs">
      <breadcrumb-item href="/">Home</breadcrumb-item>
      <breadcrumb-item >{{title}}</breadcrumb-item>      
    </breadcrumb>
    <div slot="content">
    </div>
</app-body>
</template>

<script>
import AppBody from '@/components/AppBody'

export default {
  name: 'dashboard',
  components: {
    AppBody
  },
  data () {
    return {
      title: 'Views'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../styles/variables';
</style>
