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
import { mapState, mapGetters } from 'vuex'
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
      this.$store.dispatch('getMovieList');
    },
  },
  computed: {
    ...mapState({
      isMovieDetailOpen(state) {
        return state.isMovieDetailOpen;
      },
      movies (state) {
        return state.movies;
      },
    }),
    ...mapGetters(
      ['releasedMovies', 'upcomingMovies']
    ),
  }
};
</script>

<style scoped>
</style>
