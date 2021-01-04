<template>
  <div class="burger-button-container">
    <input
      id="button__trigger"
      type="checkbox"
      :state="state"
      @change="changeState($event.target.checked)"
    />
    <label
      class="burger-button"
      :class="{
        'menu__opened': state
      }"
      for="button__trigger"
    >
    </label>
  </div>
</template>

<script>
const emitEnum = {
  changeState: 'change-state'
};

export default {
  name: 'BurgerButton',
  props: {
    state: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  emits: [
    emitEnum.changeState
  ],
  setup(_, { emit }) {
    function changeState(event) {
      return emit(emitEnum.changeState, event);
    }

    return {
      changeState
    };
  }
};
</script>

<style scoped>
@import url('./burger-button.style.css');
</style>
