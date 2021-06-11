<template>
  <!-- eslint-disable -->
  <div class="nice-bar-rail-y" v-if="height < 100" @click="jump" ref="scrollRail">
    <div
      class="nice-bar-slider-y"
      :style="{ height: height + '%', top: scrolling.v + '%' }"
      :class="{ 'fade-in': show, 'fade-out': !show }"
      ref="scrollSlider"
      @touchstart="startDrag"
      @mousedown="startDrag"
    ></div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'VerticalScrollbar',
  props: {
    content: {
      type: Object
    },
    container: {
      type: Object
    },
    scrolling: {
      type: Object,
      default() {
        return {
          v: 0,
          h: 0
        };
      }
    },
    show: {
      type: Boolean,
      default: false
    },
    draggingFromParent: {
      type: Boolean,
      default: false
    },
    onChangePosition: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      height: 0,
      dragging: false,
      start: 0
    };
  },
  watch: {
    // eslint-disable-next-line
    'container.height': function (val, old) {
      if (val !== old) this.calculateSize();
    }
  },
  methods: {
    calculateSize() {
      this.$data.height = (this.$props.container.height / this.$props.content.height) * 100;
    },
    startDrag(e) {
      e.preventDefault();
      e.stopPropagation();
      // eslint-disable-next-line
      e = e.changedTouches ? e.changedTouches[0] : e;
      this.$data.dragging = true;
      this.$data.start = e.pageY;
    },
    onDrag(e) {
      if (this.$data.dragging) {
        // e.preventDefault();
        e.stopPropagation();
        // eslint-disable-next-line
        e = e.changedTouches ? e.changedTouches[0] : e;
        const yMovement = e.pageY - this.$data.start;
        const yMovementPercentage = (yMovement / this.$props.container.height) * 100;
        this.$data.start = e.pageY;
        const next = this.$props.scrolling.v + yMovementPercentage;
        this.$parent.dragging = true;
        this.$props.onChangePosition(next, 'vertical');
        this.normalize();
      }
    },
    stopDrag() {
      this.$data.dragging = false;
      this.$parent.dragging = false;
    },
    normalize() {
      this.$emit('vertical');
    },
    jump(e) {
      const isRail = e.target === this.$refs.scrollRail;
      if (isRail) {
        const position = this.$refs.scrollSlider.getBoundingClientRect();
        const yMovement = e.pageY - position.top;
        const centerize = this.$data.height / 2;
        const yMovementPercentage = (yMovement / this.$props.container.height) * 100 - centerize;
        this.$data.start = e.pageY;
        const next = this.$props.scrolling.v + yMovementPercentage;
        this.$props.onChangePosition(next, 'vertical');
        this.normalize();
      }
    }
  },
  mounted() {
    this.calculateSize();
    document.addEventListener('mousemove', this.onDrag);
    document.addEventListener('touchmove', this.onDrag);
    document.addEventListener('mouseup', this.stopDrag);
    document.addEventListener('touchend', this.stopDrag);
  },
  onBeforeUnmount() {
    document.removeEventListener('mousemove', this.onDrag);
    document.removeEventListener('touchmove', this.onDrag);
    document.removeEventListener('mouseup', this.stopDrag);
    document.removeEventListener('touchend', this.stopDrag);
  }
};
</script>

<style>
/* stylelint-disable */
.nice-bar-rail-y {
  position: absolute;

  top: 0;
  right: 0;

  width: 6px;
  height: 100%;

  z-index: 100000;

  background-color: rgba(26, 168, 224, 0.246); /* scrollbar-thumb */
}

.nice-bar-slider-y {
  position: absolute;

  top: 0;
  right: 0;

  height: 100px;
  width: 6px;

  opacity: 0;

  animation-duration: 1s;
  animation-fill-mode: both;

  z-index: 999999;

  background-color: rgb(224, 26, 26); /* scrollbar-track */

  border: 1px solid black;
}
</style>
