<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>

    <div class="auth-form">
      <div class="auth-tips">
        <i class="el-icon-success"></i>
        <div class="tips-text">
          <p class="text-bold">恭喜您，你的银行认证已认证成功！</p>
          <p class="text-light-black">您的手机号： 1591****677</p>
          <p class="text-red">为防受骗，手机验证码不要告诉任何人（包括客服）</p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    state: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    }
  },

  data() {
    return {

    }
  },

}
</script>

<style lang="stylus" scoped>
.auth-tips {
  display flex
  justify-content center
  align-items flex-start
  padding 50px 0 200px 0
  i {
    font-size 40px
    color #02ab02
    width 50px
    margin-right 20px
  }
  .tips-text {
    font-size 14px
    line-height 30px
    text-align left 
    p {
      &:first-child {
        font-size 16px
      }
    }
  }
}
</style>