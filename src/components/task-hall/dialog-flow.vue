<template>
  <el-dialog
    title="下单流程"
    :visible.sync="showDialog"
    width="60%"
    :before-close="handleClose"
    >
    <div class="dialog-tips" align="left">
      <p class="text-red">1、注意！注意！注意！一定要按商家任务要求操作，例如货比、浏览副宝贝、页面停留、收藏、浏览到底、问大家等等；</p>
      <p class="text-red">2、建议任务审批通过后，主动加商家QQ，详细沟通了解后再操作，避免产生不必要的误解；</p>
      <p class="text-red">3、操作时把需要上传凭证的先截图保存好，再上传截图凭证； </p>
      <p class="text-red">4、付款后，倒计时结束之前请务必填写订单号，逾期未填写系统会自动取消任务资格，试客自行承担所有损失；</p>
      <p class="text-red">5、禁用使用淘宝客，返利网，一淘，优惠券，淘金币，花呗/信用卡(除指定外)等一切优惠或产生手续费方式下单，违者不返款！</p>
    </div>
    <div class="dialog-content">
      <el-form ref="form" :model="form" label-width="auto">
        <div class="title form-inline-title">
          请按下面步骤操作找到宝贝下单
        </div>
        <div class="step-content">
          <div class="cell">
            <div class="cell-title text-orange">第1步：	</div>
            <div class="cell-value">
              手机上打开淘宝APP输入关键词： 超细纤维毛巾，点击搜索图标
              <div style="margin: 20px 0">
                <img src="http://demo2.hsk.cc/style/images/search/mobile_search_pic_1.png" alt="" width="500">
              </div>
              <el-form-item label="关键词搜索后的结果页面截图上传：" prop="" style="padding: 0">
                <el-row :gutter="23">
                  <el-col :span="10">
                    <img :src="dialogImageUrl" alt="">
                    <el-upload
                      class="upload-demo"
                      action="string"
                      :http-request="upload"
                      :show-file-list="false"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </el-col>            
                </el-row>
              </el-form-item>
            </div>
          </div>

          <div class="cell">
            <div class="cell-title text-orange">第2步：	</div>
            <div class="cell-value">
              找到商家的宝贝如下图，如果商家要求货比（就先货比），再点击进入按商家要求完成下单即可
              <div class="flex">
                <img src="http://gd4.alicdn.com/imgextra/i1/1104468689/TB2mGOcIruWBuNjSszgXXb8jVXa_!!1104468689.jpg_400x400.jpg" alt="" width="300">
                <div>
                  <p class="text-red">【请一定要核实商家、商品、价格正确才下单】</p>
                  <p>掌柜/店铺名： 唯爱****贝w</p>
                  <p>下单总价(含邮费)： ¥19.80 元</p>
                </div>
              </div>
            </div>
          </div>

          <div class="cell">
            <div class="cell-title text-orange">第3步：	</div>
            <div class="cell-value">
              填写该店铺名称到下框验证是否正确，避免找错店铺（如果你确定正确也可忽略此步） 
              <el-form-item label=" " prop="" style="padding: 0">
                <el-row :gutter="23" style="marginLeft: -246px">
                  <el-col :span="20">
                    <el-input></el-input>
                  </el-col>

                  <el-col :span="3">
                    <el-button type="danger">验证</el-button>
                  </el-col>

                  
                </el-row>
              </el-form-item>
            </div>
          </div>
          
        </div>

        <!---->
        <div class="title form-inline-title">
          商家任务要求 （请按要求完成，并上传截图）
        </div>
        <div class="step-content" style="marginBottom: 15px">
          <div class="cell">
            <div class="cell-title" style="fontSize: 15px"><img src="http://demo2.hsk.cc/style/images/ipad.png" alt=""> 手机单：</div>
            <div class="cell-value">要求使用手机APP下单 （不能在电脑下单哦）</div>
          </div>
        </div>
        <!---->
        <div class="title form-inline-title">
          已经下单支付，请填写订单号
        </div>
        <div class="step-content">
          <div class="big-tips">
            请确保已经拍下宝贝并已支付，才可以填写订单号，否则一经投诉将严惩！<br>
            【注：禁止填写虚假单号或未付款单号，多次违规者冻结账号】
          </div>
          <el-form-item label="订单号：" prop="" style="padding: 0">
            <el-row :gutter="23">
              <el-col :span="10">
                <el-input></el-input>
              </el-col>      
            </el-row>
          </el-form-item>
          <el-form-item label="示例（复制此订单号）：" prop="" style="padding: 0">
            <el-row :gutter="20">
              <img src="http://demo2.hsk.cc/templates/main/images/tradelist.gif" width="400" alt=""> 
                 
            </el-row>
          </el-form-item>
          <el-form-item label="实际付款金额：	" prop="" style="padding: 0">
            <el-row :gutter="23">
              <el-col :span="5" class="flex">
                <el-input></el-input><span style="marginLeft: 10px">元</span>
              </el-col>  
              <el-col :span="18"  class="form-tips-gray" aling="left">
                *如果你下单实际付款金额与担保金额不一致，请自行修改，若虚报将会冻结账号的！
              </el-col>      
            </el-row>
          </el-form-item>
        </div>
        <div>
          <el-button type="success" style="width: 120px ; marginTop: 30px">提 交</el-button>
        </div>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="onClose">我知道了</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    param: {
      type: Object,
      default: () => {
        return null
      }
    },
    showFlow: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      showDialog: this.showFlow,
      form: {
        name: ''
      },
      dialogImageUrl: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },

  created() {
    
  },

  methods: {
    onClose() {
      this.$emit('close')
    },

    handleClose() {
      this.$emit('close')
    },

    handleRemove(file, fileList) {
      //console.log(file, fileList);
    },
    handlePreview(file) {
      //console.log(file);
    },
    handleExceed(files, fileList) {
      //this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      //return this.$confirm(`确定移除 ${ file.name }？`);
    },
    async upload(param) {
      let res = await this.Global.uploadImage(this, param.file)
    },
  }
}
</script>

