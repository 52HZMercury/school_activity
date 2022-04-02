<template>
    <div class="wrapper">
        <div class="search-box">
            <input type="text" placeholder="搜索宝贝">
        </div>
        <div class="goods">
            <div class="list list-left">
                <!-- 官方不推荐这么写，所以这里报错了，但是——管他呢 -->
                <!-- 这是左边 -->
                <div class="box" v-for="good in goods" :key="good.id" v-if="goods.indexOf(good) % 2 == 0">
                   <secondHandGoodsCard :good="good" :baseURL="baseURL"></secondHandGoodsCard>
                </div>
            </div>
            
            <!-- 右边 -->
            <div class="list list-right">
                <div class="box" v-for="good in goods" :key="good.id" v-if="goods.indexOf(good) % 2 == 1">
                     <secondHandGoodsCard :good="good" :baseURL="baseURL"></secondHandGoodsCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import secondHandGoodsCard from '@/components/secondHand/secondHandGoodsCard'
  export default {
    name: 'secondHandMain',
    components:{
        secondHandGoodsCard
    },
    props:{},
    data(){
      return {
        goods: [],
        baseURL: 'http://47.96.119.233:8080/'  
      }
    },
    created(){},
    mounted(){
        this.$axios.get('/back/tagDynamic', {
            params: {
                "tag": "#二手交易"
            }
        }).then((res) => {
            console.log(res.data)
            this.goods.push(...res.data)
        }).catch((err) => {
            console.warn ('获取二手交易物品信息失败', err)
        })
    },
    activated(){},
    updated(){},
    methods:{},
    computed:{},
    watch:{},
  }
</script>
<style scoped>
    .wrapper {
        background-color: #e3e3e3;
        height: 100vh;
        width: 100vw;
    }
    .goods {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .list {
        flex: 1;
        padding: 0 0.25rem 0;
    }
    .search-box {
        box-sizing: border-box;
        width: 100vw;
        text-align: center;
        padding: 1rem;
    }
    .search-box input {
        width: 80%;
        height: 1rem;
        padding: 0.5rem 0 0.5rem 0;
        border: none;
        border-radius: 1rem;
        
        text-align: center;
        font-weight: 600;
    }

    /* 下面的样式到时候拆出去给卡片组件用 */
    
    .box {
        width: 100%;
        background-color: #fff;
        margin: 0.5rem 0 0 0;
        border-radius: 1rem;
        text-align: center;
    }
    /*
    .image-box {
        width: 100%;
        text-align: center;        
    }
    .image-box img {
        width: 90%;
        border: 1px solid #3333;
        border-radius: 1rem;
        margin: 0.5rem auto 0;
        box-shadow: 0.1rem 0.1rem 2rem rgba(233, 233, 233, 0.8) inset,
                    -0.1rem -0.1rem 2rem rgba(0, 0, 0, 1) inset;
    }
    .intro {
        text-align: left;
        padding: 0.5rem;
        overflow: hidden;
        font-weight: 700;
    }
    .info {
        display: flex;
        justify-content: space-between;
        padding: 0 0.5rem 0;
        align-items: center;
    }
    .tag {
        background-color: gold;
        padding: 0.5rem 1.2rem 0.5rem;
        border-radius: 1.5rem;
        color: #fff;
        font-weight: 600;
        font-size: 1.2rem;
        cursor: pointer;
    }
    .location {
        color: gold;
        font-size: 1rem;
        font-weight: 700;
    }
    .price {
        color: #ff3700;
        font-size: 2rem;
        font-weight: 700;
    }
    .user {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
    }
    .head-image {
        height: 2rem;
        display: flex;
        align-items: center;
    }
    .head-image img{
        height: 2rem;
        width: 2rem;
        border: 1px solid #3333;
        margin: 0 0.4rem 0 0;
    }
    .owner {
    } */
</style>