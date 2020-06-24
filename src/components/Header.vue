<template>
  <header class="header">
    <div class="header__logo">Chatus</div>
    <div class="header__auth">
      <router-link class="header__auth__link" to="/signin">Sign in</router-link>
      <router-link class="header__auth__link" to="/signup">Sign up</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  background: white;
  -webkit-box-shadow: 0px 10px 19px -8px rgba(0,0,0,0.30);
  -moz-box-shadow: 0px 10px 19px -8px rgba(0,0,0,0.30);
  box-shadow: 0px 10px 19px -8px rgba(0,0,0,0.30);
  &__logo {
    font-weight: bold;
    padding: 0 20px;
  }
  &__auth {
    &__link {
      display: inline-block;
      padding: 0 12px;
    }
  }
}
</style>
