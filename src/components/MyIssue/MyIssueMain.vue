<template>
  <div class="outer" >
    <div class="tab">
      <button class="back" @click='back'>返回</button>
      我的动态
    </div>

    <div class="top">
      <div class="userInfo">
        <div class="headPic">
          <img :src="'http://47.96.119.233:8080/'+ this.userInfo.headImg" alt="">
        </div>
        <div class="line"></div>
        <div class="else">
          <div class="name">{{this.userName}}</div>
          <div class="introduce">{{this.userIntroduce}}</div>
        </div>

      </div>
    </div>

    <div class="bottom">
      <div class="bottomTab">已发布 ▼</div>
      <div class="bottonMain">
        <MyIssueEmpty v-if="isEmpty"></MyIssueEmpty>

        <!-- 单条动态 -->
        <div class="state" v-for='item in userIssue' :key='item.id'>
          <!-- 单条顶部 -->
          <div class="stateTop">
            <span class="time">{{getTimem(item.releasetime)}}</span>
            <img src="../../assets/imgs/trash-alt.png" alt="" class="deleteIcon" @click='deleteThis(item.id)'>
          </div>

          <!-- 主要内容部分 -->
          <div class="stateMain"  @click.prevent='detailInfo(item.id)'>
            <div class="stateInner">
              {{item.descriptiontext}} </div>
            <div class="stateImg">
              <img v-if='item.img==""' src="../../assets/imgs/nofindPic.png" alt="">
              <img :src="'http://47.96.119.233:8080/'+item.img" alt="">
            </div>
            <span class="stateTag">{{item.tag}}</span>
          </div>

          <br>

          <!-- 转评赞部分 -->
          <div class="zpz" @click.prevent='detailInfo(item.id)'>
            <div class="share">
              <img src="../../assets/imgs/share.png" alt="" class="shareIcon">
              <div>分享</div>
            </div>
            <div class="commend">
              <img src="../../assets/imgs/commend.png" alt="" class="commendIcon">
              <div>{{item.comments.length}}</div>
            </div>
            <div class="pick">
              <img src="../../assets/imgs/pick.png" alt="" class="pickIcon">
              <div>{{item.likes}}</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div v-if="!isEmpty" class="notice">没有了！快去发动态吧~</div>
  </div>
</template>

<script>
  import MyIssueEmpty from '@/components/MyIssue/MyIssueEmpty.vue'
  import { Dialog } from 'vant'

  export default {
    name: "MyIssueMain",
    data() {
      return {
        isEmpty: false,
        userInfo: '',
        userName: '',
        userIntroduce: '',
        userIssue:''
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      getTimem(time){
        let Time=new Date(time)
        return Time.getFullYear()+'-'+(Time.getMonth()+1)+'-'+Time.getDate()
      },
      deleteThis(id){
        console.log(id);
        Dialog.confirm({
          title: '',
          message: '确认删除这条动态？'
        }).then(() => {
          this.$axios.post('/back/deleteDynamic?id='+id).then(res=>{
            console.log(res);
            this.$axios.post('/back/loadDynamicByuserID').then(res=>{
              console.log('res',res);
              this.userIssue=res.data
              console.log('userIssue',this.userIssue);
              if(res.data==0){
                this.isEmpty=true
              }
            })
          })
        }).catch({

        })
        
      },
      detailInfo(id){
        console.log(id);
        let data={
          id:id,
          index:-1
        }
        this.$store.commit('activedId',data)
        this.$router.push('/Info')
        // this.$store.commit('saveUserMsg',this.data)
      },
    },
    components: {
      MyIssueEmpty
    },
    created() {
      this.userInfo = this.$store.state.userMsg
      console.log(this.userInfo);
      this.userName = this.userInfo.name
      this.userIntroduce = this.userInfo.introduction

      console.log(this.userInfo.id);

      this.$axios.post('/back/loadDynamicByuserID').then(res=>{
        console.log('res',res);
        this.userIssue=res.data
        this.userIssue.reverse()
        console.log('userIssue',this.userIssue);
        if(res.data==0){
          this.isEmpty=true
        }
      })
    }
  }
</script>

<style scoped>
  .tab {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    border-bottom: 2px solid #ddd;
    position: fixed;
    top: 0;
    background-color: #fff;
  }

  .back {
    position: fixed;
    left: 3%;
    font-size: 15px;
    color: rgb(255, 159, 159);
    background-color: #fff;
    height: 40px;
    border: none;
  }

  .top {
    width: 100%;
  }

  .headPic {
    display: inline-block;

    border-radius: 50px;
    height: 90px;
    width: 90px;
    overflow: hidden;
    border-bottom: 2px solid #ccc;
    margin-top: 59px;
    margin-left: 7%;
  }

  .line {
    display: inline-block;

    margin-top: 3%;
    width: 4px;
    margin-left: 5%;
    height: 90px;
    background-color: rgb(255, 192, 173);
    border-radius: 5px;
  }

  .headPic img {
    height: 90px;
  }

  .introduce {
    margin-left: 10%;
    margin-top: 5px;
    width: 70%;
    color: #bbb;
    font-size: 14px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .else {
    width: 200px;
    display: inline-block;
  }

  .name {
    margin-top: 15px;
    margin-left: 10%;
    font-size: 20px;
    color: rgb(250, 172, 149);
  }

  .bottom {
    margin-top: 5px;
    /* border-top: #ddd solid 2px; */
    border-radius: 30px 30px 0 0;
    box-shadow: 0px -5px 200px 40px rgb(243, 223, 223);
  }

  .bottomTab {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    /* border-bottom: 2px solid #ddd; */
    color: rgb(241, 163, 163);
  }

  .state {
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    margin-bottom: 15px;
    box-shadow: 0 2px 9px #ccc;
  }

  .stateTop {
    padding-top: 15px;
    margin-bottom: 15px;
  }

  .deleteIcon {
    margin-left: 70%;
    display:inline;
  }

  .stateMain {
    width: 90%;
    margin-left: 5%;
  }

  .stateInner {
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .stateImg {
    margin: 10px 0 10px 5%;
    width: 80%;
    height: 120px;
    overflow:hidden;
    /* box-shadow:0 0 30px 20px #000 inset; */
    box-shadow: 0 2px 20px #bbb; /*下边阴影*/
  }

  .stateImg img {
    /* height: 120px; */
    width: 100%;
  }

  .stateTag {
    border: 4px solid rgb(255, 233, 233);
    border-radius: 8px;
    background-color: rgb(255, 233, 233);
    font-size: 15px;
  }

  .time {
    color: #ccc;
  }

  .zpz {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
  }

  .share,.commend,.pick{
    text-align:center;
  }

  .shareIcon,
  .commendIcon,
  .pickIcon,
  .deleteIcon {
    width: 22px;
  }

  .notice {
    margin-top: 20px;
    padding-bottom: 70px;
    color: rgb(241, 163, 163);
    text-align: center;
  }
</style>