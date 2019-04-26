<template>
  <div class="movie">
    Movies
    <div v-for="movie in movies" :key="movie.id">
      <movie-card :movie="movie" />
    </div>
  </div>
</template>

<script>
import { fetchAllMovies } from '@/services/movie-service';
import MovieCard from '@/components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
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
