//TODO: Add hamburger bar

<template>
  <div class="border-b-8 flex justify-center bg-bg-100 border-primary-100">
    <!-- Your component's HTML template goes here -->
    <ul
      class="flex max-lg:w-1/4 max-lg:gap-4 gap-24 flex-row justify-center items-center text-center p-6 text-xl max-lg:text-sm font-light"
    >
      <li class="max-md:w-20 w-[140px]">
        <router-link to="/" class="hover:opacity-75 w-4">HOME</router-link>
      </li>
      <li class="max-md:w-20 w-[140px]">
        <router-link to="/Indeling" class="hover:opacity-75">INDELING</router-link>
      </li>
      <li class="max-md:w-20 w-[140px]">
        <router-link to="/Tarieven" class="hover:opacity-75">TARIEVEN</router-link>
      </li>
      <li class="max-md:w-20 w-[140px]">
        <router-link to="/Contact" class="hover:opacity-75">CONTACT</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // Your component's JavaScript logic goes here
}
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>
