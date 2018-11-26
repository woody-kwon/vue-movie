<template>
  <div>
    <h2>{{titleName}}</h2>
    <div class="movie-card-list"
      v-for="movie in movies"
      :key="movie.id">
      <MovieCard v-bind:movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';

export default {
  props: {
    titleName: {
      type: String,
      default: ''
    },
    movies: {
      type: Array,
      default: []
    }
  },
  components: {
    MovieCard,
  },
}
</script>

<style scoped>
.movie-card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>