<template>
    <div class="body-bg">
        <div class="section">
            <div class="firstSection">
                <p>
                    <i class="iconfont">&#xe614;</i>宝贝描述
                </p>
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 3, maxRows: 5}"
                    placeholder="请输入宝贝描述"
                    v-model="thingDescribe">
                </el-input>
            </div>
        </div>

        <div class="section">
            <div class="secondSection">
                <i class="iconfont">&#xe615;</i>照片
                    <!-- 这个name很重要，错了后台接收不到文件，官方是这样解释的 上传的文件字段名 ,实际上就是后端对应的接口参数的名字， --> 
                    <!-- :http-request="uploadImg" 可以使用自己的函数，覆盖action-->
                <el-upload
                    action="/back/fileload"
                    list-type="picture-card"
                    :on-success="up"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <!-- <van-uploader :after-read="afterRead" v-model="fileList" multiple/> -->
            </div>
        </div>

        <div class="section">
            <div class="thirdSection">
                <i class="iconfont">&#xe675;</i>宝贝成色如何
                <div class="block">
                    <!-- <span class="demonstration">区分颜色</span> -->
                    <el-rate
                        class="rate"
                        v-model="grade"
                        :colors="colors"
                        show-text  
                        :texts="texts"  
                        :text-color='textColor'
                    >
                    </el-rate>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="fourthSection">
                <div>
                    <p>
                        <i class="iconfont">&#xe607;</i>
                        <el-input
                            placeholder="请输入原价"
                            type="number"
                            v-model="originalPrice"
                            clearable
                        >
                        </el-input>
                    </p>
                    <p>
                        <i class="iconfont">&#xe72d;</i>
                        <el-input
                            placeholder="输入预期成交价格"
                            type="number"
                            v-model="currentPrice"
                            clearable
                        >
                        </el-input>
                    </p>
                </div>

                <p>
                    <i class="iconfont">&#xe62b;</i>
                    <b>可议价/可小刀</b>
                    <el-switch
                        v-model="bargain"
                        active-color="#81D5F7"
                        inactive-color="#DEDEDE">
                    </el-switch>
                </p>
            </div>
        </div>

        <div class="section">
            <div class="fifthSection">
                <p>
                    <i class="iconfont">&#xe797;</i>输入手机号作为联系方式(<b style="color:red">必填</b>)
                    <el-input
                            placeholder="请输入手机号（必填）"
                            type="number"
                            v-model="phone"
                            clearable
                        >
                    </el-input>
                </p>
                <p>
                    <i class="iconfont">&#xe62d;</i>输入QQ号方便联系(<b style="color:red">选填</b>)
                    <el-input
                            placeholder="请输入QQ号（选填）"
                            type="number"
                            v-model="qq"
                            clearable
                        >
                    </el-input>
                </p>
            </div>
        </div>

        <div class="lastButton">
            <div class="button1" @click="back">
                <button>
                    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                    <span>Back</span>
                </button>
            </div>
            <div class="button2" @click="send">
                <button>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    name:'secondHandDetail',
    data() {
        return {
            thingDescribe:'',
            grade:'',
            originalPrice: '',
            currentPrice:'',
            bargain:false,
            phone:'',
            qq:'',
            dialogImageUrl: '',
            dialogVisible: false,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
            texts:['破旧', '85新', '95新', '99新', '全新'],
            textColor:'#8B5A00',
            save:{},
            // fileList: []
        }
    },
    methods: {
        //自己上传
        // uploadImg(e) {
        //     console.log(e)
        //     let fd = new FormData()
        //     fd.append('file',e.file)
        //     console.log(e.file)
        //     console.log(fd)
        //     this.$axios.post("/back/fileload",fd).then(
        //         res => {
        //             console.log(res)
        //         },
        //         err =>{
        //             console.log(err)
        //         }
        //     ).catch(response => {
        //         console.log('图片上传失败')
        //     })
        // },

        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
            console.log(file);
        },
        up(response, file, fileList){
            console.log(response);
            console.log(file);
            console.log(fileList);
            // this.upload(file)
        },
        back(){
            let saveData = {
                descriptiontext:this.thingDescribe,
                originalPrice:this.originalPrice,
                sellPrice:this.currentPrice,
                quality:this.grade,
                isbargain:this.bargain,
                user:{
                    qqnum:this.qq,
                    telnum:this.phone
                },
            }
            setTimeout(()=>{
                Dialog.confirm({
                title: '确定信息',
                message: '检测到未保存的内容，是否在离开页面前保存修改？'
                }).then(() => {
                // on confirm
                    sessionStorage.setItem('msg',JSON.stringify(saveData))
                    console.log(sessionStorage.getItem('msg'))
                    this.$router.back()
                }).catch(() => {
                // on cancel
                    let cancelData = {}
                    sessionStorage.setItem('msg',JSON.stringify(cancelData))
                    this.$router.back()
                });
                
            },500)
        },
        send(){
            if(!this.phone.trim()){
                Dialog.alert({
                    message: '电话号码不能为空'
                }).then(() => {
                // on close
                });
            }else{
                let data = {
                    descriptiontext:this.thingDescribe,
                    originalPrice:this.originalPrice,
                    sellPrice:this.currentPrice,
                    quality:this.grade,
                    isbargain:this.bargain,
                    user:{
                        qqnum:this.qq,
                        telnum:this.phone
                    },
                    id:'',
                    releasetime:'',
                    comments:[],
                }
                console.log(data)
                setTimeout(()=>{
                    this.$axios.post('/back/updateDynamic',data).then(
                        (res)=>{
                            console.log(res);
                            if(res.status!== 200){
                                this.$toast("发表动态失败")
                            }else{
                                this.$toast('发布动态成功 跳回主页面');
                            }
                        }
                    )
                    this.$router.push({name:'HomeCardMain'})
                },500)

            }
        }
    },
    mounted() {
        this.save = JSON.parse(sessionStorage.getItem('msg')) 
        // console.log(sessionStorage.getItem('msg'))
        // console.log(this.save)
        if(this.save){
            this.thingDescribe = this.save.descriptiontext 
            this.grade = this.save.quality
            this.originalPrice = this.save.originalPrice
            this.currentPrice = this.save.sellPrice
            this.bargain = this.save.isbargain
            this.phone = this.save.user.telnum
            this.qq = this.save.user.qqnum
        }
    },
}
</script>

