<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="tips">
      <div class="tips-title">设置我的新头像</div>
      <div class="tips-text">如果您还没有设置自己的头像，系统会显示为默认头像，您需要自己上传一张新照片来作为自己的个人头像。</div>
      <div class="tips-text">上传成功后，请裁剪合适的头像确认保存后才能生效。</div>
    </div>

    <div class="upload-section">
      <div class="upload-left">
        <vueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :info="false"
          :fixed="true"
          :fixedNumber="[1,1]"
          :full="option.full"
          :centerBox="true"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :autoCrop="option.autoCrop"
          :fixedBox="option.fixedBox"
          @realTime="realTime"
        ></vueCropper> 
        <div class="selectImg">
          <el-button type="primary">选择图片</el-button>
          <input
            type="file"
            class="uploads"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            @change="uploadImg($event)"
          >
        </div>  
      </div>  
      <div class="upload-right">
        <div class="show-preview">
          <div :style="previews.div" class="preview">
            <img :src="previews.url" :style="previews.img" :onerror="defaultAvatar">
          </div>
          <div class="preview-tips">头像预览</div>
        </div>
        <div class="bottom-button">
          <el-button type="primary" @click.native="finish()">上传头像</el-button>
        </div>
      </div>
    </div>
  </div>
</template>   

<script>
import { VueCropper } from "vue-cropper";
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },

  components: {
    VueCropper
  },

  data() {
    return {
      headImg: "",
      //剪切图片上传
      crap: false,
      previews: {},
      defaultAvatar: `this.src='http://demo2.hsk.cc/upload/users/3/201908/09/201908091042259855.jpeg'`,
      option: {
        img: "",
        outputSize: 1, //剪切后的图片质量（0.1-1）
        full: false, //输出原图比例截图 props名full
        outputType: "png",
        canMove: true,
        original: false,
        canMoveBox: false,
        autoCrop: true,
        fixedBox: true
      },
      fileName: "", //本机文件地址
      downImg: "#",
      uploadImgRelaPath: "" //上传后的图片的地址（不带服务器域名）
    }
  },

  methods: {
    uploadImg(e) {
      var _this = this;
      //上传图片
      var file = e.target.files[0];
      _this.fileName = file.name;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        _this.option.img = data;
        console.log(data)
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },

    finish() {},

    // 实时预览函数 
    realTime(data) { 
      console.log(data)
      this.previews = data 
    }, 
  }
}
</script>

<style lang="stylus" scoped>
.section {
  margin-bottom 60px 
}

.tips {
  font-size 14px
  text-align left
  line-height 30px
  .tips-title {
    font-weight bold
  }
  .tips-text {
    color #444
  }
}

.upload-section {
  width 100%;
  min-height 300px;
  display flex
  padding-top 20px
  .upload-left {
    width 300px
    .vue-cropper {
      height 300px
    }
  }
  .upload-right {
    width 180px
    margin-left 20px
    display flex
    flex-direction column
    justify-content space-between
    .show-preview {
      .preview {
        overflow hidden
        width 180px !important
        height 180px !important
        background-color #f1f1f1
        img {
          min-width 180px !important
          min-height 180px !important
        }
      }
      .preview-tips {
        font-size 14px
        padding-top 10px
        color #000
        font-weight bold
      }
    }
  }
  .selectImg {
    margin-top 20px
    position relative
    .uploads {
      position absolute
      top 0
      left 101px
      height 40px
      width 98px
      opacity 0
    }
  }
}
</style>