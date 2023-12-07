<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'SkiColumn' })

const props = defineProps<{
  width?: string | number,
  xxl?: string | number,
  xl?: string | number,
  lg?: string | number,
  md?: string | number,
  sm?: string | number,
  xs?: string | number
}>()

const columnClasses = computed<string[]>(() => {
  const result = []
  if (props.width || props.xxl || props.xl || props.lg || props.md || props.sm || props.xs) {
    if (props.width) {
      result.push(`col-${props.width}`)
    }
    if (props.xxl) {
      result.push(`col-xxl-${props.xxl}`)
    }
    if (props.xl) {
      result.push(`col-xl-${props.xl}`)
    }
    if (props.lg) {
      result.push(`col-lg-${props.lg}`)
    }
    if (props.md) {
      result.push(`col-md-${props.md}`)
    }
    if (props.sm) {
      result.push(`col-sm-${props.sm}`)
    }
    if (props.xs) {
      result.push(`col-xs-${props.xs}`)
    }
  } else {
    result.push('col')
  }
  return result
})
</script>

<template>
  <div :class="columnClasses">
    <slot/>
  </div>
</template>
