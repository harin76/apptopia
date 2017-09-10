<template>
  <app-body>
    <breadcrumb slot="crumbs">
      <breadcrumb-item href="/">Home</breadcrumb-item>
      <breadcrumb-item>{{title}}</breadcrumb-item>
    </breadcrumb>
    <div slot="content">
      <Row :gutter="12">
        <Col span="6" v-for="app in apps" :key="app._id">
          <Card>
            <h3 @click="handleAppClick(app._id)">{{app.name}}</h3>
          </Card>
        </Col>
      </Row>
    </div>
  </app-body>
  <!-- <app-content>
    <content-header :title="title"></content-header>
    <content-body>
      <el-row>
         <el-col :span="8" v-for="(app, index) in apps" :key="app.name" :offset="index > 0 ? 2 : 0">
            <el-card  :body-style="{ padding: '5px' }">
              <h5 @click="handleAppClick(app._id)">{{app.name}}</h5>
            </el-card>
          </el-col>
      </el-row>
    </content-body>
  </app-content> -->

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppBody from '@/components/AppBody'

export default {
  name: 'appso',
  components: {
    AppBody
  },
  data () {
    return {
      title: 'Apps',
      currentDate: new Date()
    }
  },
  created () {
    this.list()
  },
  computed: {
    ...mapGetters({'apps': 'apps/apps'})
  },
  methods: {
    ...mapActions('apps', ['list', 'setCurrentApp']),
    handleAppClick (appId) {
      this.setCurrentApp(appId)
      this.$router.push('app')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../styles/variables';
  .card-body {
    padding: 5px;
  }
</style>
