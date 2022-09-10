<template>
  <input
    :id="id"
    :name="computedName"
    :type="type"
    :placeholder="placeholder"
    :class="elementClass"
    :value="value"
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
    value: {
      type: String,
      default: null
    }
  },
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
