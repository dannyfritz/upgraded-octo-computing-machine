<template>
  <div>
    <button @click="toggleExpand" v-if="hasChildren">
      <template v-if="!isExpanded">&gt;</template>
      <template v-if="isExpanded">v</template>
    </button>
    <folder-detail :folder="folder"></folder-detail>

    <ul v-if="isExpanded" class="folder-container__list">
      <li v-for="folder in children">
        <folder-container :folder="folder"></folder-container>
      </li>
    </ul>

  </div>
</template>

<script>
import FolderDetail from "./FolderDetail.vue"

export default {
  name: "folder-container",
  components: {
    FolderDetail
  },
  props: ["folder"],
  data () {
    return {
      isExpanded: false
    }
  },
  computed: {
    children () {
      const folders = this.$store.state.folders
      return folders.filter((folder) => folder.parentId === this.folder.id)
    },
    hasChildren () {
      return this.children.length > 0
    }
  },
  methods: {
    toggleExpand () {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<style scoped>
.folder-container__list {
  list-style: none;
  padding-left: 1em;
  margin: 0;
}
</style>
