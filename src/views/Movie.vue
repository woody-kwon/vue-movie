<template>
  <div>
    <h1>Movie</h1>
    <div v-for="movie in movies"
      :key="movie.id">
      <img v-bind:src="movie.thumb" width="100" height="120"/>
      <div>{{movie.name}}</div>
      <div>{{movie.releaseDate}}</div>
    </div>
  </div>
</template>

<script>
import { fetchAllMovies } from '@/services/movie-service';

export default {
  mounted() {
    this.getMovies();
  },
  data() {
    return {
      movies: []
    };
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
