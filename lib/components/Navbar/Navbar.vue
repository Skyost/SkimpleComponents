<template>
  <nav class="navbar" :class="computedClasses" :data-bs-theme="theme">
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
    color: {
      type: String,
      default: 'body-tertiary'
    },
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    computedClasses () {
      return [
        `navbar-expand-${this.expand}`,
        `bg-${this.color}`
      ]
    }
  }
}
</script>
