<template>
  <div>
    <nav-header />
    <main>
      <div class="title">Meet the Chatus!</div>
    </main>
  </div>
</template>

<script>
import NavHeader from '@/components/navigations/NavHeader.vue';

export default {
  components: {
    NavHeader
  }
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  font-size: 100px;
  word-spacing: 12px;
}
</style>
