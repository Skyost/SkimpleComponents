<template>
  <div>
    <ski-navbar class="mb-5">
      <ski-navbar-collapse>
        <ski-navbar-items>
          <ski-navbar-item href="#">
            <ski-icon icon="house-door-fill"/>
            Accueil
          </ski-navbar-item>
        </ski-navbar-items>
      </ski-navbar-collapse>
    </ski-navbar>
    <ski-container>
      <ski-columns>
        <ski-column>First column.</ski-column>
        <ski-column>Second column.</ski-column>
        <ski-column>Third column.</ski-column>
      </ski-columns>
      <ski-columns>
        <ski-column width="2">
          <ski-button variant="danger" @click="dangerClick">Danger !</ski-button>
        </ski-column>
        <ski-column>
          <ski-button class="d-block w-100">Big button</ski-button>
        </ski-column>
        <ski-column width="2">
          <ski-button variant="info" outlined="true" href="https://skyost.eu">Info</ski-button>
        </ski-column>
      </ski-columns>
      <form class="mt-5">
        <div class="mb-3">
          <ski-form-control-with-label label="Email">
            <ski-form-control type="email" placeholder="Enter your email"/>
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
  </div>
</template>

<script>
import {
  SkiButton,
  SkiColumn,
  SkiColumns,
  SkiContainer,
  SkiFormControl,
  SkiFormControlWithLabel,
  SkiIcon,
  SkiNavbar,
  SkiNavbarCollapse,
  SkiNavbarItem,
  SkiNavbarItems
} from '@'

export default {
  name: 'Demo',
  components: {
    SkiIcon,
    SkiNavbar,
    SkiNavbarCollapse,
    SkiNavbarItems,
    SkiNavbarItem,
    SkiContainer,
    SkiColumns,
    SkiColumn,
    SkiButton,
    SkiFormControlWithLabel,
    SkiFormControl
  },
  methods: {
    dangerClick: function () {
      alert('Danger !')
    }
  }
}
</script>
