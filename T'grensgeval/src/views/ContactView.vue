<template>
  <div>
    <ck-header />
    <div class="z-10 pt-36 flex flex-col text-center items-center justify-center bg-bg-100">
      <p class="text-accent font-catamaran text-8xl max-lg:text-5xl font-bold">"</p>
      <p class="text-5xl max-lg:text-2xl w-1/2 max-lg:w-3/4 font-light mb-32">
        We kijken er naar uit om jullie te mogen verwelkomen! <br /><br />
        <b>LOUIS & JUSTIEN</b>
      </p>
    </div>
    <div class="bg-bg-200 p-12 flex flex-col justify-center items-center">
      <h1 class="text-7xl text-center max-lg:text-3xl font-light max-lg:mb-8 mb-16">
        CONTACT GEGEVENS
      </h1>
      <div class="flex max-md:flex-col max-md:gap-6 justify-evenly max-md:text-center items-center">
        <div class="flex flex-col w-auto max-md:w-100 max-md:items-center">
          <h2 class="text-4xl w-auto max-md:w-1/2 max-md:text-xl font-semibold">EMAIL</h2>
          <p
            @click="sendMail"
            class="text-2xl max-md:text-lg max-md:w-100 w-auto hover:opacity-75 hover:cursor-pointer underline"
          >
            {{ email }}
          </p>
        </div>
        <div class="flex w-auto max-md:w-100 max-md:items-center flex-col">
          <h2 class="text-4xl font-semibold max-md:text-xl max-md:w-1/2 w-auto">TELEFOON</h2>
          <p class="text-2xl w-auto max-md:w-/5">+32 499/74 98 09</p>
        </div>
      </div>
    </div>
    <div class="p-12 bg-bg-100"></div>

    <!-- Your HTML template code here -->
  </div>
</template>

<script>
import CkHeader from '@/components/CkHeader.vue'

export default {
  components: {
    CkHeader
  },
  data() {
    return {
      email: ' tgrensgeval@hotmail.com'
      // Your data properties here
    }
  },
  methods: {
    // Your methods here
    sendMail() {
      window.location.href = `mailto:${this.email}`
    }
  },
  mounted() {
    // Code to run when the component is mounted
  }
}
</script>

<style scoped>
/* Your component-specific styles here */
</style>
