import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMovie: {},
  },
  mutations: {
    setSelectedMovie(state, movie) {
      state.selectedMovie = movie; 
    },
  },
  actions: {

  },
});
