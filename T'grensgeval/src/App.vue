<script setup>
import { RouterView } from 'vue-router'
import CkNavbar from '@/components/CkNavbar.vue'
import CkFooter from '@/components/CkFooter.vue'
</script>

<template>
  <div><ck-navbar /> <RouterView /> <ck-footer /></div>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
</style>
