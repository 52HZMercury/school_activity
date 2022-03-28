<template>
    <div>
        <HomeCardMain></HomeCardMain>
        <!-- <router-view ></router-view> -->
        <HomeCardFooter></HomeCardFooter>
        <div class="temp-publish-btn">+</div>
    </div>
</template>

<script>
import HomeCardMain from '../components/AllMain/HomeCardMain.vue'
import HomeCardFooter from '../components/AllMain/HomeCardFooter.vue'
export default {
    name:'AllMain',
    components:{HomeCardMain,HomeCardFooter},
}
</script>

<style>
.temp-publish-btn {
    position: fixed;
    right: 1rem;
    bottom: 4.5rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: #ff3700;
    font-size: 3rem;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 50%;
}
</style>