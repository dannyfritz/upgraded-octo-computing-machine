<template>
  <article>
    <h1>{{ item.name }}</h1>
    <span>{{ item.price | currency }}</span>
    <input type="number" v-model="item.quantity">
    <span>{{ total | currency }}</span>
    <button @click="removeFromCart">Remove from cart</button>
  </article>
</template>

<script>
import { currency } from "../filters"
export default {
  name: "shop-cartitem",
  props: ["item"],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    total () {
      return this.item.price * this.item.quantity
    }
  },
  methods: {
    removeFromCart () {
      this.$store.commit("removeFromCart", {
        id: this.item.id
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
