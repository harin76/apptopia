// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Table, TableColumn} from 'element-ui'
import iView from 'iview'

import App from './App'
import store from './store'
import router from './router'

import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-default/index.css'

Vue.use(iView)
// Register the table component
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
