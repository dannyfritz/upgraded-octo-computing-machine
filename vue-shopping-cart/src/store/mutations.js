import _ from "lodash"

export const state = {
  cart: [],
  items: []
}

export const mutations = {
  addItem (state, { name, price }) {
    state.items.push({
      name, price, id: _.uniqueId()
    })
  },
  addToCart (state, { id, quantity }) {
    const item = state.items.find((item) => item.id === id)
    state.cart.push(Object.assign({ quantity }, item))
  },
  removeFromCart (state, { id }) {
    state.cart = state.cart.filter((item) => item.id !== id)
  }
}
