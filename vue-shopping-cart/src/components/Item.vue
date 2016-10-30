<template>
  <article>
    <h1>{{ item.name }}</h1>
    <span>{{ item.price | currency }}</span>
    <input type="number" v-model="quantity">
    <button @click="addToCart">Add to cart</button>
  </article>
</template>

<script>
import { currency } from "../filters"
export default {
  name: "shop-item",
  props: ["item"],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    addToCart () {
      this.$store.commit("addToCart", {
        id: this.item.id, quantity: this.quantity
      })
    }
  },
  filters: {
    currency
  }
}
</script>

<style scoped>
</style>
