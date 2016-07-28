import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router'
import {$context} from './config'
import './filter/currencyfilter'

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  saveScrollPosition: true
})

routerConfig(router)

// Resource
Vue.use(VueResource)

Vue.http.options.root = $context
Vue.http.options.emulateJSON = true

router.start(App, '#app')

window.router = router
