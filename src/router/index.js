import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import productDetail from "../views/productDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/productDetail/:id",
      name: "detail",
      component: productDetail,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/productDetail.vue"),
    },
  ],
});

export default router;
