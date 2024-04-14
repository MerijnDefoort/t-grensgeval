<template>
  <div>
    <!-- Your HTML template code here -->
    <ck-header />
    <div class="bg-bg-100 flex item-center flex-col justify-center">
      <div class="px-[500px] py-24"><ck-image-grid :images="images" /></div>
      <div class="bg-bg-200 p-24 flex flex-col justify-center items-center">
        <h1 class="text-7xl text-center max-lg:text-3xl font-light max-lg:mb-8 mb-32">
          VOORZIENINGEN
        </h1>
        <div class="w-2/3 mt-8">
          <h2 class="text-4xl">GELIJK VLOERS</h2>
          <ck-card
            icon="Cooking_pot"
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
              'Teppanyaki (op aamvraag)'
            ]"
          />
          <ck-card icon="Living_room" :words="['TV', 'Radio', 'Wifi', 'Sfeerhaard']" />
          <ck-card icon="King_bed" :words="['2 persoonsbed 180x200', 'Dekbed 260x240']" />
          <ck-card icon="Bathtub" :words="['Douche', 'Wastafel', 'Haardroger']" />
        </div>
        <div class="w-2/3 mt-8">
          <h2 class="text-4xl">1ste VERDIEPING</h2>
          <ck-card icon="King_bed" times="3" :words="['2 persoonsbed 180x200', 'Dekbed 260x240']" />
          <ck-card icon="Bathtub" :words="['Douche', 'Wastafel', 'Haardroger']" />
        </div>
        <div class="w-2/3 mt-8">
          <h2 class="text-4xl">ALGEMEEN</h2>
          <ck-card
            icon="Home"
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
            icon="Error"
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
          url: '/src/assets/images/Bedroom_1.jpg',
          alt: 'Image 1'
        },
        { url: '/src/assets/images/Bedroom_2.jpg', alt: 'Image 2' },
        { url: '/src/assets/images/Bedroom_3.jpg', alt: 'Image 3' },
        { url: '/src/assets/images/Bedroom_4.jpg', alt: 'Image 4' },
        { url: '/src/assets/images/Bedroom_5.jpg', alt: 'Image 5' },
        { url: '/src/assets/images/Hall.jpg', alt: 'Image 6' },
        { url: '/src/assets/images/Livingroom.jpg', alt: 'Image 7' },
        { url: '/src/assets/images/Seats.jpg', alt: 'Image 8' },
        { url: '/src/assets/images/Upper_Hall.jpg', alt: 'Image 9' },
        { url: '/src/assets/images/Washroom_1.jpg', alt: 'Image 7' },
        { url: '/src/assets/images/Washroom_2.jpg', alt: 'Image 8' },
        { url: '/src/assets/images/Washroom_3.jpg', alt: 'Image 9' }
      ]

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
