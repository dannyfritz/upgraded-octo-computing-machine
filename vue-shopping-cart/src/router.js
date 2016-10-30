import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "./components/Home"
import Store from "./components/Store"
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"

const routes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/store", component: Store },
  { path: "*", component: NotFound }
]

export default new VueRouter({
  mode: "history",
  routes
})
