const initialState = {
  quote: null
}

const defaultState = { ...initialState }

export const state = () => defaultState

export const mutations = {
  setQuote(state, value) {
    state.quote = value
  }
}
