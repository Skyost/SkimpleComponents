<template>
  <nav class="navbar" :class="computedClasses">
    <slot />
  </nav>
</template>

<script>
export default {
  name: 'SkiNavbar',
  props: {
    expand: {
      type: String,
      default: 'lg'
    },
    brightness: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    computedClasses () {
      return [
        `navbar-expand-${this.expand}`,
        `navbar-${this.brightness}`,
        `bg-${this.brightness}`
      ]
    }
  }
}
</script>
