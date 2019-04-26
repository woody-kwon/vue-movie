<template>
    <div>
        <img :src="movie.thumb" 
            v-if="movie.thumb"/>
        <img src="@/assets/noimage.jpg"
            v-else/>
        <div> {{movie.name}} </div>
        <div> {{movie.releaseDate}} </div>
    </div>
</template>

<script>
    export default {
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