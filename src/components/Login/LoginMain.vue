<template>
  <div class="root">
    <router-view></router-view>
    <br>
    <div class="bottom">
      <router-link to="/login/log" class="toLog">去登录</router-link>
      <router-link to="/login/register" class="toRegister">新用户注册</router-link>
    </div>

    <br>
    <!-- <button @click="back">回去</button> -->
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    login(){
      
    },
    register(){

    }
  },
  components:{
  }
}
</script>

<style scoped>
.bottom{
  text-align:center;
  width:60%;
  margin-left:20%;

}

.toLog,.toRegister{
  font-size:14px;
  color:#DF8F82;
}

.toLog{
  margin-right:10%;

}

.toRegister{
  padding-left:10%;
  border-left:2px solid #DF8F82;
}
</style>