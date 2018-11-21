<template>
  <div>
    <h1>Movie</h1>
    <div v-for="movie in movies"
      :key="movie.id">
      <MovieImage v-bind:img-url="movie.thumb" />
      <div>{{movie.name}}</div>
      <div>{{movie.releaseDate}}</div>
    </div>
  </div>
</template>

<script>
import { fetchAllMovies } from '@/services/movie-service';
import MovieImage from '@/components/MovieImage.vue';

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
  },
  methods: {
    async getMovies() {
      const allmovies = await fetchAllMovies();
      this.movies = allmovies;
    }
  }
};
</script>

<style scoped>

</style>
