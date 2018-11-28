import Vue from 'vue';
import Vuex from 'vuex';

import { fetchAllMovies } from '@/services/movie-service'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMovieDetailOpen: false,
    movie: null,
    movies: [],
  },
  getters: {
    releasedMovies: state => {
      return state.movies.filter( movie => movie.releaseDate <= '2018.11.21');
    },
    upcomingMovies: state => {
      return state.movies.filter( movie => movie.releaseDate > '2018.11.21')
    },
  },
  mutations: {
    openMovieDetail (state, payload) {
      state.isMovieDetailOpen = true;
      state.movie = payload;
    },
    setMovies (state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    async getMovieList ({ dispatch, commit }) {
      const movies = await fetchAllMovies();
      
      commit('setMovies', movies);
    }
  },
});
