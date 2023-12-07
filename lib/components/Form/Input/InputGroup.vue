<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'SkiInputGroup' })

const props = defineProps<{
  size?: string
}>()

const inputGroupClass = computed<string | null>(() => props.size ? `input-group-${props.size}` : null)
</script>

<template>
  <div class="input-group" :class="inputGroupClass">
    <slot />
  </div>
</template>
