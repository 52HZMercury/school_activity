<template>
    <!-- footer -->
    <footer>
        <ul class="footerWrapper">
            <li class="footerFont" v-for="f in footer" :key="f.id" @click="goTo">
                <i class="iconfont">{{f.iconfont}}</i>
                <span>{{f.text}}</span>
            </li>
        </ul>
    </footer>
</template>

<script>
import  '../../assets/font/font_footer/iconfont.css'
export default {
    name:'HomeCardFooter',
    data() {
        return {
            footer:[
                {id:1, iconfont:'\ue629',text:'二手交易'},
                {id:2, iconfont:'\ue611',text:'互助'},
                {id:3, iconfont:'\ue69b',text:'发布'},
                {id:4, iconfont:'\ue600',text:'失物招领'},
                {id:5, iconfont:'\ue8bb',text:'我的'},
            ]
        }
    },
    methods: {
        goTo(){
            
        }
    },
}
</script>

<style scope>
    .footerWrapper{
        position:fixed;
        bottom: 0px;
        width: 100%;
        display:flex;
        justify-content: space-around;
        background-color: white;
        border-top: 1px solid #999;
        padding: 5px 0;
    }
    .footerFont{
        font-size: 16px;
        text-align: center;
    }
    .footerFont i{
        display: block;
        font-size: 24px;
    }

    .footerFont:hover{
        color: #f38800;
        font-weight: bold;
    }
</style>