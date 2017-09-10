<template>
  <app-body>
    <breadcrumb slot="crumbs">
      <breadcrumb-item href="/">Home</breadcrumb-item>
      <breadcrumb-item href="/app">{{app}}</breadcrumb-item>
      <breadcrumb-item >{{pluralize(model)}}</breadcrumb-item>      
    </breadcrumb>
    <div slot="content">
        <el-table
          :data="records"
          border
          @row-dblclick="handleRowDblClick"
          :fit="true"
          style="width: 100%" max-height="500">
          <el-table-column v-for="attribute in attributes"
            :prop="attribute.name"
            :label="attribute.label"
            :key="attribute.id"></el-table-column>
          <el-table-column
            fixed="right"
            label="Operations"
            width="120">
          </el-table-column>
        </el-table>
      <div v-if="showForm" class="right-panel">
        <h1>{{currentRecord.name}}</h1>
        <Button type="primary" @click="showForm = false">Close</Button>
      </div>
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
      modalForm: false,
      showForm: false,
      currentRecord: null,
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office'
      }]
    }
  },
  created () {
    // this.list()
  },
  computed: {
    ...mapGetters({
      'currentApp': 'apps/currentApp',
      'currentModel': 'crud/currentModel',
      'records': 'crud/records',
      'cursor': 'crud/cursor'
    }),
    app () {
      return this.currentApp ? this.currentApp.name : ''
    },
    model () {
      return this.currentModel ? this.currentModel.name : ''
    },
    attributes () {
      return this.currentModel.attributes || []
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
    },
    handleRowDblClick (row) {
      this.currentRecord = row
      this.showForm = true
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

  .top-right-modal {
    .ivu-modal {
      top: 0;
      right: 0;
    }
  }
  .right-panel {
    z-index: 3;
    min-width: 500px;
    padding: 20px;
    background-color: #fafafa;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    border-right: 1px solid #888888;
    box-shadow: -2px 0px 5px rgba(0,0,0,.3);
  }
</style>
