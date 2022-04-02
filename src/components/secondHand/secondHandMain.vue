<template>
    <div class="wrapper">
        <div class="search-box">
            <input type="text" placeholder="搜索宝贝">
        </div>
        <div class="goods">
            <div class="list list-left">
                <!-- 官方不推荐这么写，所以这里报错了，但是——管他呢 -->
                <div class="box" v-for="good in goods" :key="good.id" v-if="goods.indexOf(good) % 2 == 0">
                    <div class="image-box">
                        <img :src="baseURL + good.img" alt="这是一个图片">
                    </div>
                    <div class="info-box">
                        <div class="intro">{{good.descriptiontext}}</div>
                        <div class="info">
                            <div class="tag" v-if="good.buyORsale">出售</div>
                            <div class="tag" style="background-color:royalblue;" v-else>求购</div>
                            <div class="location">#本校</div>
                            <div class="price">￥{{good.sellPrice}}</div>
                        </div>
                        <div class="user">
                            <div class="head-image">
                                <img :src="baseURL + good.user.headImg" alt="用户头像">
                                <div class="owner" v-if="good.invisible">张三</div>
                                <div class="owner"  v-else>匿名用户</div>
                            </div>
                            
                            <div class="follow">0人想要</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 右边 -->
            <div class="list list-right">
                <div class="box" v-for="good in goods" :key="good.id" v-if="goods.indexOf(good) % 2 == 1">
                     <div class="image-box">
                        <img :src="'http://47.96.119.233:8080/' +good.img" alt="这是一个图片">
                    </div>
                    <div class="info-box">
                        <div class="intro">{{good.descriptiontext}}</div>
                        <div class="info">
                            <div class="tag">求购</div>
                            <div class="location">本校</div>
                            <div class="price">0.04</div>
                        </div>
                        <div class="user">
                            <div class="owner">张三</div>
                            <div class="follow">0人想要</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'secondHandMain',
    components:{},
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
        width: 100%;
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
    .image-box {
        width: 100%;
        text-align: center;        
    }
    .image-box img {
        width: 90%;
        border: 1px solid #3333;
        border-radius: 1rem;
        margin: 0.5rem auto 0;
        
    }
    .intro {
        text-align: left;
        padding: 0.5rem;
        overflow: hidden;
        font-weight: 700;
    }
    .info {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .tag {
        background-color: rgb(220, 48, 79);
        padding: 0.2rem 1rem 0.2rem;
        border-radius: 1rem;
        color: #fff;
    }
    .location {
        color: gold;
        font-size: 1rem;
        font-weight: 700;
    }
    .price {
        color: rgb(235, 48, 79);
        font-size: 1.5rem;
        font-weight: 700;
    }
    .user {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem 0 0.5rem;
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
    }
</style>