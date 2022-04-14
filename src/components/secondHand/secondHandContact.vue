<template>
    <div class="contact">
        <div>
            <p>联系电话为：{{phone}}</p>
            <button class="button" @click="copy" :data-clipboard-text="phone" id="express_info_right">点击复制</button>
        </div>
        <div>
            <p>QQ为：{{qq}}</p>
            <button class="button" @click="copy" :data-clipboard-text="qq" id="express_info_right">点击复制</button>
        </div>
        
        <!-- <button @click="copy" :data-clipboard-text="phone" id="express_info_right">复制链接</button> -->
    <!--data-clipboard-text 值为要复制的文本内容 -->

    </div>
</template>

<script>
export default {
    name:'secondHandContact',
    data() {
        return {
            phone:'',
            qq:''
        }
    },
    mounted() {
        this.$axios.get('/back').then(
            res=>{
                console.log(res.data[44])
                this.phone = res.data[44].user.telnum
                this.qq = res.data[44].user.qqnum
            },
            err=>{
                console.log(err)
            }
        )
    },
    methods:{
        copy(){
            let clipboard = new this.clipboard("#express_info_right");
            let that = this
            clipboard.on('success', function () {
                that.$message.success('复制成功');
                clipboard.destroy();
            });
            clipboard.on('error', function () {
                that.$message.error('复制失败');
            });
            },
        }
}
</script>

<style lang='less' scoped>
    .contact{
        z-index: 9;
        position:fixed;
        bottom: 0px;
        width: 100vw;
        border-radius: 10px;
        // height: 150px;
        background-color: rgb(235, 230, 230);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        div:nth-child(1){
            border-bottom: 1px solid rgb(201, 188, 188);
            // border-radius: 10px;
        }
        p{
            display: inline-block;
            padding: 10px;
            // margin-right: 20px;
        }
        /* From cssbuttons.io */
        .button {
        display: inline-block;
        padding: 6px 12px;
        border: 1px solid #4f4f4f;
        border-radius: 30px;
        transition: all 0.2s ease-in;
        position: relative;
        overflow: hidden;
        // font-size: 19px;
        color: black;
        z-index: 1;
        }

        .button:before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scaleY(1) scaleX(1.25);
        top: 100%;
        width: 140%;
        height: 180%;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 50%;
        display: block;
        transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
        z-index: -1;
        }

        .button:after {
        content: "";
        position: absolute;
        left: 55%;
        transform: translateX(-50%) scaleY(1) scaleX(1.45);
        top: 180%;
        width: 160%;
        height: 190%;
        background-color: #39bda7;
        border-radius: 50%;
        display: block;
        transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
        z-index: -1;
        }

        .button:hover {
        color: #ffffff;
        border: 1px solid #39bda7;
        }

        .button:hover:before {
        top: -35%;
        background-color: #39bda7;
        transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
        }

        .button:hover:after {
        top: -45%;
        background-color: #39bda7;
        transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
        }
    }
</style>