<template>
  <i class="bi" :class="`bi-${icon}`" />
</template>

<script>
export default {
  name: 'SkiIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
