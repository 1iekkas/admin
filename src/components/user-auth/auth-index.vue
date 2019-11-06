<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>

    <div class="section">
      <div class="list">
        <div class="icon">
          <div class="icon_phone"></div>
        </div>

        <div class="content">
          <div class="state">
            <span class="text">手机绑定</span>
            <span v-if="auth.mobile == 1" class="text-green"><i class="el-icon-success"></i> 已认证（1591****677）</span>
            <span v-else-if="auth.mobile == 0" class="text-green"><i class="el-icon-success"></i> 审核中（1591****677）</span>
            <span v-else class="text-red"><i class="el-icon-error"></i> 未认证</span>
          </div>
          <div class="desc">
            接发任务或者找回密码/密保等都需要验证，验证码不要告诉任何人，如需更换手机号请联系客服
          </div>
        </div>

        <div class="action">
          <el-button v-if="auth.mobile == 1" type="success">查 看</el-button>
          <el-button v-else-if="auth.mobile == 0" type="primary">查 看</el-button>
          <el-button v-else type="danger">现在去认证</el-button>
        </div>
      </div>

      <div class="list">
        <div class="icon">
          <div class="icon_real"></div>
        </div>

        <div class="content">
          <div class="state">
            <span class="text">实名认证</span>
            <span v-if="auth.realName == 1" class="text-green"><i class="el-icon-success"></i> 已认证</span>
            <span v-else-if="auth.realName == 0" class="text-green"><i class="el-icon-success"></i> 审核中</span>
            <span v-else class="text-red"><i class="el-icon-error"></i> 未认证</span>
          </div>
          <div class="desc">
            实名认证之后，一旦账户出现什么问题，都可以通过你的身份证去解决，享有更多高级功能及服务
          </div>
        </div>

        <div class="action">
          <el-button v-if="auth.realName == 1" type="success">查 看</el-button>
          <el-button v-else-if="auth.realName == 0" type="primary">查 看</el-button>
          <el-button v-else type="danger">现在去认证</el-button>
        </div>
      </div>

      <div class="list">
        <div class="icon">
          <div class="icon_bank"></div>
        </div>

        <div class="content">
          <div class="state">
            <span class="text">银行认证</span>
            <span v-if="auth.bank == 1" class="text-green"><i class="el-icon-success"></i> 已认证</span>
            <span v-else-if="auth.bank == 0" class="text-green"><i class="el-icon-success"></i> 审核中</span>
            <span v-else class="text-red"><i class="el-icon-error"></i> 未认证</span>
          </div>
          <div class="desc">
            接发任务或者找回密码/密保等都需要验证，验证码不要告诉任何人，如需更换手机号请联系客服
          </div>
        </div>

        <div class="action">
          <el-button v-if="auth.bank == 1" type="success">查 看</el-button>
          <el-button v-else-if="auth.bank == 0" type="primary">查 看</el-button>
          <el-button v-else type="danger">现在去认证</el-button>
        </div>
      </div>

      <div class="list">
        <div class="icon">
          <div class="icon_video"></div>
        </div>

        <div class="content">
          <div class="state">
            <span class="text">视频认证</span>
            <span class="text-green"><i class="el-icon-success"></i> 已认证</span>
          </div>
          <div class="desc">
            接发任务或者找回密码/密保等都需要验证，验证码不要告诉任何人，如需更换手机号请联系客服
          </div>
        </div>

        <div class="action">
          <el-button type="success">查 看</el-button>
        </div>
      </div>


    </div>
  </div>
</template>    

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      auth: {
        mobile: 0,
        realName: 0,
        bank: 0
      }
    }
  },

  async created() {
    await this.getAuth()
  },

  methods: {
    async getAuth() {
      let res = await this.api.post(`${this.baseUrl}/brush/app/getAuthInfo`,{},
      this,{headers: {'token': this.$cookies.get('token')}})

      if(!res.data.code) {
        this.auth['mobile'] = res.data.authInfo.mobileAuthStatus	
        this.auth['realName'] = res.data.authInfo.realNameAuthStatus
        this.auth['bank'] = res.data.authInfo.bankAuthStatus
      }

    },
  }
}
</script>

<style lang="stylus" scoped>
.list {
  display flex
  padding 20px 0
  border-bottom 1px solid #f4f4f4
  .icon {
    width 150px
    display flex
    align-items center
    justify-content center
    .icon_phone {
      height 70px
      width 70px
      background-image url('http://demo2.hsk.cc/templates/main/images/ren_icon_2.png')
      background-position: -110px 0px;
    }
    .icon_real {
      background-position: 0px 0px;
      width: 105px;
      height: 68px;
      background-image url('http://demo2.hsk.cc/templates/main/images/ren_icon_2.png')
    }
    .icon_bank {
      width: 98px;
      height: 63px;
      background-image url('http://demo2.hsk.cc/templates/main/images/ren_icon_2.png')
      background-position: -244px -3px;
    }
    .icon_video {
      height 70px
      width 60px
      background-image url('http://demo2.hsk.cc/templates/main/images/ren_icon_2.png')
      background-position: -180px -8px;
    }
  }
  .content {
    flex 1
    text-align left 
    .state {
      .text {
        color #555
        font-weight bold
        margin-right 10px
      }
    }
    .desc {
      color #a7a7a7
      font-size 14px
      margin-top 20px
    }
  }
  .action {
    width 130px
  }
}
</style>