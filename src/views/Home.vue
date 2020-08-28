<template>
  <div>
    <Header />
    <main>
      <div class="title">Meet the Chatus!</div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/navigations/Header.vue';

export default {
  components: {
    Header
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
