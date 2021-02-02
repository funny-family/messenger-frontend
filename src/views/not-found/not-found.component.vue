<template>
  <div class="not-found-page">
    <section class="error-section">
      <h1 class="error-section__text">
        404 page not found!
      </h1>
      <router-link
        class="error-section__link"
        :to="{ name: routes.home.name }"
      >
        Back to home page
      </router-link>
    </section>
  </div>
</template>

<script>
import { routes } from '@/router';

export default {
  name: 'NotFound',
  setup() {
    return {
      routes
    };
  }
};
</script>

<style scoped src="./not-found.styles.css"></style>
