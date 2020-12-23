<template>
  <div class="burger-button-container">
    <input
      id="button__trigger"
      :isOpened="isOpened"
      @change="changeBurgerButtonState($event.target.checked)"
      type="checkbox"
    />
    <label
      class="burger-button"
      :class="{
        'menu__opened': isOpened
      }"
      for="button__trigger"
    >
      <!-- <span></span> -->
    </label>
  </div>
</template>

<script>
export default {
  name: 'BurgerButton',
  props: {
    isOpened: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    changeBurgerButtonState(event) {
      this.$emit('change', event);
    }
  }
};
</script>

<style scoped>
@import url('./burger-button.style.css');
</style>
