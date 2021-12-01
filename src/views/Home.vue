<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <home-top></home-top>
    <home-card></home-card>
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
