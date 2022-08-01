<template>
  <div :id="id" class="modal fade" tabindex="-1" :aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" :class="modalDialogClass">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="title" class="modal-title" :id="modalLabel" v-text="title" />
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div v-if="showFooter" class="modal-footer">
          <button v-if="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-text="closeButton" />
          <slot name="buttons" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkiModal',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    closeButton: {
      type: String,
      default: 'Close'
    }
  },
  computed: {
    modalLabel () {
      return `${this.id}-label`
    },
    modalDialogClass () {
      return this.size ? `modal-${this.size}` : null
    }
  }
}
</script>
