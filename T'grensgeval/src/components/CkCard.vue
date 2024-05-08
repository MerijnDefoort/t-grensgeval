<template>
  <div class="bg-bg-100 p-12 rounded-2xl my-6">
    <div class="flex items-center justify-center gap-8">
      <div class="flex items-center justify-center gap-2 w-28">
        <img :src="icon" alt="" class="text-primary-100 h-16 w-16 mix-blend-darken" />
        <p v-if="times > 1" class="w-24">x {{ times }}</p>
      </div>
      <hr v-if="text === '' && isWideScreen" class="border-t-primary-100 flex-grow border-t-4" />
      <p v-if="text !== '' && isWideScreen" class="text-2xl" v-html="addLineBreaks(text)"></p>
    </div>
    <ck-grid class="mt-8" v-if="text === ''" :words="words" />
    <p
      v-if="text !== '' && !isWideScreen"
      class="text-2xl mt-6 text-center"
      v-html="addLineBreaks(text)"
    ></p>
  </div>
</template>

<script>
import CkGrid from '@/components/CkGrid.vue'
export default {
  name: 'CkCard',
  components: {
    CkGrid
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    },
    times: {
      type: Number,
      default: 1
    },
    words: {
      type: Array,
      required: true
    }
  },
  computed: {
    isWideScreen() {
      return window.innerWidth > 500
    }
  },
  methods: {
    addLineBreaks(text) {
      // Regular expression to match periods, exclamation marks, and question marks
      const punctuationRegex = /([.!?])/
      // Split the text whenever a period, exclamation mark, or question mark is encountered
      const lines = text.split(punctuationRegex)
      // Add the punctuation back to the appropriate position in the array
      const result = []
      for (let i = 0; i < lines.length; i += 2) {
        const line = lines[i] + (lines[i + 1] || '') // Add the punctuation if it exists
        result.push(line.trim()) // Trim any leading/trailing whitespace
      }
      // Join the split lines with line breaks
      return result.join('<br>')
    }
  }
}
</script>

<style scoped>
.card {
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-header {
  display: flex;
  width: 100%;
}
.icon {
  margin-right: 10px;
}
.line {
  flex-grow: 1;
  border: none;
  border-top: 1px solid black;
}
.card-body {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.column {
  flex: 1;
}
</style>
