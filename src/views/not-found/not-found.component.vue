<template>
  <div class="not-found-page">
    <section class="error-section">
      <h1 class="error-section__text">
        404 not found!
      </h1>
      <router-link
        class="error-section__link"
        to="/"
      >
        Back to home page
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped>
@import url('./not-found.style.css');
</style>
