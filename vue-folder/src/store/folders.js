import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: null,
    folders: [
      { name: "Archive", id: 1, parentId: null },
      { name: "Life", id: 2, parentId: null },
      { name: "House", id: 3, parentId: 1 },
      { name: "York", id: 4, parentId: 3 },
      { name: "Gaylord", id: 5, parentId: 3 }
    ]
  },
  mutations: {
    selectFolder (state, { id }) {
      state.selected = id
    },
    renameFolder (state, { name }) {
      state.folders.find((folder) => folder.id === state.selected).name = name
    },
    deleteFolder (state, { id }) {
      state.folders = state.folders.filter((folder) => folder.id !== id)
    },
    newFolder (state, { name, parentId }) {
      state.folders.push({ name, parentId, id: Math.random() })
    }
  },
  getters: {
    rootFolders (state) {
      return state.folders.filter((folder) => folder.parentId === null)
    }
  }
})
