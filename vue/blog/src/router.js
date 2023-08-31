import { createWebHistory, createRouter } from "vue-router";
import ContentList from "./components/ContentList.vue";
import MainHome from "./components/MainHome.vue";
const routes = [
  {
    path: "/list",
    component: ContentList,
  },
  {
    path: "/",
    component: MainHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
