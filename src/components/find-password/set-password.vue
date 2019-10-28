<template>
  <div class="section bg-white">
    <div class="title">
      <span>设置新密码</span>
    </div>
    <div class="manage-form form-margin">
      <el-form ref="form" :model="form" :rules="rules" label-width="auto">

        <el-form-item label="手机验证码：" prop="code">
          <el-row :gutter="20">
            <el-col :span="11"><el-input v-model="form.code"></el-input></el-col>
            <el-col :span="9" class="form-tips-gray">输入您手机收到的验证码</el-col>
          </el-row>
        </el-form-item>
      
        <el-form-item label="新密码：" prop="pwd">
          <el-row :gutter="20">
            <el-col :span="11"><el-input minlength="6" maxlength="12" show-password v-model="form.pwd"></el-input></el-col>
            <el-col :span="9" class="form-tips-gray">重新设置新的登录密码</el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="确认新密码：" prop="confirmPwd">
          <el-row :gutter="20">
            <el-col :span="11"><el-input minlength="6" maxlength="12" show-password v-model="form.confirmPwd"></el-input></el-col>
            <el-col :span="9" class="form-tips-gray">再次输入新的登录密码</el-col>
          </el-row>
        </el-form-item>

        <el-form-item label=" ">
          <el-row :gutter="20">
            <el-col :span="10"><el-button style="width: 100%" type="success" @click="onSubmit('form')">提 交</el-button></el-col>
          </el-row>
        </el-form-item>
      </el-form>  
    </div>  
  </div>
</template>

<script>
export default {
  data() {
    let confirmPass = (rule, value, callback) => {
      this.Validator.confirmPass(rule, value, this.form.pwd, callback)
    } 
    return {
      form:{
        pwd: '',
        confirmPwd: '',
        code: '',
      },
      rules: {
        pwd: [{ required: true, message: '请输入新密码', trigger: 'blur', }, { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }],
        confirmPwd: [{ required: true, validator: confirmPass, trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
      /**验证码 */
      codeSrc: '',
      codeId: '',
    }
  },

  created() {

  },

  methods: {
    async onSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.postForm()
        }
      });

    },

    async postForm() {
      let params = {
        name: this.form.name,
        radio: this.form.radio,
        codeId: this.codeId,
        code: this.form.code
      }
      let res = await this.api.post(`${this.baseUrl}/brush/app/forgetResetMemberPwd`, {
        forgetType: 1,
        userName: this.$route.query.username,
        code: this.form.code,
        newPassword: this.form.pwd
      })
      if(!res.data.code) {
        
        this.$alert('密码修改成功，点击确定将跳转到登录页面', '找回密码成功', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.replace({
              path: '/login'
            })
          }
        });
      }else {
        this.$message.error(res.data.msg);
      }

    },

  }
}
</script>

<style lang="stylus" scoped>

</style>