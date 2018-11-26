<template>
  <div class="movie-card">
    <MovieImage v-bind:img-url="movie.thumb" 
      v-bind:movie-ratings="movie.movieRatings"/>
    <div>{{movie.name}}</div>
    <div>{{formatedReleaseDate(movie.releaseDate)}}</div>
  </div>
</template>

<script>
  import MovieImage from '@/components/MovieImage.vue';
  import moment from 'moment';

  export default {
    props: {
      movie: {
        type: Object,
        default: {}
      },
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
.movie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  word-break: keep-all;
}
</style>