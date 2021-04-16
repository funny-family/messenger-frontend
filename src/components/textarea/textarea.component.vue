<template>
  <textarea
    :class="[
      'p-inputtextarea',
      {
        'p-filled': filled,
        'p-inputtextarea-resizable ': autoResize
      }
    ]"
    v-bind="$attrs"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    modelValue: {
      type: String,
      default: '',
      required: false
    },

    autoResize: {
      type: Boolean,
      default: false,
      required: false
    },

    initialHeight: {
      type: Number,
      default: 22,
      required: false
    }
  },

  emits: ['update:modelValue'],

  computed: {
    filled() {
      return (this.modelValue !== '' && this.modelValue.toString().length > 0);
    }
  },

  mounted() {
    if (this.$el.offsetParent && this.autoResize) {
      this.resize();
    }
  },

  updated() {
    if (this.$el.offsetParent && this.autoResize) {
      this.resize();
    }
  },

  methods: {
    resize() {
      // https://gist.github.com/xl1/f050bbff6bfad067ee883edd4951c027
      const style = window.getComputedStyle(this.$el);

      // this.$el.style.height = 'auto';
      this.$el.style.height = `${this.initialHeight}px`;
      this.$el.style.height = `calc(${style.borderTopWidth} + ${style.borderBottomWidth} + ${this.$el.scrollHeight}px)`;

      if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
        this.$el.style.overflowY = 'scroll';
        this.$el.style.height = this.$el.style.maxHeight;
      }
      this.$el.style.overflow = 'auto';
    },

    onInput(event) {
      if (this.autoResize) {
        this.resize();
      }
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style>
.p-inputtextarea-resizable {
  overflow: hidden;
}

.p-inputtextarea {
  width: 100%;
}

.p-fluid .p-inputtextarea {
  width: 100%;
}
</style>
