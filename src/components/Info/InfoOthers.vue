<template>
     <div class="others">
        <div class="otherAll">
            <div class="otherLeft" @click="shareFlag = !shareFlag">
                <img src="../../assets/imgs/share.png"> 
                <p> 分享</p>
            </div>

            <div class="otherRight">
                <p>{{like}}</p>
                <transition 
                    name="animate__animated animate__bounce"
                    leave-active-class="animate__fadeOutUp"
                >
                    <img v-if="!like" @click="likeUpData" src="../../assets/imgs/pick.png">
                </transition>

                <transition 
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__heartBeat"
                    leave-active-class="animate__fadeOut"
                >
                    <img 
                        v-show="likes" 
                        @click="likesUpData"  
                        src="../../assets/imgs/picked.png"
                    >
                </transition>
                <p>{{commentData.length}}</p>
                <img  src="../../assets/imgs/commend.png">
            </div>

            <transition 
                name="animate__animated animate__bounce"
                enter-active-class="animate__backInDown"
                leave-active-class="animate__backOutDown">
                
                <div class="share" v-show="shareFlag">
                    <el-button slot="reference"  size="small" round type="primary"  plain @click="shareToQQ()">分享到QQ</el-button>
                    <el-button slot="reference"  size="small" round type="primary"  plain @click="shareToRoom()">分享到QQ空间</el-button>
                    <el-button slot="reference"  size="small" round type="primary"  plain @click="shareToMicroblog()">分享到微博</el-button>
                </div>
                
            </transition>

            
        </div>


        <div class="comments">
            <p>共有{{commentData.length}}条评论：</p>
            <div>
                <ul>
                    <li v-for="comment in commentData" :key="comment.user.id">
                        <!-- <img :src="url+comment.user.headImg" alt=""> -->
                        <el-avatar :size="30" :src="url+comment.user.headImg" class="commentHeadImg"></el-avatar>
                        <p>{{comment.user.name}}</p>: {{comment.commentText}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import 'animate.css'

export default {
    name: 'InfoOthers',
    components:{},
    props:{
        targetId: Number
    },
    data(){
      return {
        like:0,
        likes:0,
        likeFlag:false,
        commentData:[
            // {id:'1',name:'李四',data:'123'},
            // {id:'2',name:'张三',data:'456'},
            // {id:'3',name:'五四',data:'789'},
        ],
        url:'http://47.96.119.233:8080/',
        shareFlag : false,
        share:{
            title: '',
            desc: '',
            image_url: '',
            share_url:'',
        }
      }
    },
    created(){},
    mounted(){
        this.$axios.get('/back').then(
            res=>{
                let index = this.$store.state.info.index
                this.commentData = res.data[index].comments
                this.imgSrc = res.data[index]
                this.like = res.data[index].likes
                setTimeout(()=>{
                    this.likes = this.like
                },1000)

                this.share.title = res.data[index].tag
                this.share.desc = res.data[index].descriptiontext
                this.share.image_url = this.url+res.data[index].img
                this.share.share_url = '买了服务器网页的地址'
            },
            err=>{
                console.log(err);
            }
        )
    },
    activated(){},
    updated(){},
    methods:{
        likeUpData(){
            this.like++
            setTimeout(()=>{
                this.likes++
            },1000)
        },
        likesUpData(){
            if(!this.likeFlag){
                this.likeFlag = true
                this.like++
                this.likes = 0
                setTimeout(()=>{
                    this.likes = this.like
                },5)  
            }else{
                this.likeFlag = false
                this.like--
                this.likes = 0
                setTimeout(()=>{
                    this.likes = this.like
                },1000)
            }
        },

            //分享到QQ好友(PC端可用) 
        shareToQQ() {
            //此处分享链接内无法携带图片   
            location.href=(
                "https://connect.qq.com/widget/shareqq/index.html?url=" +
                encodeURIComponent(this.share.share_url) + "&title=" + this.share.title + "&desc=" + this.share.desc
            );
        }, 
        //分享到QQ空间(可用)    
        shareToRoom() { 
            console.log(this.share.image_url);
            // this.share.image_url = this.share.image_url.map(function (image) {
                //这里我的this.share.image_url不是个数字 如果这个方法用不了
            //     return encodeURIComponent(image);
            // }); //跳转地址    
            location.href=(
                'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?&url=' +
                encodeURIComponent(this.share.share_url) + '&title=' + this.share.title +
                '&pics=' + this.share.image_url + '&summary=' + this.share.desc
                );
        }, 
        //分享到微博(可用)    
        shareToMicroblog() {           
            //跳转地址      
            location.href=(        
                "https://service.weibo.com/share/share.php?url=" +          
                encodeURIComponent(this.share.share_url) + "&title=" +          
                this.share.title + "&pic=" + encodeURIComponent(this.share.image_url) + "&searchPic=true"
                );
        }
    },
    computed:{},
    watch:{},
  }
</script>
<style scoped lang='less'>
    .others{
        overflow: hidden;
        width: 85%;
        margin: 0 auto;
        // background-color: aquamarine;
        .otherAll{
            margin-bottom: 60px;
            .otherLeft{
                color: black;
                p{
                    float: left;
                }
                // margin-bottom: 10px;
            }
    
            .share{
                clear: both;
                float: left;
                // display: none;
                margin-top: 10px;
                margin-right: -20px;
                margin-bottom: 20px;
            }
            
            img{
                float: left;
                width: 35px;
            }
            p{
                margin-left: 5px;
                font-size: 16px;
                line-height: 10px;
            }
            .otherRight{
                p{
                    display: inline;
                    float: right;
                }
                img{
                    margin-left: 30px;
                    float: right;
                }       
            }
        }
        .comments{
            clear: both;
            // margin-top: 120px;
            ul{
                list-style: none;
                margin-left: -20px;
                // margin-top: -10px;
                li{
                    margin-bottom: 20px;
                }
                p{
                    display: inline;
                    margin: 5px;
                    color: rgb(255, 148, 9);
                }
                .commentHeadImg{
                    position: relative;
                    top: 10px;
                    left: -3px;
                }            
            }
        }
    }


    /* 关于 */
    .about {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(4rpx);
        background-color: rgba(0, 0, 0, .3);
    }
</style>