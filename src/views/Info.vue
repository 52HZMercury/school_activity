<template>
    <div class="wrapper">
        <info-title></info-title>
        <info-text></info-text>  
        <info-others></info-others>
    </div>
</template>

<script>
import InfoTitle from '../components/Info/InfoTitle'
import InfoOthers from '../components/Info/InfoOthers'
import InfoText from '../components/Info/InfoText'
  export default {
    name: 'Info',
    components:{
        InfoTitle,
        InfoOthers,
        InfoText
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