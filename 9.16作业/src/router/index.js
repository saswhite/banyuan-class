import Vue from "vue";
import VueRouter from "vue-router";
import Content from "../pages/content.vue"
import Index from "../pages/home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: Index
  },
  {
    path: "/content",
    name: "content",
    component: Content
  }
];

const router = new VueRouter({
  mode: "history",
  base: '/',
  routes
});

export default router;
