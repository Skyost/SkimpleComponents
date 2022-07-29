<template>
  <select class="form-select" :class="elementClass">
    <slot />
  </select>
</template>

<script>
export default {
  name: 'SkiFormSelect',
  props: {
    size: {
      type: String,
      default: null
    }
  },
  computed: {
    elementClass () {
      return this.size ? `form-select-${this.size}` : null
    }
  }
}
</script>
