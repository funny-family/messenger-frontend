<template>
  <form
    class="sign-in-from"
    @submit.prevent=""
  >
    <div>Sign in</div>
    <input
      class="sign-in-from__email"
      type="text"
      placeholder="Email"
    />
    <input
      class="sign-in-from__password"
      type="password"
      placeholder="Password"
    />
    <button type="submit">Sign in</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sign-in-from {
  min-width: 280px;
  display: flex;
  flex-direction: column;
}

input {
  position: relative;
  padding: 8px 12px;
}
</style>
