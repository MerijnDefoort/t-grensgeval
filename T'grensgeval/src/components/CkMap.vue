<template>
  <GoogleMap
    :api-key="apiKey"
    :style="({ width: mapWidth }, { height: mapHeight })"
    :center="center"
    :zoom="15"
    :options="mapOptions"
    :controlSize="30"
    :fullscreenControl="false"
    :mapTypeControl="false"
  >
    <MapMarker :options="{ position: center, title: `VakantieWoning 't Grensgeval ` }">
      <InfoWindow :options="{ position: center }" style="width: 100%">
        <div class="text-start flex">
          <img src="/src/assets/images/House.jpg" class="mr-4 w-1/4" alt="" />
          <div>
            <h1 class="mb-1 font-bold text-xl">Vakantiewoning 'T Grensgeval</h1>
            <h3 class="font-light">Heuvellandseweg 7, 8970 Poperinge</h3>
          </div>
        </div>
      </InfoWindow>
    </MapMarker>
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker as MapMarker, InfoWindow } from 'vue3-google-map'

export default {
  components: {
    GoogleMap,
    MapMarker,
    InfoWindow
  },
  props: {
    height: {
      type: String
    },
    width: {
      type: String
    }
  },

  data() {
    return {
      mapHeight: this.height,

      center: { lat: 50.810026, lng: 2.75154 },
      apiKey: import.meta.env.VITE_GOOGLEMAPS_ACCESS_TOKEN,
      mapOptions: {
        mapTypeId: 'roadmap' // Setting map type to 'roadmap' to remove satellite option
      }
    }
  },
  methods: {
    // Add your methods here
  }
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
