<template>
  <div class="movie">
    <h1>Movie List</h1>

    <MovieCardList 
      title-name="현재상영작"
      v-bind:movies="releasedMovies" 
      v-on:selectMovie="handleMovieSelected"/>
    
    <MovieCardList 
      title-name="개봉예정작"
      v-bind:movies="upcomingMovies" 
      v-on:selectMovie="handleMovieSelected"/>

    <MovieDetail 
      v-show="openDetail"
      v-bind:movie="selectedMovie"
      />
  </div>
</template>

<script>
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
      movies: [],
      openDetail: false,
      selectedMovie: {},
    };
  },
  components: {
    MovieCardList,
    MovieDetail,
  },
  methods: {
    async getMovies() {
      const allmovies = await fetchAllMovies();
      this.movies = allmovies;
    },
    handleMovieSelected(movie) {
      this.openDetail = true;
      this.selectedMovie = movie;
    }
  },
  computed: {
    releasedMovies() {
      return this.movies.filter( movie => movie.releaseDate <= '2018.11.21')
    },
    upcomingMovies() {
      return this.movies.filter( movie => movie.releaseDate > '2018.11.21')
    }
  }
};
</script>

<style scoped>
</style>
