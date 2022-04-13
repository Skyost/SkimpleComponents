<template>
  <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="title" class="modal-title" :id="modalLabel" v-text="title" />
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
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
      default: null
    },
    title: {
      type: String,
      default: null
    },
    closeButton: {
      type: String,
      default: 'Close'
    }
  },
  data () {
    return {
      modalId: this.id ?? `modal-${this.getRandomIntInclusive(0, 10000)}`
    }
  },
  computed: {
    modalLabel () {
      return `${this.modalId}-label`
    }
  }
}
</script>
