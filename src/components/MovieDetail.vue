<template>
    <div v-show="selectedId">
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
    }
  },
  props: {
    selectedId: {
      type: Number,
      default: null 
    },
  },
};
</script>
