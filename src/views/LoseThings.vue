<template>
    <div class="wrapper">
        <HomeCard tag='失物招领'>
            <h2 style="text-align:center;">失物招领</h2>  
        </HomeCard>  
    </div>
</template>

<script>
import HomeCard from "../components/Home/HomeCard";
import HomeTop from "../components/Home/HomeTop";
  export default {
    name: 'LoseThings',
    components:{
        HomeCard,
        HomeTop
    },
    props:{},
    data(){
      return {
          
      }
    },
    created(){},
    mounted(){},
    activated(){},
    updated(){},
    methods:{},
    computed:{},
    watch:{},
  }
</script>
<style scoped lang='scss'>
</style>