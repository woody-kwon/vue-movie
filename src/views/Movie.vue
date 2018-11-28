<template>
  <div class="movie">
    <h1>Movie List</h1>

    <MovieCardList 
      title-name="현재상영작"
      v-bind:movies="releasedMovies" />
    
    <MovieCardList 
      title-name="개봉예정작"
      v-bind:movies="upcomingMovies" />

    <MovieDetail v-show="isMovieDetailOpen"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { fetchAllMovies } from '@/services/movie-service';
import MovieCardList from '@/components/MovieCardList.vue';
import MovieDetail from '@/components/MovieDetail.vue';

export default {
  name: 'Movie',
  mounted() {
    this.getMovies();
  },
  data() {
    return {
    };
  },
  components: {
    MovieCardList,
    MovieDetail,
  },
  methods: {
    getMovies() {
      // const allmovies = await fetchAllMovies();
      // this.movies = allmovies;
      this.$store.dispatch('getMovieList');
    },
  },
  computed: {
    releasedMovies() {
      return this.movies.filter( movie => movie.releaseDate <= '2018.11.21')
    },
    upcomingMovies() {
      return this.movies.filter( movie => movie.releaseDate > '2018.11.21')
    },
    ...mapState({
      isMovieDetailOpen(state) {
        return state.isMovieDetailOpen;
      },
      movies (state) {
        return state.movies;
      },
    })
  }
};
</script>

<style scoped>
</style>
