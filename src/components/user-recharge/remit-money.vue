<template>
  <div class="section">
    <div class="tips-title text-red text-bold">
      支付宝自动充值 （免手续费推荐）
    </div>
    <div class="tips-content flex">
      <div class="logo">
        <img src="http://demo2.hsk.cc/templates/main/images/unionPay.gif" alt="">
      </div>
      <div class="content">
        <img src="http://demo2.hsk.cc/templates/main/images/banks.gif" alt="">
        <div class="text-red warning">
          <p class="text-bold">充值注意事项</p>
          <p> 
            1、禁止使用财付通、柜台、ATM机转账，如使用支付宝转账禁止填写任何备注信息；<br>
            2、转账时仔细核对收款人姓名、银行卡号（农行转账相较于其他银行较慢）；<br>
            3、提交转账信息前仔细核对转账金额、姓名及银行卡号，禁止重复提交转账信息如发现恶意重复提交，将罚款甚至封号； <br>
            4、及时提交转账信息，未及时提交者（超过一天）联系充值客服说明充值时间。
          </p>
        </div>
      </div>
    </div>
    <!---->
    <div class="tips-title gray">
      <span class="text-red text-bold">第一步：转账到官方指定收款账号</span>
    </div>
    <div class="step">
      <div class="flex">
        <div class="step-title">转账途径：</div>	<div class="step-value text-bold">电脑网银、手机银行 （注意：请勿通过其他途径转账）</div>
      </div>
      <div class="flex">
        <div class="step-title">收款银行名称：</div>	<div class="step-value text-bold">中国工行</div>
      </div>
      <div class="flex">
        <div class="step-title">收款银行账号：</div>	<div class="step-value text-bold"><span>2132518888888888888</span></div>
      </div>
      <div class="flex">
        <div class="step-title">收款人姓名：</div>	<div class="step-value text-bold"><span>杨贵哦</span></div>
      </div>
    </div>
    <!---->
    <div class="tips-title gray">
      <span class="text-red text-bold">第二步：填写转账信息</span>
      <span>【亲，转账完成后一定要在这填写转账信息，否则客服无法处理入款哦！】</span>
    </div>
    <div class="form-table">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="打款银行名称：" class="inline--large">
          <el-input v-model="form.account"></el-input>
          <div class="tips">你的卡归属那个银行？例如中国工商银行</div>
        </el-form-item>
        <el-form-item label="打款人姓名：" class="inline--large">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="打款银行卡号后4位数字：" class="inline--large">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="打款银行卡号后4位数字：" class="inline--large">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="转账金额：" class="inline money">
          <el-input v-model="form.account"></el-input>元
          <div class="tips text-red">注：恶意提交、未打款后提交的，将罚款100元/次，甚至封号</div>
        </el-form-item>
        <el-form-item label="转账记录截图：">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="tips">为提高查账速度，可选提交截图（截图要求：清晰看到打款时间和金额）</div>
        </el-form-item>
        <el-form-item align="left">
        <el-button type="success" size="medium" @click="onSubmit">确认添加</el-button>
      </el-form-item> 
      </el-form>
    </div>
    <div class="pay-tips">
      <strong>温馨提示：</strong><br>
　　  充值客服工作时间每日9:30-18:00，审核人员每15钟会审核一次，查询到账即能通过审核，18:00以后的银行卡转账充值将无人审核，会到第二个工作日处理。
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      form: {
        name: '',
      },
      imageUrl: ''
    }
  },

  created() {
    
  },


  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },


    onSubmit() {

    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  padding-top 35px
  margin-bottom 0 !important
}

.tips-title {
  text-align left 
  font-size 15px
  padding 15px
  span {
    &:nth-child(2) {
      padding-left 30px
      color blue
      font-size 13px
    }
  }
  &.gray {
    background-color #f7f7f7
    margin-bottom 15px
  }
}

.tips-content {
  padding 20px 15px
  font-size 14px
  margin-bottom 15px
  .logo {
    width 150px
    img {
      margin 0 auto
    }
  }
  .content {
    flex 1
    width 500px
  }
  .warning {
    &:hover {
      color #f60
    }
  }
  p {
    text-align left
    margin 0 0 0 35px
    line-height 30px
    font-size 13px
  }
  img {
    margin 10px 0 20px 20px
  }
}

.tips-content, .tips-title {
  &:hover {
    background-color #f7f7f7
  }
}

.step {
  width 677px
  margin 0 auto 15px auto
  font-size 15px
  color #606266
  .flex {
    padding 15px 0
  }
  .step-title {
    width 160px
    padding-right 10px
    color #444
    text-align right 
  }
  .step-value {
    flex 1
    color #f60
    text-align left 
  }
}

.form-table {
  margin-left 100px
  text-align left 
  >>>.el-form-item__label {
    font-size 15px
  }
  >>>.el-input {
    max-width 250px
  }
  .tips {
    color #999
    font-size 13px
    padding-left 15px
  }
  .money {
    >>>.el-input {
      width 150px
    }
  }
}

.pay-tips {
  line-height 26px
  margin-top 30px
  padding 10px 20px
  background-color #ebf8ff
  border 1px solid #c8e6ff
  color #666
  text-align left
  font-size 14px
}

</style>