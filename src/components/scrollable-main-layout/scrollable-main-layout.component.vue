<template>
  <div class="sml-container">
    <div
      v-if="isHeaderSlotEmpty"
      class="sml-header"
    >
      <slot name="header" />
    </div>

    <div
      v-if="isMainSlotEmpty"
      class="sml-main"
    >
      <slot name="main" />
    </div>

    <!-- default slot (extra container) -->
    <slot />

    <div
      v-if="isFooterSlotEmpty"
      class="sml-footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script src="./scrollable-main-layout.module.js"></script>

<style scoped src="./scrollable-main-layout.styles.css"></style>
