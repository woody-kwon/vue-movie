import Vue from 'vue';
import Vuex from 'vuex';

import { fetchAllMovies } from '@/services/movie-service';

Vue.use(Vuex);

export const getters = {
  releasedMovies: state => state.movies.filter(movie => movie.releaseDate <= '2018.11.21'),
  upcomingMovies: state => state.movies.filter(movie => movie.releaseDate > '2018.11.21'),
};

export const actions = {
  async getMovieList({ commit }) {
    const movies = await fetchAllMovies();

    commit('setMovies', movies);
  },
};

export default new Vuex.Store({
  state: {
    movie: null,
    movies: [],
  },
  getters,
  actions,
});
