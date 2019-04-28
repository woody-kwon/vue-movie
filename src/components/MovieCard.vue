<template>
    <div>
        <movie-card-image :thumbnail="movie.thumb"/>
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
        props:{
        movie: {
            type: Object,
            default: () => {},
            },
        },  
    }
</script>

<style lang="scss" scoped>

</style>