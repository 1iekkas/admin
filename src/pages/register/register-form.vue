<template>
  <div class="section">
    <div class="register-main">
      <div class="register-title" :class="{'title--red': type == 1, 'title--blue': type == 2}">
        {{type == 1 ? '普通用户注册' : '商户注册'}}
      </div>
      <div class="register-form">
        <div class="register-left">
          <el-form ref="form" :rules="rules" :model="form" label-width="auto">

            <el-form-item label="用户名：" prop="name">
              <el-row :gutter="20">
                <el-col :span="10">
                  <el-input v-model="form.name"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            
            <el-form-item label="登录密码：" prop="password">
              <el-row :gutter="20">
                <el-col :span="10"><el-input maxlength="16" minlength="6" show-password v-model="form.password"></el-input></el-col>
                <el-col :span="13" align="left" class="form-tips-gray">
                  建议字母+数字组合
                </el-col>
              </el-row>
            
            </el-form-item>

            <el-form-item label="确认登录密码：" prop="confirmPassword">
              <el-row :gutter="20">
                <el-col :span="10"><el-input maxlength="12" show-password v-model="form.confirmPassword"></el-input></el-col>
              </el-row>
            </el-form-item>

            <el-form-item label="手机：" prop="telphone" ref="telphone">
              <el-row :gutter="20">
                <el-col :span="10"><el-input type="num" maxlength="11" minlength="11" v-model="form.telphone"></el-input></el-col>
                <el-col :span="13">
                  <div class="code">
                    <el-button type="default" :disabled="smsButton.disabled" @click.native="getSms">{{smsButton.time}}{{smsButton.text}}</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item label="验证码：" prop="code">
              <el-row :gutter="20">
                <el-col :span="10"><el-input maxlength="6" v-model="form.code"></el-input></el-col>
                <el-col :span="13">
                  <div class="code">
                    <img :src="codeSrc" alt="">
                  </div>
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item label="QQ：" prop="qq">
              <el-row :gutter="20">
                <el-col :span="10"><el-input maxlength="10" v-model="form.qq"></el-input></el-col>
                <el-col :span="13" align="left" class="form-tips-gray">
                  交易时方便对方或客服联系到你
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item label="推荐人：">
              <el-row :gutter="20">
                <el-col :span="10"><el-input v-model="form.reference"></el-input></el-col>
                <el-col :span="13" align="left" class="form-tips-gray">
                  对推荐人无任何损失反而有奖， 可留空
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item label="  " prop="isChecked">
              <el-row :gutter="20">
                <el-col :span="20">
                  <el-checkbox v-model="form.isChecked" checked name="isChecked"></el-checkbox>  注册即表示同意<span @click="showAgreement = true">《注册许可协议》</span>  
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item label=" ">
              <el-row :gutter="20">
                <el-col :span="10"><el-button style="width: 100%" type="danger" @click="onSubmit('form')">确定注册</el-button></el-col>
              </el-row>
            </el-form-item>
          </el-form> 
        </div>
        <div class="register-right">
          <div class="register-action">
            <div class="action-title">已有会员账号？</div>
            <div class="action-content">
              <el-button type="primary" @click.native="link('/login')">我要登录</el-button>
              <el-button type="danger" @click.native="link('/')">忘记密码</el-button>
            </div>
          </div>
          <div class="register-img">
            <img src="http://demo2.hsk.cc/templates/main/images/reg_ad2.gif" alt="">
          </div>
        </div>
      </div>
    </div>
    <!--注册协议-->
    <el-dialog
      title="注册许可协议"
      :visible.sync="showAgreement"
      width="40%"
      align="left"
      >
      <div class="agreement-wrapp">
        <p>1、在本站注册的会员，必须遵守《互联网电子公告服务管理规定》，不得在本站发表诽谤他人，侵犯他人隐私，侵犯他人知识产权，传播病毒，政治言论，商业讯息等信息。</p>
        <p>3、在登记过程中，您将选择注册名和密码。注册名的选择应遵守法律法规及社会公德。您必须对您的密码保密，您将对您注册名和密码下发生的所有活动承担责任。</p>
        <p>2、在所有在本站发表的文章，本站都具有最终编辑权，并且保留用于印刷或向第三方发表的权利，如果你的资料不齐全，我们将有权不作任何通知使用你在本站发布的作品。</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showAgreement = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    /**表单验证validator */
    let checkTel = (rule, value, callback) => {
      this.Validator.checkTel(rule, value, callback)
    }

    let confirmPass = (rule, value, callback) => {
      this.Validator.confirmPass(rule, value, this.form.password, callback)
    }
    return {
      /**注册类型 1=会员 2=商家*/
      type: this.$route.query.type,
      /**表单验证 */
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        confirmPassword: [{ required: true, validator: confirmPass, trigger: 'blur' }],
        telphone: [{required: true, trigger: 'blur', validator: checkTel, }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        qq: [{ required: true, message: '请输入QQ号', trigger: 'blur' }],
        isChecked: [
            { required: true, message: '请先阅读并同意注册协议', trigger: 'change' }
          ],
      },
      /**表单字段 */
      form: {
        name: '',
        password: "",
        confirmPassword: '',
        telphone: '',
        code: '',
        qq: '',
        reference: '',
        isChecked: []
      },
      /**按钮重置 */
      smsButton: {
        disabled: false,
        time: '',
        text: '发送验证码' 
      },
      showAgreement: false,
      /**验证码 */
      codeSrc: '',
      codeId: ''
    }
  },

  created() {
    
  },

  methods: {
    /**提交按钮 */
    onSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        console.log(valid)
        if (valid) {
          await this.postForm()
        }
      });
    },

    /**提交方法 */
    async postForm() {
      let res = await this.api.post(`${this.baseUrl}/brush/app/register`, {
        userName: this.form.name,
        password: this.form.password,
        mobile: this.form.telphone,
        qq: this.form.qq,
        referrer: this.form.reference,
        smsCode: this.form.code,
        type: this.type
      }, this)
      if(!res.data.code) {
        /**获取用户信息 */
        this.Global.getUserInfo(this, res.data.memberInfo.token).then((result) => {
          /**设置cookie */
          if(this.form.keepUser) {
            this.$cookies.set('token', res.data.memberInfo.token, res.data.memberInfo.expire / 86400)
            this.$cookies.set('userInfo', result.Index, res.data.memberInfo.expire / 86400)
          }else {
            this.$cookies.set('token', res.data.memberInfo.token, 0)
            this.$cookies.set('userInfo', result.Index, 0)
          }
          /**cookie设置成功 */
          this.$router.push({
            path: "/"
          })
        })
      }else {
        this.$message.error(res.data.msg);
      }
    },

    /**获取验证码 */
    getSms() {
      this.$refs['form'].validateField('telphone', async (valid) => {
        if(valid === '') {
          let res = await this.Global.getSmsCode(this)
          if(!res.data.code) {
            this.smsButton.disabled = true
            this.smsButton.time = 60
            this.smsButton.text = 's后再次获取'
            this.interva = setInterval(() => {
              this.smsButton.time--
              if(this.smsButton.time == 1) {
                this.smsButton.disabled = false
                this.smsButton.time = ''
                this.smsButton.text = '发送验证码'
                clearInterval(this.interva)
              }
            }, 1000)
          }
        }
      })
    },

    /**页面跳转 */
    link(path) {
      this.$router.push({ path : path})
    }
  }
}
</script>

