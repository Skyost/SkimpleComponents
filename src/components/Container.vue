<template>
<div :class="divClass">
  <slot />
</div>
</template>

<script>
export default {
  name: 'SkiContainer',
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    divClass () {
      return this.fluid ? 'container-fluid' : 'container'
    }
  }
}
</script>
