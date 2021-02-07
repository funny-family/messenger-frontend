<template>
  <div class="burger-button-container">
    <input
      id="button__trigger"
      type="checkbox"
      @change="onClick($event.target.checked)"
    />
    <label
      class="burger-button"
      :class="{
        menu__opened: state
      }"
      for="button__trigger"
    >
    </label>
  </div>
</template>

<script src="./burger-button.module.js"></script>

<style scoped src="./burger-button.styles.css"></style>
