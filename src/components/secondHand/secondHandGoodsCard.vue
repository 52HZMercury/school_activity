<template>
    <!-- 这个组件是二手市场里面的单个卡片样式 -->
    <div class="child-wrapper">
        <div class="image-box">
            <img :src="baseURL + good.img" alt="这是一个图片">
        </div>
        <div class="info-box">
            <div class="intro">{{good.descriptiontext}}</div>
            <div class="info">
                <div class="tag" v-if="good.buyORsale">出售</div>
                <div class="tag" style="background-color:royalblue;" v-else>求购</div>
                <!-- <div class="location">#本校</div> -->
                <div class="price">￥{{good.sellPrice}}</div>
            </div>
            <div class="user">
                <div class="head-image">
                    <img :src="baseURL + good.user.headImg" alt="用户头像">
                    <div class="owner" v-if="good.invisible">{{good.user.name}}</div>
                    <div class="owner"  v-else>匿名用户</div>
                </div>
                
                <div class="follow">{{good.likes}}人想要</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'secondHandGoodsCard',
    components:{},
    props:{
        good:Object,
        baseURL:String
    },
    data(){
      return {
          
      }
    }
  }
</script>
<style scoped>
    /* .child-wrapper {
        width: 50%;
    } */
    .box {
        width: 50vw;
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
        font-size: 1.5rem;
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
    }
</style>