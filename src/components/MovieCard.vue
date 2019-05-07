<template>
    <div class="card-wrapper" @click="handleOnClick">
        <movie-card-image :thumbnail="movie.thumb" :movie-ratings="movie.movieRatings"/>
        <div> {{movie.name}} </div>
        <div> {{movie.releaseDate}} </div>
    </div>
</template>

<script>
import MovieCardImage from '@/components/MovieCardImage.vue';

    export default {
        components: {
            MovieCardImage,
        },
        props: {
            movie: {
                type: Object,
                default: () => {},
                },
        },
        methods: {
            handleOnClick() {
                this.$emit("click", this.movie.id);
            }
        },  
    }
</script>

<style lang="scss" scoped>
    .card-wrapper {
        width: 300px;
    }
</style>