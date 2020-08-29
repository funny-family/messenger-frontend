<template>
  <div>
    <div class="password">
      <input
        class="password__input"
        ref="passwordInput"
        :value="value"
        :name="name"
        :autocomplete="autocomplete"
        :type="type"
        :disabled="disabled"
        @input="updateInputValue($event.target.value)"
        @focus="inFocus = true"
        @blur="inFocus = false"
        required
      />
      <label
        class="password__label"
        for="input"
        :style="[borderColor, borderColorFocused]"
      >
        <span
          class="password__placeholder"
          :style="placeholderColorFocused"
        >
          {{ placeholder }}
        </span>
      </label>
      <img
        class="password__visible-password-icon password-icon"
        @click="switchPasswordIconVisibility"
        v-if="isPasswordIconVisible === false"
        width="36"
        height="12"
        src="@/assets/imgs/svgs/show-password-icon.svg"
        alt="show password"
      />
      <img
        class="password__hidden-password-icon password-icon"
        @click="switchPasswordIconVisibility"
        v-if="isPasswordIconVisible === true"
        width="44"
        height="20"
        src="@/assets/imgs/svgs/hide-password-icon.svg"
        alt="hide password"
      />
    </div>
    <transition name="fade">
      <div
        class="error-container"
        :class="{ 'head-shake animated': animated }"
        v-if="error !== ''"
      >
        <svg width="16" height="16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M75 40C75 59.33 59.33 75
            40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75
            40ZM80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0
            17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM37.2734
            48.959H42.166L42.5762 18.3438H36.8926L37.2734 48.959ZM37.4785
            56.0781C36.9512 56.6641 36.6875 57.3965 36.6875 58.2754C36.6875
            59.1543 36.9512 59.8867 37.4785 60.4727C38.0254 61.0391 38.8262
            61.3223 39.8809 61.3223C40.9355 61.3223 41.7363 61.0391 42.2832
            60.4727C42.8301 59.8867 43.1035 59.1543 43.1035 58.2754C43.1035
            57.3965 42.8301 56.6641 42.2832 56.0781C41.7363 55.4727 40.9355
            55.1699 39.8809 55.1699C38.8262 55.1699 38.0254 55.4727 37.4785
            56.0781Z" fill="#F22837"/>
        </svg>
        <span>{{ error }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
const primaryAccentColor = '#0A84FF';
const errorColor = '#F22837';

export default {
  name: 'PasswordInput',
  data: () => ({
    inFocus: false,
    isPasswordIconVisible: false,
    type: 'password'
  }),
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    autocomplete: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    animated: {
      type: Boolean,
      default: true
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
    switchPasswordIconVisibility() {
      const valueLength = this.$props.value.length;
      this.$data.isPasswordIconVisible = !this.$data.isPasswordIconVisible;
      this.$data.type = this.$data.type === 'password' ? 'text' : 'password'; // change input type on icon click
      this.$refs.passwordInput.focus();
      this.$refs.passwordInput.setSelectionRange(valueLength, valueLength);
    }
  },
  computed: {
    borderColor() {
      return {
        '--border-color': (this.$props.error === '') ? '#4b4b4b' : errorColor
      };
    },
    borderColorFocused() {
      return {
        '--border-color-focused': (this.$props.error === '') ? primaryAccentColor : errorColor
      };
    },
    placeholderColorFocused() {
      return {
        '--placeholder-color-focused': (this.$props.error === '') ? primaryAccentColor : errorColor
      };
    }
  }
};
</script>

<style scoped>
* {
  --icon-rigt-side-indet: 9px;
}

.password {
  position: relative;
  height: 60px;
  overflow: hidden;
}

.password input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  color: black;
  padding-top: 20px;
  padding-right: calc(var(--icon-rigt-side-indet) * 4)
}

.password label {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid;
  border-color: var(--border-color);
  pointer-events: none;
}

.password label::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid;
  border-color: var(--border-color-focused);
  transition: all 0.3s ease-in-out;
  transform: translateX(-100%);
}

.password__placeholder {
  position: absolute;
  left: 0;
  bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  color: var(--Suva-Grey);
  transition: all 0.2s ease;
}

.password input:focus + .password__label .password__placeholder,
.password input:valid + .password__label .password__placeholder {
  transform: translateY(-140%);
  color: var(--placeholder-color-focused);
  font-size: 16px;
}

.password input:focus + .password__label::after,
.password input:valid + .password__label::after {
  border-color: var(--border-color-focused);
  transform: translateX(0%);
}

.password__visible-password-icon {
  position: absolute;
  right: calc(var(--icon-rigt-side-indet) - 9px);
  bottom: 15px;
  cursor: pointer;
}

.password__hidden-password-icon {
  position: absolute;
  right: calc(5px - var(--icon-rigt-side-indet));
  bottom: 11px;
  cursor: pointer;
}

.password-icon:hover {
  filter: contrast(200%);
}

.error-container {
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  margin-top: 12px;
}

.error-container span {
  color: var(--error-color);
  font-size: 16px;
  font-weight: 500px;
}

.error-container svg {
  margin-right: 6px;
}
</style>
