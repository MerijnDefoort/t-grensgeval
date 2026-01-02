<script>
import CkMap from '@/components/CkMap.vue'
import CkHeader from '@/components/CkHeader.vue'
import CkImageGrid from '@/components/CkImageGrid.vue'

import { storage } from '@/plugins/firebase.js'
import { ref as storageRef, listAll, getDownloadURL } from 'firebase/storage'
export default {
  components: {
    CkHeader,
    CkMap,
    CkImageGrid
  },
  data() {
    return {
      home: null,
      streekImages: [],
      images: [],
      houseImages: []
    }
  },
  computed: {
    homePageData() {
      return this.$store.state?.homePageData
    }
  },
  mounted() {
    if (this.homePageData) {
      this.home = this.homePageData
    }
    this.fetchImages()
  },
  watch: {
    homePageData: {
      handler() {
        this.home = this.homePageData
        console.log(this.homePageData)
      },
      deep: true
    }
  },
  methods: {
    async fetchImages() {
      const listRefStreek = storageRef(storage, 'fotos_streek')
      const listRef = storageRef(storage, 'fotos_home_page')
      const listRefHouse = storageRef(storage, 'fotos_huis_progress') // Adjust the folder path as needed
      const resStreek = await listAll(listRefStreek)
      const res = await listAll(listRef)
      const resHouse = await listAll(listRefHouse)

      const streekImagePromises = resStreek.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef)
        return {
          name: itemRef.name,
          url
        }
      })

      const imagePromises = res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef)
        return {
          name: itemRef.name,
          url
        }
      })

      const houseImagePromises = resHouse.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef)
        return {
          name: itemRef.name,
          url
        }
      })

      this.streekImages.value = await Promise.all(streekImagePromises)
      this.images.value = await Promise.all(imagePromises)
      this.houseImages.value = await Promise.all(houseImagePromises)
      console.log(this.images?.value)
    }
    // Your methods here
  }
}
</script>
<template>
  <div class="flex flex-col overflow-x-hidden">
    <ck-header />
    <!--TODO: fix images zoals in design. maar laat bij kleine schermen zoals nu.-->
    <div class="w-100 bg-bg-100">
      <div
        class="z-10 h-auto mt-36 max-lg:mt-16 flex flex-col text-center items-center justify-center"
      >
        <p class="text-accent font-catamaran text-8xl max-lg:text-5xl font-bold">"</p>
        <p class="text-5xl max-lg:text-2xl w-1/2 max-lg:w-3/4 font-light">
          {{ home?.quote }}
        </p>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex relative items-center justify-center">
          <div
            class="flex flex-row max-lg:flex-col justify-center items-center absolute gap-24 max-lg:gap-12"
          >
            <img
              v-for="(image, index) in images?.value"
              :key="index"
              :src="image?.url"
              class="w-1/4 h-[550.66666666666666666666666666667px] max-lg:w-2/3 max-lg:h-auto rounded-3xl z-10"
              alt="home"
            />
          </div>
          <div
            class="z-0 bg-primary-100 max-lg:w-1/2 max-lg:m-24 m-96 w-[85%] max-lg:h-[1000px] rounded-3xl h-96"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="p-12 max-lg:px-0 max-lg:py-8 bg-bg-200 flex flex-col justify-center items-center text-center"
    >
      <h1 class="text-7xl max-lg:text-2xl max-md:px-6 font-light max-lg:mb-8 mb-16">
        {{ home?.titel?.toUpperCase() }}
      </h1>
      <p class="text-3xl max-lg:text-xl font-extralight max-lg:w-100 w-2/3">
        {{ home?.text }}
      </p>
      <div
        v-if="houseImages?.value?.length > 0"
        class="px-24 max-md:px-6 py-24 flex justify-center items-center"
      >
        <ck-image-grid :images="houseImages.value" />
      </div>
      <div class="flex mt-48 max-lg:mt-16 mb-12 flex-col relative justify-center items-center">
        <button
          class="rounded-3xl absolute border-solid border-black border-2 hover:border-2 hover:bg-primary-100 hover:border-primary-100 hover:text-bg-100 bg-bg-200 w-1/6 max-lg:w-1/2 text-2xl max-lg:text-base font-semibold py-2 px-4"
          onclick="window.location.href = '/Contact'"
        >
          CONTACT
        </button>
        <div class="border-b-2 border-black w-2/3"></div>
      </div>
    </div>
    <div
      class="p-12 px-96 max-lg:px-0 max-lg:py-6 bg-bg-100 flex flex-col justify-center items-center text-center"
    >
      <h1 class="text-7xl max-lg:text-3xl font-light max-lg:mb-4 mb-16">
        {{ home?.map_titel?.toUpperCase() }}
      </h1>
      
      <ck-map />
      <div
        v-if="streekImages?.value?.length > 0"
        class="px-24 max-md:px-6 py-24 flex justify-center items-center"
      >
        <ck-image-grid :images="streekImages.value" />
      </div>
    </div>
  </div>
</template>
