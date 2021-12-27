module.exports = function (moduleOptions = {}) {
  // Merge moduleOptions with default.
  const options = {
    ...this.options.skimpleComponents,
    ...moduleOptions
  }

  // Ensure we have arrays.
  this.options.css = [].concat(this.options.css || [])
  this.options.plugins = [].concat(this.options.plugins || [])

  // And we add the required settings according to the provided options.
  if (options.icons !== false) {
    this.options.css.unshift('bootstrap-icons/font/bootstrap-icons.css')
  }
  if (options.bootstrapCss !== false) {
    this.options.css.unshift('skimple-components/src/custom.scss')
  }
  if (options.bootstrapJs !== false) {
    this.options.plugins.unshift({ src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', mode: 'client' })
  }
}
