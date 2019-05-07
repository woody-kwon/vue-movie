<template>
  <div class="movie">
    Movies
    <h1> 상영예정작 </h1>
    <div class="movie-card-wrapper" v-for="movie in movies" :key="movie.id">
      <movie-card :movie="movie" />
    </div>

    <h1> 현재상영작 </h1>
    <div class="movie-card-wrapper" v-for="movie in movies" :key="movie.id">
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
  async mounted() {
    const movies = await fetchAllMovies();
    this.movies = movies;
  },

  data() {
    return {
      movies: [],
    };
  },
};
</script>

<style lang="scss" scoped>
  .movie-card-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
