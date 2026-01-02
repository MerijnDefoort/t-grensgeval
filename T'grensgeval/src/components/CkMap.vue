<script setup>
import { ref } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'

const mapCenter = ref([2.75154, 50.810026]) // Set the center to the specified position
</script>

<template>
  <MapboxMap
    style="height: 400px; width: 70%"
    access-token="pk.eyJ1IjoibWVyaWpuLWQiLCJhIjoiY2x1bnZoZmo4MXFxNzJrbG12Y29nMm9ueSJ9.9lynwNifeana3_i1vxaPVw"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="mapCenter"
    :zoom="12"
    @load="onMapLoad"
  >
    <MapboxMarker :lng-lat="[2.75154, 50.810026]">
      <template #popup>
        <div class="text-start flex mt-5 w-48">
          <div>
            <h1 class="mb-1 font-bold max-md:text-sm text-xl">Vakantiewoning 'T Grensgeval</h1>
            <h3 class="font-light">Heuvellandseweg 7, 8970 Poperinge</h3>
          </div>
        </div>
      </template>
    </MapboxMarker>
  </MapboxMap>
</template>

<style scoped>
/* On small screens (mobile) increase width to 70% */
</style>
