import './assets/main.css'
import './import.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import bathtub from '@/assets/icons/Bathtub.svg'
import bed from '@/assets/icons/King_bed.svg'
import cookingpot from '@/assets/icons/Cooking_pot.svg'
import error from '@/assets/icons/Error.svg'
import homeIcon from '@/assets/icons/Home.svg'
import livingroom from '@/assets/icons/Living_room.svg'
import logo from '@/assets/icons/Logo.svg'
import firebase from '@/plugins/firebase'
import { home } from '@/store/home'
import vuex from 'vuex'
// import store from '@/store'

const icons = {
  bathtub,
  bed,
  cookingpot,
  error,
  homeIcon,
  livingroom,
  logo
}

export default icons

// import VueCarousel from 'vue-carousel'

const app = createApp(App)
app.use(createPinia())
// app.use(store)
app.use(home)
app.use(vuex)

app.use(firebase)
// app.use(VueCarousel)
app.use(router)

app.mount('#app')
