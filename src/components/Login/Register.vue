<template>
  <div class="register">
    <img src="@/assets/imgs/1646460564375.png" class="registerLogo">
        <div class="inputs">
      <div class="userId">
        <input type="" v-model='username' name="userId" placeholder='请输入用户名'>
      </div>
      <div class="userPsw">
        <input type="password" v-model='userpsw' name="userPsw" placeholder='请输入密码'>
      </div>
      <div class="confirmPsw">
        <input type="password" v-model='pswconfirm' name="surePsw" placeholder='请确认密码'>
      </div>
    </div>
    <button class="go" @click='register'>注册</button>
    
  </div>
</template>

<script>
export default {
  name:"Register",
  data(){
    return {
      username:'',
      userpsw:'',
      pswconfirm:''
    }
  },
  components:{
    
  },
  methods:{
    register(){
      if(this.userpsw==''){
        alert('密码不能为空！')
      }else{
        if(this.userpsw != this.pswconfirm){
          alert("两次密码不同!")
        }else{
          this.$axios.post('/back/register?username='+this.username+'&password='+this.userpsw).then((res)=>{
            alert('你的id号为'+res.data)
            this.$store.commit('saveNewId',res.data)
            this.$router.push('/login')
          })
          // this.$axios.post('/back/register',data).then(
          //   (res)=>{
          //     console.log(res);
              
          //   }
          // )
        }        
      }

    }
  }
}
</script>

<style scoped>
.register{
  width:100%;
  text-align:center;
  margin-top:15%;
}

.registerLogo{
  width:140px;
  transform:scaleX(-1);
}

.inputs{
  width:70%;  
  margin-left:15%;
}

.userId,.userPsw,.confirmPsw{
  height:60px;
  border-radius:30px;;
}

.userPsw,.confirmPsw{
  margin-top:15px;
}

input{
  width:100%;
  height:100%;
  font-size:17px;
  background-color:#FFF6F6;
  border-radius:30px;
  color:#B9B9B9;
  border:none;
  border-bottom:2px #ddd solid;
  text-align:center;
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

.go{
  width:80px;
  height:80px;
  margin-top:40px;
  border-radius:50%;
  border:none;
  background:linear-gradient(150deg,#FDDEDE, #FDB8BF,  #FDE4C7);
  color:#fff;
  font-size:20px;
  line-height:80px;
  border-bottom:2px solid #DBAAAA;
  margin-bottom:45px;
}

</style>