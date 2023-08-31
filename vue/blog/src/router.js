import { createWebHistory, createRouter } from "vue-router";
import ContentList from "./components/ContentList.vue";
import MainHome from "./components/MainHome.vue";
import ContentDetail from "./components/ContentDetail.vue";
const routes = [
  {
    path: "/list",
    component: ContentList,
  },
  {
    path: "/",
    component: MainHome,
  },
  {
    path: "/detail/:id(\\d+)",
    component: ContentDetail,
    children: [
      {
        path: "/auther",
      },
    ],
  },
  {
    path: "/:anything(.*)",
    component: MainHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
