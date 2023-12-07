<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'SkiNavbarItem' })

const props = defineProps<{
  to?: string,
  href?: string,
  active?: boolean | string
}>()

const elementClass = computed<string | null>(() => props.active ? 'active' : null)
</script>

<template>
  <li class="nav-item">
    <router-link v-if="to" :to="to" class="nav-link" :class="elementClass">
      <slot />
    </router-link>
    <a v-else-if="href" :href="href" class="nav-link" :class="elementClass">
      <slot />
    </a>
    <button v-else class="btn btn-link nav-link" :class="elementClass">
      <slot />
    </button>
  </li>
</template>
