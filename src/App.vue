<template>
  <div id="app">   
      <!-- <router-view/> -->
      <AllMain></AllMain>
  </div>
</template>

<script>
import secondHand from './views/secondHand.vue'
import AllMain from './views/AllMain.vue'
export default{
  name: 'App',
  components: { AllMain },
}

</script>

<style>
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
