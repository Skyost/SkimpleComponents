<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'SkiNavbar' })

const props = withDefaults(defineProps<{
  expand?: string,
  color?: string,
  theme?: string
}>(), {
  expand: 'lg',
  color: 'body-tertiary'
})

const navbarClasses = computed<string[]>(() => [
  `navbar-expand-${props.expand}`,
  `bg-${props.color}`
])
</script>


<template>
  <nav class="navbar" :class="navbarClasses" :data-bs-theme="theme">
    <slot />
  </nav>
</template>
