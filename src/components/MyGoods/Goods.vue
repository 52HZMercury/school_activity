<template>
    <div class="body-bg">
        <Back></Back>
        <ul>
            <li v-for="(g,index) in good" :key="index" class="good-Item">
                <div class="good-wrapper" @click="goInfo(g)">
                    <div class="first">
                        <span><i>{{g.brand}}</i>：{{g.description}}</span>
                    </div>
                    <div class="second">
                        <span class="price">{{g.sellPrice}} <i>{{g.originalPrice}}</i></span> 
                        <span>{{g.bargain}}</span>
                    </div>
                </div>
                <el-button 
                class="btn" 
                type="danger" 
                icon="el-icon-delete" 
                circle
                @click="del(g.id)"
                >
                </el-button>
            </li>
        </ul>
    </div>
</template>

<script>
import { Dialog } from 'vant';
import { mapMutations } from 'vuex'
import Back from '../Common/Back.vue'
export default {
    name:'Goods',
    components:{Back},
    data() {
        return {
            // id:0,
            // brand:'华为',
            // describe:'我这个是99新的华为手机dsdffdsf ',
            // isBargain:true,
            // bargain:'',
            // originalPrice:'3000',
            // sellPrice:'2500',
            // userId:0,
            url: 'http://mercuryblog.site:8080/',
            good:[],
            options:0,
            urlOption:'',
            idName:''
        }
    },
    mounted() {
        this.options = this.$route.query.options || this.options
        console.log(this.$route.query.options)
        this.choiceList()
    },
    methods: {
        buyGoods(){
            // this.$axios.get('/back/login?id=123&password=123').then(
                // (res)=>{
                    // console.log(res)
                    //this.good = []
                    this.$axios.post('/back/getgoods').then(
                        (res)=>{
                            console.log(res)
                            for(let i=0; i < res.data.length; i++){
                                //不能直接等于 会丧失数据代理
                                if(res.data[i].isbargain){
                                    res.data[i].bargain = '可议价'
                                }else{
                                    res.data[i].bargain = '不讲价'
                                }
                                this.good.unshift(res.data[i])
                            }
                            // console.log(this.good)
                        },
                        (err)=>{
                            console.log(err)
                        }
                    )
        },
                // (err)=>{
                    // console.log(err)
                // }
            // )
        // },
        idleGoods(){
            this.$axios.post('/back/mygoods').then(
                (res)=>{
                    console.log(res)
                    for(let i=0; i < res.data.length; i++){
                        //不能直接等于 会丧失数据代理
                        if(res.data[i].isbargain){
                            res.data[i].bargain = '可议价'
                        }else{
                            res.data[i].bargain = '不讲价'
                        }
                        this.good.unshift(res.data[i])
                    }
                    // console.log(this.good)
                },
                (err)=>{
                    console.log(err)
                }
            )
        },
        choiceList(){
            // console.log(this.options)
            this.good = []
            if(this.options == 0){
                // alert(1)
                this.idleGoods()
            }else if(this.options == 1){
                this.buyGoods()
            }else{
                alert('出错了')
            }
        },
        choiceDel(){
            console.log(this.options)
            if(this.options == 0){
                this.urlOption = 'deletemygoods'
                this.idName = 'dynamicId'
            }else if(this.options == 1){
                this.urlOption = 'deletegoods'
                this.idName = 'id'
            }else{
                alert('出错了')
            }
        },
        del(id){
            console.log(id)
            Dialog.confirm({
                // title: '标题',
                message: '确定要删除嘛？'
            }).then(() => {
                this.choiceDel()
                console.log(this.idName)
                this.$axios.post('/back/'+this.urlOption+'?'+this.idName+'='+id).then(
                    (res)=>{
                        this.choiceList()
                        console.log(res)
                    },
                    (err)=>{
                        console.log(err)
                    }
                )
            // on confirm
            }).catch(() => {
            // on cancel
            });
        },
        ...mapMutations(['activedId']),
        goInfo(targetObj){
            console.log(targetObj)
            this.$axios.get('/back').then(
            res=>{
                for (let i = 0; i < res.data.length; i++) {
                    if(targetObj.id == res.data[i].id){
                        this.index = i
                    }
                }
                this.activedId({
                    id: targetObj.id,
                    index: this.index
                })
                console.log('store:', this.$store.state.info)
                this.$router.push('/info')
            }
        )
        }
    },
}
</script>

<style lang='less' scoped>
body{
        background-color: rgb(241, 238, 238);
    }
    .good-Item{
        display: flex;
        position: relative;
        // justify-content: space-between;
        &:last-child{
            padding-bottom: 150px;
        }
        .good-wrapper{
            position: relative;
            width: 80%;
            border: 1px solid #ccc;
            border-radius: 16px;
            background-color: white;
            margin: 10px ;
            // display: flex;
            // justify-content: space-between;
            div{
                padding: 0.5rem;
            }
            .first{
                width: 90%;
                i{
                    font-style: normal;
                    font-size: 1.3rem;
                }
                span{
                    white-space: break-word;  //文字自动换行  
                }
            }
            .second{
                display: flex;
                justify-content: space-around;
                padding-top: 0;
                .price{
                    font-size: 1.1rem;
                    color: #EE4000;
                    i{
                        font-style: normal;
                        text-decoration: line-through;
                        font-size: 0.9rem;
                        // color: #000;
                    }
                }
            }
            
        }
        .btn{
            // display: flex;
            // position: absolute;
            // top: 50%;
            height: 50px;
            width: 50px;
            margin-top: 28px;
            // margin-left: -100px;
        }
    }
</style>