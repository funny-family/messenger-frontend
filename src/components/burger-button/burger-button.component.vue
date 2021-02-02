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

<script>
import { ref } from 'vue';

const emitEnum = {
  onClick: 'onClick'
};

export default {
  name: 'BurgerButton',
  emits: [emitEnum.onClick],
  setup(_, { emit }) {
    const state = ref(false);

    function onClick(event) {
      state.value = event;
      return emit(emitEnum.onClick, event);
    }

    return {
      state,
      onClick
    };
  }
};
</script>

<style scoped src="./burger-button.styles.css"></style>
