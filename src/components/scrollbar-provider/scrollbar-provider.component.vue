<template>
  <div
    class="nice-bar"
    :class="[theme === 'dark' ? 'theme-dark' : 'theme-light', classes ? ' ' + classes : '']"
    ref="scrollContainer"
  >
    <div
      ref="scrollContent"
      :style="{ 'margin-top': top * -1 + 'px', 'margin-left': left * -1 + 'px' }"
      @wheel="scroll"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="stopDrag"
    >
      <slot/>
    </div>
    <VerticalScrollbar
      v-if="ready"
      :content="{ height: scrollContentHeight }"
      :container="{ height: scrollContainerHeight }"
      :scrolling="{ v: vMovement }"
      :dragging-from-parent="dragging"
      :on-change-position="handleChangePosition"
      :show="show"
      @vertical="moveTheScrollbar"
    >
    </VerticalScrollbar>
    <HorizontalScrollbar
      v-if="ready"
      :content="{ width: scrollContentWidth }"
      :container="{ width: scrollContainerWidth }"
      :scrolling="{ h: hMovement }"
      :dragging-from-parent="dragging"
      :on-change-position="handleChangePosition"
      :show="show"
      @horizontal="moveTheScrollbar"
    >
    </HorizontalScrollbar>
  </div>
</template>

<script>
import VerticalScrollbar from './components/vertical-scrollbar';
import HorizontalScrollbar from './components/horizontal-scrollbar';

export default {
  name: 'ScrollbarProvider',
  components: {
    VerticalScrollbar,
    HorizontalScrollbar
  },
  props: {
    classes: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'light'
    },
    speed: {
      type: Number,
      default: 53
    }
  },
  data() {
    return {
      ready: false,
      scrollContainerHeight: null,
      scrollContainerWidth: null,
      scrollContentHeight: null,
      scrollContentWidth: null,
      show: true,
      dragging: false,
      scrollY: null,
      scrollX: null,
      top: 0,
      left: 0,
      vMovement: 0,
      hMovement: 0,
      start: { y: 0, x: 0 }
    };
  },
  methods: {
    calculateSize() {
      const $scrollContent = this.$refs.scrollContent;
      const $scrollContainer = this.$refs.scrollContainer;
      const scrollContainerStyle = window.getComputedStyle($scrollContainer, null);
      this.$data.scrollContentHeight = $scrollContent.children[0].clientHeight;
      this.scrollContentWidth = $scrollContent.children[0].clientWidth;
      this.$data.scrollContainerHeight = parseFloat(scrollContainerStyle.height);
      this.$data.scrollContainerWidth = parseFloat(scrollContainerStyle.width);
      this.$data.ready = true;
    },
    showSlider() {
      this.$data.show = true;
    },
    hideSlider() {
      if (!this.$data.dragging) this.$data.show = false;
    },
    scroll(e) {
      e.preventDefault();
      const num = this.speed;
      const shifted = e.shiftKey;
      this.$data.scrollY = e.deltaY > 0 ? num : -num;
      this.$data.scrollX = e.deltaX > 0 ? num : -num;
      if (shifted && e.deltaX === 0) this.$data.scrollX = e.deltaY > 0 ? num : -num;
      const nextY = this.$data.top + this.$data.scrollY;
      const nextX = this.$data.left + this.$data.scrollX;
      const canScrollY = this.$data.scrollContentHeight > this.$data.scrollContainerHeight;
      const canScrollX = this.scrollContentWidth > this.$data.scrollContainerWidth;
      if (canScrollY && !shifted) {
        this.normalizeVertical(nextY);
        this.moveTheScrollbar();
      }
      if (shifted && canScrollX) {
        this.normalizeHorizontal(nextX);
        this.moveTheScrollbar();
      }
    },
    normalizeVertical(nextY) {
      const lowerEnd = this.$data.scrollContentHeight - this.$data.scrollContainerHeight;
      // eslint-disable-next-line
      if (nextY > lowerEnd) nextY = lowerEnd;
      // eslint-disable-next-line
      else if (nextY < 0) nextY = 0;
      this.$data.top = nextY;
    },
    normalizeHorizontal(nextX) {
      const rightEnd = this.scrollContentWidth - this.$data.scrollContainerWidth;
      // eslint-disable-next-line
      if (nextX > rightEnd) nextX = rightEnd;
      // eslint-disable-next-line
      else if (nextX < 0) nextX = 0;
      this.$data.left = nextX;
    },
    moveTheScrollbar() {
      this.$data.show = true;
      this.$data.vMovement = (this.$data.top / this.$data.scrollContentHeight) * 100;
      this.hMovement = (this.$data.left / this.scrollContentWidth) * 100;
    },
    startDrag(e) {
      e.preventDefault();
      e.stopPropagation();
      // eslint-disable-next-line
      e = e.changedTouches ? e.changedTouches[0] : e;
      this.$data.dragging = true;
      this.$data.show = true;
      this.$data.start.y = e.pageY;
      this.$data.start.x = e.pageX;
    },
    onDrag(e) {
      if (this.$data.dragging) {
        e.preventDefault();
        // eslint-disable-next-line
        e = e.changedTouches ? e.changedTouches[0] : e;
        const yMovement = this.$data.start.y - e.pageY;
        const xMovement = this.$data.start.x - e.pageX;
        this.$data.start.y = e.pageY;
        this.$data.start.x = e.pageX;
        const nextY = this.$data.top + yMovement;
        const nextX = this.$data.left + xMovement;
        this.normalizeVertical(nextY);
        this.normalizeHorizontal(nextX);
        this.moveTheScrollbar();
      }
    },
    stopDrag() {
      this.$data.dragging = false;
      this.$data.show = false;
    },
    handleChangePosition(vScrollbar, orientation) {
      const next =
        (vScrollbar / 100) *
        (orientation === 'vertical' ? this.$data.scrollContentHeight : this.scrollContentWidth);
      if (orientation === 'vertical') this.normalizeVertical(next);
      if (orientation === 'horizontal') this.normalizeHorizontal(next);
    }
  },
  mounted() {
    this.calculateSize();
    window.addEventListener('resize', this.calculateSize);
    if (this.$data.ready) {
      this.$refs.scrollContainer.addEventListener('mouseenter', this.$data.showSlider);
      this.$refs.scrollContainer.addEventListener('mouseleave', this.hideSlider);
    }
  },
  onBeforeUnmount() {
    window.removeEventListener('resize', this.calculateSize);
    this.$refs.scrollContainer.removeEventListener('mouseenter', this.$data.showSlider);
    this.$refs.scrollContainer.removeEventListener('mouseleave', this.hideSlider);
  }
};
</script>

<style>
.nice-bar {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-in {
  animation-name: fadeIn;
}

.fade-out {
  animation-name: faadeOut;
}
</style>
