<template>
  <div class="movie-detail">
    <h1>Movie Detail</h1>

    <MovieImage v-bind:img-url="movie.thumb" 
      v-bind:movie-ratings="movie.movieRatings"/>
    
    <h2>{{movie.name}}</h2>
    <div>평점 : {{movie.gradePoint | rounds }}</div>
    <div>장르 : {{movie.genre}}</div>
    <div>개봉일 : {{movie.releaseDate}}</div>
    <div>감독 : {{movie.director}}</div>
    <div>배우 : {{movie.actors}}</div>
  </div>
</template>

<script>
import MovieImage from '@/components/MovieImage.vue';
import { mapState } from 'vuex';

export default {
  components: {
    MovieImage,
  },
  computed: mapState({
    movie(state) {
      return state.movie;
    }
  }),
  filters: {
    rounds: function(value) {
      return value == 0 ? value : value.toFixed(1);
    }
  }
}
</script>

<style scoped>
.movie-detail {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>