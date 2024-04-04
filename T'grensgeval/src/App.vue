<script setup>
import { RouterView } from 'vue-router'
import CkNavbar from '@/components/CkNavbar.vue'
</script>

<template>
  <div class="bg-bg-100"><ck-navbar /> <RouterView /></div>
</template>

<style scoped>
* {
  width: 100vw;
}
</style>
