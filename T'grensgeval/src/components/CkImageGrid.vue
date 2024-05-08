<template>
  <div class="slider w-full flex justify-center">
    <div class="slider-container" :style="{ width: containerWidth }">
      <img
        v-for="(image, index) in visibleImages"
        :src="image.url"
        :key="index"
        alt="Slider Image"
        class="slider-image"
      />
    </div>
    <div
      class="absolute top-1/2 px-4 w-[1500px] max-md:w-full flex justify-between items-center"
      style="padding: 0 24px"
    >
      <button @click="prevSlide" class="slider-button prev" :class="{ hidden: currentIndex === 0 }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-10 w-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="slider-button next"
        :class="{ hidden: currentIndex + visibleImagesCount >= images.length }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-10 w-10"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      visibleImagesCount: 1, // Initially set to 1
      containerWidth: '100%' // Initially set to full width
    }
  },
  computed: {
    visibleImages() {
      return this.images.slice(this.currentIndex, this.currentIndex + this.visibleImagesCount)
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex + this.visibleImagesCount < this.images.length) {
        this.currentIndex++
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    updateVisibleImagesCount() {
      if (window.innerWidth >= 768) {
        this.visibleImagesCount = 3
      } else {
        this.visibleImagesCount = 1
        this.containerWidth = '100%'
      }
    }
  },
  mounted() {
    this.updateVisibleImagesCount()
    window.addEventListener('resize', this.updateVisibleImagesCount)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateVisibleImagesCount)
  }
}
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  max-width: 400px; /* Adjust as needed */
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .slider-container {
    overflow: hidden;
  }
}

.slider-container {
  display: flex;

  justify-content: center;
  gap: 24px;
}

@media screen and (max-width: 768px) {
  .slider-image {
    width: 100%;

    height: auto;
  }
}

.slider-image {
  width: 400px;
  height: 600px;
  border-radius: 24px;
}

.slider-button {
  transform: translateY(-50%);
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .slider-button svg {
    background-color: white;
  }
}
@media screen and (min-width: 768px) {
  .slider-button svg {
    background-color: black;
    stroke: white;
  }
}
.slider-button svg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 10px;
  opacity: 0.8;
}
.slider-button.prev {
  left: 0;
  width: 40px;
}

.slider-button.next {
  right: 0;
  width: 40px;
}

.slider-button:focus {
  outline: none;
}
.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.prev {
  left: 0;
  margin-left: 16px;
}

.next {
  right: 0;
  margin-right: 16px;
}
</style>
