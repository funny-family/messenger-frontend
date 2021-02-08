<template>
  <div class="sml-container">
    <div class="sml-header" v-if="isHeaderSlotEmpty">
      <slot name="header" />
    </div>

    <div class="sml-main" v-if="isMainSlotEmpty">
      <slot name="main" />
    </div>

    <!-- default slot (extra container) -->
    <slot />

    <div class="sml-footer" v-if="isFooterSlotEmpty">
      <slot name="footer" />
    </div>
  </div>
</template>

<script src="./scrollable-main-layout.module.js"></script>

<style scoped src="./scrollable-main-layout.styles.css"></style>
