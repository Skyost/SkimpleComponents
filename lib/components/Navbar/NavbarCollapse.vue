<template>
  <div class="container-fluid">
    <slot name="brand" />
    <ski-navbar-toggle :target="navbarId" />
    <div :id="navbarId" class="collapse navbar-collapse">
      <slot />
    </div>
  </div>
</template>

<script>
import SkiNavbarToggle from './NavbarToggle.vue'

export default {
  name: 'SkiNavbarCollapse',
  components: { SkiNavbarToggle },
  props: {
    id: {
      type: String,
      default: null
    }
  },
  computed: {
    navbarId () {
      return this.id ?? `navbar-${Date.now()}${Math.round(Math.random() * 1000)}`
    }
  }
}
</script>
