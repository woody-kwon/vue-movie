<template>
  <div>
    <h2>{{titleName}}</h2>
    <div v-for="movie in movies"
      :key="movie.id">
      <MovieImage v-bind:img-url="movie.thumb" 
        v-bind:movie-ratings="movie.movieRatings"/>
      <div>{{movie.name}}</div>
      <div>{{movie.releaseDate}}</div>
    </div>
  </div>
</template>

<script>
import MovieImage from '@/components/MovieImage.vue';

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
    MovieImage,
  }
}
</script>

<style scoped>

</style>