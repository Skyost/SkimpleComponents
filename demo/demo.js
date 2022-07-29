// Import SkimpleComponents style.
import '@/style.scss'

// Import Bootstrap icons.
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import Bootstrap JS.
import 'bootstrap'

import { createApp } from 'vue'
import SkimpleComponentsDemo from './SkimpleComponentsDemo.vue'
import plugin from '@/main.js'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

createApp(SkimpleComponentsDemo)
  .use(router)
  .use(plugin)
  .mount('#app')
