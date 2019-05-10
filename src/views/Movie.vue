<template>
  <div class="movie">
    Movies
    <h1> 상영예정작 </h1>
    <div class="movie-card-wrapper">
      <movie-card v-for="movie in upcomingMovies" :key="movie.id" :movie="movie" />
    </div>

    <h1> 현재상영작 </h1>
    <div class="movie-card-wrapper">
      <movie-card v-for="movie in releasedMovies" :key="movie.id" :movie="movie" />
    </div>
    <div class="movie-detail-wrapper">
      <movie-detail />
    </div>
  </div>
</template>

<script>
import { fetchAllMovies } from '@/services/movie-service';
import MovieCard from '@/components/MovieCard.vue';
import MovieDetail from '@/components/MovieDetail.vue';

export default {
  components: {
    MovieCard,
    MovieDetail,
  },

  async mounted() {
    const movies = await fetchAllMovies();
    this.movies = movies;
  },

  data() {
    return {
      movies: [],
      today: '2019.05.07',
    };
  },

  computed: {
    releasedMovies() {
      return this.movies.filter(({ releaseDate }) => releaseDate <= this.today);
    },
    upcomingMovies() {
      return this.movies.filter(({ releaseDate }) => releaseDate > this.today);
    },
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
