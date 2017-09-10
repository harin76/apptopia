import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Dashboard from '@/views/Dashboard'
import Apps from '@/views/Apps'
import App from '@/views/App'
import Model from '@/views/Model'
import Reports from '@/views/Reports'
import Views from '@/views/Views'
import Test from '@/views/Test'
import Workarea from '@/views/Workarea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/',
      name: 'workarea',
      component: Workarea,
      children: [{
        path: 'home',
        component: Hello
      }, {
        path: 'dashboard',
        component: Dashboard
      }, {
        path: 'apps',
        component: Apps
      }, {
        path: 'app',
        component: App
      }, {
        path: 'model',
        component: Model
      }, {
        path: 'reports',
        component: Reports
      }, {
        path: 'views',
        component: Views
      }]
    },
    { path: '*', redirect: '/home' }
  ]
})
