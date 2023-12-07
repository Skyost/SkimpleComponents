<script setup lang="ts">
defineOptions({ name: 'SkiIcon' })

defineProps<{
  icon: string
}>()
</script>

<template>
  <i class="bi" :class="`bi-${icon}`" />
</template>
