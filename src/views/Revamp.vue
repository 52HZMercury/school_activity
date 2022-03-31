<template>
  <div>
    <div class="place"></div>
    <!-- <revamp-top></revamp-top> -->
    <revamp-main></revamp-main>
  </div>
</template>

<script>
import RevampMain from '@/components/Revamp/RevampMain'

export default {
  name:"Revamp",

  components:{
    // RevampTop,
    RevampMain
  },

  data(){
    return {

    }
  },
  methodes:{

  },
  
}
</script>

<style scoped>
.place{
  height:50px;
}
</style>