<template>
  <div class="wrapper">
    <!-- 第一排 用户个人信息-->
      <div class="user-info">
        <div class="head-img">
          <img src="../../assets/imgs/logo.png" alt="">
          <div class="name-and-pos">
            <div class="name">张三</div>
            <div class="pos">西南石油大学成都校区</div>
          </div>
        </div>
        <div class="set-icon">
          <img src="../../assets/imgs/set.png" alt="设置">
        </div>
      </div>
    <!-- 第二排 用户的一些属性 -->
    <div class="user-attributes">
      <div>
        <div>1</div>
        <div>关注</div>
      </div>
      <span class="line"></span>
      <div>
        <div>233</div>
        <div>粉丝</div>
      </div>
      <span class="line"></span>
      <div>
        <div>1</div>
        <div>榜单</div>
      </div>
      <span class="line"></span>
      <div>
        <div>666</div>
        <div>热度</div>
      </div>
    </div>
  <!--  第三排，我的校园部分 -->
    <div class="my-school">
      <div class="title">我的校园</div>
      <div class="items">

        <div class="item" v-for="i in mySchool" :key="i.name">
          <div class="item-img">
            <img :src="require('../../assets/imgs/' + i.img)" :alt="i.name">
          </div>
          <div>{{i.name}}</div>
        </div>

      </div>
    </div>

  <!-- 第四排 -->
    <ul class="options">
      <li v-for="i in options" :key="i.name">
        <img :src="require('../../assets/imgs/' + i.img)" :alt="i.name">
        <div>{{i.name}}</div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name:'PersonalDetail',
    components:{},
    props:{},
    data(){
      return {
          // 我的校园 这一板块内的几个功能
          mySchool: [
            {name: '我的动态', img: '我的动态.png'},
            {name: '校园榜单', img: '校园榜单.png'},
            {name: '与我互动', img: 'pick.png'},
            {name: '我的社交', img: '我的闲置.png'},
            {name: '我的购物', img: '购物车.png'}
          ],
          // 下面的选项
          options: [
            {name: '联系我们', img: '联系我们.png', clickEvent: null},
            {name: '用户协议&隐私说明', img: '用户协议.png', clickEvent: null},
            {name: '切换校区', img: '切换校区.png', clickEvent: null},
            {name: '修改个人资料', img: 'share.png', clickEvent: null},
            {name: '注销', img: '离开.png', clickEvent: null}
          ]
      }
    },
    created(){},
    mounted(){},
    activated(){},
    updated(){},
    methods:{
      // 考虑到未来可能还会做进一步的模块化，所以这里按照板块顺序进行一个区分
      // 我的校园 板块内容写在这下面

      // 选项 板块内容写在这下面
      logout: function () {
        
      }
    },
    computed:{},
    watch:{},
  }
</script>
<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #515151;
}
.user-info {
  position: relative;
  width: 100%;
  height: 8vh;
  background-color: #eee;
  display: flex;
  padding: 2vh;
}
.head-img {
  line-height: 8vh;  
  display: flex;
}
.head-img .name-and-pos {
  line-height: 4vh;
}
.head-img .name {
  font-size: 1.3rem;
  font-weight: 700;
}
.head-img .pos {
  color: #777;
}
.head-img img {
  height: 100%;
  border: 1px solid #000;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.set-icon {
  position: absolute;
  width: 2rem;
  height: 2rem;
  border: 1px solid #333;
  border-radius: 50%;
  right: 3rem;
  top: 50%;
  transform: translateY(-50%);
}
.set-icon img {
  width: 100%;
}
.user-attributes {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  height: 10vh;
  width: 96%;
  border-radius: 1rem;
  background-color: #eee;
}
.user-attributes>div {
  line-height: 5vh;
  text-align: center;
}
.user-attributes>div div:first-child {
  font-size: 1.2rem;
  font-weight: 700;
}
.user-attributes .line {
  height: 8vh;
  margin-top: 1vh;
  width: 1px;
  background-color: #ccc;
}

.my-school {
  width: 100%;
  /* height: 25vh; */
  background-color: #eee;
  width: 96%;
  border-radius: 1rem;
  margin: 1rem auto 0;
  /* display: flex; */
  padding-bottom: 10px;
}

.my-school .title {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.5rem;
}

.items {
  display: flex;
  justify-content: space-around flex-start;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
  height: 40%;
  /* background-color: red; */
}

.item {
  flex-grow: 1;
  min-width: 24vw;
  max-width: 24vw;
  text-align: center;
}

.item .item-img {
  margin: 0 auto;
  width: 40%;
  text-align: center;
}

.item .item-img img {
  width: 100%;
}

ul {
  padding: 0;
  margin: 0;
}

.options {
  margin: 2vh auto 0;
  width: 96%;
  border-radius: 1rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
}
.options li {
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;  
}
.options li:not(:last-child) {
  border-bottom: 1px solid #4445;
}

.options li img {
  height: 5vh;
  margin: 0 1rem 0 0;
  vertical-align: middle;
}
.options li div {
  vertical-align: middle;
  line-height: 5vh;
}

</style>