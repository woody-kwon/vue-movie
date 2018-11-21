<template>
  <div class="movie-image">
    <img v-if="imgUrl !== ''"
      v-bind:src="imgUrl" 
      width="100" height="120"/>
    <img v-else
      src="@/assets/noimage.jpg"
      width="100" height="120"/>
    
    <div class="ratings"
      v-bind:style="{ background: ratingColor }">
      {{movieRatings}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      imgUrl: {
        type: String,
        default: '',
      },
      movieRatings: {
        type: String,
        default: 'all',
      }
    },
    computed: {
      ratingColor() {
        if(this.movieRatings === '12') {
          return 'blue';
        }
        else if(this.movieRatings === '15') {
          return 'orange';
        }
        else {
          return 'green';
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.movie-image {
  position: relative;  
  width: fit-content;
  & .ratings {
    position: absolute;
    top: 5px;
    left: 5px;
    background: black;
    border-radius: 25px;
    font-size: 12px;
    padding: 3px;
    color: white;
  }
}
</style>