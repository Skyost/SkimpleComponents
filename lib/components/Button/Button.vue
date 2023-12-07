<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'SkiButton' })

const props = withDefaults(defineProps<{
  to?: string,
  href?: string,
  variant?: string,
  outlined?: string,
  size?: 'lg' | 'sm',
  disabled?: boolean | string
}>(), {
  variant: 'dark'
})

const buttonClasses = computed<string[]>(() => {
  const result = [
    props.outlined ? `btn-outline-${props.variant}` : `btn-${props.variant}`,
  ]
  if (props.size) {
    result.push(`btn-${props.size}`)
  }
  if (props.disabled) {
    result.push('disabled')
  }
  return result
})
const disabledAttribute = computed<boolean | null>(() => props.disabled ? true : null)
</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    class="btn"
    :class="buttonClasses"
    role="button"
    :aria-disabled="disabledAttribute"
  >
    <slot />
  </router-link>
  <a
    v-else-if="href"
    :href="href"
    class="btn"
    :class="buttonClasses"
    role="button"
    :aria-disabled="disabledAttribute"
  >
    <slot />
  </a>
  <button
    v-else
    class="btn"
    :class="buttonClasses"
    type="button"
    :disabled="disabledAttribute"
  >
    <slot />
  </button>
</template>
