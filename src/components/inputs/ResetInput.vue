<template>
  <div>
    <div class="reset">
      <input
        class="reset__input"
        ref="clearableInput"
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
        class="reset__label"
        for="input"
        :style="[borderColor, borderColorFocused]"
      >
        <span
          class="reset__placeholder"
          :style="placeholderColorFocused"
        >
          {{ placeholder }}
        </span>
      </label>
      <img
        class="reset__icon"
        @click="resetInputValue"
        v-if="value.length > 0"
        width="14"
        height="14"
        src="../../assets/imgs/svg/clear-icon.svg"
        alt="clear input"
      />
    </div>
    <transition name="fade">
      <div
        class="error-container"
        :class="{ 'head-shake animated': animated }"
        v-if="error !== ''"
      >
        <img
          src="../../assets/imgs/svg/input-error-icon.svg"
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
  name: 'ResetInput',
  data: () => ({
    inFocus: false
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
    type: {
      type: String,
      default: 'text',
      validator(type) {
        return ['text', 'number', 'email', 'tel'].indexOf(type) !== 1;
      },
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
    setFocusToInput() {
      this.$refs.clearableInput.focus();
    },
    updateInputValue(value) {
      this.$emit('input', value);
    },
    resetInputValue() {
      this.$emit('input', '');
      this.setFocusToInput();
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
  --icon-rigt-side-indet: 11px;
}

.reset {
  position: relative;
  height: 60px;
  overflow: hidden;
}

.reset input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  color: black;
  padding-top: 20px;
  padding-right: calc(var(--icon-rigt-side-indet) * 3);
}

.reset label {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid;
  border-color: var(--border-color);
  pointer-events: none;
}

.reset label::after {
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

.reset__placeholder {
  position: absolute;
  left: 0;
  bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  color: var(--Suva-Grey);
  transition: all 0.2s ease;
}

.reset input:focus + .reset__label .reset__placeholder,
.reset input:valid + .reset__label .reset__placeholder {
  transform: translateY(-140%);
  color: var(--placeholder-color-focused);
  font-size: 16px;
}

.reset input:focus + .reset__label::after ,
.reset input:valid + .reset__label::after  {
  border-color: var(--border-color-focused);
  transform: translateX(0%);
}

.reset__icon {
  position: absolute;
  right: var(--icon-rigt-side-indet);
  bottom: 14px;
  cursor: pointer;
}

.reset__icon:hover {
  transition: filter 0.3s ease-out;
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
