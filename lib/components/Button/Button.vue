<template>
  <router-link
    v-if="to"
    :to="to"
    class="btn"
    :class="elementClass"
    role="button"
  >
    <slot />
  </router-link>
  <a
    v-else-if="href"
    :href="href"
    class="btn"
    :class="elementClass"
    role="button"
  >
    <slot />
  </a>
  <button
    v-else
    class="btn"
    :class="elementClass"
    type="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SkiButton',
  props: {
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: 'dark'
    },
    outlined: {
      type: String,
      default: null
    }
  },
  computed: {
    elementClass () {
      return this.outlined ? `btn-outline-${this.variant}` : `btn-${this.variant}`
    }
  }
}
</script>