<style lang="stylus" scoped>
.dialog-tips {
  align-items center
  padding 10px 15px;
  background-color #ffff77
  font-weight bold
  margin 0 50px
  p {
    margin 0 15px
    line-height 25px
  }
}

.flex {
  justify-content flex-start
  p {
    line-height 30px
  }
}

.dialog-content {
  font-size 15px
  color #406899
  margin-top 15px
 /*  max-height 500px
  overflow-y scroll */
  .cell {
    padding 20px 15px
    width 100%
    border-top 1px dashed #93c4ff
    display flex
    align-items flex-start
    &:last-child {
      border-bottom 1px dashed #93c4ff
    }
  }
  .cell-title {
    font-weight bold
    width 150px
    text-align right 
    display flex
    align-items center
    justify-content flex-end
    font-size 20px
    font-weight bold
    img {
      margin-right 20px
    }
  }
  .cell-value {
    flex 1
    text-align left
    margin-left 20px
  }
  .enter {
    display flex
    justify-content flex-start
  }
}

.title {
  padding 5px 0
  text-align center
  background url('http://demo2.hsk.cc/style/images/w_b.gif')
  background-size 100% 100%
  height 52px !important
  line-height 42px !important
  color #F60
  font-weight bold
  font-size 18px
}

.form-inline-title {
  text-align left
  padding-left 20px
  color #0076FC
  position relative
  margin-bottom 20px
  &:after {
    content ''
    position absolute
    top 17px 
    left 0px
    width 5px
    height 20px
    background-color #006ef6
  }
  span {
    padding-left 60px 
  }
}

.big-tips {
  font-size 16px
  font-weight bold
  color #f00
  line-height 25px
  margin-bottom 20px
}
</style>