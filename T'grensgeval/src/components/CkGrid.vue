<template>
  <div class="grid max-md:grid-cols-1 grid-cols-2 gap-4">
    <div
      v-for="(text, index) in words"
      :key="index"
      :class="{ 'border-b-2 pb-2': isSmallScreen && index !== words.length - 1 }"
    >
      <p class="w-full text-2xl max-md:text-lg max-md:text-center font-medium">
        <!-- Use span to style text within parentheses -->
        <span v-html="formatText(text)"></span>
      </p>
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
  computed: {
    // Compute whether the screen is small
    isSmallScreen() {
      return window.innerWidth <= 768 // Adjust the breakpoint as needed
    }
  },
  methods: {
    // Method to format text with parentheses
    formatText(text) {
      // Regular expression to find text within parentheses
      let regex = /\([^)]+\)/g
      // Replace text within parentheses with styled text, adding line breaks when necessary
      if (this.isSmallScreen) {
        return text.replace(regex, '<br/><span style="font-weight: 300;">$&</span><br/>')
      } else {
        return text.replace(regex, '<span style="font-weight: 300;">$&</span>')
      }
    }
  }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>
