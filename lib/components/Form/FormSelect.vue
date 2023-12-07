<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'SkiFormSelect' })

const props = defineProps<{
  id?: string,
  name?: string,
  size?: string,
  modelValue?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const computedName = computed<string | null>(() => props.name ? props.name : props.id)
const selectClass = computed<string | null>(() => props.size ? `form-select-${props.size}` : null)

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value)
}
</script>

<template>
  <select
      class="form-select"
      :name="computedName"
      :class="selectClass"
      :value="modelValue"
      @input="onInput"
  >
    <slot />
  </select>
</template>
