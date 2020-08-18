<template>
  <button
    class="submit-button"
    type="submit"
    :disabled="disabled"
    formnovalidate
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.submit-button {
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: var(--primary-accent-color);
  transition: background-color 0.2s ease-out;
}

.submit-button:hover {
  background-color: var(--secondary-accent-color);
}

.submit-button:active {
  background-color: var(--thirdly-accent-color);
}

.submit-button:disabled {
  color: var(--light-text-disabled-button-color);
  background-color: var(--light-bg-disabled-button-color);
  cursor: default;
}
</style>

<script>
export default {
  name: 'Submit-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
