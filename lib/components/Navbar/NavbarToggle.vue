<template>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    :data-bs-target="`#${target}`"
    :aria-controls="target"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
</template>

<script>
export default {
  name: 'SkiNavbarToggle',
  props: {
    target: {
      type: String,
      required: true
    }
  }
}
</script>
