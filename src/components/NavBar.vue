<template>
  <div class="nav-bar">
    <router-link to="/">home</router-link>
    <router-link to="/movies">movies</router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-around;
  margin: auto;

  & a {
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: black;
  }
  & .router-link-exact-active {
    color: orange;
  }
}
</style>
