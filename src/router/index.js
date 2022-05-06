import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
    meta: { layout: null, subtitle: "" },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/MainView.vue"),
    meta: { layout: null, subtitle: "" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  //check auth, etc.
  console.log("to ", to.name);
  console.log("from ", from.name);
  next();
});

const defaultTitle = "Vue3 Base App";
router.afterEach((to) => {
  document.title = defaultTitle + (to.meta.title || "");
});

export default router;
