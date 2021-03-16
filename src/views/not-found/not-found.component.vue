<template>
  <div class="not-found-page">
    <section class="error-section">
      <h1 class="error-section__text">
        404 page not found!
      </h1>
      <router-link
        class="error-section__link"
        :to="{ name: router.getRoutes()[3].name }"
      >
        Back to home page
      </router-link>
    </section>
  </div>
</template>

<script src="./not-found.module.js"></script>

<style scoped src="./not-found.styles.css"></style>
