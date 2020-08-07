<template>
  <button class="regular-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.regular-button {
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
  background-color: var(--Azure);
  transition: background-color 0.2s ease-out;
}

.regular-button:hover {
  background-color: var(--Bluetiful);
}

.regular-button:active {
  background-color: var(--Flickr-Blue);
}
</style>
