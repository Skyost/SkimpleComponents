<script setup lang="ts">
import {
  SkiButton,
  SkiColumn,
  SkiColumns,
  SkiContainer,
  SkiFormControl,
  SkiFormControlWithLabel,
  SkiIcon,
  SkiModal,
  SkiNavbar,
  SkiNavbarBrand,
  SkiNavbarCollapse,
  SkiNavbarItem,
  SkiNavbarItems
} from '@/main'
import { ref, watch } from 'vue'

const email = ref<string>('default@email.com')
watch(email, (value) => console.log(`Updated email : ${value}.`))

const dangerClick = () => alert('Your computer will explode in five seconds...')
</script>

<template>
  <div>
    <ski-navbar class="mb-5" color="dark" theme="dark">
      <ski-navbar-collapse id="navbar">
        <template #brand>
          <ski-navbar-brand>
            SkimpleComponents
          </ski-navbar-brand>
        </template>
        <ski-navbar-items>
          <ski-navbar-item active>
            <ski-icon icon="house-door-fill"/>
            Home
          </ski-navbar-item>
          <ski-navbar-item data-bs-toggle="modal" data-bs-target="#about-modal">
            <ski-icon icon="info-circle-fill"/>
            About
          </ski-navbar-item>
        </ski-navbar-items>
      </ski-navbar-collapse>
    </ski-navbar>
    <ski-container>
      <ski-columns>
        <ski-column class="text-start">First column.</ski-column>
        <ski-column class="text-center">Second column.</ski-column>
        <ski-column class="text-end">Third column.</ski-column>
      </ski-columns>
      <ski-columns>
        <ski-column width="2">
          <ski-button variant="danger" class="w-100" @click="dangerClick">Danger !</ski-button>
        </ski-column>
        <ski-column>
          <ski-button class="d-block w-100">Big button</ski-button>
        </ski-column>
        <ski-column width="2">
          <ski-button variant="info" class="w-100" outlined="true" href="https://skyost.eu">Info</ski-button>
        </ski-column>
      </ski-columns>
      <form class="mt-5 p-5 bg-light">
        <div class="mb-3">
          <ski-form-control-with-label label="Email">
            <ski-form-control type="email" placeholder="Enter your email" v-model="email"/>
          </ski-form-control-with-label>
        </div>
        <div class="mb-3">
          <ski-form-control-with-label label="Password">
            <ski-form-control type="password" placeholder="Enter your password"/>
          </ski-form-control-with-label>
        </div>
        <div class="mb-3 form-check">
          <ski-form-control-with-label label="Remember me">
            <ski-form-control type="checkbox" />
          </ski-form-control-with-label>
        </div>
        <ski-button type="submit">Submit</ski-button>
      </form>
    </ski-container>
    <ski-modal id="about-modal" title="About" size="lg">
      <p class="mb-0">
        <a href="https://github.com/Skyost/SkimpleComponents">SkimpleComponents</a> by Skyost.
      </p>
    </ski-modal>
  </div>
</template>
