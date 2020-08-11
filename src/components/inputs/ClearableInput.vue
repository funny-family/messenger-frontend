<template>
  <div>
    <div class="auth-input">
      <input
        class="auth-input__input"
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
        class="auth-input__container"
        for="input"
        :style="[borderColor, borderColorFocused]"
      >
        <span
          class="auth-input__placeholder"
          :style="placeholderColorFocused"
        >
          {{ placeholder }}
        </span>
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
          8.38908 0.61084Z" fill="#4b4b4b"/>
      </svg>
    </div>
    <div
      class="error-container"
      :class="{ 'headShake animated': animated }"
      v-if="error !== ''"
    >
      <svg width="16" height="16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M75 40C75 59.33 59.33 75 40 75C20.67 75 5
          59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40ZM80 40C80 62.0914 62.0914 80 40
          80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM37.2734
          48.959H42.166L42.5762 18.3438H36.8926L37.2734 48.959ZM37.4785 56.0781C36.9512 56.6641
          36.6875 57.3965 36.6875 58.2754C36.6875 59.1543 36.9512 59.8867 37.4785 60.4727C38.0254
          61.0391 38.8262 61.3223 39.8809 61.3223C40.9355 61.3223 41.7363 61.0391 42.2832
          60.4727C42.8301 59.8867 43.1035 59.1543 43.1035 58.2754C43.1035 57.3965 42.8301 56.6641
          42.2832 56.0781C41.7363 55.4727 40.9355 55.1699 39.8809 55.1699C38.8262 55.1699 38.0254
          55.4727 37.4785 56.0781Z" fill="#D50000"/>
      </svg>
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    inFocus: false,
    animated: true
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
      required: true,
      Validate: (type) => ['text'].indexOf(type) !== 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
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
  },
  computed: {
    borderColor() {
      return {
        '--border-color': (this.$props.error === '') ? '#4b4b4b' : '#D50000'
      };
    },
    borderColorFocused() {
      return {
        '--border-color-focused': (this.$props.error === '') ? '#2b80ff' : '#D50000'
      };
    },
    placeholderColorFocused() {
      return {
        '--placeholder-color-focused': (this.$props.error === '') ? '#2b80ff' : '#D50000'
      };
    }
  }
};
</script>

<style scoped>
* {
  --icon-rigt-side-indet: 11px;
}

.auth-input {
  position: relative;
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
  border-bottom: 1px solid;
  border-color: var(--border-color);
  pointer-events: none;
}

.auth-input label::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 1;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid;
  border-color: var(--border-color-focused);
  transition: all 0.3s ease-in-out;
  transform: translateX(-100%);
}

.auth-input__placeholder {
  position: absolute;
  left: 0;
  bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  color: var(--Suva-Grey);
  transition: all 0.2s ease;
}

.auth-input input:focus + .auth-input__container .auth-input__placeholder,
.auth-input input:valid + .auth-input__container .auth-input__placeholder {
  transform: translateY(-140%);
  color: var(--placeholder-color-focused);
  font-size: 16px;
}

.auth-input input:focus + .auth-input__container::after ,
.auth-input input:valid + .auth-input__container::after  {
  border-color: var(--border-color-focused);
  transform: translateX(0%);
}

.auth-input__icon {
  position: absolute;
  right: var(--icon-rigt-side-indet);
  bottom: 14px;
  cursor: pointer;
}

.error-container {
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  margin-top: 12px;
}

.error-container span {
  color: var(--Rosso-Corsa);
  font-size: 16px;
  font-weight: 500px;
}

.error-container svg {
  margin-right: 6px;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.animated.flipOutX,
.animated.flipOutY,
.animated.bounceIn,
.animated.bounceOut {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

@-webkit-keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.headShake {
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: headShake;
  animation-name: headShake;
}
</style>
