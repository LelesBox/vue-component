import Vue from 'vue'
import routerMap from './router'
import VueRouter from 'vue-router'
require('./scss/_global.scss')

Vue.use(VueRouter)

var router = new VueRouter()
router.map(routerMap)

/* eslint-disable no-new */
router.start(Vue.extend({}), 'body')
window.Vue = Vue
