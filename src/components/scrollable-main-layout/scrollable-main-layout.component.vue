<template>
  <div class="sml-container">
    <div
      v-if="slotChecker.isHeaderSlotUsed"
      class="sml-header"
    >
      <slot name="header" />
    </div>

    <div
      v-if="slotChecker.isMainSlotUsed"
      class="sml-main"
    >
      <slot name="main" />
    </div>

    <!-- default slot (extra container) -->
    <slot />

    <div
      v-if="slotChecker.isFooterSlotUsed"
      class="sml-footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script src="./scrollable-main-layout.module.js"></script>

<style scoped src="./scrollable-main-layout.styles.css"></style>
