<template>
  <div class="auth-input">
    <input class="auth-input__input" name="input" autocomplete="off" type="text" required />
    <label class="auth-input__container" for="input">
      <span class="auth-input__name">Test1111</span>
    </label>
    <!-- <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.92893 21.5711C8.28395 21.9261 8.85956
        21.9261 9.21458 21.5711L14.6786 16.1071L20.464 21.8925C20.819 22.2475 21.3946 22.2475
        21.7497 21.8925C22.1047 21.5375 22.1047 20.9619 21.7497 20.6069L15.9642 14.8215L22.0711
        8.71463C22.4261 8.35961 22.4261 7.784 22.0711 7.42898C21.716 7.07396 21.1404 7.07396
        20.7854 7.42898L14.6786 13.5358L8.89317 7.75039C8.53815 7.39537 7.96254 7.39537 7.60752
        7.75039C7.2525 8.10541 7.2525 8.68102 7.60752 9.03604L13.3929 14.8215L7.92893
        20.2855C7.57391 20.6405 7.57391 21.2161 7.92893 21.5711Z" fill="#161B2B"/>
    </svg> -->
  </div>
</template>

<style>
:root {
  --not-acive: #909090;
  --acive: #4b4b4b;
}

.auth-input {
  position: relative;
  width: 280px;
  height: 60px;
  overflow: hidden;
}

.auth-input input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: black;
  padding-top: 20px;
}

.auth-input label {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--not-acive);
  pointer-events: none;
}

.auth-input label::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 1; /*  */
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--acive);
  transition: all 0.3s ease-in-out;
  transform: translateX(-100%);
}

.auth-input__name {
  position: absolute;
  left: 0;
  bottom: 6px;
  color: var(--not-acive);
  transition: all 0.2s ease;
}

.auth-input input:focus + .auth-input__container .auth-input__name,
.auth-input input:valid + .auth-input__container .auth-input__name {
  transform: translateY(-150%);
  color: var(--acive);
}

.auth-input input:focus + .auth-input__container::after,
.auth-input input:valid + .auth-input__container::after {
  transform: translateX(0%);
}
</style>

<script>
export default {
  props: {
    type: {
      //
    },
    placeholder: {
      //
    },
    inputName: {
      //
    }
  }
};
</script>
