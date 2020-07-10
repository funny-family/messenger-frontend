<template>
  <div class="auth-input">
    <input
      class="auth-input__input"
      name="input"
      ref="clearableInput"
      autocomplete="off"
      :value="value"
      :type="type"
      :disabled="disabled"
      @input="updateInputValue($event.target.value)"
      @blur="inFocused = true"
      @focus="inFocused = false"
      required
    />
    <label class="auth-input__container" for="input">
      <span class="auth-input__placeholder">{{ placeholder }}</span>
    </label>
    <svg
      class="auth-input__icon"
      @click="resetInputValue"
      v-if="value.length > 0 && type === 'text'"
      width="14"
      height="14"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.38908 0.61084C8.19383 0.415527
        7.87724 0.415527 7.68199 0.61084L4.49987 3.79297L1.31802 0.611084C1.12275 0.415771
        0.806179 0.415771 0.610912 0.611084C0.415646 0.806396 0.415646 1.1228 0.610912
        1.31812L3.79281 4.5L0.610912 7.68188C0.415646 7.8772 0.415646 8.19385 0.610912
        8.38916C0.806179 8.58423 1.12275 8.58423 1.31802 8.38916L4.49995 5.20703L7.68199
        8.38916C7.87724 8.58447 8.19383 8.58447 8.3891 8.38916C8.58435 8.19385 8.58435
        7.87744 8.3891 7.68213L5.207 4.5L8.38908 1.31787C8.58435 1.1228 8.58435 0.806152
        8.38908 0.61084Z" fill="#909090"/>
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    inFocused: false
  }),
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      required: true,
      Validate: (type) => ['text'].indexOf(type) !== 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateInputValue(value) {
      this.$emit('input', value);
    },
    resetInputValue() {
      this.$emit('input', '');
      this.$refs.clearableInput.focus();
    }
  }
};
</script>

<style scoped>
* {
  --not-acive: #909090;
  --acive: #4b4b4b;
  --icon-rigt-side-indet: 11px;
}

.auth-input {
  position: relative;
  width: 280px;
  height: 60px;
  overflow: hidden;
}

.auth-input input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  color: black;
  padding-top: 20px;
  padding-right: calc(var(--icon-rigt-side-indet) * 3);
}

.auth-input label {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--not-acive);
  pointer-events: none;
}

.auth-input label::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 1; /*  */
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--acive);
  transition: all 0.3s ease-in-out;
  transform: translateX(-100%);
}

.auth-input__placeholder {
  position: absolute;
  left: 0;
  bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  color: var(--not-acive);
  transition: all 0.2s ease;
}

.auth-input input:focus + .auth-input__container .auth-input__placeholder,
.auth-input input:valid + .auth-input__container .auth-input__placeholder {
  transform: translateY(-140%);
  color: var(--acive);
  font-size: 16px;
}

.auth-input input:focus + .auth-input__container::after,
.auth-input input:valid + .auth-input__container::after {
  transform: translateX(0%);
}

.auth-input__icon {
  position: absolute;
  right: var(--icon-rigt-side-indet);
  bottom: 14px;
  cursor: pointer;
}
</style>
