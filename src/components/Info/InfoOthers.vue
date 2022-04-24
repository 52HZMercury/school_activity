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
                    enter-active-class="animate__pulse"
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
                <div >
                    <p>{{commentData.length}}</p>
                    <img @click="showComment" src="../../assets/imgs/commend.png">

                    <transition 
                        name="animate__animated animate__bounce"
                        enter-active-class="animate__backInDown"
                        leave-active-class="animate__backOutDown">
                        
                        <div class="sendComment" v-show="commentFlag">
                            <el-input
                            placeholder="请输入评论"
                            v-model="input"
                            clearable
                            class="sendInput"
                            autosize
                            >
                            </el-input>
                            <button class="c-button c-button--gooey" @click="postComment" > 发送
                            <div class="c-button__blobs">
                            <div></div>
                            <div></div>
                            <div></div>
                            </div>
                            </button>
                            <svg style="display: block; height: 0; width: 0;" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="goo">
                                <feGaussianBlur result="blur" stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
                                <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
                                <feBlend in2="goo" in="SourceGraphic"></feBlend>
                                </filter>
                            </defs>
                            </svg>
                        </div>
                        
                    </transition>
                </div>
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
                    <li v-for="(comment,index) in commentData" :key="index">
                        <!-- <img :src="url+comment.user.headImg" alt=""> -->
                        <div>
                            <el-avatar :size="30" :src="url+comment.user.headImg" class="commentHeadImg"></el-avatar>
                            <p>{{comment.user.name}}</p>: {{comment.commentText}}
                        </div>
                        <el-button 
                        class="btn" 
                        type="danger" 
                        icon="el-icon-delete" 
                        circle
                        @click="delComment(comment)"
                        >
                        </el-button>
                        <!-- <el-button class="btn" type="danger" icon="el-icon-delete" circle></el-button> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import 'animate.css'
import { Dialog } from 'vant';
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
        url:'http://mercuryblog.site:8080/',
        shareFlag : false,
        commentFlag:false,
        input:'',
        share:{
            title: '',
            desc: '',
            image_url: '',
            share_url:'',
            id:0
        }
      }
    },
    created(){},
    mounted(){
        this.$axios.get('/back').then(
            res=>{
                // let index = this.$store.state.info.index
                this.commentData = res.data[this.index].comments
                // this.imgSrc = res.data[this.index]
                this.like = res.data[this.index].likes
                this.id = res.data[this.index].id
                setTimeout(()=>{
                    this.likes = this.like
                },1000)

                this.share.title = res.data[this.index].tag
                this.share.desc = res.data[this.index].descriptiontext
                this.share.image_url = this.url+res.data[this.index].img
                this.share.share_url = '买了服务器网页的地址'
            },
            err=>{
                console.log(err);
            }
        )
                // alert(this.index)
    },
    activated(){},
    updated(){},
    methods:{
         //like从0-1   
        likeUpData(){
            this.like++
            this.likeFlag = !this.likeFlag
            setTimeout(()=>{
                this.likes++
            },1000)
            this.$axios.post('/back/updateLikes?dynamicId='+this.id+'&likes='+this.like)
        },
        //like从1-...  ...-1    1-0特殊
        likesUpData(){
            if(this.like === 1){
                this.likes = 0
                setTimeout(()=>{
                    this.like = 0
                },1000)
            }else{
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
            }
            
            this.$axios.post('/back/updateLikes?dynamicId='+this.id+'&likes='+this.like)
        },

        //评论
        showComment(){
            this.commentFlag = !this.commentFlag
        },
        postComment(){
            let comment = {
                    commentText:this.input,
                    dynamicId:this.id,
                    user:{
                        // dynamicSum: 0,
                        // headImg: "string",
                        // id: 0,
                        // introduction: "string",
                        // likesSum: 0,
                        // name: "string",
                        // password: "string",
                        // qqnum: "string",
                        // telnum: "string"
                    }
                }
            console.log(comment)
            // console.log(Number(this.index))
            this.input = ''
            // this.$axios.get('/back/login?id=123&password=123').then(
            //     res=>{
            //         console.log('登录成功'+res)
                    this.$axios.post('/back/releaseComment',comment).then(
                    res=>{
                        console.log(res)
                        this.$axios.get('/back').then(
                            res=>{
                                console.log(res.data)
                                // let index = this.$store.state.info.index
                                this.commentData = res.data[this.index].comments
                            },
                            err=>{
                                console.log(err)
                            }
                        )
                    },
                    err=>{
                        console.log(err);
                    }
                    )   
                // },
            //     err=>{
            //         console.log(err)
            //     }
            // )
        },
        delComment(c){
            console.log(c)
            console.log(c.commentId)
            this.$axios.post('/back/deleteComment?Commentid='+c.commentId).then(
                res=>{
                    console.log(res)
                    if(res.data.indexOf("success") !== -1){
                        Dialog({ message: '删除成功' });
                        this.$axios.get('/back').then(
                            res=>{
                                console.log(res.data)
                                // let index = this.$store.state.info.index
                                this.commentData = res.data[this.index].comments
                            },
                            err=>{
                                console.log(err)
                            }
                        )
                    }else{
                        Dialog({ 
                            title:'删除失败',
                            message: '您不是评论此条的人 不能删除' });
                    }
                }
            )
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
                this.share.title + "&pic=" + encodeURIComponent("http:"+this.share.image_url) + "&searchPic=true"
                );
        },
        
    },
    computed:{
        index(){
            return this.$store.state.info.index
        }
    },
    watch:{},
  }
