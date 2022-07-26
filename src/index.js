import * as skiComponents from './components'

const plugin = {
  install (Vue) {
    for (const componentName in skiComponents) {
      if (Object.prototype.hasOwnProperty.call(skiComponents, componentName)) {
        // eslint-disable-next-line import/namespace
        const component = skiComponents[componentName]
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin
export * from './components'
