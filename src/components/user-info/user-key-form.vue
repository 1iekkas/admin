<template>
  <div class="section section-group">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="info-form" v-if="userInfo">
      <el-form ref="form" :rules="rules" :model="form" label-width="auto">
        <el-form-item label="用户名：">
          <el-row :gutter="20">
            <el-col :span="6">{{userInfo.userName}}</el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="旧登录密码：" prop="pwd">
          <el-row :gutter="20">
            <el-col :span="10"><el-input show-password v-model="form.pwd"></el-input></el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="新登录密码：" prop="newPwd">
          <el-row :gutter="20">
            <el-col :span="10"><el-input show-password maxlength="12" v-model="form.newPwd"></el-input></el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="确认新密码：" prop="confirmPwd">
          <el-row :gutter="20">
            <el-col :span="10"><el-input show-password maxlength="12" v-model="form.confirmPwd"></el-input></el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item label="验证码：" prop="code">
          <el-row :gutter="20">
            <el-col :span="10"><el-input maxlength="6" v-model="form.code"></el-input></el-col>
            <el-col :span="13">
              <div class="code" @click="changeCode">
                <img :src="codeSrc" alt="">
              </div>
            </el-col>
          </el-row>
        </el-form-item>

        <div><el-form-item label=" ">
          <el-row :gutter="20">
            <el-col :span="10"><el-button type="success" @click="onSubmit('form')">确认修改</el-button></el-col>
          </el-row>
        </el-form-item></div>
      </el-form>  
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
    let confirmPass = (rule, value, callback) => {
      this.Validator.confirmPass(rule, value, this.form.newPwd, callback)
    }

    let checkCode = (rule, value, callback) => {
      this.Validator.checkCode(rule, this.form.code, callback)
    }

    return {
      userInfo: this.Global.getCookieUserInfo('memberInfo'),
      form : {
        name: '',
        pwd: '',
        newPwd: '',
        confirmPwd: '',
        code: ''
      },
      rules: {
        pwd: [{ required: true, message: '请输入旧密码', trigger: 'blur' }],
        newPwd: [{ required: true, message: '请输入新密码', trigger: 'blur' }, {
        trigger: 'blur',
        min: 6,
        max: 12,
        message: '长度在 6 到 12 个字符'
        }],
        confirmPwd: [{ required: true, validator: confirmPass, trigger: 'blur' }],
        code: [{ required: true, trigger: 'blur' , validator: checkCode}],
      },
      codeId: '',
      codeSrc: ''
    }
  },

  async created() {
    await this.changeCode()
  },

  methods: {
    onSubmit() {
      this.$refs['form'].validate(async (valid) => {
        if(valid) {
          let res = await this.api.post(`${this.baseUrl}/brush/app/resetMemberPwd`, {
            password: this.form.pwd,
            newPassword: this.form.newPwd,
            uuId: this.codeId,
            captcha: this.form.code
          }, this, {headers: {'token': this.$cookies.get('token')}})

          if(!res.data.code) {
            this.$alert('修改密码成功，请牢记新密码', '修改密码成功', {
              confirmButtonText: '确定',
              callback: action => {
                this.$router.push({
                  path: '/'
                })
              }
            });
          } else {
            this.$alert(res.data.msg, '修改密码失败', {
              confirmButtonText: '确定',
              callback: action => {
                return
              }
            });
          }
        }
      })
    },

    async changeCode() {
      //this.codeSrc = `${this.baseUrl}/brush/captcha.jpg?uuid=${Math.random()}`
      await this.Global.getCode(this)
    },
  }  

}
</script>

<style lang="stylus" scoped>
.info-form {
  width 750px
  margin 0 auto
  text-align left 
  .code {
    display flex
    align-items center
    justify-content center
    border 1px solid #DCDFE6
    border-radius 4px
    height 40px
    padding 0 10px
    max-width 130px
  }
}
</style>