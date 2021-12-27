import '../src/custom.scss'
// import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'bootstrap'

import Vue from 'vue'
import Demo from './Demo.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Demo)
}).$mount('#app')
