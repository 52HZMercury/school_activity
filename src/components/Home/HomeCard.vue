<template>
  <div>
    <div class="HomeTop">
      <img src="../../assets/imgs/homeImg.png" alt="HomeTop">
      <h2>易班信息平台</h2>
    </div>

    <div class="search">
      <input v-model="input" placeholder="请输入内容" class="search-input">
      <hr>
    </div>
    <ul>
      <!--    测试用的数据-->
      <li class="home-card" v-for="i in testDatas">
        <!--    左边-->
        <span class="left">
        <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
      </span>
        <!--    右边-->
        <span class="right">
        <div class="username">{{i.username}} </div>
        <div class="time">{{i.time}}</div>
        <div class="tag">#{{i.tag}}#</div>
        <div class="text">{{i.text}}</div>
        <div class="text-imgs">
           <img src="https://img1.baidu.com/it/u=2690253838,1695238456&fm=26&fmt=auto" alt="图片信息">
        </div>
          <!--      地点-->
        <div class="position">{{i.position}}</div>
          <!--      操作-->
        <div class="options">
          <div class="share" @click="share">
            <img src="../../assets/imgs/share.png" alt="分享">
            <span>分享</span>
          </div>
          <div class="commend">
            <img src="../../assets/imgs/commend.png" alt="评论">
            <span>{{i.commends.length}}</span>
          </div>
          <div class="pick" @click="pick(testDatas.indexOf(i),$event)">
            <img src="../../assets/imgs/picked.png" alt="点赞" v-show="i.flag">
            <img src="../../assets/imgs/pick.png" alt="点赞" v-show="!i.flag">
            <span>{{i.pickCnt}}</span>
          </div>
        </div>
          <!--      评论-->
        <div class="com-notice">共有{{i.commends.length}}条评论</div>
        <div class="commends">
<!--         只展示前三条-->
          <div class="commend" v-for="j in i.commends" v-if="i.commends.indexOf(j) < 3">
            <span class="com-user">{{j.username}}:</span>
            <span class="com-text">{{j.text}}</span>
            <!--          <img src="../../assets/imgs/pick.png" alt="点赞">-->
          </div>
        </div>
      </span>
      </li>

      <!--    正式使用的数据-->
      <li class="home-card" v-for="j in filterCard">
        <!--    左边-->
        <span class="left">
        <img :src="j.user.img" alt="头像">
      </span>
        <!--    右边-->
        <span class="right">
        <div class="username">{{j.user.name}}</div>
        <div class="time">{{formatTime(j.time)}}</div>
        <div class="tag">#{{j.tag}}#</div>
        <div class="text">{{j.text}}</div>
        <div class="text-imgs">
           <img :src="j.img" alt="图片信息">
        </div>
          <!--      地点-->
          <!--        <div class="position">{{}}</div>-->
          <!--      操作-->
        <div class="options">
          <div class="share" @click="share">
            <img src="../../assets/imgs/share.png" alt="分享">
            <span>分享</span>
          </div>
          <div class="commend">
            <img src="../../assets/imgs/commend.png" alt="评论">
            <span>{{j.comments.length}}</span>
          </div>
          <div class="pick">
<!--            <img src="../../assets/imgs/picked.png" alt="点赞">-->
            <!--            <img src="../../assets/imgs/pick.png" alt="点赞" v-show="!i.flag">-->
            <!--            <span>{{j.like}}</span>-->
          </div>
        </div>
          <!--      评论-->
        <div class="com-notice">共有{{j.comments.length}}条评论</div>
        <div class="commends">
