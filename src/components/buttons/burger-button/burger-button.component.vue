<template>
  <div class="hamburger-menu-container">
    <input
      id="menu__toggler"
      :isOpened="isOpened"
      @change="changeMenuState($event.target.checked)"
      type="checkbox"
    />
    <label
      class="menu__button"
      :class="{
        'menu__opened': isOpened
      }"
      for="menu__toggler"
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
    changeMenuState(event) {
      this.$emit('change', event);
    }
  }
};
</script>

<style scoped>
@import url('./burger-button.style.css');
</style>