<style lang="less" scoped>
    // body{
    //     background-color: rgb(241, 238, 238);
    // }
    .section{
        background-color: white;
        border-radius: 10px;
        padding: 5px 15px;
        margin: 10px 0;
        &:nth-child(1){
            margin-top: 50px;
        }
        i{
            font-size: 23px;
            // color: #ccc;
            margin-right: 8px;
        }
        
        .firstSection{
            textarea{
                width: 95%;
                margin: 0 auto;
            }
        }

        .secondSection{
            i{
                display: inline-block;
                margin-bottom: 10px;
            }
        }

        .thirdSection{
            i{
                display: inline-block;
                margin-bottom: 10px;
            }
            .rate{
                text-align: center;
                padding: 20px;
            }
        }

        .fourthSection{
            div{
                p{
                    display: flex;
                    i{
                        font-size: 35px;
                        margin-right: 10px;
                    }
                }
            }
            b{
                font-weight: normal;
                margin-right: 10px;
            }
        }

        .fifthSection{
            p{
                margin-bottom: 10px;
                i{
                    display: inline-block;
                    margin-bottom: 10px;
                }
            }
        }
    }

    .lastButton{
        display: flex;
        justify-content: space-around;
        .button1{
            /* From cssbuttons.io by @Jedi-hongbin */
            button {
                display: flex;
                height: 3em;
                width: 100px;
                align-items: center;
                justify-content: center;
                background-color: #eeeeee4b;
                border-radius: 3px;
                letter-spacing: 1px;
                transition: all 0.2s linear;
                cursor: pointer;
                border: none;
                background: #fff;
            }

            button > svg {
                margin-right: 5px;
                margin-left: 5px;
                font-size: 20px;
                transition: all 0.4s ease-in;
            }

            button:hover > svg {
                font-size: 1.2em;
                transform: translateX(-5px);
            }

            button:hover {
                box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
                transform: translateY(-2px);
            }
        }

        .button2{
            /* From cssbuttons.io by @adamgiebl */
            button {
                font-family: inherit;
                font-size: 20px;
                background:#81D5F7;
                color: white;
                padding: 0.5em 1em;
                padding-left: 0.9em;
                display: flex;
                align-items: center;
                border: none;
                border-radius: 16px;
                overflow: hidden;
                transition: all 0.2s;
            }
    
            button span {
                display: block;
                margin-left: 0.3em;
                transition: all 0.3s ease-in-out;
            }
    
            button svg {
                display: block;
                transform-origin: center center;
                transition: transform 0.3s ease-in-out;
            }
    
            button:hover .svg-wrapper {
                animation: fly-1 0.6s ease-in-out infinite alternate;
            }
    
            button:hover svg {
                transform: translateX(1.2em) rotate(45deg) scale(1.1);
            }
    
            button:hover span {
                transform: translateX(5em);
            }
    
            button:active {
                transform: scale(0.95);
            }
    
            @keyframes fly-1 {
            from {
                transform: translateY(0.1em);
            }
    
            to {
                transform: translateY(-0.1em);
            }
            }
        }

    }
</style>