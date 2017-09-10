<template>
  <app-body>
    <breadcrumb slot="crumbs">
      <breadcrumb-item href="/apps">Apps</breadcrumb-item>
      <breadcrumb-item>{{title}}</breadcrumb-item>
    </breadcrumb>
    <div slot="content">
      <Collapse v-model="active" accordion>
        <Panel name="1">
          Models
          <ul slot="content">
            <li v-for="model in models" :key="model.id"> 
              <Button type="text" @click="handleModelClick(model)">{{pluralize(model.name)}}</Button>
            </li>
          </ul>
        </Panel>
        <Panel name="2">
          Import / Export Data
        </Panel>
      </Collapse>

    </div>
  </app-body>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import inflection from 'inflection'
import AppBody from '@/components/AppBody'

export default {
  name: 'apps',
  components: {
    AppBody
  },
  data () {
    return {
      active: '1'
    }
  },
  created () {
    // this.list()
  },
  computed: {
    ...mapGetters({'currentModel': 'crud/currentModel', 'currentApp': 'apps/currentApp'}),
    title () {
      return this.currentApp ? this.currentApp.name : ''
    },
    models () {
      return this.currentApp ? this.currentApp.models : []
    }
  },
  methods: {
    ...mapActions('crud', ['setCurrentModel']),
    pluralize (str) {
      return inflection.capitalize(inflection.pluralize(str))
    },
    handleModelClick (model) {
      this.setCurrentModel(model)
      this.$router.push('model')
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
