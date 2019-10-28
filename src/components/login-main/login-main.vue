<template>
  <div class="section">
    <div class="login-main">
      <div class="login-form">
        <div class="login-form-title">会员登录</div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名" class="login-item login-item--border">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="login-item login-item--border">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="验证码" class="login-item">
            <el-col :span="14"><el-input v-model="form.code"></el-input></el-col>
            <el-col :span="10" class="code-box"  @click.native="changeCode">
              <img class="code" :src="codeSrc" alt="">
            </el-col>
          </el-form-item>
          <el-form-item class="login-item login-item--white">
            <el-col :span="12" align="left"><el-checkbox label="保持登录" v-model="form.keepUser" name="type"></el-checkbox></el-col>
            <el-col :span="12" align="right" class="link" @click.native="findPwd">忘记密码</el-col>
          </el-form-item>
        </el-form>
        <el-button type="primary" style="width: 100%" @click="onLogin" :loading="loading">登录</el-button> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: '',
        password: '',
        code:  '',
        keepUser: false
      },
      codeSrc: '',
      loading: false
    }
  },

  created() {
    this.changeCode()
  },

  methods: {
    /**登录 */
    async onLogin() {
      this.loading = true
      let res = await this.api.post(`${this.baseUrl}/brush/app/login`, {
        account: this.form.account,
        password: this.form.password
      }, this)
      if(!res.data.code) {

        /**获取用户信息 */
        this.Global.getUserInfo(this, res.data.loginInfo.token).then((result) => {
          /**设置cookie */
          if(this.form.keepUser) {
            this.$cookies.set('token', res.data.loginInfo.token, res.data.loginInfo.expire / 86400)
            this.$cookies.set('userInfo', result.Index, res.data.loginInfo.expire / 86400)
          }else {
            this.$cookies.set('token', res.data.loginInfo.token, 0)
            this.$cookies.set('userInfo', result.Index, 0)
          }
          /**cookie设置成功 */
          this.$router.push({
            path: "/"
          })
        })
    
      }else {
        this.$message.error({
          message: res.data.msg,
          offset: 200,
          duration: 1500,
        })
        setTimeout(() => {
          this.loading = false
        }, 1500)
      }
      
    },

    /**刷新二维码 */
    changeCode() {
      this.codeSrc = `${this.baseUrl}/brush/captcha.jpg?uuid=${Math.random()}`
    },

    /**找回密码 */
    findPwd() {
      this.$router.push({
        path: '/findPassword?action=pwd&step=1'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  min-width: 1200px; 
  height: 500px;
  background: url('http://demo2.hsk.cc/templates/main/images/login-bg.png'); 
}
.login-main {
  width: 1200px;
  margin: 0 auto;  
  //background-image: url('../')   
  overflow: hidden 
}

.login-form {
  margin: 30px 40px 30px auto;
  padding: 20px 30px; 
  background-color: white;
  width: 400px; 
  border-radius: 4px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1)
  img {
    width 100%
  }
  .login-form-title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
  } 
  >>>.el-form {
    position relative
  }
  .login-item {
    position: relative;
    >>>.el-input__inner {
      background-color: #f5f5f5; 
      border: 0 !important; 
      padding-left: 80px; 
    }
    >>>.el-form-item__label {
      position: absolute;
      left: 0; 
      top: 0;
      z-index: 1 
    }
    >>>.el-form-item__content {
      margin: 0 !important;
    }
  }
  .code-box {
    height: 40px; 
    display: flex;
    align-items: center;
    background-color: white 
  }
  .code {
    margin: 0 auto 
    border 0
    padding 0
  }
  :focus {
    outline: -webkit-focus-ring-color auto 1px;
  }
}

.link {
  cursor pointer
  &:hover {
    color #f60
  }
}

.el-button--primary {
  width: 100%; 
  margin-bottom: 10px 
}

.login-item--white {
  background-color: white !important
}
</style>