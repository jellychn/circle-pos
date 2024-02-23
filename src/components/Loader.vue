<template>
  <div class="loader">
    <span class="spinner" />
  </div>
</template>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .spinner {
    width: 60px;
    height: 60px;
    border: 5px solid var(--vt-c-white);
    border-bottom-color: var(--vt-c-red);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>