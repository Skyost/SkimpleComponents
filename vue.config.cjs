const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  }
})
