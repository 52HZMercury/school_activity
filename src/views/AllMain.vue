<template>
    <div>
        <!-- <HomeCardMain></HomeCardMain> -->
        <router-view ></router-view>
        <HomeCardFooter></HomeCardFooter>
        <span class="iconfont" @click="$router.push({name:'HomeCardMain'})" >&#xe605;</span>
        <div class="temp-publish-btn"  @click="$router.push({name:'Publish'})">+</div>
    </div>
</template>

<script>
import '../assets/font/font_AllMain/iconfont.css'
import HomeCardMain from '../components/AllMain/HomeCardMain.vue'
import HomeCardFooter from '../components/AllMain/HomeCardFooter.vue'
export default {
    name:'AllMain',
    components:{HomeCardMain,HomeCardFooter},
}
</script>

<style scoped>
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
    line-height: 3rem;
    border-radius: 50%;
}
.iconfont{
    position: fixed;
    right: 1rem;
    bottom: 8rem;
    font-size: 3rem;
    z-index: 99999;
    color: #e9717f;
}
</style>