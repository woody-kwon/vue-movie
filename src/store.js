import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMovieDetailOpen: false,
    movie: null,
  },
  mutations: {
    openMovieDetail (state, payload) {
      state.isMovieDetailOpen = true;
      state.movie = payload;
    }
  },
  actions: {

  },
});
