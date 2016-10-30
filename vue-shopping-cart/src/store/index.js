import Vue from "vue"
import Vuex from "vuex"
import { state, mutations } from "./mutations"

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
})

export default store

const addItem = (name, price) => store.commit("addItem", { name, price })

addItem("banana", 0.66)
addItem("apple", 0.86)
addItem("sweet potato", 0.64)
