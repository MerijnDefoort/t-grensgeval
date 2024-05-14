/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { fetchAndActivate, getRemoteConfig, getValue } from 'firebase/remote-config'
import { useStore } from 'vuex'

import { home } from '@/store/home'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBGI3iUjv-lS32-F0bumtnu5EK9-ExeV4s',
  authDomain: 't-grensgeval.firebaseapp.com',
  projectId: 't-grensgeval',
  storageBucket: 't-grensgeval.appspot.com',
  messagingSenderId: '339004280384',
  appId: '1:339004280384:web:60ee411251390d6762d9a5',
  measurementId: 'G-QZN2WZF5VN'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const remoteConfig = getRemoteConfig()
remoteConfig.settings = {
  minimumFetchIntervalMillis: 600000
}
// const rcDefaultsFile = await fetch('remote_config_defaults.json')
// const rcDefaultsJson = await rcDefaultsFile.json()
// remoteConfig.defaultConfig = rcDefaultsJson

console.log(remoteConfig.settings)

fetchAndActivate(remoteConfig)
  .then(() => {
    // ...

    const quote = getValue(remoteConfig, 'Quote')
    const title = getValue(remoteConfig, 'Home_title')
    const text = getValue(remoteConfig, 'Home_text')
    const mapTitle = getValue(remoteConfig, 'Home_mapTitle')
    console.log(quote._value, title._value)
    home.commit('setQuote', quote._value)
    home.commit('setHomeTitle', title._value)
    home.commit('setHomeText', text._value)
    home.commit('setMapTitle', mapTitle._value)
  })
  .catch((err) => {
    // ...
  })

export default app
