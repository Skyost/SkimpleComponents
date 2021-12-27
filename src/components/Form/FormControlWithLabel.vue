<template>
  <div>
    <label v-if="label" class="form-label" v-text="label" :for="id" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SkiFormControlWithLabel',
  props: {
    label: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    }
  }
}
</script>
