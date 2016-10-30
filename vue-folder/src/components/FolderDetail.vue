<template>
  <div
    class="folder-container"
    :class="{
      'folder-container--selected': isSelected
    }"
    @click.prevent.stop="select"
  >
    {{folder.name}}
  </div>
</template>

<script>
export default {
  name: "folder-detail",
  props: ["folder"],
  computed: {
    children () {
      const folders = this.$store.state.folders
      return folders.filter((folder) => folder.parentId === this.folder.id)
    },
    isSelected () {
      return this.$store.state.selected === this.folder.id
    }
  },
  methods: {
    select () {
      this.$store.commit("selectFolder", { id: this.folder.id })
    }
  }
}
</script>

<style scoped>
.folder-container {
  color: hsl(0, 5%, 2%);
  display: inline-block;
}
.folder-container--selected {
  color: red;
}
</style>
