import {
  createRouter, createWebHashHistory, Router, RouteRecordRaw,
} from 'vue-router';
import Home from '@/views/Home.vue';
import GetStarted from '@/views/GetStarted.vue';
import Libs from '@/views/Libs.vue';
import Editor from '@/views/Editor.vue';
import Docs from '@/views/Docs.vue';
import About from '@/views/About.vue';
import Vuex from '@/views/Vuex.vue';
import Test from '@/views/Test.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/getstarted',
    name: 'GetStarted',
    component: GetStarted,
  },
  {
    path: '/libs',
    name: 'Libs',
    component: Libs,
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
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
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
