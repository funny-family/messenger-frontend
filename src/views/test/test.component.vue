<template>
  <!--
    https://bosnaufal.github.io/vue-scrollbar/
    https://github.com/BosNaufal/vue-scrollbar
  -->

  <!--
    A Quick Vue3 Infinite Scrolling Component
    https://learnvue.co/2020/09/a-quick-vue3-infinite-scrolling-component-daily-vue-tips-4/
  -->

  <!-- https://www.intercom.com/ -->
  <!-- <ElScrollbar wrapClass="scrl-cont"> -->
  <!-- <div class="scrl-cont"> -->
  <div class="testing-page">
    <ScrollableMainLayout ref="mainRef">
      <template v-slot:header>
        <!-- header -->
        adadad
      </template>
      <!-- <template v-slot:footer>
        footer
        </template> -->

      <template
        v-slot:main
      >
        <div
          v-for="i in 60"
          :key="i"
        >
          <div class="center-container">
            <div class="testing-page__text">
              I farted {{ i }} times!
            </div>
          </div>
        </div>
      </template>
    </ScrollableMainLayout>
  </div>
  <!-- </div> -->
  <!-- </ElScrollbar> -->
</template>

<script src="./test.module.js"></script>

<style scoped src="./test.styles.css"></style>
