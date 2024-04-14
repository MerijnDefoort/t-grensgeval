<template>
  <div class="w-1/3 bg-white flex flex-col justify-between rounded-2xl h-[850px]">
    <div class="bg-primary-200 w-full p-12 rounded-2xl">
      <p class="text-7xl text-center text-white">{{ title }}</p>
    </div>
    <div class="p-8">
      <div v-if="timeStamps.length === 1" class="flex flex-col justify-center items-center">
        <p class="text-center my-4 text-3xl">{{ timeStamps[0].start }}</p>
        <div class="z-10 border-gray-400 border-l-solid max-lg:h-14 h-12 w-1.5 border-l-2"></div>
        <p class="text-center my-4 text-3xl">{{ timeStamps[0].end }}</p>
      </div>
      <div class="flex flex-col justify-center items-center" v-else>
        <p class="text-center my-4 text-3xl">{{ timeStamps[0].start }}</p>
        <div
          class="z-10 border-gray-400 border-l-solid max-lg:h-14 h-12 w-1.5 border-l-2 max-lg:-bottom-7 -bottom-10"
        ></div>
        <p class="text-center my-4 text-3xl">{{ timeStamps[0].end }}</p>
        <p class="text-center my-4 text-3xl font-bold text-primary-200">OF</p>
        <p class="text-center my-4 text-3xl">{{ timeStamps[1].start }}</p>
        <div
          class="z-10 border-gray-400 border-l-solid max-lg:h-14 h-12 w-1.5 border-l-2 max-lg:-bottom-7 -bottom-10"
        ></div>
        <p class="text-center my-4 text-3xl">{{ timeStamps[1].end }}</p>
      </div>
    </div>
    <div class="pb-12">
      <div class="px-12">
        <div class="h-2 border-b-2 mb-8"></div>
      </div>
      <p class="text-7xl text-center font-extrabold text-primary-200">{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarifCard',
  props: {
    timeStamps: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // Your data properties go here
    }
  },
  methods: {
    // Your methods go here
  },
  computed: {
    // Your computed properties go here
  },
  mounted() {
    // Code to run when the component is mounted goes here
  }
}
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
