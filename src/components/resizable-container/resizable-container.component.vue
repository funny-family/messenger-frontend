<template>
  <div
    class="resizable-container"
    :class="{ 'resize-x': resizeX, 'resize-y': resizeY }"
  >
    <slot />
  </div>
</template>

<script src="./resizable-container.module.js"></script>

<style scoped src="./resizable-container.styles.css"></style>
