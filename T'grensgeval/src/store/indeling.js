// store/index.js

import { createStore } from 'vuex'

export const indeling = createStore({
  state() {
    return {
      indelingData: null
    }
  },
  mutations: {
    setIndelingData(state, value) {
      value = JSON.parse(value)
      state.indelingData = value
    }
  }
})

export default indeling