</script>
<style scoped lang="less">
    .others{
        overflow: hidden;
        width: 85%;
        margin: 0 auto;
        // background-color: aquamarine;
        .otherAll{
            // margin-bottom: 60px;
            .otherLeft{
                color: black;
                p{
                    float: left;
                }
                // margin-bottom: 10px;
            }

            .sendComment{
                clear: both;
                display: flex;
                justify-content: space-around;
                // margin: 0px;
                /* From cssbuttons.io */
                .sendInput{
                    width: 70%;
                }
                .c-button {
                color: #000;
                font-weight: 700;
                font-size: 14px;
                text-decoration: none;
                padding: 0.6em 0.8em;
                cursor: pointer;
                display: inline-block;
                vertical-align: middle;
                position: relative;
                z-index: 1;
                }

                .c-button--gooey {
                color: #6495ED;
                text-transform: uppercase;
                letter-spacing: 2px;
                border: 4px solid #6495ED;
                border-radius: 0;
                position: relative;
                transition: all 700ms ease;
                }

                .c-button--gooey .c-button__blobs {
                height: 100%;
                filter: url(#goo);
                overflow: hidden;
                position: absolute;
                top: 0;
                left: 0;
                bottom: -3px;
                right: -1px;
                z-index: -1;
                }

                .c-button--gooey .c-button__blobs div {
                background-color: #6495ED;
                width: 34%;
                height: 100%;
                border-radius: 100%;
                position: absolute;
                transform: scale(1.4) translateY(125%) translateZ(0);
                transition: all 700ms ease;
                }

                .c-button--gooey .c-button__blobs div:nth-child(1) {
                left: -5%;
                }

                .c-button--gooey .c-button__blobs div:nth-child(2) {
                left: 30%;
                transition-delay: 60ms;
                }

                .c-button--gooey .c-button__blobs div:nth-child(3) {
                left: 66%;
                transition-delay: 25ms;
                }

                .c-button--gooey:hover {
                color: #fff;
                }

                .c-button--gooey:hover .c-button__blobs div {
                transform: scale(1.4) translateY(0) translateZ(0);
                }
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
                // margin-top: -10px;
                li{
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: space-between;
                    // margin-left: 20px;
                }
                p{
                    display: inline;
                    margin: 5px;
                    color: rgb(255, 148, 9);
                }
                .commentHeadImg{
                    position: relative;
                    top: 10px;
                    // left: -30px;
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