<template>
  <input
    :id="id"
    :name="computedName"
    :type="type"
    :placeholder="placeholder"
    :class="elementClass"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'SkiFormControl',
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
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
    computedName () {
      return this.name ? this.name : this.id
    },
    elementClass () {
      return this.type === 'checkbox' ? 'form-check-input' : 'form-control'
    }
  }
}
</script>
