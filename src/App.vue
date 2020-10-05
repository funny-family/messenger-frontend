<template>
  <transition
    name="fade-in-down"
    mode="out-in"
  >
    <router-view/>
  </transition>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('./assets/styles/main.css');

</style>

<script>
export default {
  mounted() {
    // console.log('bla bla bla');
    this.$store.dispatch('checkAuth');
  }
};
</script>
