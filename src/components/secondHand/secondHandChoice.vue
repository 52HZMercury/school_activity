<template>
    <div class="body-bg">
        <div class="title">
            <img src="../../assets\imgs\二手交易.png" alt="">
        </div>

        <div class="section">
            <div class="firstSection">
                <div class="choice">
                    <p>欢迎光临 跳蚤市场</p>
                    <p>当前选择的是：<i class="colorText">{{userChoice}}</i></p>
                </div>
                <transition-group class="choiceMode">
                    <div class="sell" key="1" @click="sellThing" ref="sell">
                    <i class="iconfont choiceThing">&#xe601;
                    </i>
                        宝贝
                    </div>
                    <div class="buy" key="2" @click="buyThing" ref="buy">
                        <i class="iconfont choiceThing">&#xe69c;</i> 宝贝
                    </div>
                </transition-group>
            </div>
        </div>

        <div class="section">
            <div class="secondSection">
                <div class="choice">
                    <p>给宝贝选个分类</p>
                    <p>选择的分类是：<i class="colorText">{{brand}}</i></p>
                </div>
                <ul class="classifyThings">
                    <li v-for="(classifyThing,index) of classifyObj" :key="index" @click="classifyChoice(index)">
                        <i class="iconfont">{{classifyThing.font}}</i>
                        <p>{{classifyThing.brand}}</p>
                    </li>
                </ul>
                <div class="brandText">
                    <i class="iconfont">&#xe824;</i>
                    <p>品牌/型号信息：</p>
                    <div class="input">
                        <el-input
                            type="textarea"
                            autosize
                            placeholder="品牌 型号等"
                            v-model="brandDetail"
                            clearable
                        >
                        </el-input>
                    </div>
                </div>
            </div>
        </div>


        <div class="section">
            <div class="thirdSection">
                <i class="iconfont">&#xe6bf;</i>发布提示
                <p>不可匿名哦~</p>
            </div>
        </div>


        <div class="section">
            <div class="fourthSection">
                <button class="button" @click="goDetail">
                    <div class="icon">
                        <svg viewBox="0 0 16 16" class="bi bi-telegram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                        </svg>
                    </div>
                    <p>进一步完善</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
// import dayjs from 'dayjs'
// import '../../assets/font/font_secondHand/iconfont.css'
export default {
    name:'secondHandChoice',
    data() {
        return {
            userChoice:'买宝贝',
            buyORsale:false,
            brand:'未选择',
            brandDetail:'',
            classifyObj:[
                {font:'\ue6a3',brand:'手机/配件'},
                {font:'\ue75e',brand:'电脑/配件'},
                {font:'\ue734',brand:'书籍'},
                {font:'\ue651',brand:'数码产品'},
            ],
            url:'http://mercuryblog.site:8080/'
        }
    },
    methods: {
        sellThing(){
            this.userChoice = '卖宝贝'
            this.$refs.sell.className = 'buy'
            this.$refs.buy.className = 'sell'
            this.buyORsale = true
            // console.log(this.$refs.sell.className)
        },
        buyThing(){
            this.userChoice = '买宝贝'
            this.$refs.sell.className = 'sell'
            this.$refs.buy.className = 'buy'
            this.buyORsale = false
        },
        touchmove(){
            this.touchstart = true
        },
        classifyChoice(index){
            // console.log(index)
            this.brand = this.classifyObj[index].brand
        },
        goDetail(){
            // var now = new Date()
            // let releasetime = dayjs(now.getTime()).format('YYYY-MM-DD HH:mm:ss')
            let data = {
                brand:this.brand,
                buyORsale:this.buyORsale,
                xingHao:this.brandDetail,
                invisible:false,
                tag:'#二手交易',
                releasetime:'',
                comments:[],
                id:'',
                user:{},
                descriptiontext:''
            }
            console.log(data)
            // console.log(releasetime)
            // this.$axios.get('/back/login?id=123&password=123').then(
            //     (res)=>{
            //         console.log(res);
                    
            //     }
            // )
            this.$axios.post('/back/add',data).then(
                (res)=>{
                console.log(res);
                if(res.status!== 200){
                    alert("发表动态失败")
                }
            })
            setTimeout(()=>{
                this.$router.push({name:'secondHandDetail'})
                // this.$router.push({name:'secondHandChoice'})
            },500)
        }
    },
    
}
</script>

<style scoped lang='less' >
    .title img{
        width: 100%;
        // border-radius: 30px;
        margin-top: 45px;
    }
    .section{
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        margin: 10px 0;
        .choice {
            padding: 2px 5px;
            display: flex;
            justify-content: space-between;
            .colorText{
                font-style:normal;
                color: #f82f4a;
            }
        }

        .firstSection{
            .choiceMode{
                display: flex;
                padding: 0 5px 14px;
                height: 30px;
                line-height: 30px;
                justify-content: space-around;
                .choiceThing{
                    display:inline-block;
                    font-size: 30px;
                    color: rgb(255, 0, 0);
                }
                .sell{
                    width: 38%;
                    background-color: #FFAEB9;
                    text-align: center;
                    margin-left: 7px;
                    margin-right: 7px;
                    transition-property: width,background-color;
                    // transition: 0.6s all;
                    transition: 0.6s;
                    border-radius: 9px;
                }
                .buy{
                    width: 56%;
                    background-color: #87CEFA;
                    text-align: center;
                    transition-property: width,background-color;
                    transition: 0.6s;
                    border-radius: 9px;
                }
            }
        }


        .secondSection{
            .classifyThings{
                display: flex;
                justify-content: space-around;
                text-align: center;
                li{
                    background-color: rgb(235, 233, 233);
                    border-radius: 10px;
                    padding: 10px 5px 0px;
                    i{
                        font-size: 25px;
                    }
                }
            }
            .brandText{
                display: flex;
                margin-top: 15px;
                i{
                    font-size: 30px;
                    margin-top: 10px;
                    margin-right: 8px;
                    color: #557285;
                }
                .input{
                    margin-top: 8px;
                }
            }
        }

        .thirdSection{
            i{
                font-size: 35px;
                color: rgba(252, 207, 10, 0.692);
                padding: 10px;
            }
        }

        .fourthSection{
            /* From cssbuttons.io by @fanishah */
            display: flex;
            justify-content: center;
            .button {
                font-family: inherit;
                background: #2CA0D9;
                color: white;
                // padding: 1em 0;
                font-size: 17px;
                border: none;
                border-radius: 0.3em;
                letter-spacing: 0.08em;
                position: relative;
                display: flex;
                // align-content: center;
                align-items: center;
                // overflow: hidden;
                height: 2.5em;
                width: 45%;
                padding-left: 2.8em;
                padding-right: 0.9em;
                p{
                    width: 100%;
                    text-align: center;
                }
            }

            .button .icon {
                background: #fff;
                height: 2em;
                width: 2em;
                border-radius: 2em;
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                left: 0.4em;
                transition: all 0.5s;
            }

            .icon svg {
                // margin-left: 0.4em;
                transition: all 0.5s;
                color: #2CA0D9;
                width: 1.2rem;
                height: 1.2rem;
            }

            .button:hover .icon svg {
                transform: rotate(360deg);
            }

            .button:hover .icon {
                width: calc(100% - 0.85rem);
                border-radius: 0.5em;
            }
            
        }
    }
</style>