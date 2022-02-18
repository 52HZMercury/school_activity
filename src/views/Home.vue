<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <home-top></home-top>
    <home-card></home-card>
    <!-- 下面这个是临时的,后面删掉 -->
    <div @click="$router.push('/publish')" class="temp-publish-btn">+</div>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCard from "../components/Home/HomeCard";
import HomeTop from "../components/Home/HomeTop";

export default {
  name: 'Home',
  components: {
    'home-card': HomeCard,
    'home-top': HomeTop
  }
}
</script>
<style scoped>
.temp-publish-btn {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 4rem;
  height: 4rem;
  color: #fff;
  background-color: #ff3700;
  font-size: 3rem;
  text-align: center;
  line-height: 4rem;
  border-radius: 50%;
}
</style>