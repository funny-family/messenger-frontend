<template>
    <div class="home-page">
      <!-- <div class="container"> -->
        <NavHeader class="home-page__header" />
        <main class="home-page__main">
          <section class="title-block">
            <h1>Meet the Chatus!</h1>
          </section>
        </main>
        <NavFooter class="home-page__footer">disigned by funny family</NavFooter>
      <!-- </div> -->
    </div>
</template>

<script>
import NavHeader from './components/nav-header';
import NavFooter from './components/nav-footer';

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
