<template>
    <div class="movie-thumbnail-wrapper">
        <img
            class="thumbnail" 
            :src="thumbnail" 
            v-if="thumbnail"/>
        <img 
            class="thumbnail"
            src="@/assets/noimage.jpg"
            v-else/>
        <movie-ratings class="ratings" :movie-ratings="movieRatings" />
    </div>
</template>

<script>
import MovieRatings from '@/components/MovieRatings.vue';

    export default {
        components: { MovieRatings },
        props:{
            thumbnail: {
                type: String,
                default: undefined,
                },
            movieRatings: {
                type: String,
                default: undefined,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .movie-thumbnail-wrapper {
        position: relative;
        width: 100px;
    }
    .thumbnail {
        width: 100px;
    }
    
    .ratings {
        position: absolute;
        top: 10px;
        left: 10px;
    }
</style>