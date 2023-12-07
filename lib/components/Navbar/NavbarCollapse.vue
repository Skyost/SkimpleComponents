<script setup lang="ts">
import SkiNavbarToggle from './NavbarToggle.vue'

defineProps<{
  id: string
}>()
</script>

<template>
  <div class="container-fluid">
    <slot name="brand" />
    <ski-navbar-toggle :target="id" />
    <div :id="id" class="collapse navbar-collapse">
      <slot />
    </div>
  </div>
</template>
