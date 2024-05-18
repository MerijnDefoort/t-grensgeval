<template>
  <div>
    <ck-header />
    <div class="z-10 pt-36 flex flex-col text-center items-center justify-center bg-bg-100">
      <p class="text-accent font-catamaran text-8xl max-lg:text-5xl font-bold">"</p>
      <p class="text-5xl max-lg:text-2xl w-1/2 max-lg:w-3/4 font-light mb-32">
        {{ contact?.quote[0] }} <br /><br />
        <b>{{ contact?.quote[1].toUpperCase() }}</b>
      </p>
    </div>
    <div class="bg-bg-200 p-12 flex flex-col justify-center items-center">
      <h1 class="text-7xl text-center max-lg:text-3xl font-light max-lg:mb-8 mb-16">
        {{ contact?.titel.toUpperCase() }}
      </h1>
      <div class="flex max-md:flex-col max-md:gap-6 justify-evenly max-md:text-center items-center">
        <div class="flex flex-col w-auto max-md:w-100 max-md:items-center">
          <h2 class="text-4xl w-auto max-md:w-1/2 max-md:text-xl font-semibold">
            {{ contact?.email_titel.toUpperCase() }}
          </h2>
          <p
            @click="sendMail"
            class="text-2xl max-md:text-lg max-md:w-100 w-auto hover:opacity-75 hover:cursor-pointer underline"
          >
            {{ contact?.email_text }}
          </p>
        </div>
        <div class="flex w-auto max-md:w-100 max-md:items-center flex-col">
          <h2 class="text-4xl font-semibold max-md:text-xl max-md:w-1/2 w-auto">
            {{ contact?.telefoon_titel.toUpperCase() }}
          </h2>
          <p class="text-2xl w-auto max-md:w-/5">{{ contact?.telefoon_text }}</p>
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
      contact: null // Your data properties here
    }
  },

  mounted() {
    if (this.contactPageData) {
      this.contact = this.contactPageData
    }
  },
  computed: {
    contactPageData() {
      return this.$store.state?.contactPageData
    }
  },

  watch: {
    contactPageData: {
      handler() {
        this.contact = this.contactPageData
        console.log(this.contactPageData)
      },
      deep: true
    }
  },
  methods: {
    // Your methods here
    sendMail() {
      window.location.href = `mailto:${this.email}`
    }
  }
}
</script>

<style scoped>
/* Your component-specific styles here */
</style>
