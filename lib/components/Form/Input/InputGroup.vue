<template>
  <div class="input-group" :class="this.elementClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SkiInputGroup',
  props: {
    size: {
      type: String,
      default: null
    }
  },
  computed: {
    elementClass () {
      return this.size ? `input-group-${this.size}` : null
    }
  }
}
</script>
