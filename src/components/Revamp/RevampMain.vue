<template>
  <div>
    <!-- 导航 -->
    <div class="top">
      <button class="cancel" @click="back">取消</button>
      编辑资料
      <button class="finish" @click="finish">完成</button>
    </div>

    <!-- 换头像 -->
    <div class="photoChange">
      <div class="photoContainner" @click="$refs.file.click()" :style="[{'background-image':`url(${this.userImg})`},{'background-position':'center'},{  'background-repeat':'no-repeat'},{
  'background-size':'cover'}]">
        <img src="@/assets/imgs/photo.png" class="photo">
        <input type="file" hidden ref="file" class="inputPhoto" @change="getNewImg">
      </div>
      <div class="photoChangeText">点击更换头像</div>
    </div>

    <!-- 改其他 -->
    <div class="others">
      <div class="aLine" v-for="(item,i) in infomations" :key="i">
        <div class="discriptionText">{{item}}</div>
        <input type="text" v-model="values[i]" @change='valueChanged'>
      </div>
    </div>

    <!-- 底部 -->
    <div class="bottom">
      完善资料有助于让大家更了解你
    </div>
    <button class="revampPsw" @click="revampPsw">修改密码</button>
    <button class="quit" @click="quit">退出登录</button>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export  default {
  name:"RevampMain",
  data(){
    return {
      infomations:["昵称","简介","QQ","手机"],
      values:["修改昵称","填写简介","填写QQ号","填写电话号码"],
      userImg:'',
      userMsg:'123',
      isChanged:false,
      newImg:'',
      myIssue:''
    }
  },
  methods:{
    // 返回
    back(){
      console.log(this.isChanged);
      if(this.isChanged){
        Dialog.confirm({
          title:'',
          message:'有未保存的内容，是否保存?',
        }).then(()=>{
          this.finish()
          this.$router.go(-1)
        }).catch(()=>{
          this.$router.go(-1)
        })
      }else{
        this.$router.go(-1)
      }
      
    },
    // 保存
    finish(){
      if(this.isChanged==false)
      return
      // console.log(this.newImg);
      let data={
        id:this.userMsg.id,
        password:this.userMsg.password,
        name:this.values[0],
        introduction:this.values[1],
        qqnum:this.values[2],
        telnum:this.values[3],
        headImg:this.userImg
      }

      this.$axios.post('/back/userAlter',data).then(
        (res)=>{
          console.log(res);
          if(res.status==200){
            this.$store.commit('saveUserMsg',data)
          }
        }
      )
      let formData=new FormData()
      formData.append('file',this.newImg)
      if(this.newImg){
        this.$axios.post('/back/headImgload',formData).then((res)=>{
          console.log(res);
          this.$axios.get('/back/userindex').then(res=>{
            console.log('新信息',res);
            this.$store.commit('saveUserMsg',res.data)
          })
        })
      }

      this.isChanged = false
      this.$toast('保存成功！')
    },
    // 退出登录
    quit(){
      Dialog.confirm({
        title: '',
        message: '确认退出？'
      }).then(() => {
        this.$axios.get('/back/logout?id='+this.userMsg.id).then((res)=>{
          console.log(res);
        })
        // confirm("退出了!")
        this.$router.push("/login")
      }).catch({

      })


      // this.$axios.get('/back/logout?id='+this.userMsg.id).then(
      //   (res)=>{
      //     console.log(res);
      //   }
      // )
      // // confirm("退出了!")
      // this.$router.push("/login")
    },
    // 数据改变
    valueChanged(){
      this.isChanged = true
    },
    revampPsw(){
      this.$router.push('/resetpsw')
    },
    getNewImg(e){
      // this.newImg = this.$refs.file.files[0]
      // console.log(this.newImg);

      let that = this;
      let files = e.target.files[0];
      if (!e || !window.FileReader) return; 

      let reader = new FileReader();
      reader.readAsDataURL(files);

      reader.onloadend = function () {
        that.userImg = this.result;
      }

      this.newImg = e.target.files[0]
      console.log(this.newImg);

      this.isChanged = true
      console.log(this.isChanged);
    }
  },
  computed:{
  },
  mounted(){

  },
  created(){
    this.userMsg = this.$store.state.userMsg
    let getMsg =  [this.userMsg.name,this.userMsg.introduction,this.userMsg.qqnum,this.userMsg.telnum]

    for(let i = 0;i<4;i++){
      if(getMsg[i]!=null)
      this.values[i] = getMsg[i]
    }

    this.userImg ='http://47.96.119.233:8080/'+ this.userMsg.headImg
    console.log(this.userMsg.headImg);

    // /loadDynamicByuserID

   
  }
}
</script>

<style scoped>
.cancel,.finish{
  border:none;
  background-color:#fff;
  position:fixed;
  font-size:17px;
  height:40px;
}

.cancel{
  left:20px;
}

.finish{
  right:20px;
  color:#FDB37F;
}

.top{
  position:fixed;
  top:0;
  height:50px;
  width:100%;
  font-size:20px;
  line-height:50px;
  text-align:center;
  border-bottom:2px solid #ddd;
  background-color:#fff;
  z-index:999;
}

.photoChange{
  height:130px;
  border-bottom:2px solid #ddd;
  text-align:center;
  background-color:#F5F4F4;
  padding-top:3%;
}
.photoContainner{
  margin-left:50%;
  border-radius:50%;
  width:100px;
  height:100px;
  text-align:center;
  line-height:100px;
  background-image:url('../../assets/imgs/20220303145609.png');
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  transform:translateX(-50px)
}

.photo{
  width:50px;
  height:50px;
  margin-top:23px;
  opacity:0.7;
}
.photoChangeText{
  text-align:center;
  height:17px;
  line-height:17px;
  color:#FFB795;
  margin-top:7px
}

.others{
  border-bottom:2px solid #ddd;
  padding-bottom:7%;
}

.aLine{
  line-height:50px;
  padding-left:5%;
  padding-right:5%;
  background-color:#fff;
}

.discriptionText{
  display:inline-block;
  margin-left:3%;
  width:20%;
  font-size:17px;
}

input{
  border:none;
  border-bottom:2px #ddd solid;
  height:50px;
  text-align:center;
  width:74%;
  color:#BDBDBD;
}

.bottom{
  padding-top:3%;
  text-align:center;
  font-size:14px;
}

.revampPsw,.quit{
  color:#FF9595;
  margin-top:40px;
  border:none;
  background-color:#fff
}

.revampPsw{
  margin-left:26%;
}

.quit{
  margin-right:26%;
  margin-left:5%
}
</style>