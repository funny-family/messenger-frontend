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

@keyframes fadeInDown {
  from {
    transform: translate3d(0, -40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-down-leave-to {
  opacity: 0;
  transition: opacity .3s;
}

.fade-in-down-enter {
  opacity: 0;
  transform: translate3d(0, -40px, 0);
}

.fade-in-down-enter-to {
  opacity: 0;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeInDown;
}

:root {
  --selection-color: #f0f0f0;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
}

input {
  box-sizing: border-box;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 30px white inset;
}

button {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button a {
  color: white;
  text-decoration: none;
}

button a:hover {
  color: white;
}

a {
  color: #4b4b4b;
  text-decoration: none;
}

a:hover {
  transition: 0.3s ease-in-out;
  color: #5f5f5f;
}

::-moz-selection { background: var(--selection-color); }
::selection { background: var(--selection-color); }
</style>
