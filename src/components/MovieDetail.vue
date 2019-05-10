<template>
    <div v-show="selectedMovieId">
        <h1> 상세정보 </h1>
        <div>
            {{ selectedMovie }}
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    selectedMovie() {
        return this.$store.state.selectedMovie;
    },
    selectedMovieId() {
        return this.$store.state.selectedMovie.id;
    }
  },
};
</script>
