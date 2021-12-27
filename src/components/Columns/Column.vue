<template>
  <div :class="computedClasses">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SkiColumn',
  props: {
    width: {
      type: String,
      default: null
    },
    xxl: {
      type: String,
      default: null
    },
    xl: {
      type: String,
      default: null
    },
    lg: {
      type: String,
      default: null
    },
    md: {
      type: String,
      default: null
    },
    sm: {
      type: String,
      default: null
    },
    xs: {
      type: String,
      default: null
    }
  },
  computed: {
    computedClasses () {
      const classes = []
      if (this.width || this.xxl || this.lg || this.md || this.sm || this.xs) {
        if (this.width) {
          classes.push(`col-${this.width}`)
        }
        if (this.xxl) {
          classes.push(`col-xxl-${this.xxl}`)
        }
        if (this.lg) {
          classes.push(`col-lg-${this.lg}`)
        }
        if (this.md) {
          classes.push(`col-md-${this.md}`)
        }
        if (this.sm) {
          classes.push(`col-sm-${this.sm}`)
        }
        if (this.xs) {
          classes.push(`col-xs-${this.xs}`)
        }
      } else {
        classes.push('col')
      }
      return classes
    }
  }
}
</script>
