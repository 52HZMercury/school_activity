<template>
    <div class="wrapper">
        <info-title></info-title>
        <info-text></info-text>  
        <secondHandInfo></secondHandInfo>
        <info-others></info-others>
    </div>
</template>

<script>
import InfoTitle from '../components/Info/InfoTitle'
import InfoText from '../components/Info/InfoText'
import InfoOthers from '../components/Info/InfoOthers'
import secondHandInfo from '../components/secondHand/secondHandInfo.vue'
  export default {
    name: 'Info',
    components:{
        InfoTitle,
        InfoOthers,
        InfoText,
        secondHandInfo
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
<style scoped lang='less'>
</style>