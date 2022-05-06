import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
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

// router.beforeEach((to, from, next) => {
//   //check auth, etc.
//   if (true) next();
// });

const defaultTitle = "Lore Hoard";
router.afterEach((to) => {
  document.title = defaultTitle + (to.meta.title || "");
});

export default router;
