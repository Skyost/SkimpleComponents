import * as bootstrap from 'bootstrap'

// Those ignores allow use to not include Nuxt.js dependency.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bootstrap', bootstrap)
})
