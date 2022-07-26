import {addPlugin, createResolver, defineNuxtModule, isNuxt2} from '@nuxt/kit'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const metadata = require('./package.json')

export default defineNuxtModule({
  meta: {
    name: 'SkimpleComponents',
    version: metadata.version,
    configKey: 'skimpleComponents',
    compatibility: { nuxt: '^3.0.0' }
  },
  defaults: {
    bootstrapCss: true,
    bootstrapJs: true,
    icons: true
  },
  setup: (options, nuxt) => {
    // The current version is not compatible with Nuxt 2 !
    if (isNuxt2()) {
      throw new Error('This version of SkimpleComponents is not meant to be used with Nuxt 2 !')
    }

    // Create resolver to resolve relative paths.
    const { resolve } = createResolver(import.meta.url)

    // Let's add the required settings according to the provided options.
    if (!options.icons) {
      nuxt.options.css.unshift('bootstrap-icons/font/bootstrap-icons.css')
    }
    if (!options.bootstrapCss) {
      nuxt.options.css.unshift(`${metadata.name}/src/style.scss`)
    }
    if (!options.bootstrapJs) {
      addPlugin({
        src: resolve('./src/plugin.ts'),
        mode: 'client'
      })
    }
  }
})
