<template>
  <div class="testing-page">
    <div
      v-for="i in 60"
      :key="i"
    >
      <div class="center-container">
        <div class="testing-page__text">
          I farted {{ i }} times!
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./test.module.js"></script>

<style scoped src="./test.styles.css"></style>
