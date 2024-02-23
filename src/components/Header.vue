<template>
  <div class="header">
    <div class="container">
      <IconCirclePos class="logo" @click="navigateToHome()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconCirclePos from './icons/IconCirclePos.vue'

const router = useRouter()

function navigateToHome(): void {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
  width: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--vt-c-white);

  .container {
    display: flex;
    max-width: var(--vt-max-width);
    margin: auto;

    .logo {
      cursor: pointer;
    }
  }
}
</style>