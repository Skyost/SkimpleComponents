<script setup lang="ts">
defineOptions({ name: 'SkiNavbarBrand' })

defineProps<{
  to?: string,
  href?: string
}>()
</script>

<template>
  <router-link v-if="to" :to="to" class="navbar-brand">
    <slot />
  </router-link>
  <a v-else-if="href" :href="href" class="navbar-brand">
    <slot />
  </a>
  <span v-else class="navbar-brand">
    <slot />
  </span>
</template>
