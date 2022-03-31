<template>
    <div>
        <ul>
            <li class="good-wrapper">
                <div>
                    <div class="first">
                        <span><i>{{brand}}</i>：{{describe}}</span>
                    </div>
                    <div class="second">
                        <span class="price">{{sellPrice}} <i>{{originalPrice}}</i></span> 
                        <span>{{bargain}}</span>
                    </div>
                </div>
                <el-button class="btn" type="danger" icon="el-icon-delete" circle></el-button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Goods',
    data() {
        return {
            id:'1',
            brand:'华为',
            describe:'我这个是99新的华为手机',
            isBargain:true,
            bargain:'',
            originalPrice:'3000',
            sellPrice:'2500',
            userId:'2',
        }
    },
    mounted() {
        if(this.isBargain){
            this.bargain = '可议价'
        }else{
            this.bargain = '不讲价'
        }
    },
}
</script>

<style lang='less' scoped>
body{
        background-color: rgb(241, 238, 238);
    }
.good-wrapper{
    width: 95%;
    border: 1px solid #ccc;
    border-radius: 16px;
    background-color: white;
    margin: 0 auto;
    display: flex;
    div{
        padding: 0.8rem;
    }
    .first{
        i{
            font-style: normal;
            font-size: 1.3rem;
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
    .btn{
        height: 50px;
        width: 50px;
        margin-top: 30px;
    }
}
</style>