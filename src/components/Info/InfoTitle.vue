<template>
   <div class="Title">
       <div class="back" @click="back">返回</div>
        <div>
            <img :src="imgSrc" alt="" v-if="imgSrc">
        </div>
        <div class="userMsg">
            <svg class="icon" aria-hidden="true" @click="changeAnonymous" v-show="anonymous" >
                <use :xlink:href=anonymous></use>
            </svg>
            <p class="userName">{{userName}}</p>
            <p class="userTime">{{userTime}}</p>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import '../../assets/font/iconfont'
  export default {
    name: 'InfoTitle',
    components:{},
    props:{},
    data(){
      return {
        imgSrc:'',
        userName:'',
        userTime:'',
        anonymous:'',
        anonymousArr:[
            'icon-lanbaimao','icon-lanmao','icon-yinjianceng','icon-jinjianceng','icon-meiduan',
            'icon-buoumao-xiyouse','icon-buoumao-zhongdianse','icon-buoumao-haibaoshuangse','icon-jiafeimao','icon-xianluomao',
            'icon-nainiumao','icon-dajumao','icon-abixiniyamao','icon-shizimao','icon-mianyinmao',
            'icon-sanhuamao','icon-daimaomao','icon-sifenkesiwumaomao','icon-heimao','icon-lihuamao'
        ],
        url:'http://47.96.119.233:8080/',
      }
    },
    created(){},
    mounted(){
        this.$axios.get('/back').then(
            res=>{
                // console.log(res.data);
                let index = this.$store.state.info.index
                if(res.data[index].user.invisible){
                    this.imgSrc = this.url+res.data[index].user.headImg
                }else{
                    this.anonymous = '#'+this.anonymousArr[Math.floor(Math.random() * 20 )]
                }
                this.userName = res.data[index].user.name
                this.userTime = dayjs(res.data[index].releasetime).format('YYYY-MM-DD HH:mm:ss')
            },
            err=>{
                console.log(err)
            }
        )
    },
    activated(){},
    updated(){},
    methods:{
        changeAnonymous(){
            this.anonymous = '#'+this.anonymousArr[Math.floor(Math.random() * 20 )]
        },
        back () {
            this.$router.go(-1)
            console.log('???')
        }
    },
    computed:{},
    watch:{},
  }
</script>
<style scoped lang='less'>
.Title{
    width: 90%;
    margin: 0 auto;
    display: flex;
    .back {
        position: absolute;
        left: 0;
    }
    // background-color: aqua;
    img{
        border-radius: 50%;
        width: 60px;
        height: 60px;
    }

    .userMsg{
        margin-left: 10px;
        height: 60px;
        line-height: 10px;
        .userName{
            font-size: 18px;
        }
        .userTime{
            font-size: 15px;
            width: 400px;
        }
        .icon{
            border-radius: 50%;
            width: 60px;
            height: 60px;
            float: left;
            margin-right: 10px;
        }
    }
}
</style>