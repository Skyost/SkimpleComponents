import '@/style.scss'
// import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'bootstrap'

import {createApp} from 'vue'
import plugin from '../src'
import Demo from './Demo.vue'

createApp(Demo)
  .use(plugin)
  .mount('#app')
