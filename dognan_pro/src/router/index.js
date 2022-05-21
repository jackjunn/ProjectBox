import Vue from 'vue'
import Router from 'vue-router'
import WebMenu from '@/views/WebMenu'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'WebMenu',
        component: WebMenu
    }
]

export default new Router({
    mode: 'history',
    routes
})
