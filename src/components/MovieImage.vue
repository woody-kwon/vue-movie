<template>
  <div>
    <img v-if="imgUrl !== ''"
      v-bind:src="imgUrl" 
      width="100" height="120"/>
    <img v-else
      src="@/assets/noimage.jpg"
      width="100" height="120"/>
  </div>
</template>

<script>
  export default {
    props: {
      imgUrl: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style scoped>

</style>