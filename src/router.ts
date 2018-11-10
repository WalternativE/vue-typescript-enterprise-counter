import Vue from 'vue';
import Router from 'vue-router';
import Counter from './views/Counter.vue';
import Settings from './views/Settings.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'counter',
      component: Counter,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
});
