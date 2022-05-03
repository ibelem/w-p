import {
  createRouter, createWebHashHistory, Router, RouteRecordRaw,
} from 'vue-router';
import Home from '@/views/Home.vue';
import Vuex from '@/views/Vuex.vue';
import Test from '@/views/Test.vue';
import Editor from '@/views/Editor.vue';
import Libs from '@/views/Libs.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/libs',
    name: 'Libs',
    component: Libs,
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex,
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/Axios.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
