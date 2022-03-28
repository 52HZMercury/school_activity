<template>
    <div>
      <div class='top'>
        <button @click='back'>返回</button>
      </div>
      <div class='resetText'>更改密码<img src='../../assets/imgs/1646460564375.png'></div>
      <input type='password' v-model='newPsw' placeholder='请输入新密码'>
      <input type='password' v-model='surePsw' placeholder='请确认密码'>
      <!-- <input > -->
      <button class='sure' @click='sure'>确认修改</button>
    </div>
</template>

<script>
export default {
  name:"ResetPsw",
  data(){
    return{
      newPsw:'',
      surePsw:'',
      userMsg:''
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    sure(){
      if(this.newPsw==''||this.surePsw==''){
        alert('密码不能为空')
      }else if(this.newPsw!==this.surePsw){
        alert('两次密码不一样！')
      }else{
        let data = {
          password:this.surePsw,
          id:this.userMsg.id
        }
        this.$axios.post('/back/userPasswordAlter',data).then(
          res=>{
            console.log(res);
            if(res.status==200){
              this.userMsg.password = this.surePsw
              this.$store.commit('saveUserMsg',this.userMsg)
              alert('修改成功！请重新登录！')
              this.$router.push('/login')
            }
          }
        )
      }
    }
  },
  created(){
    this.userMsg = this.$store.state.userMsg
    console.log(this.userMsg);
  }

}
</script>

<style scoped>

.top{
  height:45px;
  line-height:45px;
  border-bottom:2px solid #ddd;
}

.top button{
  height:100%;
  width:20%;
  font-size:17px;
  color:#FF8C8C;
  background-color:#fff;
  border:none
}

img{
  height:40px
}

.resetText{
  padding-left:35%;
  margin-top:5%;
  font-size:25px;
}

input{
  height:50px;
  width:80%;
  margin-left:10%;
  margin-top:7%;
  border:2px solid #ddd;
  text-align:center;
  font-size:18px;
  border-radius:5px;
}

/deep/ input::-webkit-input-placeholder {
    color: #B9B9B9;
}
/deep/ input::-moz-input-placeholder {
    color: #B9B9B9;
}
/deep/ input::-ms-input-placeholder {
    color: #B9B9B9;
}

.sure{
  height:60px;
  width:82%;
  margin-left:10%;
  margin-top:5%;
  border:none;
  background-color:#FFACAC;
  font-size:20px;
  color:#fff;
  border-radius:5px;
}
</style>