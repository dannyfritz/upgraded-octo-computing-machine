<template>
  <div>
    <h1>Cart</h1>
    <shop-cartitem v-for="item in cart" :item="item"></shop-cartitem>
    <span>{{ subtotal | currency }}</span>
  </div>
</template>

<script>
import ShopCartitem from "./CartItem.vue"
import { currency } from "../filters"

export default {
  name: "shop-cart",
  components: {
    ShopCartitem
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    subtotal () {
      return this.$store.state.cart.reduce(
          (total, item) => total + item.price * item.quantity
        , 0)
    }
  },
  filters: {
    currency
  }
}
</script>

<style scoped>
</style>
