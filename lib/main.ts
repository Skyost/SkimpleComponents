import * as skiComponents from './components/index'
import { App, Plugin } from 'vue';

const vuePlugin: Plugin = {
  install (app: App) {
    for (const componentName in skiComponents) {
      if (Object.prototype.hasOwnProperty.call(skiComponents, componentName)) {
        const component = skiComponents[componentName]
        app.component(component.name, component)
      }
    }
  }
}

export default vuePlugin
export * from './components/index'
