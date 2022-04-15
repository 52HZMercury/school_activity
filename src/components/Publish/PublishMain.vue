<template>
  <div>
    <van-nav-bar title="发布动态" left-arrow @click-left="onClickLeft" />
    <img
      class="headpic"
      width="90%"
      src="../../assets\imgs\advertisement.jpg"
      alt=""
    />
    <div class="photo-containner">
      <div>
        <van-field
          class="texts"
          v-model="releasetext"
          placeholder="记录这一刻，去寻找懂你的人"
        />
        <hr />
      </div>
      
      <!-- 上传图片+即时预览 -->
        <div class="imgOut" v-show = "this.file==''">
          <van-icon class="logo" name="photo-o" size="40" />
          <br />
          点击上传图片
          <input type="file" class="inputImg" @change="getFile($event)" accept=".jpg,.png,.jepg">
          
        </div>
       <img class = "imgChoosed" :src="src" @click="changeImg">
    </div>

        <!-- 大Tag -->
    <div class="sellTagChoose">
      <div>
        <van-icon name="chat" color="#ffcba5" />
        <span>二手交易需完善商品信息~</span>
        <van-icon name="arrow" />
      </div>

      <hr />

      <div class="tagChoose">
        <!-- <van-button
          class="tagbtn"
          round
          color="#ffd7db"
          type="primary"
          size="small"
          @click="tagChoose(item)"
          v-for="(item, i) in mainTag"
          :key="i"
          >{{ item }}</van-button
        > -->

        <button @click="mainTagChoosed" class="sellStyle" >立即交易</button>
      </div>
    </div>


    <!-- 话题（选择+自定义） -->
    <div class="info-containner">
      <div>
        <van-icon name="chat" color="#ffcba5" />
        <span>选择话题</span>
        <van-icon name="arrow" />
      </div>

      <hr />

      <div class="tagChoose">
        <van-button
          class="tagbtn"
          round
          color="#ffd7db"
          type="primary"
          size="small"
          @click="tagChoose(item)"
          v-for="(item, i) in btntext"
          :key="i"
          >{{ item }}</van-button
        >
      </div>

      <div class="self-set">
        <van-field
          class="tag"
          label="发布话题"
          v-model="settag"
          placeholder="点击输入自定义话题"
          autosize
          @blur="tagSetting"
          @focus="tagClear"
        />
      </div>

      <div class="isHide">
        <van-icon name="browsing-history" color="#ffcba5" />
        <span class="ifHide">是否开启隐身小助手</span>
        <van-switch class="ifHide" v-model="hide" active-color="#FFD7DB" />
      </div>
    </div>

    <van-button
      class="releasebtn"
      color="linear-gradient(to right, #ffbab0, #ffd7db)"
      block
      round
      @click="release"
    >
      发布
    </van-button>

<!-- 暂时用来跳转 记得删掉 -->
    <van-button
      class="releasebtn"
      color="linear-gradient(to right, #ffbab0, #ffd7db)"
      block
      round
      @click="jump"
    >
      跳转
    </van-button>
    <!-- <van-button
      class="releasebtn"
      color="linear-gradient(to right, #ffbab0, #ffd7db)"
      block
      round
      @click="jumpToLogin"
    >
      跳转到登录
    </van-button>

     <van-button
      class="releasebtn"
      color="linear-gradient(to right, #ffbab0, #ffd7db)"
      block
      round
      @click="jumpToResetPsw"
    >
      跳转到修改密码
    </van-button> -->

  
    
  </div>
</template>

<script>

