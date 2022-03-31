<template>
  <div id="app">   
      <router-view></router-view>
      <!-- <MyGoods></MyGoods> -->
  </div>
</template>

<script>
import '../src/assets/css/background-color.css'
// import secondHand from './views/secondHand.vue'
// import AllMain from './views/AllMain.vue'
// import MyGoods from './views/MyGoods.vue'
// import Info from './views/Info.vue'
// import Home from './views/Home.vue'
export default{
  name: 'App',
  // components: { MyGoods },
}

</script>

<style scoped>
/* body{
  background-color: white;
} */
/* *{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
