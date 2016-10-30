<template>
  <div>
    <h1>Store</h1>
    <shop-item v-for="item in items" :item="item"></shop-item>
  </div>
</template>

<script>
import ShopItem from "./Item.vue"

export default {
  name: "shop-store",
  components: {
    ShopItem
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>

<style scoped>
</style>
