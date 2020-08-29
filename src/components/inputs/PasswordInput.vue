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
        src="@/assets/imgs/svg/show-password-icon.svg"
        alt="show password"
      />
      <img
        class="password__hidden-password-icon password-icon"
        @click="switchPasswordIconVisibility"
        v-if="isPasswordIconVisible === true"
        width="44"
        height="20"
        src="@/assets/imgs/svg/hide-password-icon.svg"
        alt="hide password"
      />
    </div>
    <transition name="fade">
      <div
        class="error-container"
        :class="{ 'head-shake animated': animated }"
        v-if="error !== ''"
      >
        <img
          src="../../assets/imgs/svgs/input-error-icon.svg"
          width="16"
          height="16"
          alt="!"
        />
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

.error-container img {
  margin-right: 6px;
}
</style>
