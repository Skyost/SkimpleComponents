<script setup lang="ts">
defineOptions({ name: 'SkiFormControlWithLabel' })

defineProps<{
  id?: string,
  label?: string
}>()
</script>

<template>
  <div>
    <label v-if="label" class="form-label" v-text="label" :for="id" />
    <slot />
  </div>
</template>
