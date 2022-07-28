// Warnings are ignored here because this file is meant to be imported by Nuxt.
import * as bootstrap from 'bootstrap'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { defineNuxtPlugin } from '#app'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bootstrap', bootstrap)
})
