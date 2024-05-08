<template>
  <div>
    <ck-header />
    <div class="bg-bg-100 p-24 max-md:p-12">
      <div
        class="flex items-center h-100 flex-row max-lg:flex-col gap-24 max-lg:gap-12 max-lg:mt-12 max-sm:mt-8 mt-28 justify-center"
      >
        <ck-tarif-card
          title="WEEKEND"
          :timeStamps="[{ start: 'VRIJDAG 16U30', end: 'MAANDAG 10U' }]"
          price="€ 440"
        />
        <ck-tarif-card
          title="MIDWEEK"
          :timeStamps="[{ start: 'MAANDAG 16U30', end: 'VRIJDAG 10U' }]"
          price="€ 440"
        />

        <ck-tarif-card
          title="WEEK"
          :timeStamps="[
            { start: 'VRIJDAG 16U30', end: 'VRIJDAG 10U' },
            { start: 'MAANDAG 16U30', end: 'MAANDAG 10U' }
          ]"
          price="€ 640"
        />
      </div>
    </div>
    <div class="p-12 bg-bg-200 flex flex-col justify-center items-center">
      <h1 class="text-7xl text-center max-lg:text-3xl font-light max-lg:mb-8 mb-16">
        WAT KRIJG IK VOOR DEZE PRIJS?
      </h1>
      <p class="text-3xl w-1/2 max-md:w-full max-lg:text-xl font-extralight text-center">
        In de prijs zijn volgende dingen inbegrepen: <br />
        <b>Verbruik, Toeristentaks, Schoonmaak, Elektriciteit en WiFi</b>
        <br />
        Wat <b>niet inebgrepen</b> is zijn <b> bedlinnen en badlinnen</b> , maar deze kan je
        <b>wel huren</b> de prijs hiervoor is: <br />
        <b>€7 voor bedlinnen en €3 voor badlinnen.</b>
      </p>
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
/* Your component-specific styles here */
</style>
