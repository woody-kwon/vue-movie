<template>
  <div>
    <h2>{{titleName}}</h2>
    <div class="movie-card-list"
      v-for="movie in movies"
      :key="movie.id">
      <MovieImage v-bind:img-url="movie.thumb" 
        v-bind:movie-ratings="movie.movieRatings"/>
      <div>{{movie.name}}</div>
      <div>{{formatedReleaseDate(movie.releaseDate)}}</div>
    </div>
  </div>
</template>

<script>
import MovieImage from '@/components/MovieImage.vue';
import moment from 'moment';

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
  },
  methods: {
    formatedReleaseDate(releaseDate) {
      const today = moment();

      const diffDays = moment(releaseDate).diff(today, 'days');
      
      return diffDays > 0 ? `D-${diffDays}` : releaseDate;
    }
  }
}
</script>

<style scoped>
.movie-card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>