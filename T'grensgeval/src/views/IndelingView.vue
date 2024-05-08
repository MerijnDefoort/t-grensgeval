<!-- eslint-disable vue/no-unused-components -->
<template>
  <div>
    <!-- Your HTML template code here -->
    <ck-header />
    <div class="bg-bg-100 flex item-center flex-col justify-center">
      <div class="px-24 max-md:px-6 py-24 flex justify-center items-center">
        <ck-image-grid :images="images" />
      </div>
      <div class="bg-bg-200 p-24 max-md:p-12 flex flex-col justify-center items-center">
        <h1 class="text-7xl text-center max-lg:text-3xl font-light max-lg:mb-8 mb-32">
          VOORZIENINGEN
        </h1>
        <div class="w-2/3 max-md:w-full mt-8">
          <h2 class="text-4xl max-md:text-center">GELIJK VLOERS</h2>
          <ck-card
            :icon="icons.Cookingpot"
            :words="[
              'Inductie kookvuur',
              'Grote elektrische oven',
              'Microgolfoven',
              'Koelkast',
              'Vaatwasmachine',
              'Friteuse (zonder vet)',
              'Koffiezet',
              'Broodrooster, mixer...',
              'Ruime eettafel',
              'Teppanyaki (op aanvraag)'
            ]"
          />
          <ck-card :icon="icons.Livingroom" :words="['TV', 'Radio', 'Wifi', 'Sfeerhaard']" />
          <ck-card :icon="icons.Bed" :words="['2 persoonsbed 180x200', 'Dekbed 260x240']" />
          <ck-card :icon="icons.Bathtub" :words="['Douche', 'Wastafel', 'Haardroger']" />
        </div>
        <div class="w-2/3 max-md:w-full mt-8">
          <h2 class="text-4xl max-md:text-center max-md:text-3xl">1ste VERDIEPING</h2>
          <ck-card
            :icon="icons.Bed"
            times="3"
            :words="['2 persoonsbed 180x200', 'Dekbed 260x240']"
          />
          <ck-card :icon="icons.Bathtub" :words="['Douche', 'Wastafel', 'Haardroger']" />
        </div>
        <div class="w-2/3 max-md:w-full mt-8">
          <h2 class="text-4xl max-md:text-center">ALGEMEEN</h2>
          <ck-card
            :icon="icons.Home"
            :words="[
              '2 apparte toiletten',
              'BBQ',
              'Kinderstoelen',
              'Airconditioning met verwarming',
              'Kinderbedjes',
              'Parking',
              'Verversingsmat',
              'Ruime afluistbare berging',
              'Terras + tuinmeubelen'
            ]"
          />
          <ck-card
            :icon="icons.Error"
            text="Bedden goed is steeds verplicht! De huurder kan deze zelf voorzien of kunnen ter plaats gehuurd worden."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CkCard from '@/components/CkCard.vue'
import CkHeader from '@/components/CkHeader.vue'
import CkImageGrid from '@/components/CkImageGrid.vue'
import bedroom1 from '@/assets/images/Bedroom_1.jpg'
import bedroom2 from '@/assets/images/Bedroom_2.jpg'
import bedroom3 from '@/assets/images/Bedroom_3.jpg'
import bedroom4 from '@/assets/images/Bedroom_4.jpg'
import bedroom5 from '@/assets/images/Bedroom_5.jpg'
import hall from '@/assets/images/Hall.jpg'
import livingroom from '@/assets/images/Livingroom.jpg'
import seats from '@/assets/images/Seats.jpg'
import upperHall from '@/assets/images/Upper_Hall.jpg'
import washroom1 from '@/assets/images/Washroom_1.jpg'
import washroom2 from '@/assets/images/Washroom_2.jpg'
import washroom3 from '@/assets/images/Washroom_3.jpg'
import error from '@/assets/icons/Error.jpg'
import home from '@/assets/icons/Home.jpg'
import bed from '@/assets/icons/Bed.jpg'
import bathtub from '@/assets/icons/Bathtub.jpg'
import cookingPot from '@/assets/icons/Cooking_pot.jpg'
import livingRoom from '@/assets/icons/Living_room.jpg'

export default {
  components: {
    CkHeader,
    CkCard,
    CkImageGrid
  },
  data() {
    return {
      images: [
        {
          url: bedroom1,
          alt: 'Image 1'
        },
        { url: bedroom2, alt: 'Image 2' },
        { url: bedroom3, alt: 'Image 3' },
        { url: bedroom4, alt: 'Image 4' },
        { url: bedroom5, alt: 'Image 5' },
        { url: hall, alt: 'Image 6' },
        { url: livingroom, alt: 'Image 7' },
        { url: seats, alt: 'Image 8' },
        { url: upperHall, alt: 'Image 9' },
        { url: washroom1, alt: 'Image 7' },
        { url: washroom2, alt: 'Image 8' },
        { url: washroom3, alt: 'Image 9' }
      ],
      icons: {
        Error: error,
        Home: home,
        Bed: bed,
        Bathtub: bathtub,
        Cookingpot: cookingPot,
        Livingroom: livingRoom
      }

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
