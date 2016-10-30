<template>
  <div>
    <h1>Fruit Store</h1>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/store">Store</router-link>
      <router-link to="/cart">Cart</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>

<style scoped>
</style>
