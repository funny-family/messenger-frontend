<template>
  <div
    class="home-page container"
    :class="{
      'home-page__no-y-scroll': isNavMenuOpen
    }"
  >
    <NavHeader class="home-page__header" />

    <main class="home-page__main">
      <section class="title-block">
        <h1>Meet the Chatus!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet cum accusantium ex
          velit perspiciatis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
          repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur
          dolore saepe rerum, sunt obcaecati iure eum sed illum molestias culpa quae quidem qui
          animi ratione temporibus nam nemo delectus 1111111111!
        </p>
      </section>
    </main>

    <main class="home-page__main">
      <section class="title-block">
        <h1>Meet the Chatus!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet cum accusantium ex
          velit perspiciatis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
          repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur
          dolore saepe rerum, sunt obcaecati iure eum sed illum molestias culpa quae quidem qui
          animi ratione temporibus nam nemo delectus 1111111111!
        </p>
      </section>
    </main>

    <main class="home-page__main">
      <section class="title-block">
        <h1>Meet the Chatus!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet cum accusantium ex
          velit perspiciatis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
          repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur
          dolore saepe rerum, sunt obcaecati iure eum sed illum molestias culpa quae quidem qui
          animi ratione temporibus nam nemo delectus 1111111111!
        </p>
      </section>
    </main>

    <main class="home-page__main">
      <section class="title-block">
        <h1>Meet the Chatus!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet cum accusantium ex
          velit perspiciatis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
          repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur
          dolore saepe rerum, sunt obcaecati iure eum sed illum molestias culpa quae quidem qui
          animi ratione temporibus nam nemo delectus 1111111111!
        </p>
      </section>
    </main>

    <main class="home-page__main">
      <section class="title-block">
        <h1>Meet the Chatus!</h1>
      </section>
    </main>

    <NavFooter class="home-page__footer">disigned by funny family</NavFooter>
  </div>
</template>

<script>
import NavHeader from './components/nav-header';
import NavFooter from './components/nav-footer';
import { isNavMenuOpen } from './components/nav-header/nav-header.state';

export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  },
  setup() {
    return {
      isNavMenuOpen
    };
  }
};
</script>

<style scoped src="./home.styles.css"></style>
