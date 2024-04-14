<template>
  <!-- Your HTML template code here -->

  <div class="grid grid-cols-2 gap-4">
    <div v-for="(text, index) in words" :key="index" class="overflow-hidden">
      <p class="w-full text-2xl h-auto">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CkGrid',
  props: {
    words: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      // Your data properties here
    }
  },
  methods: {
    // Your methods here
  },
  mounted() {
    // Code to run when the component is mounted
  }
}
</script>

<style scoped>
/* @import '@coreui/coreui/dist/css/coreui.min.css'; */
</style>
