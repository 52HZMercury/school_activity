<template>
    <div class="Title">
        <!-- <van-nav-bar 
        left-arrow 
        left-text="返回"
        @click-left="back" 
        class="back"
        /> -->
        <Back></Back>
        <div class="headImgAll">
            <img :src="imgSrc" alt="" v-if="imgSrc">
            <svg class="icon" aria-hidden="true" @click="changeAnonymous" v-show="anonymous" >
                <use :xlink:href=anonymous></use>
            </svg>
        </div>
        <div class="userMsg">
            <p class="userName">{{userName}}</p>
            <p class="userTime">{{userTime}}</p>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import {anonymousImg} from '../../mixin/anonymousImg'
import Back from '../Common/Back.vue'
// import '../../assets/font/font_anonymous/iconfont'
  export default {
    name: 'InfoTitle',
    components:{},
    mixins:[anonymousImg],
    components:{Back},
    data(){
      return {
        // imgSrc:'',
        userName:'',
        userTime:'',
        // anonymous:'',
        // anonymousArr:[
        //     'icon-lanbaimao','icon-lanmao','icon-yinjianceng','icon-jinjianceng','icon-meiduan',
        //     'icon-buoumao-xiyouse','icon-buoumao-zhongdianse','icon-buoumao-haibaoshuangse','icon-jiafeimao','icon-xianluomao',
        //     'icon-nainiumao','icon-dajumao','icon-abixiniyamao','icon-shizimao','icon-mianyinmao',
        //     'icon-sanhuamao','icon-daimaomao','icon-sifenkesiwumaomao','icon-heimao','icon-lihuamao'
        // ],
        url:'http://mercuryblog.site:8080/',
      }
    },
    created(){},
    mounted(){
        this.$axios.get('/back').then(
            res=>{
                // console.log(res.data);
                let index = this.$store.state.info.index
                // console.log(!res.data[index].invisible);
                this.avatar(res.data[index])
                // if(!res.data[index].invisible){
                //     this.imgSrc = this.url+res.data[index].user.headImg
                // }else{
                //     this.anonymous = '#'+this.anonymousArr[Math.floor(Math.random() * 20 )]
                // }
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
        // changeAnonymous(){
        //     this.anonymous = '#'+this.anonymousArr[Math.floor(Math.random() * 20 )]
        // },
        // back () {
        //     this.$router.go(-1)
        //     console.log('???')
        // }
    },
    computed:{},
    watch:{},
  }
</script>
<style scoped lang='less'>
.Title{
    width: 90%;
    margin: 0 auto;
    // .back {
    //     // position: absolute;
    //     // overflow: hidden;
    //     // float: left;
    //     // position: fixed;
    //     left: 0;
    //     margin-bottom: 10px;
        
    //     ::v-deep .van-nav-bar__arrow ,
    //     ::v-deep .van-nav-bar__text{
    //         color:rgb(255, 148, 9);
    //         font-size: 16px;
    //     }
    // }
    // background-color: aqua;
    .headImgAll{
        .icon,img{
            border-radius: 50%;
            width: 60px;
            height: 60px;
            float: left;
            margin-right: 10px;
        }
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
    }
}
</style>