<!--         只展示前三条-->
          <div class="commend" v-for="k in j.comments" v-if="j.comments.indexOf(k) < 3">
            <span class="com-user">{{k.user.name}}:</span>
            <span class="com-text">{{k.commentText}}</span>
            <!--                      <img src="../../assets/imgs/pick.png" alt="点赞">-->
          </div>
        </div>
      </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  data () {
    return {
      input: '',
      data:[],
      testDatas:[
        { username:'张三',
          time:'2021-10-11',
          tag:'失物招领',
          text:'思学楼a313哪位老兄的痔疮膏',
          position:'西南石油大学',
          img:'https://img1.baidu.com/it/u=2690253838,1695238456&fm=26&fmt=auto',
          pickCnt:0,
          flag: false,
          commends:[
            {
              username:'李子明',
              text:'哈哈哈哈哈'
            },
            {
              username:'张三',
              text:'牛逼，哈哈哈哈哈哈哈'
            },
            {
              username:'李四',
              text: '你是真滴厉害啊'
            },
            {
              username:'陈宁',
              text:'这不是我的痔疮膏吗'
            }
          ]
        }
      ]
    }
  },
  methods:{
    pick (index, event) {
      if(!this.testDatas[index].flag)
        this.testDatas[index].pickCnt ++
      else
        this.testDatas[index].pickCnt --
      this.testDatas[index].flag = !this.testDatas[index].flag
    },
    share () {
      alert('测试')
    },
    formatTime(timeStamp)
    {
      let time = new Date(timeStamp),
          y = time.getFullYear(),
          m = time.getMonth()+1,
          d = time.getDate(),
          h = time.getHours(),
          mm = time.getMinutes(),
          s = time.getSeconds()
      return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s
    }
  },
  mounted() {
    this.$axios.get('/index').then((res) => {
      for(let i of res.data) {
        console.log(i)
        this.data.push(i)
      }
    }).catch((err) => {
      console.warn(err)
    })
  },
  computed: {
    filterCard() {
      const {input, data} = this
      let filterData = [...data]

      if(input.trim()) {
        filterData = this.data.filter((i) => {
          return (i.tag.indexOf(input) !== -1)
              || (i.user.name.indexOf(input) !== -1)
              || (i.text.indexOf(input) !== -1)
        })
      }
      return filterData
    }
  }
}
</script>

<style scoped>
/*一级*/
 .home-card{
   display: flex;
   font-family: '正楷';
   border: 1px #e3e3e3 solid;
   border-radius: 8px;
   margin: 10px 2px 0 2px;

 }
  .HomeTop{
    width: 100%;
    /*background-color: red;*/
  }
  .HomeTop>img{
    width: 100%;
  }
  .search{
    position: sticky;
    top: 0;
    background:linear-gradient(45deg,#fff0f1 45%,#ffe1d1);
    border-radius: 0 0 10px 10px;
  }
 /*二级*/
.search-input{
  width: 90%;
  height: 2rem;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem;
  border: rgba(82, 82, 82, 0.5);
  border-radius: 10px;
}
 .left{
   width: 3rem;
   text-align: left;
   margin: 5px;
 }
 .right{
   flex-grow: 4;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin: 5px 0 0 0;
 }
 /*三级*/
 .left img{
   display: inline-block;
   height: 2.5rem;
   width: 2.5rem;
   border: 2px solid #e3e3e3;
   border-radius: 5rem;
 }
 .right .text-imgs{
   display: flex;
   flex-wrap: wrap;
 }
 .username, .text, .tag{
   font-weight: 600;
 }
 .time{
   font-size: 14px;
   color: #999;
 }
 .tag{
   color: #f38800;
   margin: 3px 0 3px 0;
 }
 .position{
   font-size: 14px;
   margin: 5px 0 5px 0;
   color: #f38800;
 }
 .options{
   height: 1.5rem;
   /*background-color: red;*/
   display: flex;
 }
 .com-notice{
   margin: 5px 0 5px 0;
   font-size: 12px;
   color: #333;
 }
/* 四级*/
.text-imgs img{
  max-width: 80%;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
}
.share, .commend, .pick{
  font-size: 14px;
}
.share *, .commend *, .pick *{
  height: 100%;
  vertical-align: middle;
}
.share{
  flex-grow: 6;
}
.commend, .pick{
  flex-grow: 1;
}
.com-user{
  color: #f38800;
  margin: 0 2px 0 2px;
}

</style>