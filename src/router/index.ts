import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TestPage',
    component: () => import(/* webpackChunkName: "TestComp" */ '../components/organisms/TestComp.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;