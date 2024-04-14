<template>
  <!-- Your HTML template code here -->

  <div class="grid grid-cols-4 gap-4">
    <div v-for="(image, index) in images" :key="index" class="rounded-lg overflow-hidden shadow-md">
      <img :src="image.url" :alt="image.alt" class="w-full h-auto" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CkGrid',
  props: {
    images: {
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
