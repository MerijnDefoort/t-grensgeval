// store/index.js

import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      homePageData: null,
      indelingData: null,
      contactPageData: null,
      tarievenPageData: null
    }
  },
  mutations: {
    setIndelingData(state, value) {
      value = JSON.parse(value)
      state.indelingData = value
    },
    setHomePageData(state, value) {
      value = JSON.parse(value)
      state.homePageData = value
    },
    setContactPageData(state, value) {
      value = JSON.parse(value)
      console.log('value', value)
      state.contactPageData = value
    },
    setTarievenPageData(state, value) {
      value = JSON.parse(value)
      state.tarievenPageData = value
    }
  }
})

export default store
