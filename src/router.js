import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Movie from '@/views/Movie';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/movies', component: Movie }
  ],
});
