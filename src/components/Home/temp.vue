<template>
  <div class="home-card">
    <div class="info">
      <!--        头像-->
      <span class="user-pic">
          <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="头像">
        </span>
      <!--        姓名 时间等-->
      <span class="user-info">
          <h4>匿名小可爱</h4>
          <div style="color: #aaa">2020-12-11 4:56</div>
        </span>
    </div>

    <div class="contents">

      <!--    具体内容-->
      <div class="content">
        <div class="tag">标签：失物招领</div>
        <div class="text">思学楼A313哪位老兄的痔疮膏</div>
        <img src="https://img1.baidu.com/it/u=2690253838,1695238456&fm=26&fmt=auto" alt="有关物品的图片">
      </div>
      <!--    操作-->
      <div class="options">
        <div class="share">
          <img src="../../assets/imgs/share.png" alt="分享">
          <span>分享</span>
        </div>
        <div class="commend">
          <img src="../../assets/imgs/share.png" alt="分享">
          <span>分享</span>
        </div>
        <div class="pick">
          <img src="../../assets/imgs/share.png" alt="分享">
          <span>分享</span>
        </div>
      </div>
      <!--    评论区-->
      <div class="commend-area">
        <div class="commends">
          <div class="commend">
            <span>用户名：牛蛙牛蛙</span>
            <span>点赞</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  data () {
    return {
      testDatas:[
        {}
      ]
    }
  }
}
</script>

<style scoped>
.home-card{
  display: flex;
  width: 100%;
  min-height: 7rem;
  border: 1px #e3e3e3 solid;
  border-radius: 5px;
  margin: 3px;
}
.info{
  display: flex;
  justify-content: left;
}
.user-pic{
  display: inline-block;
  height: 100%;
}
.user-pic>img{
  height: 3rem;
  width: 3rem;
  border: 5px solid #e3e3e3;
  border-radius: 5rem;
}
.user-info{
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
.content{
  margin-left: 4.5rem;
  text-align: left;
}
.content img{
  width: 60%;
  border-radius: 5px;
}
/*button{*/
/*  display: inline-block;*/
/*  border:none;*/
/*  background-color: rgba(0,0,0,0);*/
/*  height: 30px;*/
/*}*/
.options{
  height: 1.5rem;
  background-color: red;
  display: flex;
}
.share, .commend, .pick,
.share *, .commend *, .pick *{
  height: 100%;
  vertical-align: middle;
}
.share{
  /*padding-left: 1rem;*/
  flex-grow: 4;
}
.commend, .pick{
  flex-grow: 1;
}
.options img{
  height: 100%;
}

</style>