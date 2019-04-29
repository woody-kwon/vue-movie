<template>
    <div class="ratings-wrapper"
        :style="{ backgroundColor: color }">
        {{ movieRatings }}
    </div>
</template>

<script>
    export default {
        props: {
            movieRatings: {
                type: String,
                default: 'all',
            },
        },
        computed: {
            color() {
                if(this.movieRatings === '12') {
                    return 'blue';
                }
                else if (this.movieRatings === '15'){
                    return 'orange';
                }
                else if (this.movieRatings === 'all'){
                    return 'green';
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .ratings-wrapper {
            font-size: 12px;
            color: #fff;
            background-color: #000;
            border-radius: 25px;
            width: 15px;
            height: 15px;

            display: flex;
            justify-content: center;
            align-items: center;
    }
</style>