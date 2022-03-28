<template>
   <div class="text">
        <p>#{{tag}}#</p>
        <div class="textmain">
            <img :src="imgSrc" alt=""> 
            <br>   
            {{text}}
        </div>
        <div class="location">
            
            <p>
                <i class="el-icon-map-location"></i>  
                &nbsp;{{schoolName}}
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'InfoText',
    components:{},
    props:{},
    data(){
      return {
            schoolName:'西南石油大学',
            text:'',
            tag:'',
            imgSrc:'',
            url:'http://mercuryblog.site:8080/',
      }
    },
    created(){},
    mounted(){
        this.$axios.get('/back').then(
            res=>{
                let index = this.$store.state.info.index
                this.tag = res.data[index].tag
                this.text = res.data[index].descriptiontext
                this.imgSrc = this.url+res.data[index].img
            },
            err=>{
                console.log(err);
            }
        )
    },
    activated(){},
    updated(){},
    methods:{},
    computed:{},
    watch:{},
  }
</script>
<style scoped lang='less'>
    .text{
        // background-color: antiquewhite;
        width: 80%;
        margin: 0 auto;
        p{
            color: rgb(255, 148, 9);
        }
        .textmain{
            //文本自动换行样式
            word-break: break-all;
            img{
                width: 80%;
            }
        }
        .location{
            i{
                font-size: 20px;
                color: rgb(56, 138, 231);
            }
        }
    }
</style>