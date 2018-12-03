<template>
  <div>
    <span class="star" v-for="(star, index) in stars" :key="index">{{star}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      point: {
        type: Number,
        default: 0
      },
    },
    computed: {
      stars() {
        const count = Math.ceil(this.point / 2);
        const starArray = [];
        for(let i=0; i<count; i++) {
          starArray.push('*'); 
        }
        return starArray; 
      }
    },
  }
</script>

<style scoped>

</style>