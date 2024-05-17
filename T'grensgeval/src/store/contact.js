// store/index.js

import { createStore } from 'vuex'

export const home = createStore({
  state() {
    return {
      quote: null,
      title: null,
      text: null,
      mapTitle: null
    }
  },
  mutations: {
    setQuote(state, value) {
      console.log(value)
      state.quote = value
    },
    setHomeTitle(state, value) {
      state.title = value
    },
    setHomeText(state, value) {
      state.text = value
    },
    setMapTitle(state, value) {
      state.mapTitle = value
    }
  }
})

export default home
