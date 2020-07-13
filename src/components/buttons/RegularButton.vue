<template>
  <button class="sunmit-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.sunmit-button {
  width: 200px;
  height: 40px;
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: #FF6D59;
  transition: background-color 0.2s ease-out;
}

.sunmit-button:hover {
  background-color: #fa5a45;
}

.sunmit-button:active {
  background-color: #fa3218;
}
</style>
