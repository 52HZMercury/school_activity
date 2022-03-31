<template>
  <div class="log">
    <img src="@/assets/imgs/1646460564375.png" class="bigLogo">
    <div class="inputs">
      <div class="userId">
        <input type="" v-model="userid" name="userId" placeholder='账号密码登录'>
      </div>
      <div class="userPsw">
        <input type="password" v-model="userpsw" name="userPsw" placeholder='请输入密码'>
      </div>
    </div>
    <button class="go" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name:"Login",
  data(){
    return {
      userid:'',
      userpsw:'',
      data:{}
    }
  },
  components:{
    
  },
  methods:{

    login(){
      var reg = /^[1-9]\d*$/
      // alert(this.userid+this.userpsw)
      if(reg.test(this.userid)){
        this.$axios.get('/back/login?id='+this.userid+'&password='+this.userpsw).then(
          (res)=>{
            console.log(res);
            if(res.data == ''){
              alert('账号或密码有误！')
            }else{
              this.data = res.data
              this.$store.commit('saveUserMsg',this.data)
              this.$router.push({name:'HomeCardMain'})
            }
          }
        )
      }else{
        alert('用户账号应为纯数字！')
      }

    }
  },
  created(){
    this.$store.state.newId.id==0?this.userid='':this.userid=this.$store.state.newId.id
  }
}
</script>

<style scoped> 
.log{
  width:100%;
  text-align:center;
  margin-top:15%
}

.bigLogo{
  width:140px;
}

.inputs{
  width:70%;  
  margin-left:15%;
}

.userId,.userPsw{
  height:60px;
  border-radius:30px;
}

.userId{
}

.userPsw{
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
  width:90px;
  height:90px;
  margin-top:50px;
  border-radius:50%;
  border:none;
  background:linear-gradient(150deg,#FDDEDE, #FDB8BF,  #FDE4C7);
  color:#fff;
  font-size:20px;
  line-height:90px;
  border-bottom:2px solid #DBAAAA;
  margin-bottom:100px;
}
</style>