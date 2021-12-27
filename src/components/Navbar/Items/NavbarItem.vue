<template>
  <li class="nav-item">
    <router-link v-if="to" :to="to" class="nav-link" :class="elementClass">
      <slot />
    </router-link>
    <a v-else-if="href" :href="href" class="nav-link" :class="elementClass">
      <slot />
    </a>
    <span v-else class="nav-link" :class="elementClass">
      <slot />
    </span>
  </li>
</template>

<script>
export default {
  name: 'SkiNavbarItem',
  props: {
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    elementClass () {
      return this.active ? 'active' : null
    }
  }
}
</script>
