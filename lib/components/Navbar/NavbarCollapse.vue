<template>
  <div class="container-fluid">
    <slot name="brand" />
    <ski-navbar-toggle :target="id" />
    <div :id="id" class="collapse navbar-collapse">
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
      required: true
    }
  }
}
</script>