<style lang="stylus" scoped>
.section {
  min-width: 1200px; 
  background-color: #f1f1f1;
  overflow: hidden;
}

.register-main {
  text-align left 
  width: 1200px;
  margin: 40px auto;   
  .register-title {
    font-size 20px
    width: 200px;
    padding-right: 0;
    /* margin-bottom: -30px; */
    line-height: 45px;
    border-left: 1px solid #f0f0f0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    text-align: center;
    color white
    &.title--red {
      background-color #ea544a
    }
    &.title--blue {
      background-color #2e8df3
    }
  }
  .register-form {
    background-color white
    display flex
    padding 50px 30px
    .register-left {
      width 790px
      border-right 1px dashed #ccc
      span {
        &:hover {
          color #0089CD
          cursor pointer
        }
      }
      .el-form {
        margin-left 100px
      }
    }
    .register-right {
      flex 1
      text-align center
      padding-left 30px
      .action-title {
        color #666
        font-size 16px
        font-weight bold
        margin-bottom 40px
      }
      .action-content {
        display flex
        justify-content center
        margin-bottom 50px
        .el-button {
          margin 0 15px
        }
      }
      .register-img {
        img {
          margin 0 auto
        }
      }
    }
  }
}
>>>.el-dialog__title {
  font-weight 600
}
.agreement-wrapp {
  p {
    line-height 24px
    padding 3px 0
    color #333
  }
}
</style>