<template>
  <select
      class="form-select"
      :class="elementClass"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  >
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
    },
    modelValue: {
      type: String,
      default: null
    }
  },
  emits: ['update:modelValue'],
  computed: {
    elementClass () {
      return this.size ? `form-select-${this.size}` : null
    }
  }
}
</script>
