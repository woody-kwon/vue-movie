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
  props: {
    selectedMovie: {
      type: Array,
    },
    selectedId: {
      type: Number,
    },
  },
};
</script>
