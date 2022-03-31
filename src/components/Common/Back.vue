<template>
    <div>
        <van-nav-bar 
        left-arrow 
        left-text="返回"
        @click-left="back" 
        class="back"
        />
    </div>
</template>

<script>
export default {
    name:'Back',
    methods: {
        back () {
            this.$router.back()
            console.log('???')
        }
    },
}
</script>

<style lang='less' scoped>
.back {
        // position: absolute;
        // overflow: hidden;
        // float: left;
        // position: fixed;
        left: 0;
        // margin-bottom: 10px;
        ::v-deep .van-nav-bar__arrow ,
        ::v-deep .van-nav-bar__text{
            color:rgb(255, 148, 9);
            font-size: 16px;
        }
    }
</style>