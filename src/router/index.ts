import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ToDo from "../views/ToDo.vue";
import servicesTask from "../views/servicesTask.vue";
import PlannerTask from "../views/PlannerTask.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "todo",
    component: ToDo,
  },
  {
    path: "/services",
    name: "services",
    component: servicesTask,
  },
  {
    path: "/planner",
    name: "planner",
    component: PlannerTask,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
