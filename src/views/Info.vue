<template>
    <div class="wrapper">
        <info-title></info-title>
        <info-text></info-text>  
        <secondHandInfo v-if="flag"></secondHandInfo>
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
          flag:false
      }
    },
    mounted() {
      this.$axios.get('/back').then(
              res=>{
                // console.log(res.data[this.index].tag)
                // console.log(res.data[this.index].tag.indexOf('二手交易'))
                if(res.data[this.index].tag.indexOf('二手交易') !== -1){
                  this.flag =  true
                }else{
                  this.flag =  false
                }
              },
              err=>{
                  console.log(err);
              }
          )
    },
    computed:{
        index(){
            return this.$store.state.info.index
        },
    },
  }
</script>
<style scoped lang='less'>
.wrapper{
  width: 100%;
}
</style>