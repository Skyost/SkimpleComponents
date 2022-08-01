import * as skiComponents from './components/index.js'

const vuePlugin = {
  install (Vue) {
    for (const componentName in skiComponents) {
      if (Object.prototype.hasOwnProperty.call(skiComponents, componentName)) {
        const component = skiComponents[componentName]
        Vue.component(component.name, component)
      }
    }
  }
}

export { vuePlugin }
export * from './components/index.js'
