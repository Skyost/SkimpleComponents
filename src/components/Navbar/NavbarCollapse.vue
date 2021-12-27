<template>
  <div class="container-fluid">
    <ski-navbar-toggle :target="navbarId" />
    <div :id="navbarId" class="collapse navbar-collapse">
      <slot />
    </div>
  </div>
</template>

<script>
import SkiNavbarToggle from './NavbarToggle'

export default {
  name: 'SkiNavbarCollapse',
  components: { SkiNavbarToggle },
  data () {
    return {
      navbarId: `navbar-${this.getRandomIntInclusive(0, 10000)}`
    }
  },
  methods: {
    getRandomIntInclusive (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>
