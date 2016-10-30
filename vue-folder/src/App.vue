<template>
  <div class="app">
    <input v-model="newName" @keydown.enter="renameFolder">
    <button @click="deleteFolder">Delete</button>
    <input v-model="newName" @keydown.enter="newFolder">
    <folder-container v-for="folder in rootFolders" :folder="folder"></folder-container>
  </div>
</template>

<script>
import FolderContainer from "./components/FolderContainer"

export default {
  name: "app",
  components: {
    FolderContainer
  },
  data () {
    return {
      newName: ""
    }
  },
  computed: {
    rootFolders () {
      return this.$store.getters.rootFolders
    }
  },
  methods: {
    renameFolder () {
      this.$store.commit("renameFolder", { name: this.newName })
    },
    deleteFolder () {
      this.$store.commit("deleteFolder", { id: this.$store.state.selected })
    },
    newFolder () {
      this.$store.commit("newFolder", {
        name: this.newName,
        parentId: this.$store.state.selected
      })
    }
  }
}
</script>

<style scoped>
.app {
  background-color: hsl(0, 5%, 98%);
  display: inline-block;
}
</style>
