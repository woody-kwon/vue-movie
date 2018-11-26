<template>
  <div>
    <h2>{{titleName}}</h2>
    <div class="movie-card-list">
      <div 
        v-for="movie in movies"
        :key="movie.id">
        <MovieCard v-bind:movie="movie" />
      </div>
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
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
</style>