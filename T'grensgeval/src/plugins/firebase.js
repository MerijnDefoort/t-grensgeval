/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { fetchAndActivate, getRemoteConfig, getValue } from 'firebase/remote-config'
import { getStorage } from 'firebase/storage'
import { store } from '@/store/index.js'
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
  minimumFetchIntervalMillis: 100
}
const storage = getStorage(app)
export { storage }

// const rcDefaultsFile = await fetch('remote_config_defaults.json')
// const rcDefaultsJson = await rcDefaultsFile.json()
// remoteConfig.defaultConfig = rcDefaultsJson

fetchAndActivate(remoteConfig)
  .then(() => {
    // ...

    const indelingData = getValue(remoteConfig, 'indeling_page_data')
    const homePageData = getValue(remoteConfig, 'home_page_data')
    const contactPageData = getValue(remoteConfig, 'contact_page_data')
    const tarievenPageData = getValue(remoteConfig, 'tarieven_page_data')
    store.commit('setIndelingData', indelingData._value)
    store.commit('setHomePageData', homePageData._value)
    store.commit('setContactPageData', contactPageData._value)
    store.commit('setTarievenPageData', tarievenPageData._value)
  })
  .catch((err) => {
    // ...
  })

export default app
