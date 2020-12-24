<template>
  <div class="home-page">
    <!-- <div class="container"> -->
      <NavHeader class="nav-header" />
      <main class="home-page-main">
        <div class="title-block">
          <h2>Meet the Chatus!</h2>
        </div>
      </main>
      <NavFooter>disigned by funny family</NavFooter>
    <!-- </div> -->
  </div>
</template>

<script>
import NavHeader from '@/components/navigations/nav-header';
import NavFooter from '@/components/navigations/nav-footer';

export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  }
};
</script>

<style scoped>
@import url('./home.style.css');
</style>
