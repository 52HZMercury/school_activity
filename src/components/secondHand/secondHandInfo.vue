<template>
    <div class="wrapper">
        <!-- <InfoTitle></InfoTitle> -->

        <div class="textMain">
            <!-- <InfoText></InfoText> -->
            <ul>
                <li v-for="(t,index) in thingsTag" :key="index">
                    <span>{{t}}</span>
                </li>
            </ul>
        </div>

        <div class="deal">
            <div>
                <span>
                    预估成交价
                </span>
                <br>
                <div>
                    <del>原价:{{originalPrice}}</del>
                    <i>￥{{sellPrice}} {{bargain}}</i>
                </div>
            </div>
            <button slot="reference" @click="showContact">
                <div @click="addGood">
                    <span>
                    <p>{{text}}</p><p>:)</p>
                    </span>
                </div>
                <div>
                    <span>
                    <p>Thanks</p><p>:D</p>
                    </span>
                </div>
            </button>
        </div>

        <!-- <div class="footer">
            <span>有意购买者 给楼主留言</span>
        </div> -->
        <transition 
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInDown"
        leave-active-class="animate__backOutDown"
        >
            <secondHandContact v-show="contact"></secondHandContact>
        </transition>

        <!-- <InfoOthers></InfoOthers> -->
    </div>
</template>

<script>
import secondHandContact from './secondHandContact.vue'
import 'animate.css'
import { Dialog } from 'vant'
export default {
    name:'secondHandInfo',
    components:{secondHandContact},
    data() {
        return {
            quality:['破旧', '85新', '95新', '99新', '全新'],
            bargain:'可议价',
            buyORsale:'',
            originalPrice:'100',
            sellPrice:'50',
            xingHao:'',
            id:0,
            likes:0,
            contact:false,
            thingsTag:['出售','10新','自行车'],
            // index:45,
            flag:true,
            text:'',
            origin:'',
            good:{},
            goodFlag:true,
        }
    },
    mounted() {
        this.$axios.get('/back').then(
            res=>{
                console.log(res.data[this.index])
                // this.thingsTag[0] = res.data[44]
                // this.thingsTag.splice() = res.data[44]
                if(res.data[this.index].buyORsale){
                    this.buyORsale = '出售'
                    this.text = '我想买'
                    this.origin = '我想买'
                    // console.log(this.buyORsale)
                }else{
                    this.buyORsale = '需求'
                    this.text = '我想卖'
                    this.origin = '我想卖'
                }
                if(res.data[this.index].isbargain){
                    this.bargain = '可议价'
                }else{
                    this.bargain = '不讲价'
                }
                this.thingsTag.splice(0,1,this.buyORsale)
                this.thingsTag.splice(1,1,this.quality[res.data[this.index].quality])
                this.thingsTag.splice(2,1,res.data[this.index].brand)
                this.originalPrice = res.data[this.index].originalPrice
                this.sellPrice = res.data[this.index].sellPrice
                this.id = res.data[this.index].id
                this.likes = res.data[this.index].likes

                this.good.brand = res.data[this.index].brand
                this.good.description = res.data[this.index].descriptiontext
                this.good.id = res.data[this.index].id
                this.good.isbargain = res.data[this.index].isbargain
                this.good.originalPrice = res.data[this.index].originalPrice
                this.good.sellPrice = res.data[this.index].sellPrice
                this.good.userId = res.data[this.index].user.id

            },
            err=>{
                console.log(err)
            }
        )
    },
    methods: {
        showContact(){
            // alert(1)
            this.contact = !this.contact
            if(this.flag){
                this.text = '点击隐藏信息'
                this.flag = !this.flag
            }else{
                this.text = this.origin
                this.flag = !this.flag
            }
            console.log( this.contact )
        },
        addGood(){
            if(this.text.indexOf('我想买') !== -1 && this.goodFlag){
                console.log(this.good)
                this.goodFlag = false
                this.$axios.post('/back/addgoodsTocar',this.good).then(
                    res=>{
                        console.log(res)
                    },
                    err=>{
                        console.log(err)
                    }
                )
                this.likes++
                this.$axios.post('/back/updateLikes?dynamicId='+this.id+'&likes='+this.likes)
            }else if(this.text.indexOf('我想买') !== -1 && !this.goodFlag){
                Dialog.alert({
                    message: '已经加入购物车了，不能重复加入'
                }).then(() => {
                // on close
                });
            }
        }
    },
    computed:{
        index(){
            return this.$store.state.info.index
        }
    },
}
</script>

<style lang='less' scoped>
    .textMain{
        ul{
            margin-top: 15px;
            margin-left: 10%;
            display: flex;
            justify-content:flex-start;
            li{
                border: 1px #ccc solid;
                border-radius: 30px;
                padding: 5px;
                margin-right: 4%;
                background-color: rgb(241, 238, 238);
            }
        }
    }

    .deal{
        margin-top: 25px;
        display: flex;
        justify-content: space-around;
        font-size: 15px;
        margin-bottom: 20px;
        div{
            del{
                font-size: 12px;
                color: #ccc;
                margin-right: 15px;
            }
            i{
                font-style: normal;
                color: #EE4000;
            }
        }
        /* From cssbuttons.io by @Sergestra */
        button {
            outline: 0;
            border: 0;
            display: flex;
            flex-direction: column;
            // width: 100%;
            width: 150px;
            height: 57px;
            overflow: hidden;
            background-color: #ffffff;
        }

        button div {
            transform: translateY(0px);
            width: 100%;
            border-radius: 2em;
            box-shadow: 0 0.6em 1em 0 rgba(30, 143, 255, 0.35);
        }

        button,
        button div {
            transition: 0.6s cubic-bezier(.16,1,.3,1);
        }

        button div span {
            text-align: center;
            display: flex;
            justify-content: space-around;
            padding:0em 0.7em;
        }

        button div:nth-child(1) {
            background-color: #73b3f3;
        }

        button div:nth-child(2) {
            background-color: #21dc62;
        }

        button:focus div:nth-child(2){
            box-shadow: 0 0.6em 1em 0 rgba(33, 220, 98, 0.35);
        }

        button:focus div {
            transform: translateY(-57px);
        }

        button p {
            font-size: 17px;
            font-weight: bold;
            color: #ffffff;
        }

        button:active {
            transform: scale(0.95);
        }
    }

    // .footer{
    //     position:fixed;
    //     bottom: 0px;
    //     // top: 100px;
    //     border-top: 1px transparent solid;
    //     width: 100%;
    //     background-color: whitesmoke;
    //     padding: 10px;
    //     z-index: 9;
    // }
</style>