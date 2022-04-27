<template>
    <!-- footer -->
    <footer>
        <ul class="footerWrapper">
            <li class="footerFont" v-for="f in footer" :key="f.id" @click="goTo(f.id)">
                <i :class="f.class">{{f.iconfont}}</i>
                <span :class="f.class">{{f.text}}</span>
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
                // {id:1, iconfont:'\ue629',text:'主页'},
                {id:1, iconfont:'\ue629',text:'二手交易',class:'iconfont'},
                {id:2, iconfont:'\ue611',text:'互助',class:'iconfont'},
                {id:3, iconfont:'\ue69b',text:'发布',class:'iconfont'},
                {id:4, iconfont:'\ue600',text:'失物招领',class:'iconfont'},
                {id:5, iconfont:'\ue8bb',text:'我的',class:'iconfont'},
            ],

        }
    },
    methods: {
        goTo(id){
            console.log(id)
            if(id == 1){
                this.$router.push({name:'secondHandMain'})
            }else if(id == 2){
                this.$router.push({name:'Home',query:{tag:'求助咨询'}})
            }else if(id == 3){
                this.$router.push({name:'Publish'})
            }else if(id == 4){
                this.$router.push({name:'LoseThings',query:{tag:'失物招领'}})
            }else if(id == 5){
                this.$router.push({name:'PersonalDetail'})
            }
        }
    },
    watch:{
        $route(to, from) {
            console.log(to.path,"要跳转的页面")
            console.log(from.path,"来自哪个页面的")
            console.log(to.path.indexOf("Publish") )
            if(to.path.indexOf("Publish")  !== -1){
                // console.log("bainse")
                // console.log(this.classObj.choose)
                this.footer[2].class += " choose"
            }else{
                this.footer[2].class = 'iconfont'
            }
        },
    }
}
</script>

<style scoped>
    .footerWrapper {
        position:fixed;
        bottom: 0px;
        width: 100vw;
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
    .choose{
        color: #f38800;
        font-weight: bold;
    }
</style>