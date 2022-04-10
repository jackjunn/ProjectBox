import Vue from 'vue'
import Router from 'vue-router'
import WebMenu from '@/views/WebMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WebMenu',
      component: WebMenu
    }
  ]
})
