<template>
  <div>
    <ck-header />
    <div class="bg-bg-100 p-24 max-md:p-12">
      <div
        class="flex items-center h-100 flex-row max-lg:flex-col gap-24 max-lg:gap-12 max-lg:mt-12 max-sm:mt-8 mt-28 justify-center"
      >
        <ck-tarif-card
          :title="tarieven?.cards?.weekend?.titel.toUpperCase()"
          :timeStamps="tarieven?.cards?.weekend?.time_stamps"
          :price="tarieven?.cards?.weekend?.prijs"
        />
        <ck-tarif-card
          :title="tarieven?.cards?.midweek?.titel.toUpperCase()"
          :timeStamps="tarieven?.cards?.midweek?.time_stamps"
          :price="tarieven?.cards?.midweek?.prijs"
        />

        <ck-tarif-card
          :title="tarieven?.cards?.week?.titel.toUpperCase()"
          :timeStamps="tarieven?.cards?.week?.time_stamps"
          :price="tarieven?.cards?.week?.prijs"
        />
      </div>
    </div>
    <div class="p-12 bg-bg-200 flex flex-col justify-center items-center">
      <h1
        class="text-7xl text-center max-md:text-left max-lg:text-3xl font-light max-lg:mb-8 max-md:mb-16 mb-16"
      >
        {{ tarieven?.titel?.toUpperCase() }}
      </h1>
      <div class="grid grid-cols-2 max-md:flex max-md:flex-col w-3/5 max-md:w-full">
        <div class="max-md:mb-12 w-3/5 max-md:w-full">
          <h2
            class="text-5xl max-md:text-2xl mb-6 font-light max-md:font-normal max-md:w-full uppercase"
          >
            {{ tarieven?.inbegrepen?.titel }}
          </h2>
          <ul class="max-md:pl-10 pl-12">
            <li
              class="list-disc text-2xl max-md:text-lg"
              v-for="item in tarieven?.inbegrepen?.text"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="w-full">
          <h2
            class="text-5xl max-md:text-2xl mb-6 font-light max-md:w-full max-md:font-normal uppercase"
          >
            {{ tarieven?.niet_inbegrepen?.titel }}
          </h2>
          <ul class="max-md:pl-10 pl-12">
            <li
              class="list-disc text-2xl max-md:text-lg"
              v-for="item in tarieven?.niet_inbegrepen?.text"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="p-12 bg-bg-100"></div>
  </div>
</template>

<script>
import CkHeader from '@/components/CkHeader.vue'
import CkTarifCard from '@/components/CkTarifCard.vue'
export default {
  components: {
    CkHeader,
    CkTarifCard
  },
  data() {
    return {
      tarieven: null
    }
  },
  computed: {
    tarievenPageData() {
      return this.$store.state?.tarievenPageData
    }
  },
  mounted() {
    if (this.tarievenPageData) {
      this.tarieven = this.tarievenPageData
    }
  },
  watch: {
    tarievenPageData: {
      handler() {
        this.tarieven = this.tarievenPageData
        console.log(this.tarievenPageData)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
/* Your component-specific styles here */
</style>
