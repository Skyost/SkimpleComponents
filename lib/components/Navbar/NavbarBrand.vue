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

<script>
export default {
  name: 'SkiNavbarBrand',
  props: {
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    }
  }
}
</script>
