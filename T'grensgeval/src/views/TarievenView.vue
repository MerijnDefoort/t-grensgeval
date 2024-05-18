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
      <h1 class="text-7xl text-center max-lg:text-3xl font-light max-lg:mb-8 mb-16">
        {{ tarieven?.titel?.toUpperCase() }}
      </h1>
      <p
        class="text-3xl w-1/2 max-md:w-full max-lg:text-xl font-extralight text-center"
        v-html="tarieven?.text"
      ></p>
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
