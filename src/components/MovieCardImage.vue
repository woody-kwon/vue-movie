<template>
    <div>
        <img :src="thumbnail" 
            v-if="thumbnail"/>
        <img src="@/assets/noimage.jpg"
            v-else/>
    </div>
</template>

<script>
    export default {
        props:{
        thumbnail: {
            type: String,
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>