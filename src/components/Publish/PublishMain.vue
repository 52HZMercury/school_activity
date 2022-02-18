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
          <input type="file" class="inputImg" @change="getFile($event)">
          
        </div>
       <img class = "imgChoosed" :src="src" @click="changeImg">
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
  </div>
</template>

<script>

export default {
  name: 'PublishMain',  
  data() {
    return {
      src:"",
      btntext: ["#校园卡", "#钥匙", "#练习册", "#书包"],
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
      
      let Data = {
        comments: [],
        descreptiontext: this.releasetext,
        id: "",
        img: this.file.name,
        invisible: this.hide,
        likes: 0,
        realeasetime: "",
        tag: this.settag,
        user: this.users,
      }

      console.log(Data);
      
      let formData = new FormData();
      formData.append("file", this.file); 
      console.log(this.file);
      console.log(formData);


        this.$axios.post("/back/add",Data).then((res)=>{
          console.log(res);
          if(res.status!== 200){
            alert("发表动态失败")
          }
        })
        this.$axios.post("/back/fileload",formData).then(function(res){
              console.log(res);
        })
        
    },
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
  background-color: rgb(236, 236, 236);
  height: 200px;
  margin: 20px 20px 5% 5%;
  padding: 5%;
}
.texts {
  color: gray;
  background-color: rgb(236, 236, 236);
}
.photo-count {
  color: gray;
}

.info-containner {
  background-color: rgb(236, 236, 236);
  margin: 20px 20px 5% 5%;
  height: 200px;
  padding: 5%;
}

.self-set {
  color: gray;
}
.tagbtn {
  margin-left: 2%;
}
.tag {
  background-color: rgb(236, 236, 236);
}
.ifHide {
  vertical-align: middle;
}

.imgOut {
  height: 70px;
  width: 80%;
  padding: 5%;
  background-color: rgb(247, 247, 247);
  color: rgb(180, 180, 180);
  text-align: center;
  display:table-cell;
}
.inputImg {
  opacity: 0;
}

.imgChoosed{
  height:150px
}

.logo {
  height: 50px;
}
</style>