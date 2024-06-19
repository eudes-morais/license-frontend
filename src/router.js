import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/agencies",
    name: "agencies",
    component: () => import("./components/AgenciesList")
  },
  {
    path: "/agencies/:id",
    name: "agency-details",
    component: () => import("./components/Agency")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddAgency")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;