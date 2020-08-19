<template>
  <button
    class="multi-button"
    :type="type"
    :disabled="disabled"
    :formnovalidate="formnovalidate"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Multi-Button',
  props: {
    type: {
      type: String,
      default: 'button',
      validator(type) {
        return ['submit', 'reset', 'button'].indexOf(type) !== -1;
      },
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    formnovalidate: {
      type: Boolean,
      default: false,
      required: true
    }
  }
};
</script>

<style scoped>
.multi-button {
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

.multi-button:hover {
  background-color: var(--secondary-accent-color);
}

.multi-button:active {
  background-color: var(--thirdly-accent-color);
}

.multi-button:disabled {
  color: var(--light-text-disabled-button-color);
  background-color: var(--light-bg-disabled-button-color);
  cursor: default;
}
</style>
