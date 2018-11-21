<template>
  <div class="movie">
    <h1>Movie</h1>

    <MovieCardList title-name="현재상영작"
      v-bind:movies="releasedMovies" />
    
    <MovieCardList title-name="개봉예정작"
      v-bind:movies="upcomingMovies" />
  </div>
</template>

<script>
import { fetchAllMovies } from '@/services/movie-service';
import MovieImage from '@/components/MovieImage.vue';
import MovieCardList from '@/components/MovieCardList.vue';

export default {
  mounted() {
    this.getMovies();
  },
  data() {
    return {
      movies: []
    };
  },
  components: {
    MovieImage,
    MovieCardList,
  },
  methods: {
    async getMovies() {
      const allmovies = await fetchAllMovies();
      this.movies = allmovies;
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
