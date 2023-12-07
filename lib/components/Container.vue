<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'SkiContainer' })

const props = defineProps<{
  fluid?: boolean | string
}>()

const divClass = computed<string>(() => props.fluid ? 'container-fluid' : 'container')
</script>

<template>
  <div :class="divClass">
    <slot />
  </div>
</template>
