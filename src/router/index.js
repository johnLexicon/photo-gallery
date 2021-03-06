import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Albums from '../views/Albums.vue';
import Gallery from '../views/Gallery.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums,
  },
  {
    path: '/gallery/:albumId',
    name: 'Gallery',
    component: Gallery,
    props: true,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
