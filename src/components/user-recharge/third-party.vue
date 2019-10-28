<template>
  <div class="section">
    <div class="tips-title text-red text-bold">
      支付宝自动充值 （免手续费推荐）
    </div>
    <div class="tips-content flex">
      <div class="logo">
        <img :src="logo" alt="">
      </div>
      <div class="content">
        <p>1、打开手机支付宝扫一扫下面的二维码，再输入你要充值的金额并完成付款；<br />
        2、支付完成后，再点手机支付宝右下角 我的 》 账单，找到刚支付的记录，点一下进入，找到 订单号 类似“2018051821001000820027310189” <br />
        <span class="text-red">3、到下面的“第二步：填写支付信息”填写该订单号和金额提交，系统会在1分钟内自动充值完成。</span>
        </p>
        <p class="text-orange text-bold">支付宝收款账号：skxxxxxx@126.com 演示用，不要充值     姓名：乔帮主</p>
        <img :src="pic" alt="">
      </div>
    </div>
    <!---->
    <div class="tips-title gray">
      <span class="text-red text-bold">第二步：填写支付信息</span>
      <span>【亲，转账完成后一定要在这填写交易号/流水号和金额，否则不能自动到账哦！】</span>
    </div>
    <div class="form-table">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="交易号/流水号：">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="转账金额：">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-col :span="14"><el-input v-model="form.account"></el-input></el-col>
          <el-col :span="10" class="code-box">
            <img class="code" src="@assets/code.png" alt="">
          </el-col>
        </el-form-item>
        <el-form-item align="left">
        <el-button type="success" size="medium" @click="onSubmit">确认添加</el-button>
      </el-form-item> 
      </el-form>
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
      logo:'http://demo2.hsk.cc/templates/main/images/alipay2.gif',
      pic: 'http://demo2.hsk.cc/upload/users/590/201807/13/201807131729459591.jpg'
    }
  },

  created() {
    if(this.type == 0) {
      this.logo = "http://demo2.hsk.cc/templates/main/images/alipay2.gif"
      this.pic = "http://demo2.hsk.cc/upload/users/590/201807/13/201807131729459591.jpg"
    }else if(this.type == 1) {
      this.logo = "http://demo2.hsk.cc/templates/main/images/weixinpay.png"
      this.pic = "http://demo2.hsk.cc/upload/users/590/201807/13/201807131729509406.jpg"
    }
  },

  watch: {
    type(n, o) {
      console.log(n, o)
      if(n == 0) {
      this.logo = "http://demo2.hsk.cc/templates/main/images/alipay2.gif"
      this.pic = "http://demo2.hsk.cc/upload/users/590/201807/13/201807131729459591.jpg"
      }else if(n == 1) {
        this.logo = "http://demo2.hsk.cc/templates/main/images/weixinpay.png"
        this.pic = "http://demo2.hsk.cc/upload/users/590/201807/13/201807131729509406.jpg"
      }
    }
  },

  methods:{
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
  p {
    text-align left
    margin 0 0 10px 35px
    line-height 30px
    &:nth-child(2) {
      font-size 16px !important
    }
  }
  img {
    margin 40px 0 0 150px
  }
}

.tips-content, .tips-title {
  &:hover {
    background-color #f7f7f7
  }
}

.form-table {
  width 550px
  margin 0 auto
  >>>.el-form-item__content {
    max-width 220px
  }
  .code-box {
    display flex
    align-items center
    justify-content center
    height 40px
  }
}

</style>