import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import HomeView from "./views/HomeView.vue";
import Laenkar from "./views/Laenkar.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: "/about",

      meta: { transition: "zoom" },
    },
    {
      component: ContactView,
      path: "/contact",
    },
    {
      component: Laenkar,
      path: "/laenkar",
    },
    {
      component: Laenkar,
      path: "/laenkar/:artikeltitel",
      meta: { transition: "zoom" },
    },
    {
      component: HomeView,
      path: "/",
    },
  ],
});