export default {
  name: 'PublishMain',  
  data() {
    return {
      src:"",
      btntext: ["#求助咨询", "#失物招领", "#随便聊聊"],
      releasetext: "", //发布内容正文
      hide: true, //是否隐身
      settag: "", //话题
      fileList: [],
      users: {
        headImg: "",
        id: 123,
        name: "",
        password: "",
      },
      isSuccess:true,

      // 图片文件
      file: "",
    };
  },
  components: {

  },
  methods: {
    deleteImg() {
      this.photoCount = this.fileList.length;
    },
    afterRead() {
      this.photoCount = this.fileList.length;
    },

    // 返回
    onClickLeft() {
        this.$router.go(-1)
    },

    mainTagChoosed(){
      this.settag = '#二手闲置'
      this.$router.push({name:'secondHandChoice'})
    },

    // 选择tag
    tagChoose(item) {
      this.settag = item;
    },
    tagSetting() {
      this.settag = "#" + this.settag;
      console.log(this.settag);
    },
    tagClear() {
      this.settag = "";
    },

    // 显示图片
    getFile(e) {
      let that = this;//改变this指向
      let files = e.target.files[0];//图片文件名
      // console.log(e.target.files);
      if (!e || !window.FileReader) return; // 看是否支持FileReader
      let reader = new FileReader();
      reader.readAsDataURL(files); // 转换
      reader.onloadend = function () {
        that.src = this.result;//赋值
      }
      this.file = e.target.files[0]
      console.log(this.file);
    },

    // 更换图片
    changeImg(){
      this.file = ""
      this.src = ""
    },

    release() {
        this.users = this.$store.state.userMsg

        let Data = {
          comments: [],
          descriptiontext: this.releasetext,
          id: "",
          // img: this.file.name,
          img: '',
          invisible: this.hide,
          likes: 0,
          realeasetime: "",
          tag: this.settag,
          user: this.users,
        }

        console.log('这是Data', Data);

        let formData = new FormData();
        formData.append("file", this.file);

        console.log('这是file', this.file);
        console.log('这是formdata', formData);

        // this.$axios.get()

        this.$axios.post("/back/add", Data).then((res) => {
          console.log(res);
          if (res.status !== 200) {
            // alert("发表动态失败")
            this.isSuccess=false
          }
        })

        if(this.isSuccess){
          setTimeout(() => {
            this.$axios.post("/back/fileload", formData).then(function (res) {
              console.log(res);
              if (res.status!=200) {
                // alert('发布成功！')
                // this.$router.push('/home')
                this.isSuccess=false
              }
            })
          }, 500)
          this.isSuccess?this.$toast("发布成功！"):this.$toast('发布失败！请稍后重试！')
        }else{
          this.$toast('发布失败！请稍后重试！')
          console.log('第一个false了');
        }

        this.$router.push('/Home')
      },

  // 记得删！！！！
    jump(){
      this.$router.push('/revamp')
    },
    jumpToLogin(){
      this.$router.push('/login')
    },
    jumpToResetPsw(){
      this.$router.push('/resetpsw')
    }
  },
};
</script>

<style lang="less" scoped>
.headpic {
  margin: 5%;
  margin-bottom: 0;
}
.releasebtn {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 5%;
}

.photo-containner {
  background-color: #f5f4f4;
  height: 220px;
  margin: 20px 20px 5% 5%;
  padding: 5%;
}
.texts {
  color: gray;
  background-color: #f5f4f4;
}
.photo-count {
  color: gray;
}

.info-containner {
  background-color: #f5f4f4;
  margin: 20px 20px 5% 5%;
  height: 160px;
  padding: 5%;
}

.sellTagChoose {
  // background-color: rgb(236, 236, 236);
  margin: 20px 20px 5% 5%;
  height: 110px;
  padding: 5%;
  text-align:center;
}

.sellStyle{
  width:85px;
  height:85px;
  border-radius:50%;
  color:white;
  background:linear-gradient(150deg,#FCEBEB, #FFC8CE,  #FFECD6);
  font-size:18px;
  margin:1%;
  border:none;
  border-bottom:2px solid #DAB6B6;
  padding:2px;

}

.self-set {
  color: gray;
}
.tagbtn {
  margin-left: 2%;
  border-bottom:2px solid #DBAAAA;
}
.tag {
  background-color: #f5f4f4;
}
.ifHide {
  vertical-align: middle;
  font-size:17px;
  margin-left:10px;
}

.imgOut {
  height: 90px;
  width: 80%;
  margin-left:10%;
  padding-top:15px;
  padding-bottom:20px;
  background-color: #FFFFFF;
  color: rgb(180, 180, 180);
  text-align: center;
  display:table-cell;
  border-radius:15px;
}

.inputImg {
  opacity: 0;
  width:100%;
}

.imgChoosed{
  height:150px
}

.logo {
  height: 50px;
  margin-top:5%;
}
</style>