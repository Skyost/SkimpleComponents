<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'SkiFormControl' })

const props = withDefaults(defineProps<{
  id?: string,
  name?: string,
  type?: string,
  placeholder?: string,
  modelValue?: string
}>(), {
  type: 'text'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const computedName = computed<string | null>(() => props.name ? props.name : props.id)
const inputClass = computed<string | null>(() => props.type === 'checkbox' ? 'form-check-input' : 'form-control')

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :id="id"
    :name="computedName"
    :type="type"
    :placeholder="placeholder"
    :class="inputClass"
    :value="modelValue"
    @input="onInput"
  >
</template>
