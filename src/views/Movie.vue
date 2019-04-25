<template>
  <div class="movie">
    Movies
    <div v-for="movie in movies" :key="movie.id">
        {{movie.id}}
        <img :src="movie.thumb" />
        {{movie.name}}
        {{movie.releaseDate}}
    </div>
  </div>
</template>

<script>
import { fetchAllMovies } from '@/services/movie-service';

export default {
  async mounted(){
    const movies = await fetchAllMovies();
    this.movies = movies
  },

  data() {
    return {
      movies : [],
    };
  },
};
</script>

<style scoped>
</style>
